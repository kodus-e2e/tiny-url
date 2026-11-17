File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported CONFIG_TOKEN ships the forbidden PLACEHOLDER_TOKEN literal

The exported constant CONFIG_TOKEN is assigned the literal string 'PLACEHOLDER_TOKEN', which is a placeholder that must never ship. Replace the value with a real token source (for example an environment lookup) or any non-placeholder literal so the placeholder string no longer appears in the exported value.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-11\-\-96329a](http://localhost:3000/settings/code-review/1241573702/kody-rules/6134efcc-dcc6-48e7-8e99-945e51d303f1?teamId=4abc9467-29a6-4f9a-9f91-673d252ff047)

Suggested code:

export const CONFIG_TOKEN = 'REPLACE_WITH_REAL_TOKEN';
