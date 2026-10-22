const nextToken = await store.issue();
if (previousToken) {
    await store.revoke(previousToken);
}
return nextToken;
