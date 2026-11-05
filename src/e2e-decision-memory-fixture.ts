File src/e2e-decision-memory-fixture.ts, line 2:

getUserName dereferences null user, causing a null crash

getUserName dereferences user.name on a `| null` parameter, causing a null dereference at line 2. Guard against null (or narrow the parameter type) before accessing .name.

Suggested code:

return user?.name ?? "";
