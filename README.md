# Tiny URL

A minimal URL-shortener HTTP API. Accepts long URLs, returns short codes, and
redirects on lookup. In-memory storage — meant as a deliberately small,
realistic codebase, not a production service.

## Quick start

```bash
yarn install
yarn dev
```

The server listens on `:3000` by default (override with `PORT`).

## API

```http
POST /shorten
Content-Type: application/json

{ "url": "https://example.com/some/long/path" }
```

Returns `201 Created` with `{ code, shortUrl }`.

```http
GET /:code
```

Redirects (`301`) to the original URL. Returns `404` if the code is unknown.

## Stack

- Node.js 20+
- Express 4
- TypeScript (strict)
- Vitest for tests
