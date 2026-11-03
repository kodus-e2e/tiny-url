File src/e2e-decision-memory-fixture.ts, lines 1-3:

getUserName dereferences null when user is null

getUserName dereferences `user.name` even though its parameter type is `{ name: string } | null`. Any caller passing null throws a TypeError at runtime instead of returning a safe value. Guard the null case, e.g. `if (user === null) return '';` (or return a `string | null` and let callers handle it) before accessing `user.name`.

Suggested code:

export function getUserName(user: { name: string } | null): string {
    if (user === null) {
        return '';
    }
    return user.name;
}
