const next = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return next;
