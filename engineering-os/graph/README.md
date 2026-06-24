# Engineering OS Knowledge Graph Layer

The graph layer creates a computed index from existing project data.

Primary output:

- `docs/00_KNOWLEDGE_GRAPH_INDEX.json`

Primary commands:

```bash
node scripts/graph-cli.js build
node scripts/graph-cli.js stats
node scripts/graph-cli.js path <from> <to>
```

The builder is intentionally lightweight for v0.2. It reads the current YAML shape used by the Nagarjuna Lineage Archive and emits nodes, edges, clusters, and statistics without changing business data.
