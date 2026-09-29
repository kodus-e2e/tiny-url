export function parseConfigValue(raw: string | null): number {
    return raw === null ? 0 : parseInt(raw, 10);
}
