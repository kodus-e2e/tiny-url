File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes old token before issuing replacement

rotateApiToken revokes previousToken before issuing the replacement, so if store.issue() rejects or the process dies between the two awaits the caller is left with a revoked token and no valid one, locking the principal out. Issue the new token first and only revoke the previous token after issuance succeeds.

Suggested code:

const newToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return newToken;
