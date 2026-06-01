# Nagarjuna Lineage Archive / 龙树菩萨思想谱系资料库

## English Overview

Nagarjuna Lineage Archive is an open-source digital humanities archive focused on structured, machine-readable data related to Nagarjuna, Buddhist lineages, doctrinal reception, historical chronology, regional branches, and East Asian Buddhist traditions.

The project is metadata-first. It does not aim to become a full-text Buddhist canon repository.

The first active module is the Tiantai tradition, including Chinese Tiantai, Japanese Tendai, and Korean Cheontae.

## 中文简介

龙树菩萨思想谱系资料库是一个开源、结构化、机器可读的佛教数字人文资料库。

本项目以龙树菩萨为思想源点，整理东亚佛教诸宗中的祖师、论典、教义术语、历史时间线、地域分支、思想传承关系和文献来源索引。

本项目以元数据整理为核心，不以建立佛典全文库为目标。

第一阶段重点建设天台宗模块，包括中国天台宗、日本天台宗 Tendai、韩国天台宗 Cheontae。

---

## Project Positioning / 项目定位

This project records the reception, transformation, and tradition-level interpretation of Nagarjuna-related thought in East Asian Buddhism.

It is designed as a long-term archive that can gradually document multiple Buddhist traditions and their regional branches.

本项目记录龙树菩萨相关思想在东亚佛教中的接受、转化、宗派解释和历史传承。

本项目设计为一个可长期扩展的资料库，未来可逐步整理多个佛教宗派及其地域分支。

---

## What This Archive Records / 本资料库整理什么

The archive focuses on:

- Person records
- Work metadata
- Doctrinal term records
- Tradition records
- Branch records
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

---

## Source and Full Text Policy / 来源与全文政策

This project does not aim to redistribute restricted full-text Buddhist corpora.

The project may record:

- Bibliographic metadata
- Source links
- Canon identifiers
- Citation references
- Original contributor summaries
- Structured topic tags
- Notes for future review

Full texts are included only when the source license clearly permits redistribution.

本项目不以再分发受限制的佛典全文库为目标。

本项目可以记录：

- 书目信息
- 来源链接
- 藏经编号
- 引用信息
- 贡献者原创摘要
- 结构化主题标签
- 后续审查备注

只有在来源授权明确允许再分发时，本项目才收录全文。

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

## Planned Repository Structure / 计划目录结构

Planned structure:

    data/
      persons/
      works/
      traditions/
      branches/
      terms/
      timelines/
      relations/

    docs/
      project-scope.md
      source-policy.md
      data-schema.md
      chronology-model.md
      geography-model.md
      lineage-claims.md
      roadmap.md

    tools/
      validate_yaml.py
      build_index.py
      export_graph.py

    traditions/
      tiantai/
        README.md
        china.md
        japan-tendai.md
        korea-cheontae.md
        patriarchs.md
        texts.md
        terms.md
        chronology.md

---

## Roadmap / 路线图

### v0.1.0

- Establish bilingual project scope
- Define metadata-first source policy
- Create initial data schema
- Add Nagarjuna person record
- Add initial Tiantai tradition record
- Add Chinese Tiantai, Japanese Tendai, and Korean Cheontae branch records
- Add basic chronology model
- Add initial relation model
- Add YAML validation script

### v0.2.0

- Add core Tiantai patriarch records
- Add core Tiantai text metadata
- Add doctrinal term records
- Add teacher-student relations
- Add work-influence relations
- Export CSV datasets

### v0.3.0

- Add Sanlun tradition module
- Add core Madhyamaka text records
- Add relation records between Nagarjuna, Kumarajiva, Sanlun, and Tiantai

### v0.4.0 and beyond

- Add Huayan module
- Add Chan module
- Add Pure Land module
- Add Faxiang module
- Add Vinaya module
- Add Esoteric Buddhism module
- Improve source references
- Build graph export tools
- Build searchable indexes

---

## Contribution Policy / 贡献原则

This project welcomes contributions related to Buddhist studies, digital humanities, bibliographic metadata, historical chronology, and structured data.

Contributors should avoid adding restricted full-text corpora unless the source license clearly permits redistribution.

Contributions should be small, reviewable, source-aware, and structured.

本项目欢迎与佛教研究、数字人文、书目元数据、历史时间线和结构化资料相关的贡献。

贡献者不应加入受限制的佛典全文库，除非来源授权明确允许再分发。

贡献内容应尽量保持小规模、可审查、有来源依据、结构清晰。

---

## Maintenance Workflow / 维护方式

Preferred maintenance workflow:

- Add one person, work, term, branch, or relation at a time
- Include source references whenever possible
- Use issues to track missing data
- Use pull requests for larger structural changes
- Release versioned milestones
- Avoid large unsourced text dumps

推荐维护方式：

- 每次只新增一个人物、典籍、术语、分支或关系
- 尽量附带资料来源
- 使用 issues 跟踪缺失资料
- 较大的结构修改使用 pull requests
- 按版本发布阶段成果
- 避免一次性加入大量无来源文本

---

## Current Status / 当前状态

The project is in the initial structure-building phase.

Current focus:

- Project scope
- Source policy
- Bilingual documentation
- Data schema
- Tiantai module foundation
- Initial Nagarjuna-related records

本项目目前处于初始结构建设阶段。

当前重点：

- 项目范围
- 来源政策
- 中英文双语文档
- 数据结构规范
- 天台宗模块基础结构
- 龙树菩萨相关初始记录

---

## License / 授权

Planned license model:

- Data and documentation: CC BY-SA 4.0
- Code tools: MIT License

A dedicated LICENSE file will define the license policy more clearly.

计划授权模式：

- 数据和文档：CC BY-SA 4.0
- 代码工具：MIT License

后续将通过专门的 LICENSE 文件进一步明确授权政策。
