# 2026-07-18 Tiantai Demo JSON Addendum

## Issue

- #42 Day 2: Extract Tiantai demo graph data to JSON

## Completed

- Added `docs/visualizations/data/tiantai-demo.graph.json`.
- Aligned the file with `schemas/visualization-graph.schema.json`.
- Preserved the public boundary `visualization_sample_only`.
- Extracted multilingual labels, semantic layers, nodes, edges, path presets, timeline items, display hints, and boundary notes.

## Compatibility decision

The existing HTML page remains operational while the graph data is now available as an independent machine-readable artifact. A later renderer pass can switch the page from inline data to JSON loading without changing the public data contract.

## Safety

- No canonical YAML records changed.
- No reviewed relation records created or promoted.
- No external JavaScript or CDN dependency added.
