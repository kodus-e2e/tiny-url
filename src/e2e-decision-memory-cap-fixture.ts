File src/e2e-decision-memory-cap-fixture.ts, lines 5-8:

fetchJobStatuses awaits each job serially with no cap on jobIds

`fetchJobStatuses` awaits `api.getStatus(id)` sequentially for every entry of `jobIds` with no cap on the list length. latency scales linearly with the number of jobs (N serialized round-trips) and the `statuses` map grows without bound, so a large id list produces a long stall and unbounded memory. bound the input and/or fetch with limited concurrency, e.g. resolve in batches of a fixed size instead of one await per iteration.

Suggested code:

const statuses: Record<string, string> = {};
for (const id of jobIds.slice(0, MAX_JOBS)) {
    statuses[id] = await api.getStatus(id);
}
return statuses;
