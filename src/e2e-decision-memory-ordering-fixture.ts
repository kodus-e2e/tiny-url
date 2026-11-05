File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes old token before issuing new one, risking lockout

rotateApiToken revokes the previous token before issuing the replacement, so if `store.issue()` throws or fails the caller is left with the old token already revoked and no new token — a hard lockout. Issue the new token first and only revoke the previous one after the new token is confirmed.

Suggested code:

const newToken = await store.issue();
if (previousToken && previousToken !== newToken) {
    await store.revoke(previousToken);
}
return newToken;
