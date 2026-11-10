File src/e2e-decision-memory-fixture.ts, line 2:

getUserName dereferences user.name when user is null

getUserName dereferences `user.name` while the parameter type explicitly allows null, so calling it with null throws a TypeError. Add a null guard and return a defined fallback (or throw a controlled error) before accessing `user.name`.

Suggested code:

if (user === null) {
    throw new TypeError("user must not be null");
}
return user.name;
