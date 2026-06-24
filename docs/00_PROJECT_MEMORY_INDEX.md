# Project Memory Index / ??????

## Purpose
This file is the human-readable Memory Index for the Nagarjuna Lineage Archive Engineering OS bootstrap. It maps the current repository truth sources, data directories, tooling, topic router, version chain, and coverage gaps.

## Repository
- repository: https://github.com/jiazhouxv/nagarjuna-lineage-archive.git
- project: Nagarjuna Lineage Archive / ??????

## Branch
- branch: docs/engineering-os-v01-bootstrap
- head commit: 03ba6bf

## Generated at
- generated_at: 2026-06-24T08:30:00+08:00
- version: engineering-os-v0.1-bootstrap
- graph_index: `docs/00_KNOWLEDGE_GRAPH_INDEX.json`

## Memory Layers
| id | title | paths | evidence |
| --- | --- | --- | --- |
| handoff_state | Project state handoff | ['docs/project-state.md'] | ['inferred from docs/project-state.md'] |
| scope_policy | Scope, source, full-text, and license policy | ['README.md', 'docs/project-scope.md', 'docs/source-policy.md', 'docs/full-text-policy.md', 'LICENSE'] | ['inferred from README', 'inferred from docs'] |
| data_model | Structured YAML data model | ['docs/data-schema.md', 'data/'] | ['inferred from docs/data-schema.md', 'inferred from file tree'] |
| validation | YAML validation and CI workflow | ['tools/validate_yaml.py', '.github/workflows/validate-yaml.yml', 'docs/validation-guide.md'] | ['inferred from tools/validate_yaml.py', 'inferred from GitHub Actions workflow'] |
| release_planning | Release and roadmap planning | ['CHANGELOG.md', 'docs/roadmap.md', 'docs/release-checklist.md', 'docs/releases/v0.1.0.md'] | ['inferred from CHANGELOG', 'inferred from docs/releases/v0.1.0.md'] |
| sanlun_scaffold | Sanlun scaffold planning and initial records | ['docs/sanlun-scaffold-notes.md', 'data/traditions/sanlun.yaml', 'data/persons/jizang.yaml', 'data/works/zhonglun.yaml', 'data/works/shiermenlun.yaml', 'data/works/bailun.yaml'] | ['inferred from docs/sanlun-scaffold-notes.md', 'inferred from git log'] |

## Key Documents
| path | role | evidence |
| --- | --- | --- |
| README.md | project overview and maintenance workflow | inferred from README |
| CHANGELOG.md | change history and validation notes | inferred from CHANGELOG |
| docs/project-state.md | primary handoff state for new windows | inferred from docs/project-state.md |
| docs/project-scope.md | archive scope and out-of-scope boundaries | inferred from docs/project-scope.md |
| docs/source-policy.md | source, citation, and redistribution policy | inferred from docs/source-policy.md |
| docs/full-text-policy.md | restricted full-text handling policy | inferred from docs/full-text-policy.md |
| docs/data-schema.md | YAML schema and field rules | inferred from docs/data-schema.md |
| docs/validation-guide.md | validation behavior and warning policy | inferred from docs/validation-guide.md |
| docs/roadmap.md | milestones and future module plan | inferred from docs/roadmap.md |
| docs/release-checklist.md | v0.1.0 release checklist | inferred from docs/release-checklist.md |
| docs/releases/v0.1.0.md | v0.1.0 release notes draft | inferred from docs/releases/v0.1.0.md |
| docs/sanlun-scaffold-notes.md | Sanlun scaffold status and next steps | inferred from docs/sanlun-scaffold-notes.md |

## Data Directories
| path | count | summary |
| --- | --- | --- |
| data/persons/ | 12 | person records including Nagarjuna, Tiantai figures, and initial Sanlun figures |
| data/traditions/ | 2 | Tiantai and Sanlun tradition records |
| data/branches/ | 3 | Chinese Tiantai, Japanese Tendai, and Korean Cheontae branch records |
| data/works/ | 6 | Tiantai works and initial Sanlun/Madhyamaka work records |
| data/terms/ | 3 | initial Tiantai doctrinal term records |
| data/timelines/ | 2 | Tiantai overview and Chinese Tiantai timeline records |
| data/relations/ | 3 | teacher-student, work-compilation, and tradition-branch relation files |

