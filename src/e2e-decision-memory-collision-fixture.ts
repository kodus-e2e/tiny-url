File src/e2e-decision-memory-collision-fixture.ts, lines 6-7:

cacheKeyFor collides across tenants when tenantId is absent

cacheKeyFor falls back to `${cfg.region}:${cfg.plan}` whenever `tenantId` is absent, so the key is not unique per tenant. Two different tenants with the same region and plan produce an identical cache key, allowing one tenant's cached data to be served to another (cross-tenant cache-key collision / data exposure). Make the tenant a required part of the key (or reject configs without a tenant) so distinct tenants can never share a key.

Suggested code:

if (!cfg.tenantId) {
    throw new Error('tenantId is required to build a cache key');
}
return `${cfg.tenantId}:${cfg.region}:${cfg.plan}`;
