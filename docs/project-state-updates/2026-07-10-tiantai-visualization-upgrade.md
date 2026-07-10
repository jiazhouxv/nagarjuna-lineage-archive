# 2026-07-10 Tiantai Visualization Upgrade

## Purpose

This update upgrades the Tiantai HTML5 preview from a simple introduction page into a more concrete interactive visualization page.

It also removes a public-facing implementation note about the `jiazhouxv.github.io` root path. That note is useful for support and debugging, but should not appear on the public project site.

---

## Issue

- #37 Upgrade Tiantai HTML5 visualization and remove public-facing implementation note

---

## Files changed

- `docs/visualizations/tiantai-relation-preview.html`
- `docs/visualizations/index.html`
- `docs/project-state-updates/2026-07-10-tiantai-visualization-upgrade.md`

---

## Changes

### Tiantai page

The Tiantai page now uses `Tiantai / 天台宗` as the central node.

Nagarjuna is represented as a doctrinal root / source node instead of being placed at the center of the Tiantai topic graph.

The page adds a more concrete interactive HTML5 graph with:

- Tiantai central node
- Nagarjuna / 龙树
- Madhyamaka / 中观
- Kumarajiva / 鸠摩罗什
- Huiwen / 慧文
- Huisi / 慧思
- Zhiyi / 智顗
- Guanding / 灌顶
- Zhanran / 湛然
- Mohe Zhiguan / 摩诃止观
- Fahua Xuanyi / 法华玄义
- Fahua Wenju / 法华文句
- Chinese Tiantai
- Japanese Tendai
- Korean Cheontae

It also adds:

- clickable SVG nodes
- detail panel
- relation/path highlighting
- timeline preview
- archive status panel

### Overview page

The overview page now removes the public-facing explanation about why `https://jiazhouxv.github.io/` may return 404.

The overview page now makes the Tiantai entry visible in:

- the hero CTA
- the eight-tradition card grid

---

## Scope control

This update:

- does not operate on `jiazhouxv/ai-paper-diagnosis`
- does not enter Engineering OS v0.5
- does not add autonomous evolution logic
- does not copy restricted full text
- does not change canonical YAML records
- does not create or promote relation records
- does not claim unreviewed data as reviewed
- does not add external JavaScript or CDN dependencies

---

## Status

The visualization remains `visualization_sample_only`.

Future work should connect the HTML5 preview to reviewed JSON export data only after relation review gates and schema checks are complete.
