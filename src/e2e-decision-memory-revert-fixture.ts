File src/e2e-decision-memory-revert-fixture.ts, lines 1-3:

parseConfigValue coerces null to NaN instead of a defined default

parseConfigValue declares its parameter as `string | null` but passes it straight to `parseInt`, so a `null` argument is coerced to the string "null" and returns `NaN` despite the `number` return type. Any caller that relies on the returned value as a valid config number (e.g. a port) receives `NaN` and silently propagates an invalid value instead of a fallback. Guard the null/empty case and return a defined default, e.g. `if (raw == null || raw.trim() === '') return defaultValue;` before parsing.

Suggested code:

export function parseConfigValue(raw: string | null, defaultValue = 0): number {
    if (raw == null || raw.trim() === '') return defaultValue;
    const parsed = parseInt(raw, 10);
    return Number.isNaN(parsed) ? defaultValue : parsed;
}
