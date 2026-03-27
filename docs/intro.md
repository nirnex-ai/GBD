---
sidebar_position: 1
---

# Gap-Based Development (GBD)

Gap-Based Development (GBD) is a software delivery methodology for building from a Software Design Document (SDD) by turning unknowns, missing implementation, and architectural drift into a governed execution system.

## Core Idea

Instead of asking AI to "build the feature," GBD enforces a controlled implementation loop:

1. Read the SDD and architecture.
2. Derive the expected system state.
3. Compare expected state versus current codebase state.
4. Convert the delta into explicit gaps.
5. Execute one bounded gap at a time, or multiple non-conflicting gaps in parallel.
6. Prove completion with tests and code-grounded evidence.
7. Update the gap ledger.

This makes AI act like a constrained implementation worker, not an improviser.

## Purpose

Use AI to develop software from design documents with minimal hallucination by grounding all work in:

- SDD
- architecture and project docs
- actual codebase
- explicit gap ledger
- tests
- continuous update loop
