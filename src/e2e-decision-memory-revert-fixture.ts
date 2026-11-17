File src/e2e-decision-memory-revert-fixture.ts, line 2:

parseConfigValue returns NaN for null input, breaking the API value shape contract

`parseConfigValue` passes `raw` straight to `parseInt` even though the parameter is typed `string | null`, so a `null` input silently yields `NaN`. Rule [1] requires a consistent shape/value contract for values crossing the API boundary. `NaN` is a `number` that does not survive JSON serialization (it becomes `null`), so the same endpoint can return `number` or `null` depending on the input, which breaks the consistent shape the rule mandates. Handle the `null` (and otherwise unparseable) case explicitly and return a stable numeric value, e.g. `return raw === null ? 0 : parseInt(raw, 10);` (or validate/normalize `raw` before parsing) so every call path returns the same shape.

Kody rule violation: [Contratos de API \(teste vivo\)](http://localhost:3000/settings/code-review/1241573702/kody-rules/70498ca0-8f9b-4c67-a7c2-c95daabbcde2?teamId=4abc9467-29a6-4f9a-9f91-673d252ff047)

Suggested code:

return raw === null ? 0 : parseInt(raw, 10);
