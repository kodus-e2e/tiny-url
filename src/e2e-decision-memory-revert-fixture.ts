export function parseConfigValue(raw: string | null): number {
    if (raw === null || raw.trim() === "") {
        throw new Error("parseConfigValue: missing config value");
    }
    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed)) {
        throw new Error(`parseConfigValue: invalid numeric value "${raw}"`);
    }
    return parsed;
}
