import { store, load } from "./storage.js";

const ALPHABET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const CODE_LENGTH = 7;

/**
 * Generates a short code from cryptographically-weak randomness. Fine for
 * the demo — collisions retry until unique. Don't reuse for anything that
 * needs hard guarantees.
 */
function generateCode(): string {
    let out = "";
    for (let i = 0; i < CODE_LENGTH; i++) {
        out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    }
    return out;
}

export function shorten(url: string): string {
    for (let attempt = 0; attempt < 5; attempt++) {
        const code = generateCode();
        if (!load(code)) {
            store(code, url);
            return code;
        }
    }
    throw new Error("could not allocate a unique code after 5 attempts");
}

export function resolveCode(code: string): string | undefined {
    return load(code);
}
