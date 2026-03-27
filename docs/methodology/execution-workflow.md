---
sidebar_position: 8
---

# Gap-Based Execution Workflow

## Valid Unit Of Work

The only valid implementation unit is:

**One gap + bounded scope + proof**

Invalid task scopes:

- "build the feature"
- "improve architecture"
- "make it production ready"

These are too loose and increase invention risk.

## Execution Loop

### 1. Select Runnable Gaps

A gap is runnable only if:

- priority is selected
- dependencies are resolved
- scope is bounded
- proof is defined

### 2. Package Gap Task

Each task includes:

- gap statement
- architecture constraint
- current code evidence
- allowed files
- forbidden files
- expected output
- test cases
- completion criteria

### 3. Run TDD Loop

- write failing tests
- implement minimal code
- pass tests
- refactor within scope
- update evidence

### 4. Verify

- tests pass
- no conflict with parallel tasks
- architecture still holds
- ledger can be updated truthfully

### 5. Update Gap Ledger

- status changes
- remarks updated
- downstream dependencies unblocked when appropriate
