# 2026-07-05 Zhonglun Secondary Bibliography Addendum

## Purpose

This addendum records a small source-backed data update for `data/works/zhonglun.yaml`.

The update adds secondary academic bibliography pointers for Zhonglun / Mūlamadhyamakakārikā / Madhyamaka research context.

---

## Issue

- #25 Add Zhonglun secondary academic bibliography pointers

---

## Files changed

- `data/works/zhonglun.yaml`
- `docs/project-state-updates/2026-07-05-zhonglun-secondary-bibliography.md`

---

## Data changes

The `zhonglun` record was updated to add secondary bibliography pointers for:

- Jay L. Garfield, `The Fundamental Wisdom of the Middle Way`
- Mark Siderits and Shōryū Katsura, `Nāgārjuna's Middle Way`
- David J. Kalupahana, `Mūlamadhyamakakārikā of Nāgārjuna: The Philosophy of the Middle Way`
- David Seyfort Ruegg, `The Literature of the Madhyamaka School of Philosophy in India`

These entries are used as bibliographic pointers for Mūlamadhyamakakārikā and broader Madhyamaka research context.

They do not replace CBETA or SAT as canonical metadata pointers for the Chinese Zhonglun record.

---

## Status decision

The record status remains conservative:

- `record_status: draft`
- `source_status: partial`
- `review_status: needs_review`

Reason:

The bibliography is stronger, but further human review is still required for translation history, title variants, Sanskrit-Chinese equivalence, and Sanlun reception details.

---

## Safety summary

This maintenance round:

- operated only on `jiazhouxv/nagarjuna-lineage-archive`
- did not operate on `jiazhouxv/ai-paper-diagnosis`
- did not enter Engineering OS v0.5
- did not add autonomous evolution logic
- did not redistribute restricted full text
- did not change stable ID `zhonglun`
- did not change `review_status` to reviewed
- did not expand relation records
- did not make stronger Sanskrit-Chinese equivalence, authorship, translation, or institutional lineage claims than the bibliography supports

---

## Recommended next step

After this PR is merged and Actions are green, the next small data-quality step should be one of:

1. add targeted Chinese Sanlun / Jizang bibliography pointers for `zhonglun`
2. add `shiermenlun` secondary academic bibliography pointers
3. add `bailun` secondary academic bibliography pointers

Do not enter Engineering OS v0.5 yet.
