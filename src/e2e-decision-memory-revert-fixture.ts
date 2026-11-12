File src/e2e-decision-memory-revert-fixture.ts, line 2:

parseConfigValue returns NaN for null input, breaking the consistent API shape

`parseConfigValue` accepts `string | null` but feeds `raw` straight into `parseInt`. When `raw` is `null`, `parseInt(null, 10)` returns `NaN`, so the function emits a non-numeric `NaN` where callers expect a well-defined `number`. That breaks the consistent response shape required by rule [1]: some inputs produce a real number and others produce `NaN`, so downstream endpoints serialize inconsistent payloads. Handle the null case explicitly before parsing, e.g. return a defined numeric default (`0`) when `raw === null`, so every call path yields a consistent numeric shape.

Kody rule violation: [Contratos de API \(teste vivo\)](http://localhost:3000/settings/code-review/1241573702/kody-rules/fddece06-6cd8-4075-b834-56bb879798a5?teamId=1bf47745-6ca2-4770-b139-1f3036c89924)

Suggested code:

return raw === null ? 0 : parseInt(raw, 10);
