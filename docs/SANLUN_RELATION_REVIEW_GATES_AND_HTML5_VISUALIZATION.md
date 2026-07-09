# Sanlun Relation Review Gates and HTML5 Visualization Plan

## Purpose

This document prepares the next Sanlun data-quality layer without expanding canonical relation records yet.

It defines:

1. relation-record review gates
2. relation edge taxonomy
3. HTML5 visualization data contract
4. visualization safety boundaries
5. future implementation path

This is a planning and preview-preparation document. It does not mark any relation as reviewed and does not create new canonical relation records.

---

## Current context

The Sanlun core data currently has stronger source coverage for:

- `nagarjuna`
- `aryadeva`
- `jizang`
- `zhonglun`
- `shiermenlun`
- `bailun`

The work records now follow a consistent pattern:

- CBETA as digital canonical reference
- SAT as independent digital canonical cross-check
- secondary bibliography as academic context
- `review_status: needs_review`

The next step should not be unrestricted relation expansion. It should first define review gates and visualization rules.

---

## Relation review gates

A relation record should not be promoted to reviewed unless all gates below pass.

### Gate 1: Stable endpoint IDs

Both relation endpoints must already exist as stable archive IDs.

Examples:

- `nagarjuna`
- `aryadeva`
- `kumarajiva`
- `jizang`
- `zhonglun`
- `shiermenlun`
- `bailun`

Do not create a relation whose endpoint is only a loose display name.

### Gate 2: Relation type clarity

The relation type must be explicit and controlled.

Allowed first-pass Sanlun relation types:

- `attributed_author_of`
- `translator_of`
- `commentarial_context_for`
- `sanlun_core_work`
- `tradition_context`
- `bibliographic_context`
- `influential_interpreter_of`

Disallowed in first-pass review unless independently sourced:

- `direct_teacher_of`
- `institutional_lineage_successor_of`
- `founded_school`
- `canonically_identical_to`

### Gate 3: Claim strength

Every relation must declare claim strength:

- `canonical_metadata`
- `traditional_attribution`
- `academic_context`
- `interpretive_context`
- `visualization_sample_only`

Do not let visualization edges silently imply higher certainty.

### Gate 4: Source support

Every reviewed relation must have source support appropriate to the relation type.

Minimum support examples:

- canonical metadata: CBETA / SAT / catalogue metadata
- traditional attribution: canonical record plus note that it is attribution-level
- academic context: academic monograph, article, or publisher / library record
- interpretive context: primary or secondary source directly discussing interpretation

### Gate 5: No full-text redistribution

Relation records may include metadata, source IDs, short original notes, and links.

They must not copy restricted full text from:

- CBETA
- SAT
- DDB
- publisher pages
- monographs
- translations
- encyclopedia entries

### Gate 6: Human review status

Adding source references does not automatically make the relation reviewed.

Default:

```yaml
review_status: needs_review
```

Reviewed status requires page-level or entry-level human verification.

### Gate 7: Visualization isolation

HTML5 visualization preview data must remain separate from canonical relation records until the review gates pass.

Visualization sample data may use:

```json
"reviewStatus": "sample_only"
```

or:

```json
"claimStrength": "visualization_sample_only"
```

---

## Relation edge taxonomy for visualization

The first HTML5 preview should support these edge categories:

### Person to work

Examples:

- Nagarjuna → Zhonglun
- Nagarjuna → Shiermenlun
- Aryadeva → Bailun
- Kumarajiva → Zhonglun
- Kumarajiva → Shiermenlun
- Kumarajiva → Bailun

Edge labels:

- attributed author
- translator

### Work to tradition

Examples:

- Zhonglun → Sanlun
- Shiermenlun → Sanlun
- Bailun → Sanlun

Edge label:

- core work

### Person to tradition

Examples:

- Jizang → Sanlun

Edge label:

- systematizer / interpreter context

### Person to work context

Examples:

- Jizang → Zhonglun
- Jizang → Shiermenlun
- Jizang → Bailun

Edge label:

- interpretive context

---

## HTML5 visualization input contract

A future visualization should consume a JSON object with this structure:

```json
{
  "metadata": {
    "title": "Sanlun Relation Preview",
    "version": "preview",
    "canonical": false,
    "status": "sample_only"
  },
  "nodes": [
    {
      "id": "zhonglun",
      "label": "中论 / Zhonglun",
      "type": "work",
      "status": "needs_review"
    }
  ],
  "edges": [
    {
      "id": "edge-nagarjuna-zhonglun",
      "source": "nagarjuna",
      "target": "zhonglun",
      "label": "attributed author",
      "relationType": "attributed_author_of",
      "claimStrength": "traditional_attribution",
      "reviewStatus": "sample_only"
    }
  ]
}
```

Required node fields:

- `id`
- `label`
- `type`
- `status`

Allowed node types:

- `person`
- `work`
- `tradition`
- `concept`

Required edge fields:

- `id`
- `source`
- `target`
- `label`
- `relationType`
- `claimStrength`
- `reviewStatus`

---

## HTML5 preview requirements

The first static HTML5 preview should be:

- dependency-free
- no CDN
- no build step
- no framework
- readable locally in a browser
- clearly marked as sample-only
- visually separated from canonical data
- easy to replace with generated JSON later

Recommended UI sections:

1. Header with status label
2. SVG relation canvas
3. Legend
4. Node detail panel
5. Safety notice

Recommended interactions:

- click node to show metadata
- click edge to show relation type and claim strength
- hover highlight connected edges

Do not add:

- automatic claims
- automatic graph expansion
- live network loading
- external dependencies
- unreviewed relation promotion

---

## Future data path

The safe progression is:

1. HTML5 sample-only preview
2. visualization JSON schema stabilization
3. relation review gates finalized
4. small source-backed relation PRs
5. generated visualization JSON from reviewed YAML records
6. optional static HTML page reading generated JSON

Do not reverse the order by creating relation graphs before review gates exist.

---

## Recommended next issue

After this PR is merged:

`Add Sanlun reviewed-relation sample JSON schema`

That issue should add a schema file only, not new relation records.

Do not enter Engineering OS v0.5 yet.
