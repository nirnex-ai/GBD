---
sidebar_position: 15
---

# Appendix: Templates

## Gap Task Contract

```md
# Gap Task

## Gap ID
GBD-XXX

## Area
[Area Name]

## Gap Item
[Specific missing/partial functionality]

## Goal
Implement only what is needed to close this gap.

## Expected State
[Derived from SDD / architecture]

## Current State Evidence
- [file path + observed behavior]
- [file path + missing behavior]

## In Scope
- [allowed modules/files]
- [allowed tests]

## Out of Scope
- [forbidden modules]
- [unrelated refactors]
- [architecture redesign]

## Dependencies
- [gap ids]

## Required Proof
- [unit tests]
- [integration tests]
- [contract checks]

## Done When
- [behavior exists]
- [tests pass]
- [ledger remark can be updated truthfully]

## Output Format
1. Files changed
2. What was implemented
3. Tests added/updated
4. Remaining risks
5. Exact gap status recommendation
```

## Example Lifecycle Record

| Area | Gap Item | Status | Reason | Remarks (Code-Grounded Assessment) | Priority | Depends On | Dependency | Execution Order |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Orchestrator | No timeout handling per stage | Not Developed | Required by runtime reliability contract | `duration_ms` logged in traces, but no stage-level timeout enforcement or cancellation wrapper exists | High | No | - | 12 |

After implementation:

- `Verified` if tests prove it
- `Implemented-Unverified` if behavior exists but proof is incomplete
