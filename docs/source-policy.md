# Source Policy / 资料来源政策

## Purpose / 目的

This document defines the source, citation, and redistribution policy for Nagarjuna Lineage Archive.

The project is designed as a metadata-first, source-linked, research-oriented open archive. It does not aim to copy or redistribute restricted Buddhist full-text corpora.

本文档定义龙树菩萨思想谱系资料库的资料来源、引用和再分发政策。

本项目是一个以元数据为核心、以来源链接为基础、面向研究的开放资料库，不以复制或再分发受限制的佛典全文库为目标。

---

## Core Principle / 核心原则

The archive prioritizes:

- Bibliographic metadata
- Source references
- Canon identifiers
- Citation links
- Person records
- Work records
- Tradition records
- Branch records
- Doctrinal term records
- Chronology records
- Lineage and influence relations
- Contributor-written summaries
- Machine-readable structured data

本资料库优先整理：

- 书目信息
- 资料来源
- 藏经编号
- 引用链接
- 人物记录
- 典籍记录
- 宗派记录
- 分支记录
- 教义术语记录
- 历史时间线记录
- 祖师谱系与思想影响关系
- 贡献者原创摘要
- 机器可读的结构化数据

Full text should be added only when redistribution is clearly allowed by the source license.

只有在来源授权明确允许再分发时，才应加入全文。

---

## Allowed Content / 允许加入的内容

The following types of content are allowed:

1. Original metadata created by contributors
2. Original summaries written by contributors
3. Public bibliographic information
4. Canon references and citation identifiers
5. Source links to external databases
6. Short quotations when legally and academically appropriate
7. Public domain material when verified
8. Data derived from clearly licensed sources, with attribution
9. Contributor-created translations or explanations
10. YAML, CSV, JSON, Markdown, and code tools created for this project

以下类型的内容可以加入本项目：

1. 贡献者原创整理的元数据
2. 贡献者原创撰写的摘要
3. 公开书目信息
4. 藏经编号和引用标识
5. 外部数据库来源链接
6. 在法律和学术规范允许范围内的短引用
7. 经确认属于公共领域的材料
8. 来自明确授权来源并注明出处的数据
9. 贡献者原创翻译或说明
10. 本项目创建的 YAML、CSV、JSON、Markdown 和代码工具

---

## Restricted Content / 受限制内容

The following content should not be added unless permission or license compatibility is verified:

1. Full-text corpora copied from restricted databases
2. Modern copyrighted editions
3. Copyrighted scans or images
4. Large-scale copied content from CBETA, SAT, or similar databases without checking license terms
5. Commercially published modern translations
6. Unsourced doctrinal claims
7. Unverified lineage claims presented as historical fact
8. Large-scale copied annotations or modern commentary
9. Materials with unclear redistribution rights

以下内容不得加入，除非已确认授权或许可证兼容：

1. 从受限制数据库复制的全文语料
2. 现代受版权保护的版本
3. 受版权保护的扫描图或图片
4. 未核查授权条款而大规模复制 CBETA、SAT 或类似数据库内容
5. 商业出版的现代译文
6. 无来源的教义断言
7. 被当作历史事实呈现的未验证祖师谱系说法
8. 大规模复制的现代注释或讲解
9. 再分发权利不明确的材料

---

## External Source Handling / 外部来源处理

When using external sources, records should include:

- Source name
- Source URL
- Access date when relevant
- License or terms information when known
- Canon identifier when available
- Notes about reliability or limitations

使用外部来源时，记录中应尽量包括：

- 来源名称
- 来源网址
- 访问日期
- 已知的许可证或使用条款信息
- 可用的藏经编号
- 关于可靠性或限制的备注

Recommended source reference fields:

- name
- url
- identifier
- access_date
- license_note
- reliability_note

推荐的来源引用字段：

- name
- url
- identifier
- access_date
- license_note
- reliability_note

---

## CBETA and SAT / 关于 CBETA 与 SAT

CBETA, SAT, and similar Buddhist text databases are important reference sources.

