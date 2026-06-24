#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { writeTemporalIndex } = require("../engineering-os/temporal/timeline_builder");
const { validateTimeline } = require("../engineering-os/temporal/time_validator");
const { driftDetector } = require("../engineering-os/temporal/drift_detector");

const ROOT = path.resolve(__dirname, "..");
const TEMPORAL_PATH = path.join(ROOT, "docs", "00_TEMPORAL_GRAPH_INDEX.json");

function loadTemporalIndex() {
  if (!fs.existsSync(TEMPORAL_PATH)) return writeTemporalIndex(TEMPORAL_PATH);
  return JSON.parse(fs.readFileSync(TEMPORAL_PATH, "utf8"));
}

function main() {
  const [, , command, seed] = process.argv;
  const index = loadTemporalIndex();

  if (command === "timeline") {
    for (const event of index.timeline || []) {
      console.log(`${event.year}: ${event.event} (${event.node_id})`);
    }
    return 0;
  }

  if (command === "validate") {
    const result = validateTimeline(index);
    console.log(JSON.stringify({
      valid: result.valid,
      checked_nodes: result.checked_nodes,
      checked_edges: result.checked_edges,
      warning_count: result.warnings.length,
      warnings_preview: result.warnings.slice(0, 20),
    }, null, 2));
    return result.valid ? 0 : 1;
  }

  if (command === "drift") {
    if (!seed) {
      console.error("Usage: node scripts/temporal-cli.js drift <concept-or-node-id>");
      return 1;
    }
    console.log(JSON.stringify(driftDetector(index, seed), null, 2));
    return 0;
  }

  console.log("Usage:");
  console.log("  node scripts/temporal-cli.js timeline");
  console.log("  node scripts/temporal-cli.js validate");
  console.log("  node scripts/temporal-cli.js drift <concept-or-node-id>");
  return command ? 1 : 0;
}

process.exitCode = main();
