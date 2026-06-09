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

当前校验工具检查：

* YAML 语法
* 不同记录类型的必填字段
* 重复 ID
* 文件名与 ID 是否一致的警告

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
4. Commit changes.
5. Update CHANGELOG if needed.

推荐流程：

1. 新增或修改 YAML 文件。
2. 运行校验工具。
3. 修复错误。
4. 提交修改。
5. 如有需要，更新 CHANGELOG。

---

## Notes / 备注

The validator is intentionally simple in the v0.1.0 stage.

Future improvements may include:

* Source reference quality checks
* Required bibliography checks
* Relation target existence checks
* Timeline event validation
* GitHub Actions integration

v0.1.0 阶段的校验工具保持简单。

后续可以改进：

* 来源质量检查
* 参考书目字段检查
* 关系目标是否存在检查
* 时间线事件校验
* GitHub Actions 集成
