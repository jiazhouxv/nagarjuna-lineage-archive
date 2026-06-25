const fs = require("fs");
const path = require("path");
const { clusterGraph } = require("../algorithms/cluster");

const ROOT = path.resolve(__dirname, "..", "..", "..");
const DATA_DIR = path.join(ROOT, "data");
const DEFAULT_OUTPUT = path.join(ROOT, "docs", "00_KNOWLEDGE_GRAPH_INDEX.json");

const TYPE_MAP = {
  person: "person",
  work: "work",
  tradition: "tradition",
  branch: "tradition",
  term: "concept",
};

const CONFIDENCE_WEIGHT = {
  high: 1,
  medium: 0.66,
  low: 0.33,
  disputed: 0.2,
  unknown: 0.1,
};

function listYamlFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...listYamlFiles(fullPath));
    if (entry.isFile() && entry.name.endsWith(".yaml")) files.push(fullPath);
  }

  return files.sort();
}

function unquote(value) {
  return String(value || "")
    .trim()
    .replace(/^["']|["']$/g, "");
}

function scalar(text, key) {
  const match = text.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
  return match ? unquote(match[1]) : "";
}

function listValue(text, key) {
  const lines = text.split(/\r?\n/);
  const values = [];
  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index].trim() !== `${key}:`) continue;
    for (let child = index + 1; child < lines.length; child += 1) {
      const line = lines[child];
      if (/^\S/.test(line)) break;
      const item = line.match(/^\s+-\s+(.+)$/);
      if (item) values.push(unquote(item[1]));
    }
  }
  return values;
}

function displayName(text, recordType) {
  if (recordType === "work") {
    return scalar(text, "display_title_en") || scalar(text, "title_en") || scalar(text, "title_zh");
  }
  if (recordType === "term") {
    return scalar(text, "term_en") || scalar(text, "term_zh");
  }
  return scalar(text, "display_name_en") || scalar(text, "name_en") || scalar(text, "name_zh");
}

function tagsForRecord(text, recordType) {
  const tags = new Set([recordType]);
  for (const key of ["traditions", "regions", "roles", "related_terms", "work_category"]) {
    for (const value of listValue(text, key)) tags.add(value);
  }
  return [...tags].filter(Boolean);
}

function addEdge(edges, edge) {
  if (!edge.from || !edge.to || edge.from === edge.to) return;
  const id = `${edge.from}|${edge.to}|${edge.type}|${edge.source}`;
  if (edges.has(id)) return;
  edges.set(id, edge);
}

function addBidirectional(edges, from, to, type, source, confidence = 0.5) {
  addEdge(edges, { from, to, type, weight: confidence, source, confidence });
  addEdge(edges, { from: to, to: from, type: "related_to", weight: confidence, source, confidence });
}

function relationBlocks(text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let inRelations = false;
  let current = null;

  for (const line of lines) {
    if (line.trim() === "relations:") {
      inRelations = true;
      continue;
    }
    if (!inRelations) continue;
    if (/^\S/.test(line) && line.trim() !== "relations:") break;

    const start = line.match(/^\s{2}-\s*(.*)$/);
    if (start) {
      if (current) blocks.push(current);
      current = { raw: [line], data: {}, listKey: null };
      const inline = start[1].match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
      if (inline) current.data[inline[1]] = unquote(inline[2]);
      continue;
    }

    if (!current) continue;
    current.raw.push(line);

    const pair = line.match(/^\s{4}([A-Za-z0-9_-]+):\s*(.*)$/);
    if (pair) {
      const key = pair[1];
      const value = unquote(pair[2]);
      current.listKey = value ? null : key;
      current.data[key] = value || [];
      continue;
    }

    const item = line.match(/^\s{6}-\s+(.+)$/);
    if (item && current.listKey) {
      current.data[current.listKey].push(unquote(item[1]));
    }
  }

  if (current) blocks.push(current);
  return blocks.map((block) => block.data);
}

