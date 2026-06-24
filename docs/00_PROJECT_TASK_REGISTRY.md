# Project Task Registry / ???????

## Purpose
This is the human-readable task registry for the Nagarjuna Lineage Archive Engineering OS bootstrap. It is generated from README, docs, current file tree, data layout, tooling, and git log.

## Generated at
- generated_at: 2026-06-24T08:30:00+08:00
- repository: https://github.com/jiazhouxv/nagarjuna-lineage-archive.git
- branch: docs/engineering-os-v01-bootstrap

## Status Legend
Allowed statuses: DONE, IN_PROGRESS, PLANNED, BLOCKED, UNKNOWN, PARTIAL.

## Tasks
| id | title | status | priority | category | source_files | related_commits | evidence | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| T001 | Establish project foundation and metadata-first archive scope | DONE | high | project_foundation | ['README.md', 'docs/project-scope.md', 'CHANGELOG.md'] | ['03ba6bf', 'db8a3b8'] | ['inferred from README', 'inferred from docs/project-scope.md', 'inferred from git log'] | Repository identity, scope, and handoff state are documented. |
| T002 | Define source policy and citation handling | DONE | high | source_policy | ['docs/source-policy.md', 'docs/validation-guide.md'] | ['21b0f1d', '79f7621', '521772b'] | ['inferred from docs/source-policy.md', 'inferred from CHANGELOG'] | Source reference quality warnings exist; source verification remains gradual. |
| T003 | Define full-text and redistribution policy | DONE | high | full_text_policy | ['docs/full-text-policy.md', 'LICENSE'] | ['b2a318d', '87a091b', 'a4674f7'] | ['inferred from docs/full-text-policy.md', 'inferred from LICENSE'] | Project is metadata-first and avoids restricted full text. |
| T004 | Define YAML data schema | DONE | high | data_schema | ['docs/data-schema.md', 'data/'] | ['ff149f2'] | ['inferred from docs/data-schema.md', 'inferred from data directory'] | Schema covers persons, works, terms, traditions, branches, timelines, and relation files. |
| T005 | Add YAML validation tooling and CI workflow | DONE | high | validation | ['tools/validate_yaml.py', '.github/workflows/validate-yaml.yml', 'docs/validation-guide.md'] | ['6e4de26', '3173797', '21b0f1d', '57fbff0'] | ['inferred from tools/validate_yaml.py', 'inferred from .github/workflows/validate-yaml.yml', 'inferred from docs/validation-guide.md'] | Validator exists and workflow runs on main, pull request, and manual dispatch. |
| T006 | Bootstrap Tiantai module records | DONE | high | tiantai_module | ['data/traditions/tiantai.yaml', 'data/branches/tiantai-china.yaml', 'data/persons/zhiyi.yaml', 'data/relations/teacher-student.yaml'] | ['d1684dc', 'd30452f', '908c605', '8c72bfe'] | ['inferred from docs/project-state.md', 'inferred from data directories', 'inferred from git log'] | Initial Tiantai records include persons, branches, works, terms, timelines, and relations. |
| T007 | Stabilize source references and relation warnings | IN_PROGRESS | medium | relation_cleanup | ['tools/validate_yaml.py', 'docs/validation-guide.md', 'data/relations/tradition-branch.yaml'] | ['e0dd6ae', '6deb044', '0964d3a', '69ed586', '72433d3', 'f2d3ba0', '521772b', '57fbff0', '992a5a0', 'a9b3dc4'] | ['inferred from docs/project-state.md maintenance log', 'inferred from git log'] | Maintenance log records multiple source stabilization batches; broader coverage remains partial. |
| T008 | Prepare v0.1.0 release materials | PARTIAL | medium | release_preparation | ['docs/releases/v0.1.0.md', 'docs/release-checklist.md', 'CHANGELOG.md'] | ['59feccc', '03ba6bf'] | ['inferred from docs/releases/v0.1.0.md', 'inferred from docs/release-checklist.md', 'inferred from CHANGELOG'] | Release notes are explicitly marked draft; final release publication evidence not found. |
| T009 | Start Sanlun module scaffold | PARTIAL | medium | sanlun_scaffold | ['docs/sanlun-scaffold-notes.md', 'data/traditions/sanlun.yaml', 'data/persons/jizang.yaml', 'data/works/zhonglun.yaml', 'data/works/shiermenlun.yaml', 'data/works/bailun.yaml'] | ['100acb6', '5a47711', 'a897ab4', '51d1850', '4684cc5', '8c67474', 'c59cc0f'] | ['inferred from docs/sanlun-scaffold-notes.md', 'inferred from git log', 'inferred from data files'] | Scaffold started; relation records and stronger sources are planned next steps. |
| T010 | Introduce Engineering OS v0.1 project memory layer | IN_PROGRESS | high | engineering_os_bootstrap | ['engineering-os/', 'docs/00_PROJECT_MEMORY_INDEX.md', 'docs/00_PROJECT_TASK_REGISTRY.md', 'docs/00_PROJECT_TASK_EVENT_LOG.md', 'docs/00_PROJECT_TASK_EXECUTION_REPLAY.md', 'scripts/check_engineering_os.py'] | [] | ['current bootstrap task', 'source Engineering OS commit ae4a6fe'] | This task creates the reusable protocol layer and Nagarjuna-specific memory, task, event, and replay files. |
| T011 | Add export or site build tooling | PLANNED | low | site_build | ['docs/roadmap.md'] | [] | ['inferred from docs/roadmap.md', 'no explicit evidence found in file tree'] | Roadmap mentions CSV or JSON export and searchable indexes; no build tool exists yet. |
