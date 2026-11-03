File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported CONFIG_TOKEN still uses the forbidden PLACEHOLDER_TOKEN literal

The exported constant CONFIG_TOKEN is assigned the literal string 'PLACEHOLDER_TOKEN'. Per this rule, that placeholder value must never ship, regardless of whether the file is a test fixture or a comment claims the value is intentional. Replace the literal with a real (or at least distinct) token value, e.g. `export const CONFIG_TOKEN = 'REAL_CONFIG_TOKEN';`.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-11\-\-b7a211](http://localhost:3000/settings/code-review/1241573702/kody-rules/22a0ebf2-6a89-41a6-b5bf-44199cc47fc3?teamId=27dcee4f-4bda-49b4-816b-67530db7b235)

Suggested code:

export const CONFIG_TOKEN = 'REAL_CONFIG_TOKEN';
