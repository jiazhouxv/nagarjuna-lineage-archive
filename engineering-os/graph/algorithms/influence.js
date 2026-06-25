const { findPath } = require("./path");

function influenceScore(graph, start, end) {
  const path = findPath(graph, start, end);
  if (!path) return 0;

  const edgeCount = path.filter((item) => item.edge).length;
  if (edgeCount === 0) return 1;
  return 1 / edgeCount;
}

module.exports = { influenceScore };
