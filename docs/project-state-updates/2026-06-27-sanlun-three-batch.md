# 2026-06-27 Sanlun Three-Batch Cleanup Addendum

## Purpose

This addendum records a three-batch Sanlun cleanup maintenance round without entering Engineering OS v0.5.

本附录记录 2026-06-27 的三论宗三批次维护。本轮不进入 Engineering OS v0.5。

---

## Issue

- #15 Three-batch Sanlun cleanup: Aryadeva, relation modeling, and project state

---

## Batch 1 — Aryadeva minimal person record

Added:

- `data/persons/aryadeva.yaml`

Reason:

- `data/works/bailun.yaml` already uses `aryadeva` as the attributed author.
- The new record provides a stable relation target for that existing metadata.

Scope control:

- The record is intentionally minimal.
- No specific dates are asserted.
- Source status remains `partial`.
- Review status remains `needs_review`.
- The record uses metadata-level CBETA and SAT references connected to `bailun`.

---

## Batch 2 — Sanlun relation modeling notes

Added:

- `docs/SANLUN_RELATION_MODELING.md`

Reason:

Sanlun records need clear relation modeling boundaries before adding more relation data.

The new note distinguishes:

- textual attribution
- translation relation
- intellectual influence
- commentary and reception relation
- institutional lineage

Scope control:

- No automatic relation generation was added.
- No direct institutional lineage was asserted from textual or doctrinal links alone.
- The document explicitly keeps Engineering OS v0.5 out of scope.

---

## Batch 3 — Project-state and changelog trace

Added:

- `docs/project-state-updates/2026-06-27-sanlun-three-batch.md`

Updated:

- `CHANGELOG.md`

Reason:

The main `docs/project-state.md` is long and should not be replaced carelessly. This addendum records the state update without risking accidental loss of older maintenance history.

---

## Safety summary

This maintenance round:

- did not enter Engineering OS v0.5
- did not add autonomous evolution logic
- did not redistribute restricted full text
- did not change existing stable IDs
- did not mass-add new records
- added only one minimal new person record
- kept all new assertions conservative and source-aware

---

## Recommended next step

After this PR is merged and Actions are green, the next Sanlun maintenance round should focus on one of the following:

1. strengthen `jizang.yaml` with more precise academic and canonical references
2. add secondary academic references to `zhonglun.yaml`, `shiermenlun.yaml`, and `bailun.yaml`
3. update graph / temporal indexes if new relation-target warnings appear

Do not proceed to Engineering OS v0.5 until data quality and review policy are stronger.
