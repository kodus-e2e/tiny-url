File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported CONFIG_TOKEN ships the forbidden PLACEHOLDER_TOKEN literal

The exported constant `CONFIG_TOKEN` is assigned the literal string `'PLACEHOLDER_TOKEN'`. Rule 2 forbids shipping any exported constant whose value is exactly the literal `PLACEHOLDER_TOKEN` — this is a mechanical static-analysis check and test-fixture status or explanatory comments do not exempt it, so this line must be corrected before merge. Replace the placeholder literal with a real, non-placeholder value (any string other than `'PLACEHOLDER_TOKEN'` is acceptable), e.g. `export const CONFIG_TOKEN = 'config-token-live-value';`, or source the value from configuration instead of hardcoding it.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-11\-\-28315b](http://localhost:3000/settings/code-review/1241573702/kody-rules/2ec74c6e-b3d8-43a8-984d-f100bfb13f1a?teamId=d88ca43e-d3b2-4367-9df0-c8dc516e3532)

Suggested code:

export const CONFIG_TOKEN = 'config-token-live-value';
