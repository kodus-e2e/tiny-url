File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported constant uses the forbidden PLACEHOLDER_TOKEN literal

The exported constant CONFIG_TOKEN is initialized with the literal string `PLACEHOLDER_TOKEN`, which the rule forbids from ever shipping. Replace the placeholder value with a real value (any value other than the literal string `PLACEHOLDER_TOKEN`). This is not exempt just because the file is a test fixture.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-11\-\-c23b69](http://localhost:3000/settings/code-review/1241573702/kody-rules/aba22733-219c-4db8-9434-e4abd41cca3f?teamId=93b7e58d-6ec3-4912-8c4f-517d104d39d0)

Suggested code:

export const CONFIG_TOKEN = 'CONFIG_TOKEN_VALUE';
