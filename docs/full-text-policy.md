# Full Text Policy / 全文收录政策

## Purpose / 目的

This document defines how Nagarjuna Lineage Archive handles Buddhist full texts, local text files, public-domain materials, licensed sources, and restricted textual corpora.

本文档定义龙树菩萨思想谱系资料库如何处理佛教典籍全文、本地文本文件、公共领域材料、授权来源和受限制文本语料库。

---

## Core Principle / 核心原则

Nagarjuna Lineage Archive is a metadata-first and source-linked project.

The repository does not aim to become a full-text Buddhist canon repository.

龙树菩萨思想谱系资料库是一个以元数据为核心、以来源链接为基础的项目。

本仓库不以建立佛典全文库为目标。

The project prioritizes:

* Bibliographic metadata
* Canon identifiers
* Source links
* Structured summaries
* Person records
* Work records
* Term records
* Tradition and branch records
* Timeline records
* Relation records
* Validation tools

本项目优先整理：

* 书目信息
* 藏经编号
* 来源链接
* 结构化摘要
* 人物记录
* 典籍记录
* 术语记录
* 宗派和分支记录
* 时间线记录
* 关系记录
* 校验工具

---

## Default Rule / 默认规则

By default, this repository does not include full-text Buddhist scriptures, treatises, commentaries, modern editions, modern translations, or large copied text files.

默认情况下，本仓库不收录佛典、论典、注疏、现代整理本、现代译文或大规模复制文本文件的全文。

Instead, the repository records:

* Work metadata
* Source references
* Canon numbers
* External URLs
* Contributor-written summaries
* Topic tags
* Relation data
* Notes for future review

本仓库改为记录：

* 典籍元数据
* 来源信息
* 藏经编号
* 外部链接
* 贡献者原创摘要
* 主题标签
* 关系数据
* 后续审查备注

---

## Why Full Text Is Restricted / 为什么限制全文

Ancient Buddhist texts may be historically old, but modern digital versions often involve:

* Modern punctuation
* Modern proofreading
* Modern editorial work
* Modern database formatting
* Modern scans
* Modern translations
* Website terms of use
* Database license restrictions

古代佛教文本本身可能年代久远，但现代数字版本往往包含：

* 现代标点
* 现代校对
* 现代整理
* 现代数据库格式
* 现代扫描图
* 现代译文
* 网站使用条款
* 数据库授权限制

For this reason, a text being visible online does not automatically mean it can be copied into this GitHub repository.

因此，某个文本能在网上看到，并不等于可以复制到本 GitHub 仓库中再分发。

---

## Allowed Full Text / 可以收录全文的情况

Full text may be included only when redistribution rights are clearly verified.

全文只有在明确确认允许再分发时，才可以加入仓库。

Allowed cases may include:

1. Texts manually transcribed and reviewed by contributors from public-domain sources.
2. Texts from sources explicitly marked as public domain.
3. Texts released under a license compatible with this repository.
4. Texts for which explicit permission has been obtained.
5. Contributor-created translations or transcriptions released under a compatible license.

可以收录的情况包括：

1. 贡献者依据公共领域来源自行录入并校对的文本。
2. 来源明确标注为公共领域的文本。
3. 来源采用与本仓库兼容授权协议的文本。
4. 已获得明确授权的文本。
5. 贡献者原创翻译或录入，并采用兼容授权发布的文本。

---

## Restricted Full Text / 不应收录的全文

The following should not be committed to the repository unless permission and license compatibility are verified:

1. Full texts copied from restricted databases.
2. Large-scale copied text from CBETA, SAT, or similar databases without checking license terms.
3. Copyrighted modern editions.
4. Copyrighted modern punctuation or annotated editions.
5. Commercially published translations.
6. Scanned books or images with unclear copyright status.
7. Website text copied without permission.
8. Local research copies with unclear redistribution rights.

以下内容不得提交到仓库，除非已确认授权和许可证兼容：

