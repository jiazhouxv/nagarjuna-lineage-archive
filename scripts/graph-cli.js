#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { writeGraph } = require("../engineering-os/graph/builders/build_graph");
const { findPath } = require("../engineering-os/graph/algorithms/path");
const { influenceScore } = require("../engineering-os/graph/algorithms/influence");

const ROOT = path.resolve(__dirname, "..");
const GRAPH_PATH = path.join(ROOT, "docs", "00_KNOWLEDGE_GRAPH_INDEX.json");

function loadGraph() {
  if (!fs.existsSync(GRAPH_PATH)) {
    return writeGraph(GRAPH_PATH);
  }
  return JSON.parse(fs.readFileSync(GRAPH_PATH, "utf8"));
}

function formatPath(pathResult) {
  if (!pathResult) return "No path found.";
  return pathResult
    .map((item) => {
      if (item.id) return item.id;
      if (item.edge) return `-[${item.edge.type}]->`;
      return "";
    })
    .join(" ");
}

function main() {
  const [, , command, from, to] = process.argv;

  if (command === "build") {
    const graph = writeGraph(GRAPH_PATH);
    console.log(`Graph index created: ${path.relative(ROOT, GRAPH_PATH).replace(/\\/g, "/")}`);
    console.log(`Nodes: ${graph.statistics.node_count}`);
    console.log(`Edges: ${graph.statistics.edge_count}`);
    return 0;
  }

  if (command === "stats") {
    const graph = loadGraph();
    console.log(`Nodes: ${graph.statistics.node_count}`);
    console.log(`Edges: ${graph.statistics.edge_count}`);
    console.log(`Clusters: ${(graph.clusters || []).length}`);
    return 0;
  }

  if (command === "path") {
    if (!from || !to) {
      console.error("Usage: node scripts/graph-cli.js path <from> <to>");
      return 1;
    }
    const graph = loadGraph();
    const result = findPath(graph, from, to);
    console.log(formatPath(result));
    console.log(`Influence score: ${influenceScore(graph, from, to)}`);
    return result ? 0 : 2;
  }

  console.log("Usage:");
  console.log("  node scripts/graph-cli.js build");
  console.log("  node scripts/graph-cli.js stats");
  console.log("  node scripts/graph-cli.js path <from> <to>");
  return command ? 1 : 0;
}

process.exitCode = main();
