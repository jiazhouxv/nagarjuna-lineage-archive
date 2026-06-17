# Project State / 项目状态

## Purpose / 目的

This document records the current working state of Nagarjuna Lineage Archive.

It is intended as a stable handoff document so future maintainers, contributors, and ChatGPT-assisted maintenance sessions can continue the project without relying on previous conversation memory.

本文档记录龙树菩萨思想谱系资料库的当前维护状态。

它是一个稳定的项目交接文件，方便后续维护者、贡献者以及新的 ChatGPT 协助维护窗口在不依赖旧对话记忆的情况下继续推进项目。

---

## Repository / 仓库

Repository:

- https://github.com/jiazhouxv/nagarjuna-lineage-archive

Project name:

- Nagarjuna Lineage Archive
- 龙树菩萨思想谱系资料库

Current primary branch:

- main

Current release:

- v0.1.0 Initial Tiantai Module Structure

当前发布版本：

- v0.1.0 Initial Tiantai Module Structure

---

## Project Positioning / 项目定位

Nagarjuna Lineage Archive is a metadata-first, source-linked, machine-readable digital humanities archive for studying Nagarjuna-related Buddhist lineages, texts, doctrinal terms, chronology, regional branches, and relation data.

The first active module is Tiantai.

龙树菩萨思想谱系资料库是一个以元数据为核心、以来源链接为基础、面向机器可读的佛教数字人文资料库。

本项目用于整理与龙树菩萨相关的佛教祖师谱系、典籍、教义术语、时间线、地域分支和关系数据。

第一个重点模块是天台宗。

---

## Current Stage / 当前阶段

The project has completed the initial v0.1.0 structural release.

The current stage is post-v0.1.0 stabilization and preparation for future expansion.

本项目已经完成 v0.1.0 初始结构发布。

当前阶段是 v0.1.0 发布后的稳定维护，以及为后续扩展做准备。

Current focus:

- Keep GitHub Actions validation green.
- Improve source references gradually.
- Avoid adding restricted full text.
- Add new data in small, reviewable commits.
- Use issues to track planned work.
- Prepare future expansion beyond Tiantai.

当前重点：

- 保持 GitHub Actions 校验通过。
- 逐步改进资料来源。
- 避免加入受限制全文。
- 以小而可审查的 commit 添加新数据。
- 使用 issues 跟踪计划任务。
- 准备未来扩展到天台宗以外的模块。

---

## Completed Structure / 已完成结构

The repository currently includes:

- README.md
- CHANGELOG.md
- LICENSE
- requirements.txt
- .gitignore
- docs/project-scope.md
- docs/source-policy.md
- docs/full-text-policy.md
- docs/roadmap.md
- docs/data-schema.md
- docs/validation-guide.md
- docs/project-state.md
- tools/validate_yaml.py
- .github/workflows/validate-yaml.yml

当前仓库已经包含：

- README.md
- CHANGELOG.md
- LICENSE
- requirements.txt
- .gitignore
- docs/project-scope.md
- docs/source-policy.md
- docs/full-text-policy.md
- docs/roadmap.md
- docs/data-schema.md
- docs/validation-guide.md
- docs/project-state.md
- tools/validate_yaml.py
- .github/workflows/validate-yaml.yml

---

## Completed Data Modules / 已完成数据模块

### Persons / 人物

Initial person records include:

- nagarjuna
- kumarajiva
- huiwen
- huisi
- zhiyi
- guanding
- zhanran
- saicho
- uicheon

初始人物记录包括：

- 龙树菩萨
- 鸠摩罗什
- 慧文
- 慧思
- 智者大师（智顗）
- 章安大师（灌顶）
- 荆溪湛然（妙乐大师）
- 传教大师最澄
- 大觉国师义天

### Traditions and Branches / 宗派与分支

Initial tradition and branch records include:

- tiantai
- tiantai-china
- tendai-japan
- cheontae-korea

初始宗派与分支记录包括：

- 天台宗总宗派
- 中国天台宗
- 日本天台宗 Tendai
- 韩国天台宗 Cheontae

### Works / 典籍

Initial work records include:

- mohe-zhiguan
- fahua-xuanyi
- fahua-wenju

初始典籍记录包括：

- 摩诃止观
- 法华玄义
- 法华文句

### Terms / 术语

Initial term records include:

- zhiguan
- three-truths
- one-thought-three-thousand

初始术语记录包括：

- 止观
- 三谛
- 一念三千

### Relations / 关系

Initial relation files include:

