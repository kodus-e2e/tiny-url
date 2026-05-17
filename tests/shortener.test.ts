import { afterEach, describe, expect, it } from "vitest";
import { resolveCode, shorten } from "../src/shortener.js";
import { clear } from "../src/storage.js";

describe("shortener", () => {
    afterEach(() => clear());

    it("round-trips a long URL through a 7-char code", () => {
        const code = shorten("https://example.com/some/long/path?with=query");
        expect(code).toMatch(/^[A-Za-z0-9]{7}$/);
        expect(resolveCode(code)).toBe(
            "https://example.com/some/long/path?with=query",
        );
    });

    it("returns undefined for unknown codes", () => {
        expect(resolveCode("nonexistent")).toBeUndefined();
    });

    it("does not collide across 100 shortens", () => {
        const codes = new Set<string>();
        for (let i = 0; i < 100; i++) {
            codes.add(shorten(`https://example.com/${i}`));
        }
        expect(codes.size).toBe(100);
    });
});
