# 2026-07-18 Visualization Data Contract

## Issue

- #41 Day 1: Define visualization graph data contract

---

## Purpose

This update introduces a stable data contract for public HTML5 visualization graph pages.

The goal is to move the archive frontend from hand-coded demo graphs toward data-driven, review-aware, source-linked graph displays.

---

## Files added

- `schemas/visualization-graph.schema.json`
- `docs/VISUALIZATION_DATA_CONTRACT.md`
- `docs/project-state-updates/2026-07-18-visualization-data-contract.md`

---

## Contract coverage

The schema covers:

- metadata
- multilingual labels
- semantic layers
- nodes
- edges
- relation types
- claim strengths
- review statuses
- path presets
- timeline items
- display hints
- public boundary notes

---

## Key boundary

The visualization graph is not the source of truth.

Current public demos must remain:

```text
visualization_sample_only
```

The schema explicitly separates:

- demo graph experience
- draft graph export
- reviewed graph export
- canonical repository records

---

## Safety summary

This batch:

- did not operate on `jiazhouxv/ai-paper-diagnosis`
- did not enter Engineering OS v0.5
- did not add autonomous evolution logic
- did not copy restricted full text
- did not change canonical YAML records
- did not create or promote reviewed relation records
- did not claim demo data as canonical

---

## Next step

Day 2 should extract the Tiantai dense demo graph into:

```text
docs/visualizations/data/tiantai-demo.graph.json
```

and keep the current static HTML behavior compatible with the new contract.
