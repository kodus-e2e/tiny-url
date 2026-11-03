File src/e2e-decision-memory-cap-fixture.ts, lines 5-9:

fetchJobStatuses serially awaits unbounded jobIds with no cap

fetchJobStatuses awaits `api.getStatus(id)` serially for every entry in `jobIds` with no cap on the number of ids. A large `jobIds` array triggers an unbounded number of sequential round-trips, so latency grows O(N) and a huge input can stall the caller indefinitely. Bound the batch (e.g. process at most a fixed page size per call) and/or fetch concurrently with a concurrency limit rather than one-at-a-time awaits.

Suggested code:

const statuses: Record<string, string> = {};
const ids = jobIds.slice(0, MAX_IDS);
await Promise.all(
    ids.map(async (id) => {
        statuses[id] = await api.getStatus(id);
    }),
);
return statuses;
