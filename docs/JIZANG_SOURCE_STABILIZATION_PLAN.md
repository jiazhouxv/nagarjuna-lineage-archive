# Jizang Source Stabilization Plan / 吉藏来源稳定化规划

## Purpose / 目的

This document defines a small, source-aware plan for stabilizing the `data/persons/jizang.yaml` record in a future data update.

本文档为后续稳定 `data/persons/jizang.yaml` 记录制定一个小范围、重视来源的规划。

This is a planning document only. It does not modify the Jizang YAML record and does not add new historical or doctrinal claims.

本文档仅为规划文件，不修改吉藏 YAML 记录，也不新增历史或教义判断。

---

## Current position / 当前定位

Jizang is already present as the core Sanlun person record.

吉藏已经作为三论宗模块的核心人物记录存在。

Current record status should remain conservative until stronger source coverage is added:

- `record_status: draft`
- `source_status: partial`
- `review_status: needs_review`

在补强来源前，当前记录状态应继续保持保守：

- `record_status: draft`
- `source_status: partial`
- `review_status: needs_review`

---

## Source-stabilization goals / 来源稳定化目标

Future updates to `data/persons/jizang.yaml` should aim to strengthen source coverage for:

1. names and name variants
2. approximate dates
3. regional and institutional context
4. role in Sanlun systematization
5. relation to core Sanlun works
6. later reception history

后续更新 `data/persons/jizang.yaml` 时，应优先补强以下方面的来源：

1. 名称与异名
2. 大致生卒年代
3. 地域与制度语境
4. 在三论宗系统化中的角色
5. 与三论宗核心典籍的关系
6. 后世接受史

---

## Safe source categories / 安全来源类型

Preferred future source categories:

- canonical catalog metadata
- Buddhist studies encyclopedias or dictionaries used as metadata pointers
- peer-reviewed academic studies
- university-hosted reference pages
- library catalog records
- source records that can be linked without copying full text

后续优先使用的来源类型：

- 佛典目录元数据
- 佛教学辞典或百科条目，仅作为元数据指针使用
- 同行评审学术研究
- 大学机构维护的参考页面
- 图书馆目录记录
- 可链接但不复制全文的来源记录

---

## Unsafe source use / 不安全来源用法

Do not:

- copy restricted dictionary text
- copy large passages from CBETA, SAT, DDB, or modern monographs
- turn one reference into a strong unsupported historical claim
- treat doctrinal influence as direct institutional lineage
- overwrite stable IDs
- move `review_status` to reviewed without human review

不要：

- 复制受限制辞典正文
- 从 CBETA、SAT、DDB 或现代专著复制大段文字
- 将单一来源扩展成无支撑的强历史判断
- 将思想影响直接等同为制度性师承
- 覆盖稳定 ID
- 未经人工审查即将 `review_status` 改为 reviewed

---

## Proposed future YAML changes / 后续 YAML 修改建议

A later source-backed data PR may consider:

1. strengthening `bibliography`
2. adding clearer `source_refs` with access dates
3. separating name evidence from role evidence
4. adding a note distinguishing systematization from authorship
5. adding cautionary notes where institutional lineage is not yet verified

后续有来源支撑的数据 PR 可以考虑：

1. 补强 `bibliography`
2. 增加带访问日期的清晰 `source_refs`
3. 区分名称证据与角色证据
4. 增加“系统化不等于作者关系”的说明
5. 在制度传承尚未核实时增加谨慎说明

---

## Suggested future issue / 建议后续 issue

Recommended next issue title:

`Stabilize Jizang source references and bibliography`

Recommended scope:

- update `data/persons/jizang.yaml`
- keep changes metadata-only
- no full-text copying
- no stable ID changes
- no relation expansion unless evidence is explicit

建议后续 issue 标题：

`Stabilize Jizang source references and bibliography`

建议范围：

- 更新 `data/persons/jizang.yaml`
- 仅做元数据层面的修改
- 不复制全文
- 不修改稳定 ID
- 没有明确证据时不扩展关系数据

---

## Relationship to Engineering OS / 与 Engineering OS 的关系

This planning step does not enter Engineering OS v0.5.

本规划步骤不进入 Engineering OS v0.5。

Future graph or temporal checks may be used only to identify weak links after source-backed data changes are made.

后续只有在完成有来源支撑的数据修改后，才使用图谱或时间图谱检查来识别薄弱连接。

---

## Maintenance note / 维护记录

Created for issue #17: `Plan Jizang source stabilization targets`.

本文件对应 issue #17：`Plan Jizang source stabilization targets`。
