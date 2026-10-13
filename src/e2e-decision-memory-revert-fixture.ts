export function parseConfigValue(raw: string | null): number {
    if (raw === null || raw.trim() === '') {
        return 0;
    }
    const parsed = parseInt(raw, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
}
