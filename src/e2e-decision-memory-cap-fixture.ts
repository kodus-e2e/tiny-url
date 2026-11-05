File src/e2e-decision-memory-cap-fixture.ts, lines 6-8:

fetchJobStatuses issues unbounded sequential getStatus calls

fetchJobStatuses loops over every element of `jobIds` and awaits one `api.getStatus` call per id with no cap on the input size, so an unbounded/large array produces an unbounded number of sequential awaited API calls (latency and resource blowup). Bound the number of ids processed (or batch/chunk with a concurrency limit) before iterating.

Suggested code:

const maxConcurrent = 8;
for (let i = 0; i < jobIds.length; i += maxConcurrent) {
    const chunk = jobIds.slice(i, i + maxConcurrent);
    const chunkStatuses = await Promise.all(chunk.map((id) => api.getStatus(id)));
    chunk.forEach((id, index) => {
        statuses[id] = chunkStatuses[index];
    });
}
