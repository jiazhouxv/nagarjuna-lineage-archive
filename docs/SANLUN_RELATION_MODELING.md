# Sanlun Relation Modeling / 三论宗关系建模说明

## Purpose / 目的

This document defines conservative relation-modeling rules for the Sanlun module.

本文档定义三论宗模块的保守关系建模规则。

The goal is to avoid confusing textual attribution, intellectual influence, translation history, commentary reception, and institutional lineage.

目标是避免混淆文本署名、思想影响、翻译史、注释接受史和制度性宗派传承。

---

## Core rule / 核心规则

Do not model every doctrinal or textual connection as direct lineage.

不要把所有教义或文本关系都建模为直接传承关系。

When evidence is incomplete, use weaker relation categories and mark review status as `needs_review`.

证据不完整时，应使用较弱的关系类型，并将审查状态标记为 `needs_review`。

---

## Relation categories / 关系类型

### 1. Textual attribution / 文本署名关系

Use when a work record attributes a text to a person.

适用于典籍记录将文本署名给某个人物的情况。

Example:

- `bailun` → attributed author → `aryadeva`

Modeling caution:

- This does not automatically prove modern authorship certainty.
- This does not automatically create institutional lineage.
- Source notes should identify this as attribution metadata.

建模注意：

- 这不自动等同于现代学术意义上的作者确定性。
- 这不自动构成制度宗派传承。
- 来源说明应标明这是署名元数据。

---

### 2. Translation relation / 翻译关系

Use when a work record identifies a translator.

适用于典籍记录标明译者的情况。

Example:

- `zhonglun` → translator → `kumarajiva`
- `shiermenlun` → translator → `kumarajiva`
- `bailun` → translator → `kumarajiva`

Modeling caution:

- Translation relation is textual and historical, not necessarily teacher-student relation.
- Translation relation may support reception history but should not be collapsed into lineage.

建模注意：

- 翻译关系是文本与历史关系，不必然是师承关系。
- 翻译关系可以支持接受史建模，但不应直接等同于谱系传承。

---

### 3. Intellectual influence / 思想影响关系

Use when a tradition, person, or work is influenced by a prior doctrine, work, or figure.

适用于某宗派、人物或典籍受前代思想、典籍或人物影响的情况。

Example:

- `nagarjuna` → intellectual source → `sanlun`
- `zhonglun` → doctrinal source → `sanlun`

Modeling caution:

- Intellectual influence should be weaker than direct institutional lineage.
- Prefer notes such as `intellectual lineage`, `doctrinal source`, or `reception context` when direct lineage evidence is absent.

建模注意：

- 思想影响关系应弱于制度性直接传承。
- 缺少直接传承证据时，优先使用“思想谱系”“教义来源”“接受语境”等说明。

---

### 4. Commentary and reception relation / 注释与接受关系

Use when later figures interpret, systematize, comment on, or receive earlier works or ideas.

适用于后世人物解释、系统化、注释或接受前代典籍和思想的情况。

Example:

- `jizang` → reception / systematization → Sanlun core treatises

Modeling caution:

- Systematization is not identical to authorship.
- Reception is not identical to direct teacher-student lineage.
- Use source notes to distinguish historical reception from institutional founding.

建模注意：

- 集大成或系统化不等同于作者关系。
- 接受史不等同于直接师承。
- 来源说明应区分历史接受、制度形成和宗派创立。

---

### 5. Institutional lineage / 制度性传承关系

Use only when a source clearly supports institutional or teacher-student transmission.

仅在来源明确支持制度性传承或师承关系时使用。

Modeling caution:

- Do not infer institutional lineage from textual similarity alone.
- Do not infer direct teacher-student relation from doctrinal influence alone.
- If uncertain, mark relation as draft and source_status as partial.

建模注意：

- 不要仅凭文本相似推断制度传承。
- 不要仅凭教义影响推断直接师承。
- 不确定时，应标记为 draft 与 partial。

---

## Recommended relation metadata / 建议关系元数据

Future relation records should prefer fields such as:

- `relation_type`
- `source_status`
- `review_status`
- `confidence`
- `evidence_note_zh`
- `evidence_note_en`
- `source_refs`

后续关系记录应优先包含以下字段：

- `relation_type`
- `source_status`
- `review_status`
- `confidence`
- `evidence_note_zh`
- `evidence_note_en`
- `source_refs`

---

## Sanlun-specific caution / 三论宗专门注意

For the Sanlun module, the archive should distinguish:

1. Nagarjuna as doctrinal source.
2. Aryadeva as attributed author context for `bailun`.
3. Kumarajiva as translator of Chinese textual reception.
4. Jizang as later systematizer and interpreter.
5. Sanlun as an East Asian tradition formed through reception, interpretation, and institutional history.

对于三论宗模块，本资料库应区分：

1. 龙树作为教义来源。
2. 提婆作为《百论》署名语境。
3. 鸠摩罗什作为汉译接受史中的译者。
4. 吉藏作为后世系统化与阐释人物。
5. 三论宗作为通过接受、解释和制度史逐步形成的东亚宗派传统。

---

## Do not do / 暂不执行

Do not:

- auto-generate lineage edges
- convert all textual links into lineage links
- treat every Sanlun-related work as institutional evidence
- add unsupported doctrinal hierarchy claims
- enter Engineering OS v0.5 for autonomous relation generation

不要：

- 自动生成谱系边
- 把所有文本关系转化为传承关系
- 把所有三论相关典籍都当作制度史证据
- 加入无来源支持的教义层级判断
- 进入 Engineering OS v0.5 做自动关系生成

---

## Maintenance note / 维护记录

Created for issue #15: `Three-batch Sanlun cleanup: Aryadeva, relation modeling, and project state`.

本文件对应 issue #15：`Three-batch Sanlun cleanup: Aryadeva, relation modeling, and project state`。
