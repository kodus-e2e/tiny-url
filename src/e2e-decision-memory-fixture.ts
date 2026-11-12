File src/e2e-decision-memory-fixture.ts, line 2:

getUserName dereferences user.name without a null guard

`getUserName` dereferences `user.name` without guarding the `null` case, even though its parameter type is `{ name: string } | null`. Calling it with a null user throws a TypeError instead of returning a name.

Suggested code:

return user?.name ?? "";
