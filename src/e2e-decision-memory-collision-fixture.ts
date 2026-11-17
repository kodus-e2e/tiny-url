File src/e2e-decision-memory-collision-fixture.ts, lines 6-7:

cacheKeyFor drops tenant scoping when tenantId is falsy

`cacheKeyFor` drops tenant scoping whenever `tenantId` is falsy, producing the key `${region}:${plan}`, so two different tenants in the same region and plan share an identical cache key and can read or overwrite each other's cached entries. Always include the tenant identity in the key (or fail fast when `tenantId` is missing) instead of falling back to a non-tenant-scoped seed.

Suggested code:

if (!cfg.tenantId) {
    throw new Error("cacheKeyFor requires a tenantId");
}
return cfg.tenantId;
