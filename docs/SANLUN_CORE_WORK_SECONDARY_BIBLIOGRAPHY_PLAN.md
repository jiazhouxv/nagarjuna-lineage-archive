# Sanlun Core Work Secondary Bibliography Plan / 三论核心论书二手文献规划

## Purpose / 目的

This document plans a later source-backed secondary bibliography update for the three Sanlun core work records:

1. `data/works/zhonglun.yaml`
2. `data/works/shiermenlun.yaml`
3. `data/works/bailun.yaml`

本文档用于规划后续对三论三部核心论书记录进行有来源支撑的二手文献补强：

1. `data/works/zhonglun.yaml`
2. `data/works/shiermenlun.yaml`
3. `data/works/bailun.yaml`

This is a planning document only. It does not add unverified secondary bibliography directly into YAML records.

本文档仅为规划文件，不直接向 YAML 记录添加未经核验的二手文献。

---

## Current baseline / 当前基线

The three work records already have canonical metadata pointers:

- CBETA Online
- SAT Daizokyo Text Database
- Taisho identifiers
- full text excluded from repository
- `record_status: draft`
- `source_status: partial`
- `review_status: needs_review`

三部论书记录已经具备基础藏经元数据指针：

- CBETA Online
- SAT Daizokyo Text Database
- 大正藏编号
- 仓库不收录全文
- `record_status: draft`
- `source_status: partial`
- `review_status: needs_review`

---

## Day 1 Track: Zhonglun / 第一日轨道：《中论》

Future secondary bibliography for `zhonglun` should prioritize sources that verify:

- title variants
- relationship to the Sanskrit `Mūlamadhyamakakārikā`
- Chinese translation metadata
- Kumarajiva translation context
- Sanlun reception
- Jizang commentary and interpretation context
- modern academic treatments of Chinese Madhyamaka reception

后续补强 `zhonglun` 二手文献时，应优先核对：

- 题名异称
- 与梵本《中颂》/ `Mūlamadhyamakakārikā` 的关系
- 汉译元数据
- 鸠摩罗什译经语境
- 三论宗接受史
- 吉藏注释和解释语境
- 现代学术对汉传中观接受史的研究

Recommended source types:

- academic monographs on Madhyamaka and Chinese Madhyamaka
- peer-reviewed articles on the Zhonglun or Kumarajiva's translation
- library catalog records for published translations or studies
- publisher pages for academic editions

建议来源类型：

- 中观与汉传中观学术专著
- 关于《中论》或鸠摩罗什译本的同行评审论文
- 已出版译注或研究的图书馆目录记录
- 学术出版社页面

Do not add:

- unsourced claims about exact Sanskrit-Chinese equivalence
- unsupported claims about direct institutional lineage
- copied translated passages
- copied restricted dictionary entries

不要添加：

- 无来源支撑的梵汉文本等同判断
- 无支撑的制度性传承判断
- 复制译文段落
- 复制受限辞典条文

---

## Day 2 Track: Shiermenlun / 第二日轨道：《十二门论》

Future secondary bibliography for `shiermenlun` should prioritize sources that verify:

- authorship attribution history
- title variants
- translation attribution to Kumarajiva
- its role within the Three Treatise grouping
- its reception in Chinese Sanlun materials
- relation to later Jizang interpretation

后续补强 `shiermenlun` 二手文献时，应优先核对：

- 作者署名传统
- 题名异称
- 鸠摩罗什译本归属
- 在“三论”组合中的角色
- 在中国三论宗材料中的接受史
- 与吉藏后期解释的关系

Recommended source types:

- academic Buddhist studies references
- specialist studies of the Three Treatise tradition
- catalog records for modern critical studies or translations
- reliable encyclopedia entries used as pointers only

建议来源类型：

- 佛教学术参考文献
- 三论宗专门研究
- 现代研究或译注的图书馆目录记录
- 仅作为指针使用的可靠百科条目

Do not add:

- claims that depend only on tradition labels without source notes
- unsupported chronology
- copied primary text
- copied modern commentary

不要添加：

- 仅依赖传统标签而无来源说明的判断
- 无支撑年代判断
- 复制原典正文
- 复制现代注释文字

---

## Day 3 Track: Bailun / 第三日轨道：《百论》

Future secondary bibliography for `bailun` should prioritize sources that verify:

