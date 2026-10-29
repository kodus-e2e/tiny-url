File src/e2e-decision-memory-revert-fixture.ts, lines 1-3:

parseConfigValue passes a nullable value to parseInt, yielding NaN

`parseConfigValue` declares `raw: string | null` but passes it straight into `parseInt`, which does not accept `null`. At runtime `parseInt(null, 10)` coerces to the string "null" and returns `NaN`, so any caller feeding a null config value silently gets `NaN` instead of a controlled fallback or error, propagating bad data downstream. Guard the null/empty case before parsing, e.g. `if (raw === null || raw.trim() === '') return 0;` (or throw/return a documented default) and then `return parseInt(raw, 10);`.

Suggested code:

export function parseConfigValue(raw: string | null): number {
    if (raw === null || raw.trim() === '') {
        return 0;
    }
    return parseInt(raw, 10);
}