- teacher-student.yaml
- work-compilation.yaml
- tradition-branch.yaml

初始关系文件包括：

- 师承关系
- 讲授、记录、整理与注释关系
- 宗派与地域分支关系

### Timelines / 时间线

Initial timeline records include:

- tiantai-overview.yaml
- tiantai-china-timeline.yaml

初始时间线记录包括：

- 天台宗总览时间线
- 中国天台宗时间线

---

## Validation Status / 校验状态

Validation has been confirmed through:

- Local Windows environment
- GitHub Codespaces
- GitHub Actions

校验已经通过以下环境确认：

- Windows 本地环境
- GitHub Codespaces
- GitHub Actions

Current validator:

- tools/validate_yaml.py

Current workflow:

- .github/workflows/validate-yaml.yml

The validator checks:

- YAML syntax
- Required fields by record type
- Duplicate IDs
- Filename and ID consistency warnings
- Source reference quality warnings

当前校验器检查：

- YAML 语法
- 不同记录类型的必填字段
- 重复 ID
- 文件名与 ID 一致性警告
- 来源引用字段质量警告

Maintenance rule:

- Do not proceed with major new data additions if GitHub Actions is failing.
- Fix validation errors first.
- Treat source reference warnings as cleanup guidance unless a separate issue makes them blocking.

维护规则：

- 如果 GitHub Actions 失败，不继续添加大量新数据。
- 应先修复校验错误。
- 来源引用警告默认作为逐步清理提示处理，除非单独 issue 将其设为阻断项。

---

## Source and Full Text Policy / 来源与全文政策

This repository is metadata-first and does not aim to redistribute restricted Buddhist full-text corpora.

本仓库以元数据为核心，不以再分发受限制佛典全文库为目标。

Current rule:

- Do not commit restricted full text.
- Do not commit large copied text from CBETA, SAT, or similar databases unless redistribution rights are clearly verified.
- Record metadata, source links, canon identifiers, contributor-written summaries, topic tags, and relation data instead.

当前规则：

- 不提交受限制全文。
- 未明确确认再分发授权前，不从 CBETA、SAT 或类似数据库大规模复制文本。
- 优先记录元数据、来源链接、藏经编号、贡献者原创摘要、主题标签和关系数据。

Relevant documents:

- docs/source-policy.md
- docs/full-text-policy.md
- LICENSE

相关文档：

- docs/source-policy.md
- docs/full-text-policy.md
- LICENSE

---

## License Model / 授权模式

The project uses a mixed license model:

- Data and documentation: CC BY-SA 4.0
- Code tools and workflows: MIT License

本项目采用混合授权模式：

- 数据和文档：CC BY-SA 4.0
- 代码工具和 workflow：MIT License

See:

- LICENSE

---

## Maintenance Workflow / 维护流程

Recommended daily workflow:

1. Open or update an issue describing the task.
2. Add or modify two to four files.
3. Use clear English commit messages.
4. Wait for GitHub Actions to pass.
5. Update CHANGELOG.md or docs/project-state.md when project state changes.
6. Stop after the planned daily maintenance scope is complete.

推荐每日维护流程：

1. 创建或更新一个 issue 说明当天任务。
2. 新增或修改 2 到 4 个文件。
3. 使用清晰的英文 commit message。
4. 等待 GitHub Actions 通过。
5. 如果项目状态发生变化，更新 CHANGELOG.md 或 docs/project-state.md。
6. 完成当天计划维护量后停止。

Commit message rule:

- Use English.
- Keep messages short and specific.

Commit message 规则：

- 使用英文。
- 简短、明确、对应具体修改。

Examples:

- Add Sanlun tradition scaffold
- Add Tiantai term records
- Update source references for Zhiyi
- Fix YAML validation errors
- Update project state documentation

---

## ChatGPT Handoff Rule / ChatGPT 交接规则

Future ChatGPT windows should not rely on old conversation memory.

未来新的 ChatGPT 窗口不应依赖旧对话记忆。

Recommended startup instruction for a new window:

```text
I am maintaining the GitHub repository jiazhouxv/nagarjuna-lineage-archive.
Please use docs/project-state.md, README.md, CHANGELOG.md, docs/data-schema.md, docs/source-policy.md, docs/full-text-policy.md, and the latest release as the source of truth.
Continue the project from the current state. Do not assume missing facts from old conversation memory.
```

新窗口建议启动语：

