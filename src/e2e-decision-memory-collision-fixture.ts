File src/e2e-decision-memory-collision-fixture.ts, lines 6-7:

cacheKeyFor drops region/plan when tenantId is set, colliding keys

`cacheKeyFor` returns `cfg.tenantId` alone whenever it is set, discarding `region` and `plan`. two configurations with the same tenant but different region/plan (or two tenants whose ids are reused across partitions) map to the same cache key, so one entry silently overwrites/serves another's data — a cross-tenant cache collision. include all discriminating fields in the key, e.g. compose the seed from tenant, region, and plan.

Suggested code:

return `${cfg.tenantId ?? ""}:${cfg.region}:${cfg.plan}`;
