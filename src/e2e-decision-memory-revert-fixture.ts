File src/e2e-decision-memory-revert-fixture.ts, line 2:

parseInt called with possibly-null raw value

`parseInt(raw, 10)` is passed `raw`, which is typed `string | null`, but `parseInt` requires a `string`; with `strict: true` this is a compile error (TS2345), and at runtime `parseInt(null, 10)` coerces to `parseInt('null', 10)` and returns `NaN`. Guard the null case before parsing, e.g. `return raw === null ? 0 : parseInt(raw, 10);`.

Suggested code:

return raw === null ? 0 : parseInt(raw, 10);
