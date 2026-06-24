function driftDetector(index, seed) {
  const nodes = index.nodes || [];
  const edges = index.edges || [];
  const exactNode = nodes.find((node) => node.id === seed);
  const seedNodes = exactNode ? [exactNode] : nodes.filter((node) => (node.tags || []).includes(seed));

  if (seedNodes.length === 0) {
    return {
      drift_score: 0,
      type: "unknown",
      seed,
      matched_nodes: [],
      evidence: [],
    };
  }

  const seedIds = new Set(seedNodes.map((node) => node.id));
  const relatedEdges = edges.filter((edge) => seedIds.has(edge.from) || seedIds.has(edge.to));
  const reinterpretationEdges = relatedEdges.filter((edge) => edge.relation === "reinterpretation" || edge.relation === "commentary");
  const traditionEdges = relatedEdges.filter((edge) => edge.relation === "transmission");
  const driftScore = relatedEdges.length === 0
    ? 0
    : Math.min(1, (reinterpretationEdges.length * 0.7 + traditionEdges.length * 0.3) / relatedEdges.length);

  return {
    drift_score: Number(driftScore.toFixed(2)),
    type: reinterpretationEdges.length > 0 ? "reinterpretation" : "transmission",
    seed,
    matched_nodes: [...seedIds],
    evidence: relatedEdges.slice(0, 12).map((edge) => ({
      from: edge.from,
      to: edge.to,
      relation: edge.relation,
      validity: edge.validity,
    })),
  };
}

module.exports = { driftDetector };
