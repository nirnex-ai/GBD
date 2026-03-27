---
sidebar_position: 12
---

# Verification Rules

## GBD-TDD Loop

For each gap:

1. Define target behavior from SDD.
2. Write failing tests from behavior.
3. Implement minimum code.
4. Run tests.
5. Refactor only inside scope.
6. Record evidence.
7. Update ledger.

## Proof Categories

- unit tests
- integration tests
- snapshot or contract tests
- schema validation
- trace/log assertions
- static type checks
- lint rules
- manual evidence only when automation is impossible

## Rule

A gap is not complete because code exists.
A gap is complete because required proof passes.
