#!/usr/bin/env python3
"""
Basic YAML validator for Nagarjuna Lineage Archive.

This script checks:
- YAML syntax
- required fields by record type
- duplicate IDs
- filename and ID consistency warning
- source reference quality warnings
- relation target existence warnings

Usage:
    python tools/validate_yaml.py
"""

from __future__ import annotations

import sys
from pathlib import Path
from typing import Any

try:
    import yaml
except ImportError:
    print("Missing dependency: PyYAML")
    print("Install with: pip install pyyaml")
    sys.exit(1)


ROOT = Path(__file__).resolve().parents[1]

DATA_DIR = ROOT / "data"

REQUIRED_FIELDS_BY_TYPE = {
    "person": ["id", "type", "name_zh", "name_en", "summary_zh", "summary_en", "source_refs", "status"],
    "work": ["id", "type", "title_zh", "title_en", "summary_zh", "summary_en", "source_refs", "status"],
    "term": ["id", "type", "term_zh", "term_en", "summary_zh", "summary_en", "source_refs", "status"],
    "tradition": ["id", "type", "name_zh", "name_en", "summary_zh", "summary_en", "source_refs", "status"],
    "branch": ["id", "type", "name_zh", "name_en", "summary_zh", "summary_en", "source_refs", "status"],
    "timeline": ["id", "type", "title_zh", "title_en", "events", "status"],
    "relation_file": ["id", "type", "relations", "status"],
}

RECOMMENDED_SOURCE_REF_FIELDS = [
    "name",
    "url",
    "identifier",
    "access_date",
    "license_note",
    "reliability_note",
]

RELATION_TARGET_FIELDS = [
    "subject",
    "object",
    "teacher",
    "student",
    "key_persons",
]


def load_yaml(path: Path) -> dict[str, Any] | None:
    try:
        with path.open("r", encoding="utf-8") as f:
            data = yaml.safe_load(f)
    except yaml.YAMLError as exc:
        print(f"[YAML ERROR] {path}: {exc}")
        return None
    except Exception as exc:
        print(f"[READ ERROR] {path}: {exc}")
        return None

    if not isinstance(data, dict):
        print(f"[STRUCTURE ERROR] {path}: top-level YAML must be a mapping/object")
        return None

    return data


def validate_required_fields(path: Path, data: dict[str, Any]) -> int:
    errors = 0
    record_type = data.get("type")

    if not record_type:
        print(f"[ERROR] {path}: missing required field 'type'")
        return 1

    required = REQUIRED_FIELDS_BY_TYPE.get(record_type)
    if not required:
        print(f"[WARNING] {path}: unknown type '{record_type}', skipping required-field check")
        return 0

    for field in required:
        if field not in data or data.get(field) in (None, ""):
            print(f"[ERROR] {path}: missing or empty required field '{field}'")
            errors += 1

    return errors


def validate_filename_id(path: Path, data: dict[str, Any]) -> int:
    record_id = data.get("id")
    if not record_id:
        return 0

    expected = f"{record_id}.yaml"
    if path.name != expected:
        print(f"[WARNING] {path}: filename does not match id. Expected '{expected}'")

    return 0


def validate_source_refs(path: Path, data: dict[str, Any]) -> int:
    source_refs = data.get("source_refs")

    if source_refs in (None, ""):
        return 0

    if not isinstance(source_refs, list):
        print(f"[WARNING] {path}: source_refs should be a list")
        return 0

    for index, ref in enumerate(source_refs, start=1):
        if not isinstance(ref, dict):
            print(f"[WARNING] {path}: source_refs[{index}] should be a mapping/object")
            continue

        missing = [
            field
            for field in RECOMMENDED_SOURCE_REF_FIELDS
            if ref.get(field) in (None, "")
        ]
        if missing:
            missing_fields = ", ".join(missing)
            print(f"[WARNING] {path}: source_refs[{index}] missing recommended field(s): {missing_fields}")

    return 0


def iter_relation_targets(value: Any) -> list[str]:
    if value in (None, ""):
        return []

    if isinstance(value, str):
        return [value]

    if isinstance(value, list):
        targets: list[str] = []
        for item in value:
            if isinstance(item, str):
                targets.append(item)
        return targets

    return []


def validate_relation_targets(path: Path, data: dict[str, Any], known_ids: set[str]) -> int:
    if data.get("type") != "relation_file":
        return 0

    relations = data.get("relations")
    if not isinstance(relations, list):
        print(f"[WARNING] {path}: relation_file relations should be a list")
        return 0

    for index, relation in enumerate(relations, start=1):
        if not isinstance(relation, dict):
            print(f"[WARNING] {path}: relations[{index}] should be a mapping/object")
            continue

        relation_id = relation.get("id", f"relation-{index}")
        for field in RELATION_TARGET_FIELDS:
            for target in iter_relation_targets(relation.get(field)):
                if target not in known_ids:
                    print(f"[WARNING] {path}: {relation_id}.{field} references unknown id '{target}'")

    return 0


def collect_yaml_files() -> list[Path]:
    if not DATA_DIR.exists():
        print(f"[ERROR] data directory not found: {DATA_DIR}")
        return []

    return sorted(DATA_DIR.rglob("*.yaml"))


def main() -> int:
    yaml_files = collect_yaml_files()
    if not yaml_files:
        print("No YAML files found.")
        return 1

    records: list[tuple[Path, dict[str, Any]]] = []
    seen_ids: dict[str, Path] = {}
    errors = 0

    for path in yaml_files:
        data = load_yaml(path)
        if data is None:
            errors += 1
            continue

        records.append((path, data))

        record_id = data.get("id")
        if not record_id:
            print(f"[ERROR] {path}: missing required field 'id'")
            errors += 1
        else:
            if record_id in seen_ids:
                print(f"[ERROR] duplicate id '{record_id}' in:")
                print(f"        - {seen_ids[record_id]}")
                print(f"        - {path}")
                errors += 1
            else:
                seen_ids[record_id] = path

    known_ids = set(seen_ids)

    for path, data in records:
        errors += validate_required_fields(path, data)
        validate_filename_id(path, data)
        validate_source_refs(path, data)
        validate_relation_targets(path, data, known_ids)

    print()
    print(f"Checked {len(yaml_files)} YAML files.")

    if errors:
        print(f"Validation failed with {errors} error(s).")
        return 1

    print("Validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
