File src/e2e-decision-memory-kody-rule-fixture.ts, line 1:

Exported constant CONFIG_TOKEN uses forbidden literal PLACEHOLDER_TOKEN

The exported constant CONFIG_TOKEN is assigned the literal string 'PLACEHOLDER_TOKEN', which must never ship. This static check applies mechanically regardless of whether the file is a test fixture or a comment claims the value is intentional.

Replace the placeholder with a real value (or a non-placeholder default) so the literal string 'PLACEHOLDER_TOKEN' no longer appears in the exported constant.

Kody rule violation: [e2e\-rule\-decision\-memory\-2026\-10\-\-d239f1](http://localhost:3000/settings/code-review/1241573702/kody-rules/3a17b830-5344-44f7-8b22-295db3cda2ef?teamId=86dd97bf-66bd-429b-8cde-e547af259dc1)

Suggested code:

export const CONFIG_TOKEN = 'REPLACE_WITH_REAL_TOKEN';
