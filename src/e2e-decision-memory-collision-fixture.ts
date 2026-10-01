if (!cfg.tenantId) {
    throw new Error("tenantId is required for cache keying");
}
return `${cfg.tenantId}:${cfg.region}:${cfg.plan}`;
