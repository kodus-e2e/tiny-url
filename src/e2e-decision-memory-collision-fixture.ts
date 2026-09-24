return cfg.tenantId
    ? `tenant:${cfg.tenantId}`
    : `global:${cfg.region}:${cfg.plan}`;
