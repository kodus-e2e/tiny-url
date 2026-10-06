export function parseConfigValue(raw: string | null): number {
    if (raw === null) return 0;
    const n = parseInt(raw, 10);
    return Number.isNaN(n) ? 0 : n;
}
