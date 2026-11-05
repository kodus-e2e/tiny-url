File src/e2e-decision-memory-collision-fixture.ts, lines 6-7:

Cache key drops tenant scope, allowing cross-tenant key collisions

The key contract returned by this fixture is inconsistent: when `tenantId` is present the key is the bare tenant id, and when it is absent the key is `${region}:${plan}`, which drops tenant scoping entirely. Two different callers (one tenant-scoped, one not) can therefore produce the exact same cache key for different data, and the value returned for the same logical resource changes shape depending on whether `tenantId` was supplied. That breaks the rule that every response/key contract must have a consistent shape across endpoints. Always build the key from the same ordered parts, and make the tenant segment explicit instead of optional, e.g. `const tenant = cfg.tenantId ?? "unknown-tenant"; return `${tenant}:${cfg.region}:${cfg.plan}`;`. This keeps a single key shape for every caller and prevents cross-tenant cache key collisions.

**Also found in:**
- `src/e2e-decision-memory-fixture.ts:2-2`

Kody rule violation: [Contratos de API \(teste vivo\)](http://localhost:3000/settings/code-review/1241573702/kody-rules/b666fe63-0967-45a6-9274-fc1fdc37e05d?teamId=0ccede14-aef3-4f7b-b3f2-d263ad12221a)

Suggested code:

const tenant = cfg.tenantId ?? "unknown-tenant";
return `${tenant}:${cfg.region}:${cfg.plan}`;