```text
我正在维护 GitHub 仓库 jiazhouxv/nagarjuna-lineage-archive。
请以 docs/project-state.md、README.md、CHANGELOG.md、docs/data-schema.md、docs/source-policy.md、docs/full-text-policy.md 和最新 release 作为项目真相来源。
请从当前状态继续项目，不要依赖旧聊天记忆补全事实。
```

---

## Maintenance Log / 维护记录

### 2026-06-17 — One thought three thousand sources and validator warning maintenance

Daily maintenance issue:

- #8 Stabilize one-thought-three-thousand sources and validator warnings

Completed updates:

- Updated `data/terms/one-thought-three-thousand.yaml` by adding bibliography metadata and CBETA / SAT / SEP / DDB source references with access dates.
- Updated `tools/validate_yaml.py` by adding non-breaking source reference quality warnings for recommended source reference fields.
- Updated `docs/validation-guide.md` to document source reference quality warnings, recommended `source_refs` fields, and the error / warning policy.
- No restricted full text was added.
- Stable IDs were not changed.
- GitHub Actions validation was confirmed green by the maintainer after these commits.

Commits:

- `521772b7242bcb00adabf6151db91c1a98aee2df` — Improve one thought three thousand source references
- `21b0f1d835cebb64a38ad7c8bf127838dd91b67a` — Add source reference quality warnings
- `79f76216468a77688260838d614a88fcf6ace261` — Update validation guide for source references

中文记录：

- 已创建并使用 issue #8 跟踪本次“一念三千来源稳定化与校验器 warning 改进”维护。
- 已更新 `data/terms/one-thought-three-thousand.yaml`，补充 bibliography 元数据，以及 CBETA / SAT / SEP / DDB 来源和访问日期。
- 已更新 `tools/validate_yaml.py`，新增非阻断型 source reference quality warnings。
- 已更新 `docs/validation-guide.md`，说明来源引用质量警告、推荐 `source_refs` 字段，以及错误 / 警告处理规则。
- 未加入受限制全文。
- 未修改稳定 id。
- 维护者已确认 GitHub Actions 校验为绿色通过。

Recommended next maintenance step:

- Consider a small relation target existence validator improvement, or continue stabilizing source references for remaining person / branch records with placeholder or sparse source metadata.

下一步建议：

- 可考虑小步改进 relation target 存在性校验，或继续清理仍有占位 / 稀疏来源元数据的人物与分支记录。

---

### 2026-06-15 — Fahua Wenju and core Tiantai term source stabilization

Daily maintenance issue:

- #7 Stabilize Fahua Wenju and core Tiantai term sources

Completed updates:

- Updated `data/works/fahua-wenju.yaml` by adding `sat_id`, access dates, clearer CBETA / SAT / SEP source references, improved primary-source bibliography metadata, and removing the empty placeholder DDB source entry.
- Updated `data/terms/zhiguan.yaml` by adding bibliography metadata and CBETA / SAT / SEP / DDB source references with access dates.
- Updated `data/terms/three-truths.yaml` by adding bibliography metadata and CBETA / SAT / SEP / DDB source references with access dates.
- No restricted full text was added.
- Stable IDs were not changed.
- GitHub Actions validation was confirmed green by the maintainer after these commits.

Commits:

- `69ed586326dffc50b48866eb45b61bf98d54ce85` — Improve Fahua Wenju source references
- `72433d32fd595100f73c4c064f0a0016f3777b78` — Improve Zhiguan source references
- `f2d3ba0a47016a4d78c2e7daa64141f8a627c9a5` — Improve Three Truths source references

中文记录：

- 已创建并使用 issue #7 跟踪本次“《法华文句》与天台宗核心术语来源稳定化”维护。
- 已更新 `data/works/fahua-wenju.yaml`，补充 `sat_id`、访问日期、CBETA / SAT / SEP 来源说明、原典书目信息，并删除空 URL 的 DDB 占位来源。
- 已更新 `data/terms/zhiguan.yaml`，补充 bibliography 元数据，以及 CBETA / SAT / SEP / DDB 来源和访问日期。
- 已更新 `data/terms/three-truths.yaml`，补充 bibliography 元数据，以及 CBETA / SAT / SEP / DDB 来源和访问日期。
- 未加入受限制全文。
- 未修改稳定 id。
- 维护者已确认 GitHub Actions 校验为绿色通过。

Recommended next maintenance step:

- Continue source reference stabilization for `data/terms/one-thought-three-thousand.yaml`, then consider adding a small validator improvement for source reference quality or relation target existence.

下一步建议：

