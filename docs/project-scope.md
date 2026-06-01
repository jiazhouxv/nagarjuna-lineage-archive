# Project Scope / 项目范围

## English Overview

Nagarjuna Lineage Archive is an open-source digital humanities project focused on structured, machine-readable data related to Nagarjuna, Buddhist lineages, doctrinal reception, historical chronology, regional branches, and East Asian Buddhist traditions.

The project is metadata-first. It does not aim to become a full-text Buddhist canon repository.

## 中文概述

龙树菩萨思想谱系资料库是一个开源佛教数字人文项目，重点整理与龙树菩萨、佛教宗派谱系、思想接受、历史时间线、地域分支和东亚佛教传统相关的结构化资料。

本项目以元数据为核心，不以建立佛典全文库为目标。

---

## What This Project Records / 本项目整理什么

The archive focuses on:

- Persons
- Works
- Doctrinal terms
- Traditions
- Branches
- Historical timelines
- Teacher-student relations
- Textual influence relations
- Regional transmission records
- Bibliographic source references
- Citation identifiers
- Data validation tools

本资料库重点整理：

- 人物资料
- 典籍资料
- 教义术语
- 宗派资料
- 地域分支
- 历史时间线
- 师承关系
- 典籍影响关系
- 地域传播关系
- 文献来源索引
- 引用标识
- 数据校验工具

---

## Core Positioning / 核心定位

This project records the reception, transformation, and tradition-level interpretation of Nagarjuna-related thought in East Asian Buddhism.

The project is not limited to one Buddhist school. It is designed as a long-term archive that can document multiple traditions and branches.

The Tiantai tradition is the first active module.

本项目记录龙树菩萨相关思想在东亚佛教中的接受、转化、宗派解释和历史传承。

本项目不局限于单一宗派，而是设计为一个可长期扩展的资料库，用于整理多个佛教宗派及其分支。

天台宗是本项目第一个重点建设模块。

---

## Initial Active Module / 第一阶段重点模块

The first active module is the Tiantai tradition.

The Tiantai module includes:

- Chinese Tiantai
- Japanese Tendai
- Korean Cheontae

第一阶段重点建设天台宗模块。

天台宗模块包括：

- 中国天台宗
- 日本天台宗 Tendai
- 韩国天台宗 Cheontae

The first development phase focuses on:

- Nagarjuna
- Madhyamaka thought
- Kumarajiva and Chinese Buddhist translation
- Huiwen
- Huisi
- Zhiyi
- Guanding
- Zhanran
- Mohe Zhiguan
- Fahua Xuanyi
- Fahua Wenju
- Tiantai doctrinal terms
- Regional transmission to Japan and Korea

第一阶段重点整理：

- 龙树菩萨
- 中观思想
- 鸠摩罗什与汉传佛教译经
- 慧文
- 慧思
- 智顗
- 灌顶
- 湛然
- 摩诃止观
- 法华玄义
- 法华文句
- 天台宗核心教义术语
- 天台宗向日本、朝鲜半岛的传播

---

## Long-Term Tradition Modules / 长期宗派模块

The long-term archive may include structured modules for East Asian Buddhist traditions that record Nagarjuna-related lineage claims, doctrinal reception, textual influence, and historical development.

Planned tradition modules include:

- Tiantai
- Sanlun
- Huayan
- Chan
- Pure Land
- Faxiang
- Vinaya
- Esoteric Buddhism

长期来看，本资料库可逐步建立东亚佛教诸宗派模块，用于整理与龙树菩萨相关的祖师谱系叙述、思想接受、典籍影响和历史发展。

计划中的宗派模块包括：

- 天台宗 Tiantai
- 三论宗 Sanlun
- 华严宗 Huayan
- 禅宗 Chan
- 净土宗 Pure Land
- 法相宗 Faxiang
- 律宗 Vinaya
- 密教 Esoteric Buddhism

These modules should be developed gradually. Each module should include historical chronology, major persons, major works, doctrinal terms, regional branches, and source references.

这些模块应逐步建设。每个宗派模块应包括历史时间线、主要人物、主要典籍、教义术语、地域分支和资料来源索引。

---

## Chronology Principle / 时间线原则

Each tradition should be organized according to historical sequence whenever possible.

Records should distinguish between:

- Historical dates
- Approximate dates
- Traditional lineage claims
- Later retrospective classifications
- Doctrinal influence
- Textual transmission
- Regional transmission

每个宗派内部应尽量按照历史时间顺序整理。

资料记录应区分：

- 可考历史年代
- 约略年代
- 传统祖师谱系叙述
- 后世追认分类
- 教义影响
- 典籍传播
- 地域传播

When a date is uncertain, the record should clearly mark it as approximate or disputed.

当年代不确定时，应明确标注为约略、待考或存在争议。

---

## Geography Principle / 地域分支原则

The archive should record regional branches and transmission paths.

For the Tiantai module, the initial regional branches are:

- Chinese Tiantai
- Japanese Tendai
- Korean Cheontae

本资料库应记录佛教宗派的地域分支和传播路径。

天台宗模块的第一批地域分支包括：

- 中国天台宗
- 日本天台宗 Tendai
- 韩国天台宗 Cheontae

Regional branches should be connected to persons, works, institutions, doctrinal developments, and transmission events.

