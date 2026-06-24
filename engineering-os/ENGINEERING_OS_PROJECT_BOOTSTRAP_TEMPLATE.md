# Engineering OS Project Bootstrap Template

## 1. Purpose

Use this template to install Engineering OS into a new or existing project.

## 2. Required Project Files

Create:

```text
docs/00_PROJECT_MEMORY_INDEX.md
docs/00_PROJECT_MEMORY_INDEX.json
docs/00_PROJECT_RETRIEVAL_PROTOCOL.md

docs/00_PROJECT_TASK_REGISTRY.md
docs/00_PROJECT_TASK_REGISTRY.json

docs/00_PROJECT_TASK_EVENT_LOG.md
docs/00_PROJECT_TASK_EVENT_LOG.json

docs/00_PROJECT_TASK_EXECUTION_REPLAY.md
docs/00_PROJECT_TASK_EXECUTION_REPLAY.json
```

## 3. New Project Initialization

1. Create docs directory.
2. Scan existing docs and README files.
3. Scan key code directories.
4. Build Memory Index.
5. Create first Task Registry entry.
6. Create first Event Log START event.
7. Create first Replay object.
8. Add check script for index validity.
9. Commit the bootstrap.

## 4. From Zero Index

If the project has no docs, start with:

- project overview
- architecture summary
- task registry
- event log
- replay
- bootstrap check

## 5. Existing Project Migration

If the project already has history:

1. Read git log.
2. Group commits into version tasks.
3. Map docs to versions.
4. Register current tail tasks.
5. Add replay chains for the latest meaningful milestones.

## 6. First Task Registration

First task should include:

- task ID
- title
- status
- dependencies
- related docs
- related code
- checks
- expected commit

## 7. First Commit Record

The first Engineering OS commit should update Registry, Event Log, and Replay at the same time.