## Code / Tooling Files
| path | role |
| --- | --- |
| tools/validate_yaml.py | YAML validator |
| .github/workflows/validate-yaml.yml | GitHub Actions YAML validation workflow |
| requirements.txt | Python dependency declaration |

## Topic Router
- `nagarjuna`: `README.md`, `docs/project-scope.md`, `data/persons/nagarjuna.yaml`
- `longshu`: `README.md`, `docs/project-scope.md`, `data/persons/nagarjuna.yaml`
- `middle_way`: `docs/project-scope.md`, `docs/sanlun-scaffold-notes.md`, `data/works/zhonglun.yaml`
- `madhyamaka`: `README.md`, `docs/project-scope.md`, `docs/sanlun-scaffold-notes.md`, `data/traditions/sanlun.yaml`
- `emptiness`: `docs/roadmap.md`, `docs/sanlun-scaffold-notes.md`
- `two_truths`: `docs/roadmap.md`, `docs/sanlun-scaffold-notes.md`
- `mulamadhyamakakarika`: `data/works/zhonglun.yaml`, `docs/sanlun-scaffold-notes.md`
- `commentary`: `data/relations/work-compilation.yaml`, `data/works/fahua-wenju.yaml`, `data/works/fahua-xuanyi.yaml`
- `translation`: `data/persons/kumarajiva.yaml`, `docs/project-scope.md`, `docs/sanlun-scaffold-notes.md`
- `citation`: `docs/source-policy.md`, `docs/data-schema.md`, `docs/validation-guide.md`
- `sources`: `docs/source-policy.md`, `docs/full-text-policy.md`, `docs/validation-guide.md`
- `content_structure`: `docs/data-schema.md`, `data/`
- `publishing`: `docs/release-checklist.md`, `docs/releases/v0.1.0.md`, `CHANGELOG.md`
- `site_build`: `UNKNOWN`, `no explicit evidence found`
- `tiantai`: `data/traditions/tiantai.yaml`, `data/branches/tiantai-china.yaml`, `docs/project-state.md`
- `sanlun`: `docs/sanlun-scaffold-notes.md`, `data/traditions/sanlun.yaml`, `data/persons/jizang.yaml`
- `validation`: `tools/validate_yaml.py`, `docs/validation-guide.md`, `.github/workflows/validate-yaml.yml`
- `release`: `docs/release-checklist.md`, `docs/releases/v0.1.0.md`, `CHANGELOG.md`

## Version / Maintenance Chain
- v0.1.0 - Initial Tiantai Module Structure - status: PARTIAL - evidence: inferred from docs/project-state.md, inferred from docs/releases/v0.1.0.md
- post-v0.1.0 - Stabilization and source/reference cleanup - status: IN_PROGRESS - evidence: inferred from docs/project-state.md, inferred from git log
- engineering-os-v0.1-bootstrap - Engineering OS project memory bootstrap - status: IN_PROGRESS - evidence: current bootstrap task

## Coverage / Gaps
- project_identity: PARTIAL: repository and docs identify Nagarjuna Lineage Archive.
- task_history: PARTIAL: task history inferred from git log, CHANGELOG, and docs/project-state.md.
- checks: PARTIAL: validation tooling and prior validation notes exist; not every historical commit has explicit check output.
- site_build: UNKNOWN: no site build system found in current file tree.
- full_text: No restricted full text added by this bootstrap.


## Retrieval Rules
1. Start every new maintenance window by reading `docs/project-state.md`.
2. Then read `docs/00_PROJECT_MEMORY_INDEX.md` and `docs/00_PROJECT_MEMORY_INDEX.json`.
3. For task status, read `docs/00_PROJECT_TASK_REGISTRY.md` and `.json`.
4. For historical changes, read `docs/00_PROJECT_TASK_EVENT_LOG.md` and `.json`.
5. For execution replay, read `docs/00_PROJECT_TASK_EXECUTION_REPLAY.md` and `.json`.
6. Do not rely on old chat memory as a fact source.
7. Do not use source-project instance content as facts for this project.
8. Treat `UNKNOWN`, `PARTIAL`, and `PLANNED` as explicit uncertainty markers.
