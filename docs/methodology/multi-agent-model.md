---
sidebar_position: 9
---

# Multi-Agent Model

## Fact

Parallel AI execution works only when conflicts are structurally prevented, not merely unlikely.

## Opinion

Most teams underestimate merge conflict risk and semantic conflict risk.

## Non-Conflicting Task Rule

Two gaps may run in parallel only if all are true:

1. They do not modify the same files.
2. They do not modify shared interfaces without a stable contract.
3. They do not alter the same database schema area.
4. They do not change the same tests.
5. They do not rely on the same unresolved dependency.
6. They do not change shared configuration in incompatible ways.

## Conflict Classes

- File conflict
- API/interface conflict
- Schema conflict
- Behavioral conflict
- Test ownership conflict
- Dependency conflict

## Parallelization Matrix

### Safe In Parallel

- isolated module implementation
- isolated test creation
- docs updates after code freeze
- adapter implementations behind fixed interface

### Unsafe In Parallel

- shared core types
- orchestrator contracts
- root config
- routing architecture
- DB migration chains
- policy engine behavior