- 继续稳定 `data/terms/one-thought-three-thousand.yaml` 的来源，然后可考虑小步改进 source reference 质量检查或 relation target 存在性校验。

---

### 2026-06-14 — Tiantai source reference stabilization

Daily maintenance issue:

- #6 Stabilize Tiantai source references and bibliography

Completed updates:

- Updated `data/persons/zhiyi.yaml` by replacing placeholder source references with SEP, DDB, and CBETA references, adding bibliography metadata, and moving `source_status` from `needs_source` to `partial`.
- Updated `data/works/mohe-zhiguan.yaml` by adding `sat_id`, access dates, clearer CBETA / SAT / SEP source references, and improved primary-source bibliography metadata.
- Updated `data/works/fahua-xuanyi.yaml` by adding `sat_id`, access dates, clearer CBETA / SAT / SEP source references, and removing the empty placeholder DDB source entry.
- No restricted full text was added.
- Stable IDs were not changed.
- GitHub Actions validation was confirmed green by the maintainer after these commits.

Commits:

- `e0dd6aeadf926fcb79a8ecd70bf73a7f2e653bc7` — Improve Zhiyi source references
- `6deb044b1cdda90c8599ed120c1d420dededab00` — Improve Mohe Zhiguan source references
- `0964d3a1608a76162e7796069c2671291121d485` — Improve Fahua Xuanyi source references

中文记录：

- 已创建并使用 issue #6 跟踪本次“天台宗 source references 与 bibliography 稳定化”维护。
- 已更新 `data/persons/zhiyi.yaml`，将占位来源替换为 SEP、DDB、CBETA，并补充 bibliography 元数据；`source_status` 从 `needs_source` 推进为 `partial`。
- 已更新 `data/works/mohe-zhiguan.yaml`，补充 `sat_id`、访问日期、CBETA / SAT / SEP 来源说明，以及原典书目信息。
- 已更新 `data/works/fahua-xuanyi.yaml`，补充 `sat_id`、访问日期、CBETA / SAT / SEP 来源说明，并删除空 URL 的占位来源。
- 未加入受限制全文。
- 未修改稳定 id。
- 维护者已确认 GitHub Actions 校验为绿色通过。

Recommended next maintenance step:

- Continue source reference stabilization for `data/works/fahua-wenju.yaml` and the first core Tiantai term records, or improve validator checks for relation targets.

下一步建议：

- 继续稳定 `data/works/fahua-wenju.yaml` 和第一批天台宗核心术语记录的来源，或开始改进 relation target 校验规则。

---

## Current Open Directions / 当前后续方向

Recommended next directions after v0.1.0:

1. Stabilize the Tiantai module.
2. Improve source references and bibliography fields.
3. Add more Tiantai works and commentaries.
4. Add more doctrinal terms.
5. Expand Japanese Tendai and Korean Cheontae records.
6. Add export tools such as CSV or JSON generation.
7. Improve YAML validation checks.
8. Prepare a Sanlun module scaffold.
9. Later expand to Huayan, Chan, Pure Land, Faxiang, Vinaya, and Esoteric Buddhism.

v0.1.0 之后建议方向：

1. 稳定天台宗模块。
2. 改进资料来源和 bibliography 字段。
3. 添加更多天台宗典籍和注释文献。
4. 添加更多教义术语。
5. 扩展日本天台宗和韩国天台宗记录。
6. 添加 CSV 或 JSON 导出工具。
7. 改进 YAML 校验规则。
8. 准备三论宗模块框架。
9. 后续扩展到华严宗、禅宗、净土宗、法相宗、律宗和密教。

---

## Do Not Do / 暂不建议事项

Do not do the following without a separate issue and review:

- Do not upload large full-text corpora.
- Do not add copyrighted modern translations.
- Do not add large unsourced doctrinal claims.
- Do not mass-add many records without validation.
- Do not change stable IDs casually.
- Do not create a new release before confirming Actions is green.

没有单独 issue 和审查前，不建议做以下事情：

- 不上传大型全文语料。
- 不加入受版权保护的现代译文。
- 不加入大量无来源教义判断。
- 不在未校验的情况下批量添加大量记录。
- 不随意修改稳定 ID。
- 不在 Actions 未通过前发布新版本。

---

## Last Updated / 最后更新

Last updated after the 2026-06-17 one thought three thousand source stabilization and source reference validator warning maintenance batch.

最后更新用途：记录 2026-06-17 一念三千来源稳定化与 source reference 校验警告维护批次。