地域分支应与人物、典籍、机构、教义发展和传播事件建立关联。

---

## Data Language Rule / 数据语言规则

Documentation may be bilingual in English and Chinese.

Structured data fields should use English keys.

Chinese Buddhist terms should preserve the original Chinese form and may include pinyin and English translations.

说明文档可以采用中英文双语。

结构化数据字段应使用英文 key。

中文佛教术语应保留中文原词，并可同时补充拼音和英文译名。

Example field pattern:

- id
- name_zh
- name_en
- name_pinyin
- summary_zh
- summary_en
- traditions
- source_refs

字段命名示例：

- id
- name_zh
- name_en
- name_pinyin
- summary_zh
- summary_en
- traditions
- source_refs

---

## Lineage Claims / 祖师谱系叙述

Some Buddhist traditions describe Nagarjuna as a patriarchal source or ancestral figure for multiple East Asian Buddhist schools.

This project records such claims as tradition-level lineage claims, not as automatically verified historical facts.

部分佛教传统会将龙树菩萨视为多个东亚佛教宗派的祖师源头或重要祖师。

本项目将这类内容记录为宗派传统中的谱系叙述，而不是自动视为无争议的历史事实。

Each lineage claim should include:

- Tradition
- Claimed relation
- Source reference
- Confidence level
- Notes on historical or doctrinal context

每条祖师谱系叙述应包括：

- 所属宗派
- 所声称的关系
- 来源依据
- 可信度标记
- 历史或教义背景说明

---

## Out of Scope / 不属于本项目范围

This project does not aim to:

- Redistribute restricted full-text Buddhist corpora
- Replace CBETA, SAT, or other full-text Buddhist databases
- Provide religious authority or doctrinal judgement
- Present lineage claims as unquestioned historical facts
- Host copyrighted scans or restricted modern editions
- Mix unsourced claims with structured records
- Copy large-scale modern translations or copyrighted annotations
- Present sectarian preference as neutral data

本项目不做以下事情：

- 不再分发受限制的佛典全文库
- 不替代 CBETA、SAT 或其他佛典全文数据库
- 不提供宗教权威裁判或教义裁判
- 不把祖师谱系叙述直接当作无争议历史事实
- 不托管受版权保护的扫描图或现代版本
- 不把无来源说法混入结构化资料
- 不大规模复制现代译文或受版权保护的注释
- 不把宗派立场包装成中立资料

---

## Full Text Policy / 全文收录原则

Full texts are included only when the source license clearly permits redistribution.

When the license is unclear or restrictive, this project records:

- Bibliographic metadata
- Source links
- Canon identifiers
- Citation references
- Summaries written by contributors
- Structured topic tags
- Notes for future review

只有在来源授权明确允许再分发时，本项目才收录全文。

当授权不明确或存在限制时，本项目只记录：

- 书目信息
- 来源链接
- 藏经编号
- 引用信息
- 贡献者原创摘要
- 结构化主题标签
- 后续审查备注

The project should not copy restricted full-text corpora into the repository.

本项目不应将受限制的佛典全文库复制进仓库。

---

## Research Tone / 研究语气

The archive should use a neutral, descriptive, and source-aware tone.

Records should distinguish between:

- Historical evidence
- Traditional attribution
- Doctrinal interpretation
- Later sectarian classification
- Contributor summary
- Unverified claim

本资料库应采用中立、描述性、重视来源依据的表达方式。

记录中应区分：

- 历史证据
- 传统归属说法
- 教义解释
- 后世宗派分类
- 贡献者摘要
- 未验证说法

The project welcomes religious, historical, philological, and digital humanities perspectives, but the data structure should remain neutral and source-based.

本项目欢迎宗教、历史、文献学和数字人文视角，但数据结构应保持中立并以来源为基础。

---

## First Milestone / 第一阶段里程碑

The first milestone is to establish the basic structure for:

- Nagarjuna person record
- Core Madhyamaka-related works
- Tiantai tradition record
- Chinese Tiantai branch record
- Japanese Tendai branch record
- Korean Cheontae branch record
- Initial Tiantai chronology
- Initial teacher-student relations
- Initial work-influence relations
- Initial source policy
- Initial data schema

第一阶段目标是建立以下基础结构：

- 龙树菩萨人物记录
- 中观相关核心典籍记录
- 天台宗宗派记录
- 中国天台宗分支记录
- 日本天台宗分支记录
- 韩国天台宗分支记录
- 天台宗初步时间线
- 初步师承关系
- 初步典籍影响关系
- 初步资料来源政策
- 初步数据结构规范

---

## Maintenance Goal / 维护目标

The project should grow through small, reviewable updates.

Preferred maintenance workflow:

- Add one person, work, term, branch, or relation at a time
- Include source references whenever possible
- Use issues to track missing data
- Use pull requests for larger structural changes
- Release versioned milestones
- Avoid large unsourced dumps of text

本项目应通过小规模、可审查的更新逐步成长。

推荐维护方式：

- 每次只新增一个人物、典籍、术语、分支或关系
- 尽量附带资料来源
- 使用 issues 跟踪缺失资料
- 较大的结构修改使用 pull requests
- 按版本发布阶段成果
- 避免一次性加入大量无来源文本
