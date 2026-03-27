---
sidebar_position: 5
---

# Lifecycle

## 8.1 Expected State Extraction

Read SDD and architecture docs and extract:

- expected modules/components
- runtime flows
- data contracts
- integrations
- business rules
- non-functional requirements
- test expectations
- observability needs
- security constraints
- release boundaries

Output: a structured Expected State Model.

### Example

Feature: Stage Timeout Enforcement

Expected:

- Orchestrator supports per-stage `timeout_ms`
- Hanging stage is terminated deterministically
- Timeout event is written to trace/log
- Failure propagates to result envelope
- Timeout is configurable but bounded
- Unit tests cover success/failure timeout paths

## 8.2 Current State Analysis

Inspect the repository and identify:

- what exists
- what is stubbed
- what is partial
- what is missing
- where architecture claims exceed code reality

Every assessment must be code-grounded with:

- file path
- function/class/module
- observed behavior
- missing behavior

### Example Evidence

`packages/core/src/pipeline/orchestrator.ts`

- `duration_ms` is recorded in traces
- no stage watchdog exists
- no `AbortController` or timeout wrapper used
- hung stage can stall pipeline indefinitely

## 8.3 Gap Identification

A gap is the difference between expected state and current state.

Gap types:

- Missing
- Stubbed
- Partial
- Drifted
- Unverifiable
- Blocked

## 8.4 Gap Ledger Creation

The gap ledger is the master control document.

## 8.5 Dependency Resolution

A gap is runnable only if dependencies are resolved and proof is defined.

## 8.6 Task Packaging

Each task must include:

- gap statement
- architecture constraint
- current code evidence
- allowed files
- forbidden files
- expected output
- test cases
- completion criteria

## 8.7 Multi-Agent Execution

Parallel execution is allowed only for non-conflicting gaps.

## 8.8 TDD Verification

For each gap:

1. Define target behavior from SDD.
2. Write failing tests.
3. Implement minimum code.
4. Run tests.
5. Refactor inside scope.
6. Record evidence.
7. Update ledger.

## 8.9 Gap Ledger Update

Update status, remarks, and unblocked dependencies after verification.

## 8.10 Release Readiness

Release decisions must map to verified gaps, explicit deferrals, and passing proof.
