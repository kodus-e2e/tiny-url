File src/e2e-decision-memory-cap-fixture.ts, lines 6-7:

Sequential awaits serialize getStatus network calls per job id

`fetchJobStatuses` awaits `api.getStatus(id)` sequentially inside the loop, so the total latency grows as O(N) serialized network round-trips for the whole `jobIds` array with no concurrency or bound. Fetch statuses concurrently (e.g. `Promise.all` over the ids, optionally with a concurrency cap) so the work overlaps instead of serializing.

Suggested code:

await Promise.all(
    jobIds.map(async (id) => {
        statuses[id] = await api.getStatus(id);
    }),
);
