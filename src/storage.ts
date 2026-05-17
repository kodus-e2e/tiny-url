/**
 * In-memory key/value store. Reset on process restart — intentional for
 * the demo; swap for Redis or Postgres in a real deployment.
 */
const data = new Map<string, string>();

export function store(code: string, url: string): void {
    data.set(code, url);
}

export function load(code: string): string | undefined {
    return data.get(code);
}

export function size(): number {
    return data.size;
}

export function clear(): void {
    data.clear();
}