function normalizeGraphEdgeType(relationType) {
  if (relationType === "parent_tradition_to_branch" || relationType === "branch_system") return "belongs_to";
  if (String(relationType || "").includes("comment")) return "commentary_on";
  return "related_to";
}

function buildGraph() {
  const nodes = new Map();
  const edges = new Map();
  const yamlFiles = listYamlFiles(DATA_DIR);
  const createdAt = new Date().toISOString();

  for (const file of yamlFiles) {
    const text = fs.readFileSync(file, "utf8");
    const id = scalar(text, "id");
    const recordType = scalar(text, "type");
    if (!id || !recordType || recordType === "relation_file") continue;

    const nodeType = TYPE_MAP[recordType];
    if (!nodeType) continue;

    nodes.set(id, {
      id,
      type: nodeType,
      name: displayName(text, recordType) || id,
      tags: tagsForRecord(text, recordType),
      metadata: {
        source_file: path.relative(ROOT, file).replace(/\\/g, "/"),
        record_type: recordType,
      },
      embedding: [],
      created_at: createdAt,
    });
  }

  for (const file of yamlFiles) {
    const text = fs.readFileSync(file, "utf8");
    const id = scalar(text, "id");
    const recordType = scalar(text, "type");
    const source = path.relative(ROOT, file).replace(/\\/g, "/");

    if (recordType && recordType !== "relation_file" && nodes.has(id)) {
      for (const tradition of listValue(text, "traditions")) {
        if (nodes.has(tradition)) addBidirectional(edges, id, tradition, "belongs_to", source, 0.8);
      }
      for (const target of [
        ...listValue(text, "related_persons"),
        ...listValue(text, "related_works"),
        ...listValue(text, "related_terms"),
        ...listValue(text, "attributed_author"),
        ...listValue(text, "translator"),
        ...listValue(text, "compiler"),
        ...listValue(text, "core_persons"),
        ...listValue(text, "core_works"),
      ]) {
        if (nodes.has(target)) addBidirectional(edges, id, target, "related_to", source, 0.5);
      }
      continue;
    }

    if (recordType === "relation_file") {
      for (const relation of relationBlocks(text)) {
        const confidence = CONFIDENCE_WEIGHT[relation.confidence] || 0.5;
        if (relation.teacher && relation.student && nodes.has(relation.teacher) && nodes.has(relation.student)) {
          addBidirectional(edges, relation.teacher, relation.student, "teacher_of", source, confidence);
        }

        const targets = Array.isArray(relation.object) ? relation.object : [relation.object];
        for (const target of targets.filter(Boolean)) {
          if (relation.subject && nodes.has(relation.subject) && nodes.has(target)) {
            addBidirectional(
              edges,
              relation.subject,
              target,
              normalizeGraphEdgeType(relation.relation_type),
              source,
              confidence,
            );
          }
        }
      }
    }
  }

  const graph = {
    nodes: [...nodes.values()].sort((a, b) => a.id.localeCompare(b.id)),
    edges: [...edges.values()].sort((a, b) => `${a.from}:${a.to}`.localeCompare(`${b.from}:${b.to}`)),
    clusters: [],
    statistics: {
      node_count: nodes.size,
      edge_count: edges.size,
    },
  };
  graph.clusters = clusterGraph(graph);
  return graph;
}

function writeGraph(outputPath = DEFAULT_OUTPUT) {
  const graph = buildGraph();
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(graph, null, 2)}\n`, "utf8");
  return graph;
}

if (require.main === module) {
  const graph = writeGraph(process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_OUTPUT);
  console.log(`Graph written: ${path.relative(ROOT, DEFAULT_OUTPUT).replace(/\\/g, "/")}`);
  console.log(`Nodes: ${graph.statistics.node_count}`);
  console.log(`Edges: ${graph.statistics.edge_count}`);
}

module.exports = { buildGraph, writeGraph };
