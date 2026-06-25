function firstYear(node) {
  if (!node || !node.time) return null;
  if (typeof node.time.start === "number") return node.time.start;
  if (Array.isArray(node.time.active_range) && typeof node.time.active_range[0] === "number") {
    return node.time.active_range[0];
  }
  return null;
}

function isCausallyValid(a, b) {
  const startA = firstYear(a);
  const startB = firstYear(b);

  if (startA === null || startB === null) {
    return {
      valid: null,
      confidence: 0,
      validity: "unknown",
      reason: "missing time",
    };
  }

  const gap = startB - startA;
  if (gap < 0) {
    return {
      valid: false,
      confidence: 0.2,
      validity: "suspicious",
      reason: "target appears earlier than source",
      time_lag: gap,
    };
  }

  if (gap > 800) {
    return {
      valid: true,
      confidence: 0.35,
      validity: "suspicious",
      reason: "time gap exceeds 800 years",
      time_lag: gap,
    };
  }

  return {
    valid: true,
    confidence: 0.87,
    validity: "plausible",
    reason: "source time is earlier than target time",
    time_lag: gap,
  };
}

function validateTemporalEdges(index) {
  const nodes = new Map((index.nodes || []).map((node) => [node.id, node]));
  return (index.edges || []).map((edge) => ({
    ...edge,
    causality: isCausallyValid(nodes.get(edge.from), nodes.get(edge.to)),
  }));
}

module.exports = { isCausallyValid, validateTemporalEdges };
