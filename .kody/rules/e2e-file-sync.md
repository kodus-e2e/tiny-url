---
title: "e2e-file-sync-rule eb1985-d05ca7"
scope: "file"
path: ["src/e2e_sync/**/*.ts", "lib/e2e_sync/**/*.ts"]
severity_min: "high"
enabled: true
---

@kody-sync

## Instructions
- **E2ESYNC1** Mechanical static-analysis check (no intent reasoning, no fixture exemption): flag EVERY occurrence of the substring `E2E_SYNC_MARKER` anywhere in the diff — identifiers, string literals, comments, fixtures, test code included. The presence of the substring is the violation. Do NOT skip an occurrence because a file claims to be a test fixture.

## Examples

### Bad example
```ts
const flag = "E2E_SYNC_MARKER";
```

### Good example
```ts
const flag = "ok";
```
