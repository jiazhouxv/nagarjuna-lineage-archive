# Sanlun Scaffold Notes / 三论宗脚手架说明

## Purpose / 目的

This file tracks initial scaffold planning for the Sanlun module.

本文档记录三论宗模块的初始脚手架规划。

The goal is to begin Sanlun modeling without over-expanding the module before validation and source policy remain stable.

本文件的目标是在校验规则和来源政策保持稳定的前提下，开始三论宗建模，但不一次性过度扩展。

---

## Current scope / 当前范围

Initial Sanlun scaffold scope:

- `data/traditions/sanlun.yaml`
- `data/persons/jizang.yaml`
- `data/works/zhonglun.yaml`
- `data/works/shiermenlun.yaml`
- `data/works/bailun.yaml`

初始三论宗脚手架范围：

- `data/traditions/sanlun.yaml`
- `data/persons/jizang.yaml`
- `data/works/zhonglun.yaml`
- `data/works/shiermenlun.yaml`
- `data/works/bailun.yaml`

---

## Relation to Nagarjuna / 与龙树菩萨的关系

Sanlun is included because it is one of the major East Asian Buddhist traditions built around Madhyamaka materials associated with Nagarjuna and related translated treatises.

三论宗被纳入本资料库，是因为它是东亚佛教中围绕龙树菩萨相关中观论书及其汉译传统形成的重要宗派之一。

---

## Modeling rules / 建模规则

- Keep records metadata-first.
- Do not redistribute restricted full text.
- Use stable English IDs.
- Keep Chinese Buddhist terms in Chinese, with pinyin and English where useful.
- Mark new records as `draft`, `partial`, and `needs_review` until stronger source verification is completed.

- 记录以元数据为核心。
- 不再分发受限制全文。
- 使用稳定英文 ID。
- 中文佛教术语保留中文，并尽量补充拼音和英文。
- 新记录在来源核查进一步完成前，保持 `draft`、`partial`、`needs_review` 状态。

---

## Next steps / 后续步骤

Recommended next steps:

1. Add Sanlun relation records connecting Nagarjuna, Kumarajiva, Jizang, and the three core treatises.
2. Add core Sanlun terms such as emptiness, two truths, Madhyamaka, and middle way.
3. Add source references from stronger academic studies of Chinese Madhyamaka and Jizang.
4. Consider Japanese Sanron as a future branch record.

建议后续步骤：

1. 添加三论宗关系记录，连接龙树、鸠摩罗什、吉藏和三部核心论书。
2. 添加三论宗核心术语，如空、二谛、中观、中道。
3. 补充更强的中国中观和吉藏研究学术来源。
4. 后续可考虑将日本 Sanron 作为分支记录加入。

---

## Status / 状态

Status: initial scaffold started.

状态：初始脚手架已开始。
