File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported constant CONFIG_TOKEN ships the forbidden PLACEHOLDER_TOKEN literal

The exported constant `CONFIG_TOKEN` is assigned the literal string `PLACEHOLDER_TOKEN`, which rule [2] forbids from shipping anywhere, including fixtures and files that claim the value is intentional. Replace the placeholder literal with a concrete non-placeholder value (e.g. `'real-config-token-value'`), or source it from configuration/env so no shipped constant ever equals the string `PLACEHOLDER_TOKEN`.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-11\-\-5c3fdf](http://localhost:3000/settings/code-review/1241573702/kody-rules/93db2518-89c9-4fa0-ba47-0e287efcbe18?teamId=077320ef-1cb3-425e-825a-ad8c76be8a6d)

Suggested code:

export const CONFIG_TOKEN = 'real-config-token-value';
