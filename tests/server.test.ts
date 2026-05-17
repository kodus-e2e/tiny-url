import { afterEach, describe, expect, it } from "vitest";
import request from "supertest";
import { createServer } from "../src/server.js";
import { clear } from "../src/storage.js";

describe("server", () => {
    afterEach(() => clear());

    it("POST /shorten returns 201 and a code for a valid URL", async () => {
        const res = await request(createServer())
            .post("/shorten")
            .send({ url: "https://example.com" });

        expect(res.status).toBe(201);
        expect(res.body.code).toMatch(/^[A-Za-z0-9]{7}$/);
        expect(res.body.shortUrl).toContain(res.body.code);
    });

    it("POST /shorten returns 400 on a non-http URL", async () => {
        const res = await request(createServer())
            .post("/shorten")
            .send({ url: "javascript:alert(1)" });
        expect(res.status).toBe(400);
    });

    it("GET /:code redirects to the original URL", async () => {
        const app = createServer();
        const created = await request(app)
            .post("/shorten")
            .send({ url: "https://example.com/target" });

        const res = await request(app).get(`/${created.body.code}`);
        expect(res.status).toBe(301);
        expect(res.headers.location).toBe("https://example.com/target");
    });

    it("GET /:code returns 404 when the code is unknown", async () => {
        const res = await request(createServer()).get("/nope");
        expect(res.status).toBe(404);
    });
});
