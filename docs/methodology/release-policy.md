---
sidebar_position: 13
---

# Release Policy

A release is allowed only when:

- all release-scope high-priority gaps are Verified
- medium gaps are Verified or explicitly deferred
- no blocked high-priority dependency remains
- tests pass
- architecture-critical contracts are not violated
- gap ledger reflects real state

## Release Readiness Template

```md
# Release Readiness

## Scope
[Release scope]

## Verified Gaps
- GBD-001
- GBD-004
- GBD-008

## Deferred Gaps
- GBD-011 (low priority)
- GBD-013 (outside release path)

## Risks
- [known limitation]
- [implemented-unverified area]

## Recommendation
Release / Do Not Release
```
