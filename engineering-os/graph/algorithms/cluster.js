function clusterByType(graph) {
  const clusters = new Map();
  for (const node of graph.nodes || []) {
    const key = node.type || "unknown";
    if (!clusters.has(key)) clusters.set(key, []);
    clusters.get(key).push(node.id);
  }

  return [...clusters.entries()].map(([id, node_ids]) => ({
    id: `type:${id}`,
    type: "type",
    node_ids,
    size: node_ids.length,
  }));
}

function clusterByTags(graph) {
  const clusters = new Map();
  for (const node of graph.nodes || []) {
    for (const tag of node.tags || []) {
      if (!clusters.has(tag)) clusters.set(tag, []);
      clusters.get(tag).push(node.id);
    }
  }

  return [...clusters.entries()].map(([id, node_ids]) => ({
    id: `tag:${id}`,
    type: "tag",
    node_ids,
    size: node_ids.length,
  }));
}

function clusterGraph(graph) {
  return [...clusterByType(graph), ...clusterByTags(graph)];
}

module.exports = { clusterByType, clusterByTags, clusterGraph };
