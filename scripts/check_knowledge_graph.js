#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const GRAPH_PATH = path.join(ROOT, "docs", "00_KNOWLEDGE_GRAPH_INDEX.json");
const NODE_SCHEMA_PATH = path.join(ROOT, "engineering-os", "graph", "node.schema.json");
const EDGE_SCHEMA_PATH = path.join(ROOT, "engineering-os", "graph", "edge.schema.json");

function fail(errors) {
  console.error("Knowledge graph check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

const errors = [];

if (!fs.existsSync(GRAPH_PATH)) errors.push("Missing docs/00_KNOWLEDGE_GRAPH_INDEX.json");
if (!fs.existsSync(NODE_SCHEMA_PATH)) errors.push("Missing engineering-os/graph/node.schema.json");
if (!fs.existsSync(EDGE_SCHEMA_PATH)) errors.push("Missing engineering-os/graph/edge.schema.json");
if (errors.length) fail(errors);

let graph;
try {
  graph = JSON.parse(fs.readFileSync(GRAPH_PATH, "utf8"));
} catch (error) {
  fail([`Graph JSON is invalid: ${error.message}`]);
}

if (!Array.isArray(graph.nodes) || graph.nodes.length === 0) {
  errors.push("Graph nodes must be a non-empty array");
}
if (!Array.isArray(graph.edges)) {
  errors.push("Graph edges must be an array");
}
if (!Array.isArray(graph.clusters)) {
  errors.push("Graph clusters must be an array");
}
if (!graph.statistics || graph.statistics.node_count !== graph.nodes.length || graph.statistics.edge_count !== graph.edges.length) {
  errors.push("Graph statistics must match node and edge counts");
}

const nodeIds = new Set();
for (const [index, node] of (graph.nodes || []).entries()) {
  if (!node.id) errors.push(`nodes[${index}] missing id`);
  if (!["person", "work", "tradition", "concept"].includes(node.type)) {
    errors.push(`nodes[${index}] has invalid type: ${node.type}`);
  }
  if (node.id && nodeIds.has(node.id)) errors.push(`Duplicate node id: ${node.id}`);
  if (node.id) nodeIds.add(node.id);
  if (!Array.isArray(node.tags)) errors.push(`nodes[${index}] tags must be an array`);
  if (!Array.isArray(node.embedding)) errors.push(`nodes[${index}] embedding must be an array`);
}

let orphanEdgeCount = 0;
const connected = new Set();
for (const [index, edge] of (graph.edges || []).entries()) {
  if (!nodeIds.has(edge.from)) {
    errors.push(`edges[${index}] references missing from node: ${edge.from}`);
    orphanEdgeCount += 1;
  }
  if (!nodeIds.has(edge.to)) {
    errors.push(`edges[${index}] references missing to node: ${edge.to}`);
    orphanEdgeCount += 1;
  }
  if (!["teacher_of", "commentary_on", "belongs_to", "related_to"].includes(edge.type)) {
    errors.push(`edges[${index}] has invalid type: ${edge.type}`);
  }
  if (!isNumber(edge.weight)) errors.push(`edges[${index}] weight must be a number`);
  if (!isNumber(edge.confidence)) errors.push(`edges[${index}] confidence must be a number`);
  connected.add(edge.from);
  connected.add(edge.to);
}

const orphanNodes = [...nodeIds].filter((id) => !connected.has(id));
if (graph.nodes.length > 0 && orphanNodes.length / graph.nodes.length > 0.6) {
  errors.push(`Too many orphan nodes: ${orphanNodes.length}/${graph.nodes.length}`);
}
if (orphanEdgeCount > 0) {
  errors.push(`Orphan edge references found: ${orphanEdgeCount}`);
}

if (errors.length) fail(errors);

console.log("Knowledge graph check passed.");
console.log(`Nodes: ${graph.nodes.length}`);
console.log(`Edges: ${graph.edges.length}`);
console.log(`Clusters: ${graph.clusters.length}`);
