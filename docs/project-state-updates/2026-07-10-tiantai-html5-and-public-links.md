# 2026-07-10 Tiantai HTML5 and Public Links Addendum

## Purpose

This addendum records a public-facing visualization update for the Nagarjuna Lineage Archive.

The update restores the project-level focus from the repository README and adds a Tiantai-focused HTML5 preview page.

---

## Issue

- #35 Add Tiantai HTML5 page and public project links

---

## Source of truth

The repository README states:

- The project is `Nagarjuna Lineage Archive / 龙树菩萨思想谱系资料库`.
- The project is metadata-first and does not aim to become a full-text Buddhist canon repository.
- The first active module is Tiantai, including Chinese Tiantai, Japanese Tendai, and Korean Cheontae.
- The first development phase focuses on Nagarjuna, Madhyamaka thought, Kumarajiva, Huiwen, Huisi, Zhiyi, Guanding, Zhanran, Mohe Zhiguan, Fahua Xuanyi, Fahua Wenju, Tiantai doctrinal terms, and transmission to Japan and Korea.
- Long-term modules include Tiantai, Sanlun, Huayan, Chan, Pure Land, Faxiang, Vinaya, and Esoteric Buddhism.

---

## Files changed

- Added `docs/visualizations/tiantai-relation-preview.html`
- Updated `docs/visualizations/index.html`
- Updated `README.md`
- Added `docs/project-state-updates/2026-07-10-tiantai-html5-and-public-links.md`

---

## HTML5 updates

### Tiantai preview page

The Tiantai page provides:

- Tiantai-focused visual relation preview
- central Nagarjuna node
- Tiantai first-phase entities:
  - Kumarajiva
  - Huiwen
  - Huisi
  - Zhiyi
  - core Tiantai works
  - China / Japan / Korea branches
- multilingual support for Chinese, Japanese, Korean, and English
- no external JavaScript
- no CDN
- no restricted full text

### Overview page

The overview page now includes:

- GitHub repository link
- public GitHub Pages link
- Tiantai page link
- Sanlun page link
- explanation that `https://jiazhouxv.github.io/` is the user-site root and may 404 unless a separate `jiazhouxv.github.io` repository exists

### README

The README now includes a public visualization section with:

- project overview URL
- Tiantai preview URL
- Sanlun preview URL
- GitHub repository URL
- GitHub Pages root-path clarification

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

## Recommended next step

After this PR is merged and Actions are green, the next safe step should be:

`Add Tiantai visualization JSON schema`

That should add schema only and still avoid promoting sample visualization edges to canonical reviewed relation records.
