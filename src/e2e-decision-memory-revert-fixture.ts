export function parseConfigValue(raw: string | null): number {
    if (raw === null) {
        throw new Error('parseConfigValue: raw value is null');
    }
    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed)) {
        throw new Error(`parseConfigValue: invalid numeric value '${raw}'`);
    }
    return parsed;
}
