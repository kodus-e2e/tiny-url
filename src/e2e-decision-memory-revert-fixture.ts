export function parseConfigValue(raw: string | null): number {
    if (raw === null || raw.trim() === '' || !/^\d+$/.test(raw.trim())) {
        throw new Error('Invalid config value: ' + raw);
    }
    return parseInt(raw.trim(), 10);
}
