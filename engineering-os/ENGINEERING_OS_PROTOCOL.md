# Engineering OS Protocol

## 1. Purpose

This protocol defines the standard task lifecycle for projects using Engineering OS. It applies to planning, coding, verification, recording, commit, push, and final reporting.

## 2. OS Boot

Every task starts by reading the project Memory Index and Task Registry.

Required boot sequence:

1. Confirm branch and git state.
2. Read `docs/00_PROJECT_MEMORY_INDEX.md`.
3. Read `docs/00_PROJECT_MEMORY_INDEX.json`.
4. Read `docs/00_PROJECT_TASK_REGISTRY.json`.
5. Resolve the current task ID.

No task may begin without a task ID.

## 3. Task Resolve

Resolve:

- task ID
- task title
- task type
- parent task
- dependencies
- risk level
- expected changed files
- forbidden files
- tail tasks that may be closed or created

If the task does not exist, create it in the Registry before implementation.

## 4. Context Load

Use topic-router retrieval:

1. Select the relevant topic.
2. Read primary docs.
3. Read relevant sections first.
4. Read code only after doc routing.
5. Full scans are allowed only when the index is missing, stale, or untrusted.

## 5. Execute

Execution must stay inside task scope. Do not mix unrelated runtime, schema, AI, payment, or UI changes into a documentation or infrastructure task.

## 6. Verify

Every task must produce check evidence. Evidence can include:

- local check command output
- CI run
- typecheck
- unit test
- integration smoke test
- purpose-built governance check

Failed checks must create repair events before completion.

## 7. Record

Every completed task must update:

- Task Registry
- Task Event Log
- Execution Replay
- active product/gap/version marker when relevant

Tail tasks must be recorded when work is done enough to continue but leaves known residue.

## 8. Commit / Push

All commits must have:

- task ID or version identity
- changed files matching task scope
- check evidence
- event log entry
- replay entry

Push state must be reported. If push is required, run it after successful checks and commit.

## 9. Final Report

Final reports must include:

- branch
- task ID
- files changed
- checks run
- runtime safety
- Registry/Event/Replay updates
- commit
- push status
- next recommended task

## 10. Hard Rules

- Every task must first read Memory Index and Task Registry.
- Every task completion must update Registry, Event Log, and Replay.
- All development must have check evidence and git evidence.
- No task-number-free development.
- No commit without task records.
- No task completion while hiding tail tasks.

