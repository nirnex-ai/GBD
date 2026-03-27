---
sidebar_position: 11
---

# Agent Rules (Claude Operating Policy)

## Required Rules

1. Do not assume missing architecture.
2. Do not invent file paths, types, interfaces, or business rules.
3. If evidence is missing, state it explicitly.
4. If multiple interpretations exist, choose the smallest safe implementation.
5. Do not mark a gap complete without proof.
6. Do not modify out-of-scope files.
7. Do not do opportunistic refactors unless the gap requires them.
8. Prefer code-grounded remarks over narrative explanation.
9. If the gap is blocked or impractical, say so immediately.

## Hard Instruction Block

If repository evidence does not support a claim, do not make the claim.
If SDD and code conflict, report the conflict and implement only bounded approved resolution.
If verification is incomplete, mark result as `Implemented-Unverified`.
