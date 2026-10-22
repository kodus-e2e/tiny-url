export function parseConfigValue(raw: string | null): number {
    if (raw === null) return 0;
    return parseInt(raw, 10);
}
