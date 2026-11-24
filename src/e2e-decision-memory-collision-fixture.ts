File src/e2e-decision-memory-collision-fixture.ts, lines 6-7:

Cross-tenant cache key collision when tenantId is absent

When `tenantId` is absent the cache key degrades to `${region}:${plan}`, which is shared by every tenant in that region/plan. This lets one tenant read another tenant's cached entry (cross-tenant cache collision); include a per-tenant discriminator or require `tenantId` instead of falling back to a shared key.

Suggested code:

if (!cfg.tenantId) {
    throw new Error("cacheKeyFor requires tenantId to build a tenant-scoped key");
}
return cfg.tenantId;
