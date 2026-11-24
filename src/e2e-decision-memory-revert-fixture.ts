File src/e2e-decision-memory-revert-fixture.ts, line 2:

parseInt receives nullable `raw`, causing type error and NaN for null

`parseConfigValue` calls `parseInt(raw, 10)` where `raw: string | null`. `parseInt`'s first parameter is typed `string` in lib.es5.d.ts, so passing `string | null` is a type error under strictNullChecks, and at runtime a null argument yields NaN. This is a type/contract defect in the newly added function.

Suggested code:

return raw === null ? NaN : parseInt(raw, 10);
