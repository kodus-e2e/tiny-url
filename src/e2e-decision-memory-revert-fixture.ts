File src/e2e-decision-memory-revert-fixture.ts, lines 1-3:

parseConfigValue returns NaN for null input despite typing

`parseConfigValue` passes a `string | null` directly to `parseInt`, so a null argument is coerced to the string "null" and returns `NaN` while the signature still promises a `number`. Every consumer receives `NaN` for a missing/absent config value, silently corrupting arithmetic and range comparisons (e.g. `value > 0`, price or limit math) instead of failing loudly or defaulting. Guard the null case before parsing — e.g. `if (raw === null) return 0;` (or throw / accept a default) and then `return parseInt(raw, 10);`.

Suggested code:

export function parseConfigValue(raw: string | null): number {
    if (raw === null) return 0;
    return parseInt(raw, 10);
}
