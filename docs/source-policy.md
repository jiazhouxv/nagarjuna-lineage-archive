# Source Policy

## Purpose

This document defines the source and redistribution policy for Nagarjuna Lineage Archive.

The project is designed as a metadata-first, source-linked, research-oriented open archive. It does not aim to copy or redistribute restricted Buddhist full-text corpora.

## Core Principle

The archive prioritizes:

- Bibliographic metadata
- Source references
- Canon identifiers
- Citation links
- Person records
- Work records
- Tradition records
- Branch records
- Doctrinal term records
- Chronology records
- Lineage and influence relations
- Contributor-written summaries
- Machine-readable structured data

Full text should be added only when redistribution is clearly allowed by the source license.

## Allowed Content

The following types of content are allowed:

1. Original metadata created by contributors
2. Original summaries written by contributors
3. Public bibliographic information
4. Canon references and citation identifiers
5. Source links to external databases
6. Short quotations when legally and academically appropriate
7. Public domain material when verified
8. Data derived from clearly licensed sources, with attribution
9. Contributor-created translations or explanations
10. YAML, CSV, JSON, Markdown, and code tools created for this project

## Restricted Content

The following content should not be added unless permission or license compatibility is verified:

1. Full-text corpora copied from restricted databases
2. Modern copyrighted editions
3. Copyrighted scans or images
4. Large-scale copied content from CBETA, SAT, or similar databases without checking license terms
5. Commercially published modern translations
6. Unsourced doctrinal claims
7. Unverified lineage claims presented as historical fact

## External Source Handling

When using external sources, records should include:

- Source name
- Source URL
- Access date when relevant
- License or terms information when known
- Canon identifier when available
- Notes about reliability or limitations

Example source reference format:

    source_refs:
      - name: CBETA
        url: ""
        identifier: ""
        license_note: "External source. Full text not redistributed in this repository."
      - name: SAT
        url: ""
        identifier: ""
        license_note: "External source. Used for reference linking only unless redistribution is permitted."

## CBETA and SAT

CBETA, SAT, and similar Buddhist text databases are important reference sources.

This project may record links, identifiers, metadata, and citation references related to those sources.

However, this project should not copy large-scale full-text materials from those databases unless the relevant license clearly permits redistribution in this repository.

## Contributor Summaries

Contributors are encouraged to write original summaries in their own words.

Summaries should be:

- Clearly sourced
- Neutral in tone
- Separated from direct quotations
- Marked as summary or interpretation when appropriate
- Avoiding sectarian judgement

## Lineage Claims

Lineage claims should be recorded as claims within a tradition, not as automatically verified historical facts.

Each claim should include:

- Claiming tradition
- Claimed relationship
- Source reference
- Confidence level
- Historical notes

Example lineage claim format:

    lineage_claims:
      - tradition: tiantai
        claim: "Nagarjuna is honored as an ancestral figure in Tiantai lineage narratives."
        source_refs: []
        confidence: medium
        note: "Recorded as a tradition-level claim, not as an independent historical assertion."

## License Model

Planned license model:

- Data and documentation: CC BY-SA 4.0
- Code tools: MIT License

A dedicated LICENSE file will define the license policy more clearly.

## Review Rule

When in doubt, do not add full text.

Instead, add:

- Metadata
- Source links
- Citation identifiers
- Original summary
- Topic tags
- Notes for future review
