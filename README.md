# Nagarjuna Lineage Archive

龙树菩萨思想谱系资料库

## Overview

Nagarjuna Lineage Archive is a structured open-source digital humanities archive for studying Nāgārjuna-related Buddhist lineages, texts, doctrines, chronology, regional branches, and East Asian tradition-level reception.

This project focuses on machine-readable metadata, bibliographic references, lineage records, doctrinal terms, source links, citation identifiers, and research-oriented indexes.

The first active module is the Tiantai tradition, including Chinese Tiantai, Japanese Tendai, and Korean Cheontae branches.

## 中文简介

龙树菩萨思想谱系资料库是一个开源、结构化、机器可读的佛教数字人文资料库。

本项目以龙树菩萨为思想源点，整理汉传佛教诸宗中的祖师、论典、术语、历史时间线、地域分支、思想传承关系和文献来源索引。

第一阶段重点建设天台宗模块，包括：

- 中国天台宗
- 日本天台宗 Tendai
- 韩国天台宗 Cheontae

## Project Scope

This project does not aim to redistribute restricted full-text Buddhist corpora.

The project focuses on:

- Person records
- Work metadata
- Tradition records
- Branch records
- Doctrinal term records
- Chronology records
- Lineage and influence relations
- Source references
- Citation schemas
- Validation tools

Full texts are included only when the source license clearly permits redistribution.

## Initial Focus

The first development phase focuses on the relationship between:

- Nāgārjuna
- Madhyamaka thought
- Chinese Buddhist reception
- Tiantai doctrinal development
- Zhiyi
- Mohe Zhiguan
- Fahua Xuanyi
- Fahua Wenju
- Chinese Tiantai
- Japanese Tendai
- Korean Cheontae

## Repository Structure

Planned structure:

```text
data/
  persons/
  works/
  traditions/
  branches/
  terms/
  timelines/
  relations/

docs/
  project-scope.md
  source-policy.md
  data-schema.md
  chronology-model.md
  geography-model.md
  lineage-claims.md
  roadmap.md

tools/
  validate_yaml.py
  build_index.py

traditions/
  tiantai/
    README.md
    china.md
    japan-tendai.md
    korea-cheontae.md
    patriarchs.md
    texts.md
    terms.md
    chronology.md
