/**
 * In-memory key/value store. Reset on process restart — intentional for
 * the demo; swap for Redis or Postgres in a real deployment.
 */
const data: Record<string, string> = Object.create(null);

export function store(code: string, url: string): void {
    data[code] = url;
}

export function load(code: string): string | undefined {
    return data[code];
}

export function size(): number {
    return Object.keys(data).length;
}

export function clear(): void {
    for (const k of Object.keys(data)) {
        delete data[k];
    }
}
