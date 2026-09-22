File src/e2e-decision-memory-cap-fixture.ts:

Line 6 to 8:

fetchJobStatuses awaits `api.getStatus` sequentially for every id in `jobIds` with no concurrency cap, causing unbounded latency on a hot path. Bound concurrency with a pool (e.g., batch processing) and/or cap the length of `jobIds`.
