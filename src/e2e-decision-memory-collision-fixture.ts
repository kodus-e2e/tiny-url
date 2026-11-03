export function cacheKeyFor(cfg: {
    tenantId?: string;
    region: string;
    plan: string;
}): string {
    const seed = cfg.tenantId ? cfg.tenantId : `${cfg.region}:${cfg.plan}`;
    return seed;
}
