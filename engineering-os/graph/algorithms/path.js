function buildAdjacency(graph) {
  const adjacency = new Map();
  for (const node of graph.nodes || []) {
    adjacency.set(node.id, []);
  }
  for (const edge of graph.edges || []) {
    if (!adjacency.has(edge.from)) adjacency.set(edge.from, []);
    adjacency.get(edge.from).push(edge);
  }
  return adjacency;
}

function findPath(graph, start, end) {
  if (start === end) return [{ id: start }];

  const adjacency = buildAdjacency(graph);
  const queue = [{ node: start, path: [{ id: start }] }];
  const visited = new Set([start]);

  while (queue.length) {
    const current = queue.shift();
    const edges = adjacency.get(current.node) || [];

    for (const edge of edges) {
      if (visited.has(edge.to)) continue;

      const nextPath = current.path.concat([{ edge }, { id: edge.to }]);
      if (edge.to === end) return nextPath;

      visited.add(edge.to);
      queue.push({ node: edge.to, path: nextPath });
    }
  }

  return null;
}

module.exports = { findPath };
