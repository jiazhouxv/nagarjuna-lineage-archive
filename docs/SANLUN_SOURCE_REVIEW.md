# Sanlun Source Review / 三论宗来源审查

## Purpose / 目的

This document records the current source-quality state of the initial Sanlun scaffold records.

本文档记录三论宗初始脚手架记录当前的来源质量状态。

This is a documentation-first maintenance step. It does not add new doctrinal claims, does not redistribute restricted full text, and does not modify stable record IDs.

这是一次文档优先的维护步骤：不新增教义判断、不再分发受限制全文、不修改稳定记录 ID。

---

## Scope / 范围

Records reviewed in this pass:

- `data/traditions/sanlun.yaml`
- `data/persons/jizang.yaml`
- `data/works/zhonglun.yaml`
- `data/works/shiermenlun.yaml`
- `data/works/bailun.yaml`

本轮审查对象：

- `data/traditions/sanlun.yaml`
- `data/persons/jizang.yaml`
- `data/works/zhonglun.yaml`
- `data/works/shiermenlun.yaml`
- `data/works/bailun.yaml`

---

## Current source coverage / 当前来源覆盖

| Record | Current source coverage | Current status | Review note |
| --- | --- | --- | --- |
| `sanlun.yaml` | CBETA Zhonglun reference; DDB Sanlun reference | `draft / partial / needs_review` | Good enough for scaffold status, but needs stronger academic references for school formation, regional transmission, and Jizang-centered systematization. |
| `jizang.yaml` | DDB Jizang reference; Princeton Dictionary bibliographic reference | `draft / partial / needs_review` | Basic reference coverage exists, but needs more precise academic and canonical sources for dates, writings, lineage role, and doctrinal context. |
| `zhonglun.yaml` | CBETA T1564; SAT T1564 | `draft / partial / needs_review` | Strong primary canon metadata coverage. Needs secondary academic references for title variants, attribution, translation context, and Sanlun reception. |
| `shiermenlun.yaml` | CBETA T1568; SAT T1568 | `draft / partial / needs_review` | Strong primary canon metadata coverage. Needs secondary academic references for title variants, attribution, translation context, and Sanlun reception. |
| `bailun.yaml` | CBETA T1569; SAT T1569 | `draft / partial / needs_review` | Strong primary canon metadata coverage. Needs secondary academic references for Aryadeva attribution, translation context, and Sanlun reception. |

---

## Source-quality assessment / 来源质量判断

### Strengths / 已有优势

- The three core treatises already include canonical identifiers and external canon database references.
- Each core work explicitly records a full-text policy and does not redistribute full text.
- The Sanlun parent tradition record already links the tradition to its three core treatises.
- The Jizang record already has basic reference coverage and does not copy dictionary text.

### Gaps / 当前缺口

- Sanlun school formation is still described at scaffold level and needs stronger academic sources.
- Jizang's role as systematizer needs more precise source support.
- The three core works need secondary academic references, not only canon metadata references.
- `bailun.yaml` references Aryadeva as attributed author, but a dedicated `aryadeva` person record does not yet exist in the current data layer.
- Regional transmission beyond China, especially Japanese Sanron, remains future work.

---

## Cleanup targets / 后续清理目标

### Priority 1 / 第一优先级

1. Strengthen `jizang.yaml` with academic references for dates, names, works, and Sanlun role.
2. Add or plan an `aryadeva` person record before relying on `aryadeva` as a graph target.
3. Add secondary academic references to the three core treatise records.

### Priority 2 / 第二优先级

1. Strengthen `sanlun.yaml` with academic references on school formation and reception history.
2. Add a Sanron / Japanese Sanlun transmission planning note or future branch record.
3. Add relation records that distinguish intellectual influence from institutional lineage.

### Priority 3 / 第三优先级

1. Add concept records for `emptiness`, `madhyamaka`, `two-truths`, and `middle-way` only after source planning is complete.
2. Use graph and temporal checks to detect missing nodes or weak links.
3. Prepare a Sanlun module release checklist after source references are stronger.

---

## Do not do yet / 暂不执行

Do not do the following in the next small maintenance batch:

- Do not enter Engineering OS v0.5.
- Do not add autonomous relation generation.
- Do not mass-add new doctrinal concepts without sources.
- Do not convert scaffold summaries into strong historical claims.
- Do not add copyrighted modern dictionary or monograph text.

下一小轮维护中暂不执行：

- 不进入 Engineering OS v0.5。
- 不加入自动关系生成。
- 不在缺少来源时批量新增教义概念。
- 不把脚手架摘要升级成强历史判断。
- 不加入受版权保护的现代辞典或专著正文。

---

## Recommended next commit sequence / 建议后续提交顺序

1. Improve Jizang source references.
2. Add Aryadeva as a minimal person record, if supported by source references.
3. Add secondary references for `zhonglun.yaml`, `shiermenlun.yaml`, and `bailun.yaml`.
4. Update graph and temporal indexes after data changes.
5. Re-run validation and keep warnings as cleanup guidance unless they become blocking.

---

## Maintenance note / 维护记录

Created for issue #13: `Audit Sanlun scaffold source quality and cleanup targets`.

本文件对应 issue #13：`Audit Sanlun scaffold source quality and cleanup targets`。
