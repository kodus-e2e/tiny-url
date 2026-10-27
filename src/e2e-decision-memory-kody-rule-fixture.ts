File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported constant CONFIG_TOKEN ships the literal PLACEHOLDER_TOKEN value

The exported constant CONFIG_TOKEN is assigned the literal placeholder string 'PLACEHOLDER_TOKEN', which must never ship. Replace the value with any real, non-placeholder token value (for example, load it from an environment variable or use a concrete non-placeholder literal) so the placeholder does not reach production.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-10\-\-a33798](http://localhost:3000/settings/code-review/1241573702/kody-rules/aff11883-cedf-4d85-aae9-caab8206e4f3?teamId=6842f676-b219-4e1f-b195-96389dcda253)

Suggested code:

export const CONFIG_TOKEN = 'e2e-config-token-value';
