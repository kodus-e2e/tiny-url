File src/e2e-decision-memory-revert-fixture.ts, line 2:

parseConfigValue returns NaN for null input, breaking consistent numeric shape

`parseConfigValue` declares `raw: string | null` but passes the value straight to `parseInt`. When `raw` is `null`, `parseInt(null, 10)` evaluates to `NaN`, so the function silently returns a value that is not a usable number. That breaks the contract rule that every consumer of this value gets a consistent, well-typed shape: callers that expect a numeric config value instead receive `NaN`, which then propagates into downstream API payloads and makes their shape differ from other endpoints (a real number in one place, `NaN`/`null` in another). Handle the `null` case explicitly before parsing so the function always returns a deterministic number.

Kody rule violation: [Contratos de API \(teste vivo\)](http://localhost:3000/settings/code-review/1241573702/kody-rules/b666fe63-0967-45a6-9274-fc1fdc37e05d?teamId=0ccede14-aef3-4f7b-b3f2-d263ad12221a)

Suggested code:

return raw === null ? 0 : parseInt(raw, 10);
