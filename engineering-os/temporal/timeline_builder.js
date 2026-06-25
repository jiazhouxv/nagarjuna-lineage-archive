const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const GRAPH_PATH = path.join(ROOT, "docs", "00_KNOWLEDGE_GRAPH_INDEX.json");
const TEMPORAL_PATH = path.join(ROOT, "docs", "00_TEMPORAL_GRAPH_INDEX.json");

const ERAS = [
  "Indian Madhyamaka",
  "Chinese Translation Period",
  "Tiantai Formation",
  "East Asian Expansion",
];

function loadJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function readSource(node) {
  const source = node.metadata && node.metadata.source_file;
  if (!source) return "";
  const sourcePath = path.join(ROOT, source);
  if (!fs.existsSync(sourcePath)) return "";
  return fs.readFileSync(sourcePath, "utf8");
}

function extractYear(value) {
  if (!value) return null;
  const text = String(value);
  const match = text.match(/(-?\d{1,4})\s*(?:CE|AD|BCE|BC)?/i);
  if (!match) return null;
  let year = Number(match[1]);
  if (/\b(BCE|BC)\b/i.test(text) && year > 0) year *= -1;
  return Number.isFinite(year) ? year : null;
}

function scalar(text, key) {
  const match = text.match(new RegExp(`^\\s*${key}:\\s*(.+)$`, "m"));
  return match ? match[1].trim().replace(/^["']|["']$/g, "") : "";
}

function extractTime(node) {
  const text = readSource(node);
  const birth = extractYear(scalar(text, "birth"));
  const death = extractYear(scalar(text, "death"));
  const period = extractYear(scalar(text, "period_en")) || extractYear(scalar(text, "period_zh"));
  const date = extractYear(scalar(text, "date")) || extractYear(scalar(text, "approximate_date"));
  const start = birth ?? period ?? date;
  const end = death ?? start;

  return {
    start,
    end,
    active_range: start === null || end === null ? [] : [start, end],
  };
}

function eventLabel(node, time) {
  if (node.type === "person") return `${node.name || node.id} active`;
  if (node.type === "work") return `${node.name || node.id} textual record`;
  if (node.type === "tradition") return `${node.name || node.id} tradition record`;
  return `${node.name || node.id} concept record`;
}

function buildTemporalIndex(graph = loadJson(GRAPH_PATH)) {
  const nodes = (graph.nodes || []).map((node) => ({
    id: node.id,
    type: node.type,
    time: extractTime(node),
    tags: node.tags || [],
  }));

  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const edges = (graph.edges || []).map((edge) => {
    const from = nodeById.get(edge.from);
    const to = nodeById.get(edge.to);
    const fromTime = from && from.time ? from.time.start : null;
    const toTime = to && to.time ? to.time.start : null;
    const lag = fromTime === null || toTime === null ? null : toTime - fromTime;
    const validity = lag === null ? "unknown" : lag < 0 || lag > 800 ? "suspicious" : "plausible";

    return {
      from: edge.from,
      to: edge.to,
      relation: mapRelation(edge.type),
      time_lag: lag,
      validity,
      confidence: edge.confidence || 0,
    };
  });

  return {
    nodes,
    edges,
    eras: ERAS,
    timeline: buildTimeline(nodes, graph.nodes || []),
    statistics: {
      node_count: nodes.length,
      edge_count: edges.length,
      known_time_nodes: nodes.filter((node) => node.time.start !== null).length,
      unknown_time_nodes: nodes.filter((node) => node.time.start === null).length,
    },
  };
}

function mapRelation(type) {
  if (type === "commentary_on") return "commentary";
  if (type === "teacher_of" || type === "belongs_to") return "transmission";
  if (type === "related_to") return "influence";
  return "reinterpretation";
}

function buildTimeline(temporalNodes, graphNodes) {
  const graphById = new Map(graphNodes.map((node) => [node.id, node]));
  return temporalNodes
    .filter((node) => node.time.start !== null)
    .sort((a, b) => a.time.start - b.time.start)
    .map((node) => ({
      year: node.time.start,
      event: eventLabel(graphById.get(node.id) || node, node.time),
      node_id: node.id,
    }));
}

function writeTemporalIndex(outputPath = TEMPORAL_PATH) {
  const index = buildTemporalIndex();
  fs.writeFileSync(outputPath, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  return index;
}

if (require.main === module) {
  const index = writeTemporalIndex();
  console.log(`Temporal index created: ${path.relative(ROOT, TEMPORAL_PATH).replace(/\\/g, "/")}`);
  console.log(`Known-time nodes: ${index.statistics.known_time_nodes}`);
  console.log(`Unknown-time nodes: ${index.statistics.unknown_time_nodes}`);
}

module.exports = { buildTemporalIndex, buildTimeline, extractTime, writeTemporalIndex };
