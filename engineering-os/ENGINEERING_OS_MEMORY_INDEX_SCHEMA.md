# Engineering OS Memory Index Schema

## 1. Purpose

The Memory Index prevents default full-repository scanning. It gives humans and agents a structured route from project topic to relevant docs, sections, code, versions, and checks.

## 2. Memory Layers

- L0 Global Index: global entry, machine-readable index, retrieval protocol.
- L1 Product / PRD Memory: product goals, scope, roadmap, gap matrix.
- L2 Architecture Memory: architecture decisions, version chain, module boundaries.
- L3 API / Contract Memory: frontend/backend contracts, provider contracts, schema contracts.
- L4 Backend / Database Memory: backend runtime, persistence, migrations, guards.
- L5 Frontend Memory: pages, components, UX flows, frontend services.
- L6 AI / OCR / Report Memory: AI adapters, OCR, report schemas, generation pipelines.
- L7 Business / Payment / Growth Memory: pricing, membership, order, growth, entitlement.
- L8 Audit / CI / Freeze Memory: audits, checks, workflows, release gates.
- L9 Development Record Memory: task registry, event log, replay, git/check records.

## 3. JSON Shape

```json
{
  "version": "",
  "project": "",
  "memory_layers": [],
  "documents": [],
  "code_files": [],
  "topic_router": {},
  "version_chain": [],
  "coverage": {}
}
```

## 4. Document Object

```json
{
  "id": "",
  "path": "",
  "title": "",
  "memory_layer": "",
  "tags": [],
  "status": "",
  "role": "",
  "headings": [],
  "key_sections": [],
  "when_to_read": [],
  "read_mode": "section_first",
  "depends_on": [],
  "supersedes": [],
  "superseded_by": []
}
```

## 5. Code File Object

```json
{
  "path": "",
  "layer": "",
  "tags": [],
  "role": "",
  "when_to_read": [],
  "risk_level": ""
}
```

## 6. Retrieval Rules

- Use section-first retrieval by default.
- Use topic-router retrieval for task-specific context.
- Do not default to full scans.
- Full scans are allowed only when creating a new index, auditing major architecture, reordering a roadmap, or when the index is missing or untrusted.

## 7. New Document Rule

Every important new document must be added to:

- Markdown index
- JSON index
- topic router if it introduces a new topic
- version chain if it represents a version or task milestone

