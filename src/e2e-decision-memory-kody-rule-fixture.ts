File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported constant CONFIG_TOKEN ships the literal PLACEHOLDER_TOKEN value

The exported constant `CONFIG_TOKEN` is assigned the literal string `PLACEHOLDER_TOKEN`, which must never ship. Replace the placeholder with a real value (or read it from the environment/config) so the literal `PLACEHOLDER_TOKEN` no longer appears as the exported value.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-11\-\-2d6e8d](http://localhost:3000/settings/code-review/1241573702/kody-rules/99c88b0a-587a-4467-9af2-09507e8e2955?teamId=1bf47745-6ca2-4770-b139-1f3036c89924)

Suggested code:

export const CONFIG_TOKEN = 'REPLACE_WITH_REAL_TOKEN';
