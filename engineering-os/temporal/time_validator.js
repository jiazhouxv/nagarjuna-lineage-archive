const { validateTemporalEdges } = require("./causality_engine");

function validateTimeline(index) {
  const warnings = [];
  const nodes = index.nodes || [];
  const edges = index.edges || [];

  for (const node of nodes) {
    if (!node.time || node.time.start === null) {
      warnings.push({
        type: "missing_time",
        node_id: node.id,
        message: "No explicit time evidence found for node.",
      });
    }
    if (node.time && node.time.start !== null && node.time.end !== null && node.time.start > node.time.end) {
      warnings.push({
        type: "invalid_range",
        node_id: node.id,
        message: "Temporal start is later than temporal end.",
      });
    }
  }

  for (const edge of validateTemporalEdges(index)) {
    if (edge.causality.validity !== "plausible") {
      warnings.push({
        type: "edge_time_gap",
        from: edge.from,
        to: edge.to,
        validity: edge.causality.validity,
        message: edge.causality.reason,
      });
    }
  }

  return {
    valid: warnings.every((warning) => warning.type !== "invalid_range"),
    warnings,
    checked_nodes: nodes.length,
    checked_edges: edges.length,
  };
}

module.exports = { validateTimeline };
