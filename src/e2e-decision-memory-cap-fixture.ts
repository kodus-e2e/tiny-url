File src/e2e-decision-memory-cap-fixture.ts, lines 6-8:

fetchJobStatuses awaits getStatus serially, one request per id

fetchJobStatuses awaits `api.getStatus(id)` inside the loop, issuing one serial request per job id with no concurrency cap. For N ids this is N sequential round-trips (O(N) latency, unbounded fanout); batch the ids into a single status call or use a bounded-concurrency `Promise.all`.

Suggested code:

const concurrency = 10;
for (let i = 0; i < jobIds.length; i += concurrency) {
    const batch = jobIds.slice(i, i + concurrency);
    const results = await Promise.all(batch.map((id) => api.getStatus(id)));
    batch.forEach((id, index) => {
        statuses[id] = results[index];
    });
}
