# Validation Guide / 数据校验指南

## Purpose / 目的

This guide explains how to validate the YAML data files in Nagarjuna Lineage Archive.

本文档说明如何校验龙树菩萨思想谱系资料库中的 YAML 数据文件。

The validation tool is located at:

* tools/validate_yaml.py

校验工具位于：

* tools/validate_yaml.py

---

## What the Validator Checks / 校验内容

The current validator checks:

* YAML syntax
* Required fields by record type
* Duplicate IDs
* Filename and ID consistency warnings
* Source reference quality warnings
* Relation target existence warnings

当前校验工具检查：

* YAML 语法
* 不同记录类型的必填字段
* 重复 ID
* 文件名与 ID 是否一致的警告
* 来源引用字段质量警告
* 关系目标 ID 是否存在的警告

---

## Install Requirements / 安装依赖

Before running the validator, install the Python dependency:

```
pip install -r requirements.txt
```

运行校验工具前，请先安装 Python 依赖：

```
pip install -r requirements.txt
```

---

## Run the Validator / 运行校验

Run from the repository root:

```
python tools/validate_yaml.py
```

请在仓库根目录运行：

```
python tools/validate_yaml.py
```

If validation passes, the script will print:

```
Validation passed.
```

如果校验通过，会显示：

```
Validation passed.
```

---

## Error and Warning Policy / 错误与警告规则

Errors fail validation and should be fixed before merging or releasing.

错误会导致校验失败，合并或发布前应修复。

Warnings do not fail validation. They indicate recommended cleanup work that can be fixed gradually.

警告不会导致校验失败。警告表示建议逐步清理的质量问题。

Current warning-only checks include:

* Filename and ID mismatch
* Source reference quality
* Relation target existence

当前仅作为警告处理的检查包括：

* 文件名与 ID 不一致
* 来源引用字段质量
* 关系目标 ID 是否存在

---

## Common Errors / 常见错误

### Missing required field / 缺少必填字段

Example:

```
[ERROR] data/persons/example.yaml: missing or empty required field 'summary_zh'
```

This means the record needs the missing field.

这表示该记录缺少必要字段，需要补充。

---

### Duplicate ID / 重复 ID

Example:

```
[ERROR] duplicate id 'zhiyi'
```

This means two YAML files are using the same id.

这表示两个 YAML 文件使用了相同的 id。

---

### Filename and ID mismatch / 文件名与 ID 不一致

Example:

```
[WARNING] data/persons/master-zhiyi.yaml: filename does not match id. Expected 'zhiyi.yaml'
```

This is a warning, not always a fatal error. However, the preferred rule is:

* File name should match the id field whenever possible.

这是警告，不一定是严重错误。但本项目推荐：

* 文件名应尽量与 id 字段一致。

---

### Source reference quality warning / 来源引用质量警告

Example:

```
[WARNING] data/terms/example.yaml: source_refs[1] missing recommended field(s): access_date, reliability_note
```

This means the `source_refs` entry is valid enough for the current validator, but its metadata should be improved.

这表示该 `source_refs` 条目目前不会导致校验失败，但来源元数据还应继续补充。

Recommended `source_refs` fields:

* name
* url
* identifier
* access_date
* license_note
* reliability_note

推荐的 `source_refs` 字段：

* name
* url
* identifier
* access_date
* license_note
* reliability_note

For external sources such as CBETA, SAT, SEP, or DDB, the repository should record metadata and source links only. Do not copy restricted full text into the repository.

对于 CBETA、SAT、SEP、DDB 等外部来源，本仓库应只记录元数据和来源链接，不复制受限制全文。

---

### Relation target existence warning / 关系目标存在性警告

Example:

```
[WARNING] data/relations/example.yaml: relation-1.subject references unknown id 'unknown-person'
```

This means a relation points to an id that is not currently present in the YAML data set.

这表示某条关系指向了当前 YAML 数据集中不存在的 ID。

The validator currently checks relation target fields in `relation_file` records:

* subject
* object
* teacher
* student
* key_persons

当前校验器检查 `relation_file` 记录中的以下关系目标字段：

* subject
* object
* teacher
* student
* key_persons

This is currently a warning, not a blocking error. Some relation targets may be planned future records, especially in branch transmission or commentary data. Maintainers should either add the missing record later or document why the target remains unresolved.

当前这是警告，不是阻断错误。一些关系目标可能是计划中的未来记录，尤其是地域传播或注释文献数据。维护者后续应补充缺失记录，或说明为什么该目标暂时保持未解析。

---

## Record Types / 记录类型

The validator currently supports these record types:

* person
* work
* term
* tradition
* branch
* timeline
* relation_file

当前校验工具支持以下记录类型：

* person
* work
* term
* tradition
* branch
* timeline
* relation_file

---

## Maintenance Rule / 维护规则

Before a release, maintainers should run the validator and fix critical errors.

发布版本前，维护者应运行校验工具并修复关键错误。

Recommended workflow:

1. Add or edit YAML files.
2. Run the validator.
3. Fix errors.
4. Review warnings and decide whether they should be fixed in the same batch or a later batch.
5. Commit changes.
6. Update CHANGELOG or docs/project-state.md if needed.

推荐流程：

1. 新增或修改 YAML 文件。
2. 运行校验工具。
3. 修复错误。
4. 查看警告，并判断应在本批次修复还是后续批次修复。
5. 提交修改。
6. 如有需要，更新 CHANGELOG 或 docs/project-state.md。

---

## Notes / 备注

The validator is intentionally simple in the v0.1.0 stage.

v0.1.0 阶段的校验工具保持简单。

Completed validator improvements:

* Source reference quality warnings
* Relation target existence warnings

已完成的校验器改进：

* 来源引用质量警告
* 关系目标 ID 是否存在的警告

Future improvements may include:

* Required bibliography checks
* Timeline event validation
* GitHub Actions integration
* Optional strict mode for warnings

后续可以改进：

* 参考书目字段检查
* 时间线事件校验
* GitHub Actions 集成
* 可选的 warning 严格模式
