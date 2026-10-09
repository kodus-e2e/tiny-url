File src/e2e-decision-memory-fixture.ts, lines 1-3:

getUserName dereferences user.name without a null check

`getUserName` dereferences `user.name` while its parameter type explicitly allows `null`. any caller passing the declared-nullable value throws `TypeError: Cannot read properties of null (reading 'name')` instead of returning a name. guard the null case before dereferencing.

Suggested code:

export function getUserName(user: { name: string } | null): string {
    if (!user) {
        return "";
    }
    return user.name;
}
