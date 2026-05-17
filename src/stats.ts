/**
 * Per-code hit counter. Lives alongside the URL store in memory and
 * resets on restart — fine for the demo.
 */
const hits = new Map<string, number>();

export function recordHit(code: string): void {
    hits.set(code, (hits.get(code) ?? 0) + 1);
}

export function statsFor(code: string): number {
    return hits.get(code) ?? 0;
}

export function topCodes(limit = 10): Array<{ code: string; hits: number }> {
    return Array.from(hits.entries())
        .map(([code, count]) => ({ code, hits: count }))
        .sort((a, b) => b.hits - a.hits)
        .slice(0, limit);
}
