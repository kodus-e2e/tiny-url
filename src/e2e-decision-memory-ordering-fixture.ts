const newToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return newToken;