- attribution to Aryadeva
- title variants such as `Śataśāstra` / Shata Shastra
- Kumarajiva translation context
- relation to the Three Treatise grouping
- Chinese Sanlun reception
- relation between Aryadeva record and Bailun work metadata

后续补强 `bailun` 二手文献时，应优先核对：

- 提婆署名传统
- `Śataśāstra` / Shata Shastra 等题名异称
- 鸠摩罗什译本语境
- 与“三论”组合的关系
- 中国三论宗接受史
- 提婆人物记录与《百论》典籍记录之间的元数据关系

Recommended source types:

- academic studies on Aryadeva and East Asian reception
- Sanlun tradition studies
- catalog records for translations or studies of Bailun
- reliable Buddhist reference works used only as metadata pointers

建议来源类型：

- 关于提婆与东亚接受史的学术研究
- 三论宗研究
- 《百论》译注或研究的目录记录
- 仅作为元数据指针使用的可靠佛教工具书

Do not add:

- stronger authorship certainty than the sources support
- unsupported transmission chains
- copied text from modern editions or translations
- copied dictionary entries

不要添加：

- 超出来源支持力度的作者确定性判断
- 无支撑传承链
- 复制现代版本或译文
- 复制辞典条文

---

## Day 4 Track: Shared bibliography taxonomy / 第四日轨道：共享文献分类

Future Sanlun work bibliography should distinguish:

1. `digital_canonical_reference`
2. `canonical_catalogue`
3. `academic_monograph`
4. `peer_reviewed_article`
5. `critical_translation_and_study`
6. `reference_work`
7. `library_catalog_record`
8. `publisher_record`

后续三论典籍 bibliography 应区分：

1. `digital_canonical_reference` 数字藏经参考
2. `canonical_catalogue` 藏经目录
3. `academic_monograph` 学术专著
4. `peer_reviewed_article` 同行评审论文
5. `critical_translation_and_study` 学术译注与研究
6. `reference_work` 工具书
7. `library_catalog_record` 图书馆目录记录
8. `publisher_record` 出版社记录

Each bibliography entry should include:

- title
- author/editor/translator where known
- publisher or host
- year if known
- language
- type
- note explaining why the source is relevant

每条 bibliography 应尽量包含：

- 题名
- 作者、编者或译者
- 出版方或主办方
- 年份，如已知
- 语言
- 类型
- 说明该来源为何相关的 note

---

## Day 5 Track: Review gates / 第五日轨道：审查门槛

A future data PR adding secondary bibliography directly into YAML should pass these gates:

1. The source must be identifiable by title and author/editor/host.
2. The record must not copy restricted full text.
3. The source must support the exact claim it is attached to.
4. Bibliography additions must not automatically change `review_status` to `reviewed`.
5. Any new source_refs should include access dates when online.
6. Any relation implication must remain in notes unless a separate relation issue exists.
7. If evidence is uncertain, the note should say so explicitly.

后续直接向 YAML 添加二手 bibliography 的数据 PR 应通过以下审查门槛：

1. 来源必须能通过题名和作者、编者或主办方识别。
2. 不复制受限制全文。
3. 来源必须支撑它所关联的具体判断。
4. 增加 bibliography 不自动把 `review_status` 改成 `reviewed`。
5. 在线 source_refs 应包含访问日期。
6. 任何关系层含义应先保留在 note 中，除非另开关系 issue。
7. 证据不确定时，note 必须明确说明。

---

## Non-goals / 非目标

This planning batch does not:

- edit the three work YAML records
- add unverified secondary bibliography into YAML
- redistribute full text
- change stable IDs
- change review status
- expand relation records
- enter Engineering OS v0.5

本规划批次不做以下事项：

- 修改三部论书 YAML 记录
- 向 YAML 添加未经核验的二手文献
- 再分发全文
- 修改稳定 ID
- 修改 review status
- 扩展关系记录
- 进入 Engineering OS v0.5

---

## Recommended next data PR / 建议下一轮数据 PR

Recommended next issue title:

`Add Zhonglun secondary academic bibliography pointers`

Recommended scope:

- update `data/works/zhonglun.yaml`
- add only verified bibliographic metadata
- no full-text copying
- no review_status change
- no relation expansion

建议下一轮 issue 标题：

`Add Zhonglun secondary academic bibliography pointers`

建议范围：

- 更新 `data/works/zhonglun.yaml`
- 只添加已核验的 bibliography 元数据
- 不复制全文
- 不修改 review_status
- 不扩展关系记录
