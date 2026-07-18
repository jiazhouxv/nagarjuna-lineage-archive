# Visualization Data Contract

This document defines the public visualization data contract for the Nagarjuna Lineage Archive.

The goal is to move the project from hand-coded HTML graph pages toward source-linked, machine-readable, review-aware visualization data.

---

## Purpose

The visualization layer should eventually be generated from structured graph data rather than manually encoded in page scripts.

The contract supports:

- Tiantai dense graph demos
- Sanlun dense graph demos
- future eight-tradition overview pages
- later reviewed graph exports from canonical repository records

---

## Current status

The current visualization graph data is allowed to be:

```text
visualization_sample_only
```

This means:

- it may demonstrate frontend experience
- it may show likely or traditional relationships
- it may not be treated as canonical data
- it may not promote relations to `reviewed`
- it may not replace source-linked YAML records

---

## Schema

Schema path:

```text
schemas/visualization-graph.schema.json
```

The top-level graph object contains:

```text
metadata
layers
nodes
edges
pathPresets
timeline
display
boundary
```

Only `metadata`, `nodes`, and `edges` are required.

---

## Metadata

`metadata` identifies the graph export or demo.

Important fields:

- `id`
- `title`
- `version`
- `status`
- `tradition`
- `canonical`
- `languageDefault`
- `availableLanguages`
- `generatedFrom`

Allowed status values:

```text
visualization_sample_only
draft_export
reviewed_export
```

For all current public demos, use:

```json
{
  "status": "visualization_sample_only",
  "canonical": false
}
```

---

## Nodes

Nodes represent visible graph entities.

Allowed node types:

```text
center
person
work
doctrine
region
tradition
source
transmission
concept
```

Every node must include:

- `id`
- `type`
- `label`
- `reviewStatus`

Labels are multilingual:

```json
{
  "zh": "天台宗",
  "ja": "天台宗",
  "ko": "천태종",
  "en": "Tiantai"
}
```

---

## Edges

Edges represent visible relations between nodes.

Allowed relation types:

```text
doctrinal_root
translation_transmission
lineage_transmission
commentarial_context
core_work
doctrinal_development
regional_transmission
bibliographic_context
tradition_context
visualization_link
```

Every edge must include:

- `id`
- `source`
- `target`
- `relationType`
- `label`
- `reviewStatus`
- `claimStrength`

Allowed claim strengths:

```text
visualization_sample_only
traditional_attribution
canonical_metadata
academic_context
interpretive_context
page_level_verified
```

Current demo edges should normally use:

```text
visualization_sample_only
```

or, when the source class is known but not yet page-level verified in this visualization context:

```text
traditional_attribution
academic_context
interpretive_context
```

---

## Review status

Allowed review statuses:

```text
visualization_sample_only
needs_review
page_level_verified
reviewed
```

Rules:

1. `visualization_sample_only` is for demos.
2. `needs_review` means the claim is structurally plausible but not verified enough for public scholarly assertion.
3. `page_level_verified` means there is at least page-level or source-level verification in repository records.
4. `reviewed` must not be used unless the relation has passed the repository review gate.

---

## Path presets

`pathPresets` define named path highlights in the UI.

Examples:

- Nagarjuna to Tiantai doctrine
- Kumarajiva to Zhiyi
- Zhiyi to the three major works
- China to Japan and Korea

Each preset may include:

- `nodeIds`
- `edgeIds`

The frontend can highlight all included nodes and edges.

---

## Timeline

`timeline` contains display milestones.

Timeline items should not contain long quotations or restricted full text.

They may contain:

- a date label
- a short title
- an original summary
- related node IDs
- review status

---

## Boundary rules

The visualization data contract must preserve these boundaries:

- no restricted full text redistribution
- no automatic relation promotion
- no hidden claim that demo edges are reviewed
- no canonical YAML mutation from visualization data
- no external JavaScript requirement for public GitHub Pages demos

---

## Promotion path

A relation may move from demo to canonical only after a separate review workflow:

```text
visualization_sample_only
→ needs_review
→ page_level_verified
→ reviewed
```

The visualization graph is a public-facing view, not the source of truth.

The source of truth remains the structured repository records and their cited sources.
