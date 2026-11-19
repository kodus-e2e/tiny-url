File src/e2e-decision-memory-revert-fixture.ts, line 2:

parseConfigValue can return NaN, breaking its declared number contract

`parseConfigValue` is declared as returning `number`, but `parseInt(null, 10)` yields `NaN` (and any non-numeric string yields `NaN` too), so callers can receive a non-number value that does not match the declared contract. This makes the response shape inconsistent for the same endpoint depending on the input, which is exactly what the API contract rule forbids. Handle the null/empty case explicitly and normalize unparseable input to a concrete numeric default (or throw) so every call returns a well-defined `number`.

Kody rule violation: [Contratos de API \(teste vivo\)](http://localhost:3000/settings/code-review/1241573702/kody-rules/833eda6a-53ed-469d-8788-97300cc444e2?teamId=88ebf955-327b-4eb6-a5f7-b682f1c92969)

Suggested code:

const parsed = raw === null ? NaN : parseInt(raw, 10);
return Number.isNaN(parsed) ? 0 : parsed;
