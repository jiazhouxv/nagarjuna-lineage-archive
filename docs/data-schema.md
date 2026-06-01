# Data Schema / 数据结构规范

## Purpose / 目的

This document defines the basic data schema for Nagarjuna Lineage Archive.

The goal is to keep all records structured, machine-readable, source-aware, and easy to validate.

本文档定义龙树菩萨思想谱系资料库的基础数据结构。

目标是让所有资料记录保持结构化、机器可读、重视来源，并且方便后续校验。

---

## General Rule / 通用规则

Structured data files should use YAML format.

YAML files should use English field keys.

Chinese Buddhist terms should preserve the original Chinese form and may include pinyin and English translations.

结构化数据文件应优先使用 YAML 格式。

YAML 文件中的字段 key 应使用英文。

中文佛教术语应保留中文原词，并可同时补充拼音和英文译名。

---

## Common Fields / 通用字段

Most records may include these common fields:

- id
- type
- name_zh
- name_en
- name_pinyin
- title_zh
- title_en
- title_pinyin
- summary_zh
- summary_en
- traditions
- regions
- source_refs
- status
- notes

多数记录可以包含以下通用字段：

- id
- type
- name_zh
- name_en
- name_pinyin
- title_zh
- title_en
- title_pinyin
- summary_zh
- summary_en
- traditions
- regions
- source_refs
- status
- notes

---

## ID Rule / ID 命名规则

The id field should be stable, lowercase, and machine-readable.

Use hyphens instead of spaces.

Examples:

- nagarjuna
- kumarajiva
- zhiyi
- mohe-zhiguan
- fahua-xuanyi
- tiantai
- tendai-japan
- cheontae-korea
- one-thought-three-thousand

id 字段应保持稳定、小写、机器可读。

使用短横线，不使用空格。

示例：

- nagarjuna
- kumarajiva
- zhiyi
- mohe-zhiguan
- fahua-xuanyi
- tiantai
- tendai-japan
- cheontae-korea
- one-thought-three-thousand

---

## Person Record / 人物记录

Person records are stored under:

- data/persons/

人物记录存放在：

- data/persons/

Recommended fields:

- id
- type
- name_zh
- name_en
- name_pinyin
- alternative_names
- dates
- regions
- traditions
- roles
- related_works
- related_terms
- lineage_claims
- summary_zh
- summary_en
- source_refs
- status
- notes

推荐字段：

- id
- type
- name_zh
- name_en
- name_pinyin
- alternative_names
- dates
- regions
- traditions
- roles
- related_works
- related_terms
- lineage_claims
- summary_zh
- summary_en
- source_refs
- status
- notes

Example field pattern:

- id: zhiyi
- type: person
- name_zh: 智顗
- name_en: Zhiyi
- name_pinyin: Zhiyi
- traditions: tiantai
- roles: patriarch, systematizer
- related_works: mohe-zhiguan, fahua-xuanyi, fahua-wenju

字段示例：

- id: zhiyi
- type: person
- name_zh: 智顗
- name_en: Zhiyi
- name_pinyin: Zhiyi
- traditions: tiantai
- roles: patriarch, systematizer
- related_works: mohe-zhiguan, fahua-xuanyi, fahua-wenju

---

## Work Record / 典籍记录

Work records are stored under:

- data/works/

典籍记录存放在：

- data/works/

Recommended fields:

- id
- type
- title_zh
- title_en
- title_pinyin
- alternative_titles
- attributed_author
- compiler
- translator
- traditions
- regions
- approximate_date
- related_persons
- related_terms
- source_refs
- full_text_policy
- summary_zh
- summary_en
- status
- notes

推荐字段：

- id
- type
- title_zh
- title_en
- title_pinyin
- alternative_titles
- attributed_author
- compiler
- translator
- traditions
- regions
- approximate_date
- related_persons
- related_terms
- source_refs
- full_text_policy
- summary_zh
- summary_en
- status
- notes

Example field pattern:

- id: mohe-zhiguan
- type: work
- title_zh: 摩诃止观
- title_en: Great Calming and Contemplation
- title_pinyin: Mohe Zhiguan
- attributed_author: zhiyi
- compiler: guanding
- traditions: tiantai

字段示例：

- id: mohe-zhiguan
- type: work
- title_zh: 摩诃止观
- title_en: Great Calming and Contemplation
- title_pinyin: Mohe Zhiguan
- attributed_author: zhiyi
- compiler: guanding
- traditions: tiantai

---

## Tradition Record / 宗派记录

Tradition records are stored under:

- data/traditions/

宗派记录存放在：

- data/traditions/

Recommended fields:

- id
- type
- name_zh
- name_en
- name_pinyin
- region_scope
- related_persons
- related_works
- related_terms
- branches
- lineage_claims
- summary_zh
- summary_en
- source_refs
- status
- notes

推荐字段：

- id
- type
- name_zh
- name_en
- name_pinyin
- region_scope
- related_persons
- related_works
- related_terms
- branches
- lineage_claims
- summary_zh
- summary_en
- source_refs
- status
- notes

Example field pattern:

- id: tiantai
- type: tradition
- name_zh: 天台宗
- name_en: Tiantai
- name_pinyin: Tiantai
- branches: tiantai-china, tendai-japan, cheontae-korea

字段示例：

- id: tiantai
- type: tradition
- name_zh: 天台宗
- name_en: Tiantai
- name_pinyin: Tiantai
- branches: tiantai-china, tendai-japan, cheontae-korea

---

## Branch Record / 分支记录

Branch records are stored under:

- data/branches/

