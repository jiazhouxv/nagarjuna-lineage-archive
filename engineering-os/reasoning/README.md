# Engineering OS v0.2 Reasoning Layer

This directory anchors the lightweight reasoning layer introduced in Engineering OS v0.2.

The current implementation keeps reasoning local and deterministic:

- graph build from existing `data/**/*.yaml`
- shortest-path traversal
- simple influence score
- type and tag clustering

It does not modify source YAML data.
