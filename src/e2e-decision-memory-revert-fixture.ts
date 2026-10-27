File src/e2e-decision-memory-revert-fixture.ts, lines 1-3:

parseConfigValue accepts null and unvalidated strings but returns them as numbers

`parseConfigValue` declares its parameter as `string | null` but passes `raw` straight into `parseInt`, whose signature requires a `string`, so the function does not satisfy its own type contract. Under the project's `strict: true` config this is a compile-time error (TS2345, `null` not assignable to `string`), and if the null case is ever forced through it silently yields `NaN` — while non-numeric suffixes are silently truncated (`parseInt("12abc", 10) === 12`), so a misconfigured value is reported as a valid number instead of being rejected. Accept the null explicitly and validate the result, e.g. `export function parseConfigValue(raw: string | null): number { if (raw === null) throw new Error("missing config value"); const value = Number(raw); if (!Number.isInteger(value)) throw new Error(`invalid config value: ${raw}`); return value; }`.

Suggested code:

export function parseConfigValue(raw: string | null): number {
    if (raw === null) {
        throw new Error("missing config value");
    }
    const value = Number(raw);
    if (!Number.isInteger(value)) {
        throw new Error(`invalid config value: ${raw}`);
    }
    return value;
}
