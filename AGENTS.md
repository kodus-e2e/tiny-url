<!-- e2e rule-file-detection f83aaa-a965db -->
# Agent guidance

## Error handling convention
- Never swallow exceptions silently: every `catch` must either rethrow or report to the error tracker.
- Do not use exceptions for control flow.

@kody-sync
