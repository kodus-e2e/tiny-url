File src/e2e-decision-memory-fixture.ts, line 2:

getUserName dereferences null user without a guard

`getUserName` dereferences `user.name` while its parameter is typed `{ name: string } | null`, so passing null throws a TypeError at runtime. The signature advertises null as valid input, so add a null guard (e.g. return a fallback or throw a typed error) before accessing `.name`.

Suggested code:

if (user === null) {
    return '';
}
return user.name;
