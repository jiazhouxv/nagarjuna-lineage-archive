# Visualization Release Notes v0.1

## Release scope

This release line establishes the first public HTML5 demonstration layer for the Nagarjuna Lineage Archive.

## Public pages

- Eight-tradition overview console
- Tiantai dense knowledge graph demo
- Sanlun dense knowledge graph demo

## Delivered capabilities

- Native HTML5 / CSS / SVG / JavaScript
- No CDN or external JavaScript dependency
- Chinese, Japanese, Korean, and English direction established
- Interactive nodes and relation paths
- Node and edge detail panels
- Type filtering
- Preset relation paths
- Timeline previews
- Explicit demo and review boundaries
- Public GitHub Pages links
- Shared visualization JSON Schema
- Standalone Tiantai graph JSON artifact

## Current data status

The public visualization pages are demonstrations of the future archive experience.

They are not a replacement for canonical repository records and do not automatically represent reviewed scholarly conclusions.

Current graph data may include:

- `visualization_sample_only`
- `needs_review`
- `partial`

## Known limitations

- Tiantai and Sanlun pages still contain renderer-specific layout logic.
- Not every displayed demo relation is generated from canonical YAML.
- Source panels and page-level evidence are not yet exposed in the public UI.
- The six remaining tradition modules are planned, not populated.
- Automated graph-reference validation is not yet part of Actions.

## Next release targets

- data-driven renderer shared by Tiantai and Sanlun
- JSON validation in CI
- edge endpoint integrity checks
- multilingual label completeness checks
- source and bibliography side panels
- reviewed graph export pipeline

## Release boundary

No demo relation was promoted to reviewed or canonical status as part of v0.1.
