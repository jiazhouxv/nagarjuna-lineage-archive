# Engineering OS Versioning Policy

## v0.1

Current stable extraction. It includes:

- Memory Index schema
- Task Registry schema
- Event Log and Replay schema
- Codex workloop template
- ChatGPT planner template
- project bootstrap template
- versioning policy

## v0.2

Use after multiple projects expose real reuse gaps. Expected changes may include better topic router conventions, richer task levels, and improved tail task closure rules.

## v0.3

Automation enhancement release. This may add generators, validators, and migration helpers.

## v1.0

Freeze only after at least three projects validate the system in real development.

## Explicit Non-Goals

Do not upgrade v0.1 into:

- Orchestration
- Auto Planner
- Auto Dispatch
- autonomous multi-agent routing

Reason: v0.1 is sufficient to support continued development in a target project. The next useful work should return to the target project itself and its own next validated milestone.

