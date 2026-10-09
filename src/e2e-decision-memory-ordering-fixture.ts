File src/e2e-decision-memory-ordering-fixture.ts, lines 5-8:

rotateApiToken revokes the old token before issuing a replacement

`rotateApiToken` revokes `previousToken` before the replacement token is issued. if `store.issue()` rejects, the old token is already revoked and the caller is left with no usable credential — a self-inflicted outage on the rotation path. issue the new token first and revoke the previous one only after the issue succeeds.

Suggested code:

const nextToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return nextToken;
