File src/e2e-decision-memory-fixture.ts, lines 1-3:

getUserName dereferences null user despite nullable parameter type

getUserName dereferences `user.name` without checking for null even though its parameter type is `{ name: string } | null`. Passing null (explicitly allowed by the signature) throws a TypeError at runtime; guard with `if (!user) return '';` (or change the signature to reject null).

Suggested code:

export function getUserName(user: { name: string } | null): string {
    if (!user) return '';
    return user.name;
}
