---
sidebar_position: 6
---

# Architecture Diagram

```mermaid
flowchart TD
    A[Software Design Document] --> B[Expected State Extractor]
    C[Architecture and Project Docs] --> B
    D[Codebase] --> E[Current State Analyzer]

    B --> F[Gap Engine]
    E --> F

    F --> G[Gap Ledger]
    G --> H[Priority and Dependency Resolver]

    H --> I[Task Packager]
    I --> J1[Agent 1]
    I --> J2[Agent 2]
    I --> J3[Agent N]

    J1 --> K[Scoped TDD Loop]
    J2 --> K
    J3 --> K

    K --> L[Code Changes]
    K --> M[Tests]
    K --> N[Evidence Pack]

    L --> O[Conflict Detector]
    M --> P[Verification Gate]
    N --> P
    O --> P

    P -->|Pass| Q[Gap Ledger Updater]
    P -->|Fail| R[Return to Gap Queue]

    Q --> S[Release Readiness]
```

## Logical Architecture

1. Inputs Layer: SDD, architecture docs, project docs, codebase.
2. Analysis Layer: expected state extractor, current state analyzer, code-grounded assessor.
3. Gap Engine: identifier, classifier, priority resolver, dependency resolver.
4. Planning Layer: runnable selector, task packager, conflict detector, execution planner.
5. Execution Layer: agents, scoped TDD loop, change and test generation.
6. Verification Layer: test runner, contract checker, architecture check, conflict check.
7. Governance Layer: ledger updater, evidence recorder, release summary.
