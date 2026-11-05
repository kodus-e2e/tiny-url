File src/e2e-decision-memory-cap-fixture.ts, lines 6-8:

Sequential awaits in fetchJobStatuses cause N serialized round-trips

fetchJobStatuses awaits api.getStatus(id) sequentially inside a loop with no bound on jobIds.length, so N jobs cause N serialized round-trips that grow linearly with the input size. Batch the ids or bound the concurrency (e.g. Promise.all over chunks) and cap the number of ids processed per call.

Suggested code:

const CONCURRENCY = 10;
for (let i = 0; i < jobIds.length; i += CONCURRENCY) {
    const chunk = jobIds.slice(i, i + CONCURRENCY);
    const results = await Promise.all(chunk.map((id) => api.getStatus(id)));
    chunk.forEach((id, index) => {
        statuses[id] = results[index];
    });
}