分支记录存放在：

- data/branches/

Recommended fields:

- id
- type
- name_zh
- name_en
- name_pinyin
- parent_tradition
- region
- historical_period
- key_persons
- key_works
- related_terms
- transmission_events
- summary_zh
- summary_en
- source_refs
- status
- notes

推荐字段：

- id
- type
- name_zh
- name_en
- name_pinyin
- parent_tradition
- region
- historical_period
- key_persons
- key_works
- related_terms
- transmission_events
- summary_zh
- summary_en
- source_refs
- status
- notes

Example field pattern:

- id: tendai-japan
- type: branch
- name_zh: 日本天台宗
- name_en: Japanese Tendai
- parent_tradition: tiantai
- region: Japan
- key_persons: saicho

字段示例：

- id: tendai-japan
- type: branch
- name_zh: 日本天台宗
- name_en: Japanese Tendai
- parent_tradition: tiantai
- region: Japan
- key_persons: saicho

---

## Term Record / 术语记录

Term records are stored under:

- data/terms/

术语记录存放在：

- data/terms/

Recommended fields:

- id
- type
- term_zh
- term_en
- term_pinyin
- traditions
- related_persons
- related_works
- related_terms
- summary_zh
- summary_en
- source_refs
- status
- notes

推荐字段：

- id
- type
- term_zh
- term_en
- term_pinyin
- traditions
- related_persons
- related_works
- related_terms
- summary_zh
- summary_en
- source_refs
- status
- notes

Example field pattern:

- id: one-thought-three-thousand
- type: term
- term_zh: 一念三千
- term_en: One Thought Contains Three Thousand
- term_pinyin: yi nian san qian
- traditions: tiantai

字段示例：

- id: one-thought-three-thousand
- type: term
- term_zh: 一念三千
- term_en: One Thought Contains Three Thousand
- term_pinyin: yi nian san qian
- traditions: tiantai

---

## Timeline Record / 时间线记录

Timeline records are stored under:

- data/timelines/

时间线记录存放在：

- data/timelines/

Recommended fields:

- id
- type
- title_zh
- title_en
- tradition
- region
- events
- source_refs
- status
- notes

Each event may include:

- id
- date
- date_range
- approximate
- event_type
- related_persons
- related_works
- related_traditions
- title_zh
- title_en
- description_zh
- description_en
- source_refs

推荐字段：

- id
- type
- title_zh
- title_en
- tradition
- region
- events
- source_refs
- status
- notes

每条事件可以包括：

- id
- date
- date_range
- approximate
- event_type
- related_persons
- related_works
- related_traditions
- title_zh
- title_en
- description_zh
- description_en
- source_refs

---

## Relation Record / 关系记录

Relation records are stored under:

- data/relations/

关系记录存放在：

- data/relations/

Relation files may include:

- teacher-student relations
- work-influence relations
- tradition-branch relations
- regional transmission relations
- lineage claim relations
- term development relations

关系文件可以包括：

- 师承关系
- 典籍影响关系
- 宗派分支关系
- 地域传播关系
- 祖师谱系叙述关系
- 术语发展关系

Recommended relation fields:

- id
- type
- subject
- object
- tradition
- relation_type
- confidence
- source_refs
- note_zh
- note_en

推荐关系字段：

- id
- type
- subject
- object
- tradition
- relation_type
- confidence
- source_refs
- note_zh
- note_en

Example field pattern:

- id: huisi-teaches-zhiyi
- type: relation
- subject: huisi
- object: zhiyi
- relation_type: teacher_student
- tradition: tiantai
- confidence: high

字段示例：

- id: huisi-teaches-zhiyi
- type: relation
- subject: huisi
- object: zhiyi
- relation_type: teacher_student
- tradition: tiantai
- confidence: high

---

## Source Reference Fields / 来源字段

Source references should use consistent fields.

Recommended fields:

- name
- url
- identifier
- access_date
- license_note
- reliability_note

来源信息应使用统一字段。

推荐字段：

- name
- url
- identifier
- access_date
- license_note
- reliability_note

---

## Status Fields / 状态字段

Records should include status fields when useful.

Recommended status values:

- draft
- partial
- reviewed
- verified
- needs_source
- disputed

资料记录可根据需要加入 status 字段。

推荐状态值：

- draft
- partial
- reviewed
- verified
- needs_source
- disputed

---

## Confidence Fields / 可信度字段

Relations and lineage claims should include confidence when possible.

Recommended confidence values:

- high
- medium
- low
- disputed
- unknown

关系记录和祖师谱系叙述应尽量加入 confidence 字段。

推荐可信度值：

- high
- medium
- low
- disputed
- unknown

---

## File Naming Rule / 文件命名规则

File names should match the id field whenever possible.

Examples:

- data/persons/zhiyi.yaml
- data/works/mohe-zhiguan.yaml
- data/traditions/tiantai.yaml
- data/branches/tendai-japan.yaml
- data/terms/one-thought-three-thousand.yaml

文件名应尽量与 id 字段一致。

示例：

- data/persons/zhiyi.yaml
- data/works/mohe-zhiguan.yaml
- data/traditions/tiantai.yaml
- data/branches/tendai-japan.yaml
- data/terms/one-thought-three-thousand.yaml

---

## Review Principle / 审查原则

Data should be added gradually and reviewed in small units.

Do not add large unsourced text dumps.

Each record should prefer structured fields, source references, and clear status markers.

数据应逐步添加，并以小单位进行审查。

不要加入大量无来源文本。

每条记录应优先使用结构化字段、来源信息和清晰的状态标记。
