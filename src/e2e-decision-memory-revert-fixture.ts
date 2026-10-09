File src/e2e-decision-memory-revert-fixture.ts, lines 1-3:

parseConfigValue passes nullable value to parseInt, breaking its contract

`parseConfigValue` declares `raw: string | null` but passes `raw` directly to `parseInt`, whose parameter type is `string`. this violates the function's own contract — it is a compile error under the project's `strict` mode (tsconfig.json) and, ignoring types, `null`/`""` input silently yields `NaN` that callers would treat as a valid number. narrow the input before parsing, e.g. `if (raw === null || raw.trim() === "") return 0;` and return the parsed value, or change the parameter type to `string`.

Suggested code:

export function parseConfigValue(raw: string | null): number {
    if (raw === null || raw.trim() === "") {
        return 0;
    }
    return parseInt(raw, 10);
}
