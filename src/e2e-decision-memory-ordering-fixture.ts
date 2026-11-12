File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes old token before issuing replacement, risking lockout

`rotateApiToken` revokes the previous token before issuing the new one, so if `store.issue()` throws or fails the caller is left with the old token revoked and no replacement — a lockout with no valid credential. Issue the new token first, then revoke the old one only after the new token is confirmed.

Suggested code:

const newToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return newToken;
