File src/e2e-decision-memory-cap-fixture.ts, lines 6-7:

Serial awaits in fetchJobStatuses have no concurrency cap

`fetchJobStatuses` awaits `api.getStatus(id)` serially inside the loop with no concurrency cap or input bound, turning a batch into N sequential round-trips that scale linearly with `jobIds` length. Bound the fanout (e.g., batch/concurrency-limited `Promise.all`) so large `jobIds` arrays do not serialize.
