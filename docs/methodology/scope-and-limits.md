---
sidebar_position: 2
---

# Scope And Practical Limits

## Applicability

GBD is well-suited for:

- partially built systems
- architecture-led projects
- incremental completion of large platforms
- multi-agent execution with clear task boundaries

## Not Ideal For

GBD is a poor fit for:

- vague product ideas with no real SDD
- greenfield projects with unstable requirements
- teams unwilling to maintain a strict gap ledger
- domains where tests cannot meaningfully validate outcomes

## Practical Limits

GBD is failure-resistant, not failure-proof.

It can still fail when:

- SDD is wrong
- architecture docs are stale
- code analysis is shallow
- tests are weak
- dependencies are mis-modeled
- agents are allowed to roam outside scope
- humans approve optimistic ledger updates
