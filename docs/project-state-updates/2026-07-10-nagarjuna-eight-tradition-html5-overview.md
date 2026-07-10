# 2026-07-10 Nagarjuna Eight-Tradition HTML5 Overview Addendum

## Purpose

This addendum records the creation of a project-level HTML5 overview page for the Nagarjuna Lineage Archive.

The new page corrects the visualization structure by making the project front page represent the full archive scope rather than only the Sanlun topic preview.

---

## Issue

- #33 Add Nagarjuna eight-tradition HTML5 overview page

---

## Files added

- `docs/visualizations/index.html`
- `docs/project-state-updates/2026-07-10-nagarjuna-eight-tradition-html5-overview.md`

---

## Source of truth

The overview page follows the project positioning and long-term module list in `README.md`.

The eight displayed tradition modules are:

- Tiantai
- Sanlun
- Huayan
- Chan
- Pure Land
- Faxiang
- Vinaya
- Esoteric Buddhism

---

## Work completed

The new HTML5 overview page includes:

1. Project-level hero section
2. Central Nagarjuna node
3. Eight-tradition constellation / mandala visual
4. Restrained gold-line SVG animation
5. Eight tradition module cards
6. Feature preview section
7. Archive principles section
8. Link to the existing Sanlun relation preview
9. Multilingual support for Chinese, Japanese, Korean, and English
10. Static HTML5 / CSS / JavaScript only

---

## Visual direction

The visual design is intentionally:

- solemn
- classical
- archive-like
- restrained
- manuscript / constellation inspired
- digital-humanities oriented

It avoids:

- cyberpunk neon
- fast rotation
- explosive particles
- frivolous bouncing
- external animation libraries

---

## Boundary decision

This batch does not create canonical relation records.

The HTML5 overview page is a front-end visualization shell and project entrance only.

It does not:

- modify YAML records
- promote any relation to reviewed
- copy restricted full text
- add source claims beyond README-level project positioning

---

## Safety summary

This maintenance round:

- operated only on `jiazhouxv/nagarjuna-lineage-archive`
- did not operate on `jiazhouxv/ai-paper-diagnosis`
- did not enter Engineering OS v0.5
- did not add autonomous evolution logic
- did not redistribute restricted full text
- did not change canonical YAML records
- did not create or promote relation records
- did not claim unreviewed data as reviewed
- did not add external JavaScript or CDN dependencies

---

## Preview URL after GitHub Pages deployment

If GitHub Pages is enabled from the repository root, the expected URL is:

`https://jiazhouxv.github.io/nagarjuna-lineage-archive/docs/visualizations/index.html`

The existing Sanlun topic preview remains:

`https://jiazhouxv.github.io/nagarjuna-lineage-archive/docs/visualizations/sanlun-relation-preview.html`

---

## Recommended next step

After this PR is merged and Actions are green, the next safe step should be:

`Connect Tiantai module preview to the overview page`

That next batch should locate or add Tiantai-specific visualization data before linking a dedicated Tiantai topic preview.
