# Changelog / 更新日志

All notable changes to Nagarjuna Lineage Archive will be documented in this file.

本文件记录龙树菩萨思想谱系资料库的重要更新。

---

## Unreleased / 未发布

### Added / 新增

* Added initial bilingual README.
* Added project scope documentation.
* Added source policy documentation.
* Added full text policy documentation.
* Added roadmap documentation.
* Added data schema documentation.
* Added validation guide documentation.
* Added project license policy.
* Added initial person record for Nagarjuna.
* Added initial person record for Kumarajiva.
* Added initial person record for Huiwen.
* Added initial person record for Huisi.
* Added initial person record for Master Zhiyi.
* Added initial person record for Master Guanding.
* Added initial person record for Jingxi Zhanran.
* Added initial person record for Saicho.
* Added initial person record for Uicheon.
* Added minimal person record for Daosui.
* Added minimal person record for Xingman.
* Added Tiantai parent tradition record.
* Added Chinese Tiantai branch record.
* Added Japanese Tendai branch record.
* Added Korean Cheontae branch record.
* Added Sanlun tradition record.
* Added Mohe Zhiguan work record.
* Added Fahua Xuanyi work record.
* Added Fahua Wenju work record.
* Added Zhonglun work record.
* Added Shiermenlun work record.
* Added Bailun work record.
* Added Zhiguan term record.
* Added Three Truths term record.
* Added One Thought Three Thousand term record.
* Added teacher-student relation file.
* Added work compilation and commentary relation file.
* Added tradition and regional branch relation file.
* Added Tiantai overview timeline.
* Added Chinese Tiantai timeline.
* Added basic YAML validation script.
* Added Python requirements file.
* Added .gitignore.
* Added GitHub Actions workflow for automatic YAML validation.
* Added Sanlun scaffold planning notes.
* Added v0.1.0 release notes draft.
* Added Engineering OS layer status documentation.

中文记录：

* 添加中英文双语 README。
* 添加项目范围说明文档。
* 添加资料来源政策文档。
* 添加全文收录政策文档。
* 添加路线图文档。
* 添加数据结构规范文档。
* 添加数据校验指南文档。
* 添加项目授权政策。
* 添加龙树菩萨人物记录。
* 添加鸠摩罗什人物记录。
* 添加慧文人物记录。
* 添加慧思人物记录。
* 添加智者大师人物记录。
* 添加章安大师人物记录。
* 添加荆溪湛然人物记录。
* 添加最澄人物记录。
* 添加义天人物记录。
* 添加道邃最小人物记录。
* 添加行满最小人物记录。
* 添加天台宗总宗派记录。
* 添加中国天台宗分支记录。
* 添加日本天台宗分支记录。
* 添加韩国天台宗分支记录。
* 添加三论宗宗派记录。
* 添加《摩诃止观》典籍记录。
* 添加《法华玄义》典籍记录。
* 添加《法华文句》典籍记录。
* 添加《中论》典籍记录。
* 添加《十二门论》典籍记录。
* 添加《百论》典籍记录。
* 添加止观术语记录。
* 添加三谛术语记录。
* 添加一念三千术语记录。
* 添加师承关系文件。
* 添加讲授、记录、整理与注释关系文件。
* 添加宗派与地域分支关系文件。
* 添加天台宗总览时间线。
* 添加中国天台宗时间线。
* 添加基础 YAML 校验脚本。
* 添加 Python 依赖文件。
* 添加 .gitignore。
* 添加 GitHub Actions 自动校验流程。
* 添加三论宗脚手架规划说明文件。
* 添加 v0.1.0 发布说明草案。
* 添加 Engineering OS 层级状态说明文档。

---

### Changed / 修改

* Updated person data schema to include bibliography fields.
* Updated person data schema to include display name, formal name, honorific name, common name, and name usage notes.
* Refined the project direction from a Tiantai-only archive to a broader Nagarjuna-related lineage archive with Tiantai as the first active module.
* Expanded the Tiantai module from person records to traditions, branches, works, terms, timelines, and relations.
* Improved the repository from a static data archive into a locally and automatically validated structured data project.
* Expanded Sanlun scaffold planning notes into a bilingual planning document.
* Recorded that Engineering OS v0.5 autonomous evolution is paused until existing layers are stabilized.

