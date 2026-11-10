File src/e2e-decision-memory-collision-fixture.ts, lines 6-7:

Cache key collapses to region:plan when tenantId is missing

When tenantId is absent the cache key collapses to `${region}:${plan}`, so two different tenants with the same region and plan compute the identical key and read each other's cached entries. Include the tenant identifier in the key unconditionally (or fail when tenantId is missing) so keys are always tenant-scoped.

Suggested code:

if (!cfg.tenantId) {
    throw new Error("cacheKeyFor: tenantId is required for tenant-scoped cache keys");
}
return cfg.tenantId;
