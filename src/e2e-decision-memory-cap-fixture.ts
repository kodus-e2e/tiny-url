const MAX_JOBS = 100;
const ids = jobIds.slice(0, MAX_JOBS);
await Promise.all(ids.map(async (id) => {
    statuses[id] = await api.getStatus(id).catch(() => 'unknown');
}));
return statuses;
