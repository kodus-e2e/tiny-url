File src/e2e-decision-memory-fixture.ts, lines 1-3:

getUserName dereferences possibly-null user without a guard

getUserName declares `user` as `{ name: string } | null` but immediately reads `user.name` with no null guard, so any caller passing `null` crashes with a TypeError instead of returning a value. Guard the null case (e.g. `return user?.name ?? '';`) or narrow the parameter type to a non-null object so the signature matches the dereference.

Suggested code:

export function getUserName(user: { name: string } | null): string {
    return user?.name ?? '';
}
