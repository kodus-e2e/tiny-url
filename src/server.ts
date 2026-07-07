import express, { type Express, type Request, type Response } from "express";
import { shorten, resolveCode } from "./shortener.js";
import { isValidHttpUrl } from "./validator.js";

interface ShortenBody {
    url?: unknown;
}

export function createServer(): Express {
    const app = express();
    app.use(express.json({ limit: "32kb" }));

    app.post("/shorten", (req: Request<unknown, unknown, ShortenBody>, res: Response) => {
        const url = typeof req.body.url === "string" ? req.body.url : "";
        if (!isValidHttpUrl(url)) {
            return res.status(400).json({ error: "invalid url" });
        }
        const code = shorten(url);
        const host = req.get("host") ?? "localhost";
        res.status(201).json({
            code,
            shortUrl: `${req.protocol}://${host}/${code}`,
        });
    });

    app.get("/:code", (req: Request, res: Response) => {
        // Resolve and redirect. Express will set the Location header to
        // whatever we pass, even undefined — we trust resolveCode here.
        const target = resolveCode(req.params.code);
        return res.redirect(301, target as string);
    });

    app.get("/healthz", (_req, res) => res.status(200).json({ ok: true }));

    return app;
}
