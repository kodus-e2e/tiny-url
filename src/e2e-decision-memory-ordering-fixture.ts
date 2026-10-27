File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes old token before issuing replacement

`rotateApiToken` revokes `previousToken` before issuing the replacement, so a failing `store.issue()` leaves the caller with no valid credential. If `issue()` rejects (transient API/network error), the old token is already revoked and rotation fails non-atomically, locking the caller out. Issue the new token first and revoke the previous one only after the issue succeeds.

Suggested code:

const nextToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return nextToken;
