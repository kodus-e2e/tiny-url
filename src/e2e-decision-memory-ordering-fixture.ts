File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes old token before issuing replacement

rotateApiToken revokes the previous token before issuing the replacement, so if `store.issue()` throws the old token is already invalidated and no new token exists — the caller is permanently locked out. Issue the new token first and revoke the old one only after the new token succeeds.

Suggested code:

const token = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return token;
