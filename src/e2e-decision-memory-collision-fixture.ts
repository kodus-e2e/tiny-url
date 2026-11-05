File src/e2e-decision-memory-collision-fixture.ts, line 6:

Cache key falls back to region:plan, colliding across tenants

cacheKeyFor drops the tenantId prefix when it is absent and falls back to `${region}:${plan}` (line 6), so distinct tenants sharing the same region and plan produce identical cache keys. This is a cache-isolation failure that can serve wrong/stale cached data across tenants; include a tenant discriminator in every key.

Suggested code:

if (!cfg.tenantId) {
    throw new Error("cacheKeyFor requires tenantId to keep cache entries isolated");
}
const seed = `${cfg.tenantId}:${cfg.region}:${cfg.plan}`;