中文记录：

* 更新人物数据结构，加入 bibliography 参考书目字段。
* 更新人物数据结构，加入显示名、正式名、尊称、常用名和名称用法说明字段。
* 将项目方向从单一天台宗资料库扩展为以龙树菩萨思想谱系为核心、以天台宗为第一个重点模块的长期资料库。
* 将天台宗模块从人物记录扩展到宗派、分支、典籍、术语、时间线和关系数据。
* 将仓库从静态资料库进一步提升为可本地校验、可自动校验的结构化数据项目。
* 将三论宗脚手架说明扩展为中英文双语规划文档。
* 记录 Engineering OS v0.5 自动演化层暂停，等待已有层级稳定后再继续。

---

### Validation / 校验

* Local Windows validation completed successfully.
* GitHub Codespaces validation completed successfully.
* GitHub Actions automatic validation completed successfully.
* Current validation script checks YAML syntax, required fields, duplicate IDs, filename-ID consistency warnings, source reference quality warnings, and relation target existence warnings.
* Engineering OS checks now include core OS, graph, and temporal graph validation layers.

中文记录：

* Windows 本地校验已成功通过。
* GitHub Codespaces 网页校验已成功通过。
* GitHub Actions 自动校验已成功通过。
* 当前校验脚本可检查 YAML 语法、必填字段、重复 ID、文件名与 ID 一致性警告、来源引用字段质量警告，以及关系目标 ID 存在性警告。
* Engineering OS 校验现在包括核心 OS、知识图谱和时间图谱校验层。

---

### Notes / 备注

Current project status:

* The project is in the v0.1.0 preparation phase.
* The first active module is Tiantai.
* Tiantai is structurally stable and continues to receive source and relation cleanup.
* Sanlun scaffold modeling has started with one tradition record, one core person record, and three core work records.
* Engineering OS v0.1, v0.2, and v0.3 are installed on the Engineering OS bootstrap branch.
* Engineering OS v0.5 autonomous evolution is paused.
* Current data focuses on early Tiantai lineage, core Tiantai works, key doctrinal terms, regional branches, timelines, relation records, and initial Sanlun structure.
* The archive now includes initial person, tradition, branch, work, term, timeline, and relation records.
* Source verification is still partial.
* Many records are marked as draft or needs review.
* The repository now includes a working YAML validator and GitHub Actions workflow.
* The repository now includes explicit source, full-text, and license policies.

当前项目状态：

* 项目处于 v0.1.0 发布准备阶段。
* 第一个重点模块是天台宗。
* 天台宗结构已经稳定，继续进行来源与关系清理。
* 三论宗脚手架建模已经开始，包含一个宗派记录、一个核心人物记录和三部核心典籍记录。
* Engineering OS v0.1、v0.2、v0.3 已安装在 Engineering OS bootstrap 分支上。
* Engineering OS v0.5 自动演化层已暂停。
* 当前数据重点是早期天台宗祖师谱系、核心典籍、关键教义术语、地域分支、时间线、关系记录，以及三论宗初始结构。
* 资料库目前已经包含初始人物、宗派、分支、典籍、术语、时间线和关系记录。
* 来源核查仍处于初步阶段。
* 多数记录仍标记为草稿或待审查。
* 仓库目前已经包含可运行的 YAML 校验脚本和 GitHub Actions 自动校验流程。
* 仓库目前已经包含明确的资料来源、全文收录和授权政策。

---

## v0.1.0 Planned / v0.1.0 计划

Planned before the first release:

* Review all initial YAML records.
* Improve source references where possible.
* Confirm GitHub Actions validation passes.
* Prepare v0.1.0 release notes.
* Publish v0.1.0 release.

v0.1.0 发布前计划完成：

* 审查所有初始 YAML 记录。
* 尽可能改进资料来源。
* 确认 GitHub Actions 校验通过。
* 准备 v0.1.0 发布说明。
* 发布 v0.1.0 版本。
