export function parseConfigValue(raw: string | null): number {
    if (raw == null || raw.trim() === '') {
        return 0; // or throw based on intended contract
    }
    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed)) {
        throw new TypeError(`Invalid integer value: ${raw}`);
    }
    return parsed;
}
