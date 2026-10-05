if (!cfg.tenantId) {
    throw new Error("tenantId is required for a tenant-scoped cache key");
}
return `${cfg.tenantId}:${cfg.region}:${cfg.plan}`;
