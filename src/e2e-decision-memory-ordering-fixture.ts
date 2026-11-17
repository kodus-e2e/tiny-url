File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes old token before issuing replacement, risking lockout

`rotateApiToken` revokes `previousToken` before issuing the replacement, so if `store.issue()` fails the caller is left with the old token already revoked and no new token — a permanent lockout. Issue the new token first and only revoke the previous one after issuance succeeds.

Suggested code:

const newToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return newToken;
