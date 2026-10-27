File src/e2e-decision-memory-fixture.ts, lines 1-3:

getUserName dereferences null user despite nullable parameter type

`getUserName` dereferences `user.name` without checking for `null` even though its parameter type is `{ name: string } | null`. Any caller passing `null` (the type the signature advertises as valid) throws `TypeError: Cannot read properties of null` at runtime. Guard with `if (!user) return '';` (or an appropriate fallback) before reading `user.name`.

Suggested code:

export function getUserName(user: { name: string } | null): string {
    if (!user) {
        return '';
    }
    return user.name;
}
