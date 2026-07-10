# 2026-07-10 Tiantai Dense Knowledge Graph Demo

## Purpose

This addendum records the upgrade of the Tiantai HTML5 page from a sparse validation graph into a high-information visualization demo.

The page is intended to demonstrate what the archive may eventually present when structured data is exported into a public-facing knowledge graph.

---

## Issue

- #39 Upgrade Tiantai visualization into dense knowledge graph demo

---

## Files changed

- `docs/visualizations/tiantai-relation-preview.html`
- `docs/project-state-updates/2026-07-10-tiantai-dense-knowledge-graph-demo.md`

---

## Visualization layers represented

The upgraded demo presents six visual layers:

1. Doctrinal root layer
   - Nagarjuna
   - Madhyamaka
   - emptiness
   - two truths
   - dependent arising
   - middle way
   - eight negations

2. Translation and Chinese reception layer
   - Kumarajiva
   - Chinese Buddhist translation context
   - Huiwen

3. Tiantai patriarch layer
   - Huiwen
   - Huisi
   - Zhiyi
   - Guanding
   - Zhanran

4. Work layer
   - Mohe Zhiguan
   - Fahua Xuanyi
   - Fahua Wenju
   - Lotus Sutra as textual background

5. Tiantai doctrine layer
   - threefold truth
   - one thought three thousand
   - calming and contemplation
   - five periods and eight teachings
   - Lotus perfect teaching
   - classification of teachings

6. Regional branch layer
   - Chinese Tiantai
   - Japanese Tendai
   - Korean Cheontae

---

## Interaction added

The page now includes:

- clickable SVG nodes
- clickable relation edges
- node detail panel
- edge detail panel
- path presets
- node type filters
- timeline band
- archive status panel
- visual sample data metrics

---

## Boundary decision

This is a dense visual demo only.

It does not:

- create canonical YAML relation records
- promote sample relationships to reviewed scholarly claims
- copy restricted full text
- enter Engineering OS v0.5
- add external JavaScript or CDN dependencies

The demo continues to mark itself as:

`dense_visualization_sample_only`

---

## Next safe step

After this PR is merged, the next safe step should be to split the visual demo data into a separate JSON file or schema-backed export format, while still avoiding any promotion of unreviewed relation records.
