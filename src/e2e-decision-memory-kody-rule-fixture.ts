File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported CONFIG_TOKEN ships the forbidden PLACEHOLDER_TOKEN literal

The exported constant CONFIG_TOKEN is assigned the literal string 'PLACEHOLDER_TOKEN', which rule [2] forbids from ever shipping. Even though this file is an E2E fixture, the check is purely mechanical and grants no fixture exemption. Replace the literal with any real value that is not the string 'PLACEHOLDER_TOKEN', e.g. `export const CONFIG_TOKEN = 'REPLACED_TOKEN_VALUE';` (or read it from the environment).

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-11\-\-78d513](http://localhost:3000/settings/code-review/1241573702/kody-rules/644107f8-51b7-46fd-b96d-764b3697e2ad?teamId=0ccede14-aef3-4f7b-b3f2-d263ad12221a)

Suggested code:

export const CONFIG_TOKEN = 'REPLACED_TOKEN_VALUE';
