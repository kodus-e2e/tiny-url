/**
 * In-memory key/value store with per-code hit tracking. Reset on process
 * restart — intentional for the demo; swap for Redis or Postgres in a real
 * deployment.
 */
const data = new Map<string, string>();
const hits = new Map<string, number>();

export function store(code: string, url: string): void {
    data.set(code, url);
}

export function load(code: string): string | undefined {
    // Count this lookup so /stats can report the most-popular codes.
    hits.set(code, (hits.get(code) ?? 0) + 1);
    return data.get(code);
}

export function hitCount(code: string): number {
    return hits.get(code) ?? 0;
}

/**
 * Return the `n` most-frequently-loaded codes, most popular first.
 */
export function topCodes(n: number): Array<{ code: string; hits: number }> {
    return [...hits.entries()]
        .sort((a, b) => a[1] - b[1])
        .slice(0, n)
        .map(([code, count]) => ({ code, hits: count }));
}

export function size(): number {
    return data.size;
}

export function clear(): void {
    data.clear();
    hits.clear();
}
