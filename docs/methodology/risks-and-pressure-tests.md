---
sidebar_position: 14
---

# Risks And Pressure Tests

## Where Assumptions Need Pressure-Testing

1. SDD alone is not sufficient.
2. Multi-agent non-conflict is harder than file-level isolation.
3. Gap ledger updates can become optimistic if proof discipline is weak.
4. No-hallucination is an operational constraint set, not a toggle.

## Opposing Viewpoint

A simpler method is: implement end-to-end from SDD, then test and patch.

That may be faster at the start.

## Why GBD Is Stronger For Larger Systems

GBD is more trustworthy when:

- architecture claims drift
- multiple agents run in parallel
- partial systems contain stubs and misleading code
- release confidence matters
- missing scope must be explained precisely
