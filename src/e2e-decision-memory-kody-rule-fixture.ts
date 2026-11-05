File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported CONFIG_TOKEN ships the forbidden PLACEHOLDER_TOKEN literal

The exported constant `CONFIG_TOKEN` is assigned the literal string `'PLACEHOLDER_TOKEN'`. Rule [e2e\-rule\-decision\-memory\-2026\-11\-\-9bd335](http://localhost:3000/settings/code-review/1241573702/kody-rules/ea36f0c7-8b8d-401b-b20d-28614e3be3ca?teamId=a82311d9-2cfd-40f5-a2be-759772e11971) is a mechanical static-analysis check: any exported constant whose value is exactly the literal `PLACEHOLDER_TOKEN` must never ship, regardless of whether the file is a test fixture or a comment claims the value is intentional. Replace the literal with a real value that is not `PLACEHOLDER_TOKEN` — for example, source it from the environment (`process.env.CONFIG_TOKEN ?? 'real-config-token'`) or assign the actual token string.

Suggested code:

export const CONFIG_TOKEN = process.env.CONFIG_TOKEN ?? 'real-config-token';
