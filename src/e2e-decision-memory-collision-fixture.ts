File src/e2e-decision-memory-collision-fixture.ts, lines 6-7:

cacheKeyFor collapses to shared key when tenantId is missing

`cacheKeyFor` falls back to `${cfg.region}:${cfg.plan}` when `tenantId` is absent, producing the same key for every tenant that shares a region and plan. Tenants with a missing tenantId share cache entries, so one tenant's cached response can be served to another — a cross-tenant data exposure. Require a tenant discriminator in the key (fail fast when `tenantId` is missing) instead of silently degrading to region:plan.

Suggested code:

if (!cfg.tenantId) {
    throw new Error('tenantId is required to build a cache key');
}
return `${cfg.tenantId}:${cfg.region}:${cfg.plan}`;
