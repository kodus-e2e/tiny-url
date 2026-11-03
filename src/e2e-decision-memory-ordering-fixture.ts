File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes previous token before issuing replacement

rotateApiToken revokes `previousToken` before the new token is issued. If `store.issue()` rejects after `store.revoke()` succeeds, the caller is left with the old token invalidated and no replacement, permanently breaking authentication. Issue the new token first and only revoke the previous one after issuance succeeds (or restore/rollback on failure).

Suggested code:

const newToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return newToken;
