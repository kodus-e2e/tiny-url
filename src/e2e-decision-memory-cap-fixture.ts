const entries = await Promise.all(
    jobIds.map(async (id) => [id, await api.getStatus(id)] as const),
);
return Object.fromEntries(entries);
