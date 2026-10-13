const statuses: Record<string, string> = {};
    const CONCURRENCY = 10;
    for (let i = 0; i < jobIds.length; i += CONCURRENCY) {
        const chunk = jobIds.slice(i, i + CONCURRENCY);
        const results = await Promise.all(chunk.map((id) => api.getStatus(id)));
        chunk.forEach((id, idx) => {
            statuses[id] = results[idx];
        });
    }
    return statuses;
