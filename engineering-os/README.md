# Engineering OS

## What It Is

Engineering OS is a reusable project operating system for AI-assisted software development. It turns scattered plans, code changes, checks, commits, and follow-up work into a structured memory layer that humans, ChatGPT, Codex, and future agents can retrieve and audit.

Engineering OS is not a business system. It does not define product features, domain workflows, pricing, AI behavior, or UI. It defines how engineering work is planned, executed, verified, recorded, and replayed.

Current version: v0.1 stable extraction.

## Problems It Solves

- Repeated full-context reading before every task.
- Lost decisions between planning and implementation.
- Commits without task identity or check evidence.
- Tasks marked done while tail work is invisible.
- Future contributors unable to reconstruct how a task reached its current state.

## Suitable Projects

Engineering OS fits projects that have:

- long-running versioned development
- multiple planning and execution sessions
- AI-assisted coding
- non-trivial checks or CI
- evolving architecture and product contracts
- a need for handoff, auditability, or replay

Small throwaway scripts do not need this system.

## Relationship To Project Docs

Each project keeps its own docs, code, schemas, and business plans. Engineering OS provides the shared operating structure:

- Memory Index: where context lives
- Task Registry: current state
- Event Log: what happened
- Execution Replay: how to reconstruct the path
- Workloop Templates: how ChatGPT and Codex cooperate

Project-specific docs remain the source of product truth. Engineering OS only indexes, routes, and records engineering execution.

## System Flow

```text
ChatGPT Planner
  ↓
Codex Executor
  ↓
GitHub / Git Evidence
  ↓
Project Memory Index / Task Registry / Event Log / Replay
```

## Core Files

- `ENGINEERING_OS_PROTOCOL.md`
- `ENGINEERING_OS_MEMORY_INDEX_SCHEMA.md`
- `ENGINEERING_OS_TASK_REGISTRY_SCHEMA.md`
- `ENGINEERING_OS_EXECUTION_TRACE_SCHEMA.md`
- `ENGINEERING_OS_CODEX_WORKLOOP_TEMPLATE.md`
- `ENGINEERING_OS_CHATGPT_PLANNER_TEMPLATE.md`
- `ENGINEERING_OS_PROJECT_BOOTSTRAP_TEMPLATE.md`
- `ENGINEERING_OS_VERSIONING_POLICY.md`

## Upgrade Conditions

v0.1 should remain stable until the system is reused across more than one project. Upgrade only when real project use exposes missing schema fields, unclear responsibilities, or check automation needs.

