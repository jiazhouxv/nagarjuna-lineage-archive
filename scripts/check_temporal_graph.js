#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const REQUIRED = [
  "engineering-os/temporal",
  "engineering-os/temporal/node.temporal.schema.json",
  "engineering-os/temporal/edge.temporal.schema.json",
  "engineering-os/temporal/timeline_builder.js",
  "engineering-os/temporal/causality_engine.js",
  "engineering-os/temporal/drift_detector.js",
  "engineering-os/temporal/time_validator.js",
  "docs/00_TEMPORAL_GRAPH_INDEX.json",
  "scripts/temporal-cli.js",
];

const FORBIDDEN_TERMS = [
  "ai-paper-diagnosis",
  "apps/miniapp",
  "v1.9.2 Runtime Unification",
  "docs/80_V190_PRODUCT_COMPLETION_GAP_MATRIX.md",
  "docs/81_V191_API_CONTRACT_ALIGNMENT.md",
  "试卷诊断",
  "小程序",
  "学生上传试卷",
  "拍照批改",
];

const errors = [];

function readText(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

for (const rel of REQUIRED) {
  const fullPath = path.join(ROOT, rel);
  if (!fs.existsSync(fullPath)) errors.push(`Missing required path: ${rel}`);
}

for (const rel of [
  "engineering-os/temporal/node.temporal.schema.json",
  "engineering-os/temporal/edge.temporal.schema.json",
  "docs/00_TEMPORAL_GRAPH_INDEX.json",
]) {
  if (!fs.existsSync(path.join(ROOT, rel))) continue;
  try {
    JSON.parse(readText(rel));
  } catch (error) {
    errors.push(`Invalid JSON in ${rel}: ${error.message}`);
  }
}

let index = null;
if (fs.existsSync(path.join(ROOT, "docs/00_TEMPORAL_GRAPH_INDEX.json"))) {
  index = JSON.parse(readText("docs/00_TEMPORAL_GRAPH_INDEX.json"));
  if (!Array.isArray(index.nodes)) errors.push("Temporal index nodes must be an array");
  if (!Array.isArray(index.edges)) errors.push("Temporal index edges must be an array");
  if (!Array.isArray(index.eras)) errors.push("Temporal index eras must be an array");
  if (!Array.isArray(index.timeline)) errors.push("Temporal index timeline must be an array");
}

for (const rel of REQUIRED.filter((item) => !item.endsWith("temporal"))) {
  const fullPath = path.join(ROOT, rel);
  if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) continue;
  const text = readText(rel);
  for (const term of FORBIDDEN_TERMS) {
    if (text.includes(term)) errors.push(`Forbidden source-project term found in ${rel}: ${term}`);
  }
}

if (errors.length) {
  console.error("Temporal graph check failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Temporal graph check passed.");
console.log(`Nodes: ${index.nodes.length}`);
console.log(`Edges: ${index.edges.length}`);
console.log(`Timeline events: ${index.timeline.length}`);
