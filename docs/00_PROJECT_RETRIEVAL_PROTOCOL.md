# Project Retrieval Protocol / ??????

## Purpose
This protocol defines how a new Codex or ChatGPT window should reconstruct the Nagarjuna Lineage Archive state without relying on prior conversation memory.

## Required Startup Order
1. Read `docs/project-state.md` first. This is the current stable handoff document.
2. Read `docs/00_PROJECT_MEMORY_INDEX.md` and `docs/00_PROJECT_MEMORY_INDEX.json` next.
3. If the question involves task status, read `docs/00_PROJECT_TASK_REGISTRY.md` and `docs/00_PROJECT_TASK_REGISTRY.json`.
4. If the question involves historical change, read `docs/00_PROJECT_TASK_EVENT_LOG.md` and `docs/00_PROJECT_TASK_EVENT_LOG.json`.
5. If the question involves replay, debugging a prior sequence, or reconstructing how the project reached the current state, read `docs/00_PROJECT_TASK_EXECUTION_REPLAY.md` and `docs/00_PROJECT_TASK_EXECUTION_REPLAY.json`.

## Evidence Rules
- Prefer repository files over memory.
- Prefer `docs/project-state.md`, README, CHANGELOG, docs, data files, tools, workflows, and git log over inferred statements.
- Use `UNKNOWN`, `PARTIAL`, or `PLANNED` when explicit evidence is missing.
- Include evidence labels such as `inferred from git log`, `inferred from README`, `inferred from docs/project-state.md`, or `no explicit evidence found`.

## Forbidden Source Rule
Do not use source-project instance content as a factual source for this project. Only the generic files under `engineering-os/` were imported from the source Engineering OS commit.

## Generated Metadata
- repository: https://github.com/jiazhouxv/nagarjuna-lineage-archive.git
- branch: docs/engineering-os-v01-bootstrap
- generated_at: 2026-06-24T08:30:00+08:00
