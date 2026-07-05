# 2026-07-02 Sanlun Core Work Source Stabilization Addendum

## Purpose

This addendum records a three-day data-quality batch for the Sanlun core work records in `jiazhouxv/nagarjuna-lineage-archive`.

The batch stabilizes canonical source-reference metadata for:

1. `data/works/zhonglun.yaml`
2. `data/works/shiermenlun.yaml`
3. `data/works/bailun.yaml`

---

## Issue

- #21 Stabilize Sanlun core work source references

---

## Files changed

- `data/works/zhonglun.yaml`
- `data/works/shiermenlun.yaml`
- `data/works/bailun.yaml`
- `docs/project-state-updates/2026-07-02-sanlun-core-work-source-stabilization.md`

---

## Batch 1: Zhonglun

The `zhonglun` record was updated to:

- separate CBETA and SAT bibliography entries
- refresh canonical source reference metadata
- clarify that CBETA and SAT are external cross-checking points
- keep full text excluded from the repository
- keep status conservative

---

## Batch 2: Shiermenlun

The `shiermenlun` record was updated to:

- separate CBETA and SAT bibliography entries
- refresh canonical source reference metadata
- clarify that CBETA and SAT are external cross-checking points
- keep full text excluded from the repository
- keep status conservative

---

## Batch 3: Bailun

The `bailun` record was updated to:

- separate CBETA and SAT bibliography entries
- refresh canonical source reference metadata
- clarify that CBETA and SAT are external cross-checking points
- keep full text excluded from the repository
- keep status conservative

---

## Status decision

All three records remain conservative:

- `record_status: draft`
- `source_status: partial`
- `review_status: needs_review`

Reason:

The source-reference metadata is more stable, but authorship, translation history, title variants, doctrinal reception, and Sanlun reception history still require further academic review before any record is marked reviewed.

---

## Safety summary

This maintenance round:

- operated only on `jiazhouxv/nagarjuna-lineage-archive`
- did not operate on `jiazhouxv/ai-paper-diagnosis`
- did not enter Engineering OS v0.5
- did not add autonomous evolution logic
- did not redistribute restricted full text
- did not change stable IDs
- did not change review_status to reviewed
- did not expand relation records
- did not add unsupported authorship, translation, or lineage claims

---

## Recommended next step

After this PR is merged and Actions are green, the next Sanlun data-quality step should be one of:

1. add secondary academic bibliography for `zhonglun`
2. add secondary academic bibliography for `shiermenlun`
3. add secondary academic bibliography for `bailun`
4. review Sanlun relation records only after person and work source coverage is stronger

Do not enter Engineering OS v0.5 yet.
