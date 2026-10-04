export function parseConfigValue(raw: string | null): number {
    if (raw === null || raw.trim() === '') {
        throw new Error('parseConfigValue: missing configuration value');
    }
    return parseInt(raw, 10);
}
