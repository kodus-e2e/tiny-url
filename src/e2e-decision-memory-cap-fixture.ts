File src/e2e-decision-memory-cap-fixture.ts, lines 6-8:

fetchJobStatuses awaits status calls serially with no concurrency cap

`fetchJobStatuses` awaits `api.getStatus(id)` sequentially inside a loop over `jobIds` with no concurrency cap or size bound. Each iteration blocks on the previous network round trip, so latency grows linearly with `jobIds.length` and a large list serializes hundreds of calls. Fetch in bounded-parallel batches (e.g. chunk `jobIds` and `Promise.all` each chunk with a fixed concurrency limit).

Suggested code:

const CONCURRENCY = 10;
for (let i = 0; i < jobIds.length; i += CONCURRENCY) {
    const chunk = jobIds.slice(i, i + CONCURRENCY);
    const results = await Promise.all(chunk.map((id) => api.getStatus(id)));
    chunk.forEach((id, idx) => {
        statuses[id] = results[idx];
    });
}
