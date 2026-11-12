File src/e2e-decision-memory-collision-fixture.ts, line 6:

cacheKeyFor fallback key omits tenant discriminator, causing cross-tenant cache collisions

`cacheKeyFor` falls back to a key composed only of `region` and `plan` when `tenantId` is absent, so tenants sharing a region/plan produce identical cache keys. A cache keyed on this value returns one tenant's cached entry to another, leaking cross-tenant data; include a tenant discriminator in the fallback key or refuse to derive a key without `tenantId`.

Suggested code:

if (!cfg.tenantId) {
    throw new Error("cacheKeyFor requires tenantId: a key derived only from region and plan is not tenant-unique");
}
const seed = cfg.tenantId;
