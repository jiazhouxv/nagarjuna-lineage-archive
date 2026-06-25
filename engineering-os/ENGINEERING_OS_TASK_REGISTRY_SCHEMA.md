# Engineering OS Task Registry Schema

## 1. Purpose

The Task Registry is the static truth layer. It answers: what tasks exist, what their current state is, what depends on them, and what tail work remains.

## 2. Task Status

- `PLANNED`: task is known but not started.
- `IN_PROGRESS`: task is actively being worked.
- `PARTIAL`: some implementation exists, but the main outcome is incomplete.
- `DONE`: task meets acceptance criteria and has no known tail blocking the next dependency.
- `HAS_TAIL`: task is complete enough to proceed but has explicit residual work.
- `BLOCKED`: task cannot proceed until a dependency or external condition changes.
- `DEFERRED`: task is intentionally delayed.
- `PATCHED`: task was repaired after an earlier completion.
- `DONE_FINAL`: task is complete, audited, and frozen.
- `CANCELLED`: task is intentionally abandoned.

## 3. Task Object

```json
{
  "task_id": "",
  "title": "",
  "type": "",
  "level": "",
  "status": "",
  "priority": "",
  "parent": "",
  "depends_on": [],
  "related_docs": [],
  "related_code": [],
  "completion_evidence": [],
  "tail_tasks": [],
  "open_issues": [],
  "next_dependency": "",
  "last_updated": ""
}
```

## 4. Tail Task Object

```json
{
  "tail_id": "",
  "parent_task_id": "",
  "title": "",
  "status": "",
  "severity": "",
  "blocking": true,
  "owner": "",
  "related_files": [],
  "close_criteria": [],
  "created_in": "",
  "closed_in": ""
}
```

## 5. DONE vs HAS_TAIL vs DONE_FINAL

`DONE` means the task satisfies its acceptance criteria.

`HAS_TAIL` means the task satisfies enough criteria to unblock the next task, but known residue remains and is registered.

`DONE_FINAL` means the task is complete, tails are closed or explicitly deferred, checks pass, and the version is frozen.

Do not mark `DONE_FINAL` during active architecture churn.