1. 从受限制数据库复制的全文。
2. 未核查授权条款而从 CBETA、SAT 或类似数据库大规模复制的文本。
3. 受版权保护的现代版本。
4. 受版权保护的现代标点本或注释本。
5. 商业出版的译文。
6. 版权状态不明的扫描书或图片。
7. 未经许可复制的网站文本。
8. 再分发权利不明确的本地研究副本。

---

## Local Text Files / 本地文本文件

Contributors may keep local text files for private research, extraction, comparison, or metadata creation.

贡献者可以在本地保存文本文件，用于个人研究、摘录、比对或生成元数据。

However, local text files with unclear redistribution rights should not be committed to this repository.

但是，再分发权利不明确的本地文本文件不应提交到本仓库。

Recommended local-only folders:

* local-texts/
* raw-texts/
* private-notes/

推荐的本地专用目录：

* local-texts/
* raw-texts/
* private-notes/

These folders are excluded by .gitignore.

这些目录已通过 .gitignore 排除。

---

## Text Source Metadata / 文本来源元数据

When a full text cannot be redistributed, the project may still record metadata about the text source.

当全文不能再分发时，本项目仍然可以记录文本来源元数据。

Recommended metadata fields:

* work
* source_name
* source_url
* canon_identifier
* license_status
* redistribution_allowed
* local_file_committed
* notes

推荐元数据字段：

* work
* source_name
* source_url
* canon_identifier
* license_status
* redistribution_allowed
* local_file_committed
* notes

Example values:

* redistribution_allowed: false
* local_file_committed: false
* license_status: unknown

示例值：

* redistribution_allowed: false
* local_file_committed: false
* license_status: unknown

---

## Future texts/ Directory / 未来 texts/ 目录

A texts/ directory may be added in the future, but only for materials whose redistribution rights have been verified.

未来可以添加 texts/ 目录，但只用于收录已确认允许再分发的材料。

If added, each full-text work should include:

* text.txt
* source.yaml
* license.md
* README.md

如果未来添加全文，每部文本应包括：

* text.txt
* source.yaml
* license.md
* README.md

No full text should be added without a source and license note.

没有来源说明和授权说明的全文，不应加入仓库。

---

## Relationship to CBETA, SAT, and Similar Databases / 与 CBETA、SAT 等数据库的关系

CBETA, SAT, and similar Buddhist text databases are important reference sources.

CBETA、SAT 以及类似佛典数据库是重要参考来源。

This project may record:

* Source links
* Canon identifiers
* Bibliographic metadata
* Short references
* Contributor-written summaries
* Topic tags

本项目可以记录：

* 来源链接
* 藏经编号
* 书目信息
* 简短引用信息
* 贡献者原创摘要
* 主题标签

This project should not copy large-scale full text from those databases unless the relevant license clearly permits redistribution in this repository.

除非相关授权明确允许在本仓库中再分发，否则本项目不应从这些数据库大规模复制全文。

---

## Short Quotations / 短引用

Short quotations may be used when legally and academically appropriate.

在法律和学术规范允许范围内，可以使用短引用。

Short quotations should:

* Be clearly marked as quotations.
* Include source references.
* Be limited in length.
* Avoid replacing the need to consult the original source.

短引用应当：

* 明确标记为引用。
* 附带来源信息。
* 控制篇幅。
* 不替代原始来源。

---

## Contributor Responsibility / 贡献者责任

Contributors should not add full text unless they are confident that redistribution is allowed.

贡献者不应加入全文，除非能够确认允许再分发。

When in doubt, contributors should add:

* Metadata
* Source links
* Canon identifiers
* Original summaries
* Review notes

当不确定时，贡献者应添加：

* 元数据
* 来源链接
* 藏经编号
* 原创摘要
* 审查备注

---

## Final Rule / 最终规则

When in doubt, do not add full text.

Add metadata and source references instead.

如果不确定，就不要加入全文。

请改为加入元数据和来源信息。
