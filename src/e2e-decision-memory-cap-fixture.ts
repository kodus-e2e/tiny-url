const statuses: Record<string, string> = {};
const CONCURRENCY = 5;
for (let i = 0; i < jobIds.length; i += CONCURRENCY) {
    const batch = jobIds.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map((id) => api.getStatus(id)));
    batch.forEach((id, idx) => {
        statuses[id] = results[idx];
    });
}
return statuses;
