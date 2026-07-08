# 2026-07-08 Sanlun Core Work Secondary Bibliography Cleanup Addendum

## Purpose

This addendum records a three-day source-backed data-quality batch for the Sanlun core work records.

The batch completes the next step after `zhonglun` secondary academic bibliography pointers by adding conservative secondary bibliography pointers to:

1. `data/works/shiermenlun.yaml`
2. `data/works/bailun.yaml`

---

## Issue

- #27 Add Shiermenlun and Bailun secondary bibliography pointers

---

## Files changed

- `data/works/shiermenlun.yaml`
- `data/works/bailun.yaml`
- `docs/project-state-updates/2026-07-08-sanlun-core-work-secondary-bibliography-cleanup.md`

---

## Day 1: Shiermenlun

The `shiermenlun` record was updated to add secondary bibliography pointers for:

- Richard H. Robinson, `Early Mādhyamika in India and China`
- Hsueh-Li Cheng, `Empty Logic: Madhyamika Buddhism from Chinese Sources`
- Jizang / Jérôme Ducor / Henry W. Isler, `Le Sens des arcanes des Trois Traités`

These entries are used as bibliographic pointers for early Chinese Madhyamaka, Sanlun, and Jizang Three Treatises context.

They do not replace CBETA or SAT as canonical metadata pointers for the Chinese Shiermenlun record.

---

## Day 2: Bailun

The `bailun` record was updated to add secondary bibliography pointers for:

- Richard H. Robinson, `Early Mādhyamika in India and China`
- Hsueh-Li Cheng, `Empty Logic: Madhyamika Buddhism from Chinese Sources`
- Jizang / Jérôme Ducor / Henry W. Isler, `Le Sens des arcanes des Trois Traités`

These entries are used as bibliographic pointers for early Chinese Madhyamaka, Sanlun, and Jizang Three Treatises context.

They do not replace CBETA or SAT as canonical metadata pointers for the Chinese Bailun record.

---

## Day 3: Cleanup note

This batch creates a consistent bibliography pattern across the three Sanlun core work records:

- `zhonglun`
- `shiermenlun`
- `bailun`

Current pattern:

1. CBETA remains the primary digital canonical reference.
2. SAT remains the independent digital canonical cross-check.
3. Secondary bibliography is used only as academic context.
4. Secondary bibliography does not settle exact translation dates, attribution details, Sanskrit-Chinese equivalence, or institutional lineage claims by itself.
5. `review_status` remains `needs_review` until page-level human review is completed.

---

## Status decision

Both updated records remain conservative:

- `record_status: draft`
- `source_status: partial`
- `review_status: needs_review`

Reason:

The bibliography is stronger, but page-level verification is still required before moving any record to reviewed status.

---

## Safety summary

This maintenance round:

- operated only on `jiazhouxv/nagarjuna-lineage-archive`
- did not operate on `jiazhouxv/ai-paper-diagnosis`
- did not enter Engineering OS v0.5
- did not add autonomous evolution logic
- did not redistribute restricted full text
- did not change stable IDs
- did not change `review_status` to reviewed
- did not expand relation records
- did not make stronger authorship, translation, Sanskrit-Chinese equivalence, or institutional lineage claims than the bibliography supports

---

## Recommended next step

After this PR is merged and Actions are green, the next data-quality step should be:

`Plan Sanlun relation-record review gates`

That next step should be planning-only unless page-level source evidence is ready.

Do not enter Engineering OS v0.5 yet.
