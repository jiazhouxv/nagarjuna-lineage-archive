# Release Checklist / 发布检查清单

## Purpose / 目的

This document defines the checklist for preparing a release of Nagarjuna Lineage Archive.

本文档用于记录龙树菩萨思想谱系资料库发布版本前的检查事项。

The current target release is:

- v0.1.0

当前目标发布版本：

- v0.1.0

---

## Release Goal / 发布目标

The goal of v0.1.0 is to establish the first stable structure of the archive.

v0.1.0 的目标是建立资料库的第一个稳定结构。

This release should include:

- Bilingual documentation
- Data schema
- Source policy
- Validation guide
- Initial Tiantai module
- Initial person records
- Initial tradition and branch records
- Initial work records
- Initial term records
- Initial timeline records
- Initial relation records
- Local validation support
- GitHub Codespaces validation support
- GitHub Actions automatic validation

本版本应包括：

- 中英文双语文档
- 数据结构规范
- 资料来源政策
- 数据校验指南
- 初始天台宗模块
- 初始人物记录
- 初始宗派与分支记录
- 初始典籍记录
- 初始术语记录
- 初始时间线记录
- 初始关系记录
- 本地校验支持
- GitHub Codespaces 校验支持
- GitHub Actions 自动校验支持

---

## Documentation Checklist / 文档检查

Before release, review:

- README.md
- CHANGELOG.md
- docs/project-scope.md
- docs/source-policy.md
- docs/roadmap.md
- docs/data-schema.md
- docs/validation-guide.md
- docs/release-checklist.md

发布前应检查：

- README.md
- CHANGELOG.md
- docs/project-scope.md
- docs/source-policy.md
- docs/roadmap.md
- docs/data-schema.md
- docs/validation-guide.md
- docs/release-checklist.md

---

## Data Checklist / 数据检查

Review these data areas:

- data/persons/
- data/traditions/
- data/branches/
- data/works/
- data/terms/
- data/timelines/
- data/relations/

应检查以下数据目录：

- data/persons/
- data/traditions/
- data/branches/
- data/works/
- data/terms/
- data/timelines/
- data/relations/

Each record should have:

- stable id
- correct type
- Chinese and English names or titles
- summary_zh
- summary_en
- source_refs
- status
- notes when needed

每条记录应具备：

- 稳定 id
- 正确 type
- 中文和英文名称或标题
- summary_zh
- summary_en
- source_refs
- status
- 必要时附 notes

---

## Validation Checklist / 校验检查

Run local validation:

    python tools/validate_yaml.py

Run validation in GitHub Codespaces:

    pip install -r requirements.txt
    python tools/validate_yaml.py

Confirm GitHub Actions passes on main.

运行本地校验：

    python tools/validate_yaml.py

在 GitHub Codespaces 中运行校验：

    pip install -r requirements.txt
    python tools/validate_yaml.py

确认 GitHub Actions 在 main 分支通过。

---

## Source Policy Checklist / 来源政策检查

Before release, confirm:

- No restricted full text is redistributed.
- Metadata and summaries are original or source-linked.
- External source links are recorded as references.
- Source status is marked as partial or needs review when uncertain.
- Full text policy remains clear.

发布前应确认：

- 未再分发受限制的全文。
- 元数据和摘要为原创整理或附来源链接。
- 外部来源链接作为参考记录。
- 来源不确定时标记为 partial 或 needs review。
- 全文政策保持清晰。

---

## GitHub Checklist / GitHub 检查

Before release, confirm:

- Issues exist for ongoing tasks.
- GitHub Actions validation passes.
- CHANGELOG.md is updated.
- README.md describes the project clearly.
- Release notes are prepared.

发布前应确认：

- 已为后续任务创建 issues。
- GitHub Actions 校验通过。
- CHANGELOG.md 已更新。
- README.md 清楚描述项目。
- 发布说明已准备。

---

## v0.1.0 Release Notes Draft / v0.1.0 发布说明草稿

Suggested release title:

- v0.1.0 Initial Tiantai Module Structure

建议发布标题：

- v0.1.0 Initial Tiantai Module Structure

Suggested summary:

This release establishes the initial structure of Nagarjuna Lineage Archive, with Tiantai as the first active module. It includes bilingual documentation, source policy, data schema, validation tooling, GitHub Actions validation, and initial structured records for Tiantai-related persons, works, terms, branches, timelines, and relations.

建议摘要：

本版本建立龙树菩萨思想谱系资料库的初始结构，并以天台宗作为第一个重点模块。内容包括中英文双语文档、资料来源政策、数据结构规范、校验工具、GitHub Actions 自动校验，以及天台宗相关人物、典籍、术语、分支、时间线和关系的初始结构化记录。

---

## Release Principle / 发布原则

v0.1.0 does not mean the archive is complete.

It means the first stable structure is ready for review and future contribution.

v0.1.0 不代表资料库已经完成。

它表示第一个稳定结构已经建立，可以接受后续审查和贡献。
