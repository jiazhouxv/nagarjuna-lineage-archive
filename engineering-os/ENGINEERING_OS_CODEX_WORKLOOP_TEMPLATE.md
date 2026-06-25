# Engineering OS Codex Workloop Template

Copy this template into a Codex task prompt.

~~~text
You are not executing an ordinary development task. You are executing under the Engineering OS Workloop.

Task ID:
Task Title:
Project Path:
Branch:
Expected Scope:
Forbidden Scope:

1. Preflight

Run:

```bash
git status --short
git status -sb
git branch --show-current
git log --oneline -20
git branch -vv
```

If the working tree is dirty and the changes are unrelated, stop and report.

2. Resolve Task

Read Memory Index first.
Read Task Registry second.
Confirm the task exists or create it.
Confirm dependencies, tail tasks, and forbidden files.

3. Load Context

Use the topic router.
Read primary docs.
Read relevant sections before full files.
Read code only after context is scoped.

4. Execute

Make the smallest scoped changes.
Do not modify runtime, schema, AI, payment, or frontend areas unless the task explicitly allows it.

5. Verify

Run all task-specific checks.
Run regression checks named by the Registry or task prompt.
Repair until checks pass.

6. Record

Update:
- Task Registry
- Task Event Log
- Execution Replay
- Memory Index if new docs/checks/topics were added
- active project marker when relevant

7. Commit / Push

Review:
- git status
- git diff --stat
- git diff

Commit with the requested message.
Push if required.

8. Final Report

Include:
- task ID
- files changed
- checks
- runtime safety
- Registry/Event/Replay updates
- commit
- push status
- next task
~~~

The final report must include push status.
