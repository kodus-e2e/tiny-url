export function parseConfigValue(raw: string | null): number {
    if (raw === null) return DEFAULT;
    const value = parseInt(raw, 10);
    if (Number.isNaN(value)) return DEFAULT; // or throw on invalid input
    return value;
}
