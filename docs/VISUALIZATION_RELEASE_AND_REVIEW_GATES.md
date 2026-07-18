# Visualization Release and Review Gates

## Purpose

This document defines how public HTML5 visualization demos evolve into source-linked, reviewed, data-driven graph pages.

The public visualization layer is a presentation layer. It is not automatically the canonical source of truth.

---

## Data classes

### 1. visualization_sample_only

Used for public interaction prototypes and layout demonstrations.

Characteristics:

- may contain plausible sample relations
- may use simplified labels
- may omit full source references
- must not be presented as reviewed scholarship
- must display a visible demo boundary

### 2. draft_graph_export

Generated from repository records that are still incomplete or need review.

Requirements:

- stable node IDs
- relation types conform to the graph schema
- source references included where available
- `reviewStatus` remains `needs_review` or `partial`

### 3. reviewed_graph_export

Generated only from records that passed the applicable review gates.

Requirements:

- source-linked evidence
- relation endpoint IDs verified
- relation type verified
- claim strength assigned
- review decision recorded
- no unsupported inference presented as fact

### 4. canonical repository records

The authoritative repository layer.

Canonical records remain in the repository's reviewed structured data and supporting source documentation. A visualization export does not become canonical merely because it is public.

---

## Relation promotion gates

A demo or draft relation may be promoted only after all applicable gates pass.

### Gate A: stable endpoints

- source node exists
- target node exists
- stable IDs match repository records
- no duplicate or ambiguous endpoint

### Gate B: relation semantics

- relation type is explicit
- direction is correct
- label does not overstate the evidence
- interpretive context is not represented as direct historical fact

### Gate C: evidence

- source reference is recorded
- page, section, catalog, or canonical identifier is included where possible
- evidence supports the exact relation claim
- secondary scholarship is not used as a substitute for canonical metadata when canonical metadata is required

### Gate D: claim strength

Allowed claim-strength classes include:

- `canonical_metadata`
- `traditional_attribution`
- `academic_context`
- `interpretive_context`
- `visualization_sample_only`

The frontend must not collapse these into a single undifferentiated "fact" category.

### Gate E: human review

- reviewer checks source and wording
- reviewer confirms relation direction
- reviewer confirms public label
- review result is recorded
- unresolved uncertainty remains visible

### Gate F: public rendering

- public language matches evidence strength
- source references are accessible where licensing permits
- restricted full text is not redistributed
- multilingual labels do not introduce stronger claims than the reviewed source language

---

## Review statuses

Recommended statuses:

- `sample_only`
- `needs_review`
- `partial`
- `page_level_verified`
- `reviewed`
- `rejected`

`reviewed` must not be assigned merely because a page renders successfully or a schema validates.

---

## Public wording rules

### Safe wording

- "traditional attribution"
- "associated with"
- "interpreted in the context of"
- "translation context"
- "later reception"
- "demo relation"

### Wording requiring stronger evidence

- "direct disciple of"
- "founded"
- "transmitted directly to"
- "identical doctrine"
- "canonical author"
- "historically proven"

---

## Multilingual release rules

For Chinese, Japanese, Korean, and English presentation:

1. stable IDs remain language-independent
2. labels may vary by language
3. review status and claim strength must not vary by language
4. translation notes should be stored separately from canonical labels
5. uncertain names should retain transliteration or source form
6. one language must not make a stronger historical claim than another

---

## Build pipeline

Recommended future pipeline:

1. source records and bibliography
2. reviewed YAML / structured repository records
3. deterministic graph export
4. JSON Schema validation
5. relation-reference integrity validation
6. multilingual label validation
7. static HTML5 rendering
8. GitHub Pages deployment
9. public smoke test

---

## Release checklist

Before a visualization release:

- [ ] JSON validates against `schemas/visualization-graph.schema.json`
- [ ] all node IDs are unique
- [ ] all edge endpoints resolve
- [ ] path presets reference existing nodes and edges
- [ ] review statuses are present
- [ ] demo data is visibly identified
- [ ] no restricted full text is embedded
- [ ] links use project-site paths correctly
- [ ] Chinese, Japanese, Korean, and English labels are checked
- [ ] mobile layout is usable
- [ ] public page does not expose internal support notes

---

## Next-stage implementation plan

### Stage 1

Complete data-driven Tiantai and Sanlun renderers using standalone graph JSON.

### Stage 2

Add deterministic validation for graph JSON and relation references.

### Stage 3

Generate reviewed graph exports from repository data rather than maintaining duplicate hand-written relations.

### Stage 4

Add source panels, bibliography links, page-level evidence summaries, and review history.

### Stage 5

Expand the same architecture to Huayan, Chan, Pure Land, Faxiang, Vinaya, and Esoteric Buddhism only when their source records are ready.

---

## Boundary

This document does not promote any existing demo relation to canonical or reviewed status.
