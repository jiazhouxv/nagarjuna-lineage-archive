# Engineering OS Execution Trace Schema

## 1. Purpose

Execution Trace combines Event Log and Replay into a general audit model.

Event Log answers what happened.

Replay answers how to reconstruct the task path.

## 2. Event Object

```json
{
  "task_id": "",
  "event_type": "START | PROGRESS | CHECK_PASS | CHECK_FAIL | REPAIR | TAIL_DETECTED | COMPLETE | PUSH",
  "timestamp": "",
  "changed_files": [],
  "checks": [],
  "notes": "",
  "commit": ""
}
```

## 3. Replay Object

```json
{
  "task_id": "",
  "final_state": "",
  "execution_chain": [],
  "decision_points": [],
  "tail_evolution": [],
  "final_commit": ""
}
```

## 4. Decision Points

Decision points record why a route was chosen. They should capture rejected alternatives when that matters for future work.

Examples:

- keep compatibility mode
- defer real provider
- add adapter rather than rewrite callers
- preserve mock path

## 5. Repair Cycles

Every failed check must create:

- `CHECK_FAIL`
- `REPAIR`
- new `CHECK_PASS` after repair

Do not erase failed attempts from the trace.

## 6. Check Evidence

Checks should include command name, result, and scope. If a check is skipped, record why.

## 7. Tail Evolution

Tail evolution records how residue appears, splits, moves owner, or closes.

## 8. Commit Evidence

Every completed task must reference its commit. Every pushed task should record push evidence when available.

