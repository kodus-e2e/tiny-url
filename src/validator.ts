/**
 * Returns true when `value` is a syntactically valid http(s) URL. Other
 * schemes (ftp, mailto, javascript) and malformed input are rejected.
 */
export function isValidHttpUrl(value: unknown): value is string {
    if (typeof value !== "string" || value.length === 0) return false;
    try {
        const parsed = new URL(value);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
        return false;
    }
}
