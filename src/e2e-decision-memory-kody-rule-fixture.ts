File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported constant uses the forbidden PLACEHOLDER_TOKEN literal

The exported constant CONFIG_TOKEN is set to the literal string `PLACEHOLDER_TOKEN`, which must never ship. Replace the placeholder with a real value (any value other than the literal `PLACEHOLDER_TOKEN`), or load it from configuration/environment so the placeholder is not committed.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-10\-\-08205c](http://localhost:3000/settings/code-review/1241573702/kody-rules/78532052-6cc9-4f17-8242-52ae9c6ee916?teamId=1d9f3efc-2047-4e21-b964-39ee0a3d8aec)

Suggested code:

export const CONFIG_TOKEN = 'REPLACED_TOKEN';
