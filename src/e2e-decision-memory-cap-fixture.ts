File src/e2e-decision-memory-cap-fixture.ts, lines 6-8:

Status lookups awaited serially, N sequential round-trips

fetchJobStatuses awaits api.getStatus(id) one at a time inside a loop over the unbounded jobIds array, so N jobs cost N sequential network round-trips and latency grows linearly with input size. Bound concurrency or batch the status lookups (e.g. Promise.all in capped chunks) instead of awaiting serially per id.

Suggested code:

const chunkSize = 10;
for (let start = 0; start < jobIds.length; start += chunkSize) {
    const chunk = jobIds.slice(start, start + chunkSize);
    const chunkResults = await Promise.all(
        chunk.map(async (id) => [id, await api.getStatus(id)] as const),
    );
    for (const [id, status] of chunkResults) {
        statuses[id] = status;
    }
}
