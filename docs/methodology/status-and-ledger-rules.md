---
sidebar_position: 10
---

# Status Model And Ledger Rules

## Mandatory Gap Document Rules

1. Every row must be code-grounded.
2. No vague remarks like "probably missing."
3. No status upgrade without proof.
4. Dependencies must point to a real gap item or gap ID.
5. Execution order must be recomputed after each verified completion.
6. Architecture claims lose to code evidence until implemented.

## Status Transition Rules

- `Not Developed -> Partial -> Implemented-Unverified -> Verified`
- `Stubbed -> Partial -> Implemented-Unverified -> Verified`
- `Blocked -> Not Developed/Partial` once dependencies clear
- `Any state -> Drifted` if architecture/code contradiction appears

## Verification Semantics

A gap is complete because proof passes, not because code exists.

If behavior cannot be practically tested, mark it:

- `Implemented-Unverified` (not `Verified`)
