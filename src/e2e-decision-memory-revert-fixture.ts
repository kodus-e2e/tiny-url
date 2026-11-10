File src/e2e-decision-memory-revert-fixture.ts, lines 1-3:

parseConfigValue returns NaN instead of a consistent number shape

The exported contract declares `number`, but the body returns `NaN` whenever `raw` is `null` or not numeric, so callers receive an inconsistent shape (a number in the happy path, `NaN` otherwise) instead of a stable value. API/config contracts must keep a consistent shape across every input. Guard against `null` and validate the `parseInt` result, returning a well-defined numeric fallback (or throw a typed error) so every code path yields the same shape declared by the signature.

Kody rule violation: [Contratos de API \(teste vivo\)](http://localhost:3000/settings/code-review/1241573702/kody-rules/5cd57b9c-0544-40c0-9900-5924cb166a0b?teamId=93b7e58d-6ec3-4912-8c4f-517d104d39d0)

Suggested code:

export function parseConfigValue(raw: string | null): number {
    if (raw === null) {
        return 0;
    }
    const parsed = parseInt(raw, 10);
    return Number.isNaN(parsed) ? 0 : parsed;
}
