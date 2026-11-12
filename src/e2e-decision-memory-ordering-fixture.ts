export async function rotateApiToken(
    store: { issue: () => Promise<string>; revoke: (token: string) => Promise<void> },
    previousToken: string | null,
): Promise<string> {
    if (previousToken) {
        await store.revoke(previousToken);
    }
    return store.issue();
}
