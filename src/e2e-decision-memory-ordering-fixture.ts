File src/e2e-decision-memory-ordering-fixture.ts, lines 6-8:

rotateApiToken revokes previous token before issuing the new one

rotateApiToken revokes previousToken before calling store.issue() (revoke at line 6, issue at line 8). If issue() fails, the caller is left without any valid token. Issue the new token first and only revoke the previous one after issuance succeeds.
