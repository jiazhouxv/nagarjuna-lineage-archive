#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

ENGINEERING_OS_FILES = [
    "engineering-os/README.md",
    "engineering-os/ENGINEERING_OS_PROTOCOL.md",
    "engineering-os/ENGINEERING_OS_MEMORY_INDEX_SCHEMA.md",
    "engineering-os/ENGINEERING_OS_TASK_REGISTRY_SCHEMA.md",
    "engineering-os/ENGINEERING_OS_EXECUTION_TRACE_SCHEMA.md",
    "engineering-os/ENGINEERING_OS_CODEX_WORKLOOP_TEMPLATE.md",
    "engineering-os/ENGINEERING_OS_CHATGPT_PLANNER_TEMPLATE.md",
    "engineering-os/ENGINEERING_OS_PROJECT_BOOTSTRAP_TEMPLATE.md",
    "engineering-os/ENGINEERING_OS_VERSIONING_POLICY.md",
]

PROJECT_FILES = [
    "docs/00_PROJECT_MEMORY_INDEX.md",
    "docs/00_PROJECT_MEMORY_INDEX.json",
    "docs/00_PROJECT_RETRIEVAL_PROTOCOL.md",
    "docs/00_PROJECT_TASK_REGISTRY.md",
    "docs/00_PROJECT_TASK_REGISTRY.json",
    "docs/00_PROJECT_TASK_EVENT_LOG.md",
    "docs/00_PROJECT_TASK_EVENT_LOG.json",
    "docs/00_PROJECT_TASK_EXECUTION_REPLAY.md",
    "docs/00_PROJECT_TASK_EXECUTION_REPLAY.json",
]

JSON_FILES = [
    "docs/00_PROJECT_MEMORY_INDEX.json",
    "docs/00_PROJECT_TASK_REGISTRY.json",
    "docs/00_PROJECT_TASK_EVENT_LOG.json",
    "docs/00_PROJECT_TASK_EXECUTION_REPLAY.json",
]

FORBIDDEN_TERMS = [
    "ai-paper-diagnosis",
    "apps/miniapp",
    "v1.9.2 Runtime Unification",
    "docs/80_V190_PRODUCT_COMPLETION_GAP_MATRIX.md",
    "docs/81_V191_API_CONTRACT_ALIGNMENT.md",
    "试卷诊断",
    "小程序",
    "学生上传试卷",
    "拍照批改",
]

SCAN_FILES = ENGINEERING_OS_FILES + PROJECT_FILES


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8-sig")


def main() -> int:
    errors: list[str] = []
    checked_files = 0

    if not (ROOT / "engineering-os").is_dir():
        errors.append("Missing engineering-os/ directory")

    for rel in ENGINEERING_OS_FILES + PROJECT_FILES:
        checked_files += 1
        if not (ROOT / rel).exists():
            errors.append(f"Missing required file: {rel}")

    parsed: dict[str, object] = {}
    for rel in JSON_FILES:
        path = ROOT / rel
        if not path.exists():
            continue
        try:
            parsed[rel] = json.loads(read_text(path))
        except Exception as exc:
            errors.append(f"Invalid JSON in {rel}: {exc}")

    memory = parsed.get("docs/00_PROJECT_MEMORY_INDEX.json")
    if not isinstance(memory, dict) or not isinstance(memory.get("topic_router"), dict):
        errors.append("Memory Index JSON must contain topic_router object")

    registry = parsed.get("docs/00_PROJECT_TASK_REGISTRY.json")
    if not isinstance(registry, dict) or not isinstance(registry.get("tasks"), list):
        errors.append("Task Registry JSON must contain tasks array")

    event_log = parsed.get("docs/00_PROJECT_TASK_EVENT_LOG.json")
    if not isinstance(event_log, dict) or not isinstance(event_log.get("events"), list) or not event_log.get("events"):
        errors.append("Event Log JSON must contain non-empty events array")

    replay = parsed.get("docs/00_PROJECT_TASK_EXECUTION_REPLAY.json")
    if not isinstance(replay, dict) or not isinstance(replay.get("replay_entries"), list) or not replay.get("replay_entries"):
        errors.append("Execution Replay JSON must contain non-empty replay_entries array")

    for rel in SCAN_FILES:
        path = ROOT / rel
        if not path.exists():
            continue
        checked_files += 1
        try:
            text = read_text(path)
        except Exception as exc:
            errors.append(f"Could not read {rel} as UTF-8: {exc}")
            continue
        for term in FORBIDDEN_TERMS:
            if term in text:
                errors.append(f"Forbidden source-project content term found in {rel}: {term}")

    print(f"Checked files: {checked_files}")
    if errors:
        print("Engineering OS check failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Engineering OS check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
