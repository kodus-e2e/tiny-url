<!-- e2e rule-file-detection 41ab7c-9da6fa -->
# Agent guidance

## Error handling convention
- Never swallow exceptions silently: every `catch` must either rethrow or report to the error tracker.
- Do not use exceptions for control flow.

## Conventions
- Follow the API conventions described in @docs/e2e-conventions.md

@kody-sync