This project may record links, identifiers, metadata, and citation references related to those sources.

However, this project should not copy large-scale full-text materials from those databases unless the relevant license clearly permits redistribution in this repository.

CBETA、SAT 以及类似佛典数据库是重要参考来源。

本项目可以记录这些来源的链接、编号、元数据和引用信息。

但是，除非相关授权明确允许在本仓库中再分发，否则本项目不应从这些数据库大规模复制全文材料。

---

## Contributor Summaries / 贡献者摘要

Contributors are encouraged to write original summaries in their own words.

Summaries should be:

- Clearly sourced
- Neutral in tone
- Separated from direct quotations
- Marked as summary or interpretation when appropriate
- Avoiding sectarian judgement

鼓励贡献者用自己的语言撰写原创摘要。

摘要应当：

- 明确注明来源
- 使用中立语气
- 与直接引用区分开
- 在必要时标明属于摘要或解释
- 避免宗派裁判式表达

---

## Lineage Claims / 祖师谱系叙述

Lineage claims should be recorded as claims within a tradition, not as automatically verified historical facts.

Each claim should include:

- Claiming tradition
- Claimed relationship
- Source reference
- Confidence level
- Historical notes

祖师谱系叙述应作为某一宗派传统中的说法来记录，而不是自动作为无争议历史事实处理。

每条谱系叙述应包括：

- 提出该说法的宗派
- 所声称的关系
- 来源依据
- 可信度标记
- 历史说明

Example field pattern:

- tradition
- claim
- source_refs
- confidence
- note

字段示例：

- tradition
- claim
- source_refs
- confidence
- note

---

## Data Language Rule / 数据语言规则

Documentation may be bilingual in English and Chinese.

Structured data fields should use English keys.

Chinese Buddhist terms should preserve the original Chinese form and may include pinyin and English translations.

说明文档可以采用中英文双语。

结构化数据字段应使用英文 key。

中文佛教术语应保留中文原词，并可同时补充拼音和英文译名。

Recommended field pattern:

- id
- name_zh
- name_en
- name_pinyin
- title_zh
- title_en
- title_pinyin
- summary_zh
- summary_en
- source_refs

推荐字段示例：

- id
- name_zh
- name_en
- name_pinyin
- title_zh
- title_en
- title_pinyin
- summary_zh
- summary_en
- source_refs

---

## License Model / 授权模式

Planned license model:

- Data and documentation: CC BY-SA 4.0
- Code tools: MIT License

计划授权模式：

- 数据和文档：CC BY-SA 4.0
- 代码工具：MIT License

A dedicated LICENSE file will define the license policy more clearly.

后续将通过专门的 LICENSE 文件进一步明确授权政策。

---

## Review Rule / 审查规则

When in doubt, do not add full text.

Instead, add:

- Metadata
- Source links
- Citation identifiers
- Original summary
- Topic tags
- Notes for future review

当不确定授权是否允许时，不要加入全文。

可以改为加入：

- 元数据
- 来源链接
- 引用标识
- 原创摘要
- 主题标签
- 后续审查备注

---

## Source Quality Rule / 来源质量规则

Records should prefer reliable and traceable sources.

Preferred sources include:

- Academic publications
- Buddhist canon databases
- Library catalogues
- Museum or archive catalogues
- University resources
- Clearly licensed digital humanities datasets
- Traditional sources with clear citation identifiers

资料记录应优先采用可靠、可追溯的来源。

推荐来源包括：

- 学术出版物
- 佛典数据库
- 图书馆目录
- 博物馆或档案馆目录
- 大学资源
- 授权清晰的数字人文数据集
- 具有明确引用标识的传统文献来源

Unsourced claims should be marked as pending review.

无来源说法应标记为待审查。

---

## Final Principle / 最终原则

This project should grow as a structured, source-aware, machine-readable archive.

It should not become an unsourced text dump.

本项目应发展为一个结构化、重视来源、机器可读的资料库。

它不应变成无来源文本堆积库。
