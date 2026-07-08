---
title: "Teste manual — verbatim e multi-glob"
scope: "file"
path: ["src/manual_a/**/*.ts", "lib/manual_b/**/*.ts"]
severity_min: "high"
languages: ["jsts"]
enabled: true
---

@kody-sync

## Instructions
- **MAN1** Nunca use `console.log` em código de produção; use o logger estruturado.
- **MAN2** Toda função exportada deve ter tipo de retorno explícito.
- Este texto deve aparecer na UI EXATAMENTE como está aqui — incluindo os identificadores **MAN1**/**MAN2** em negrito e esta frase inteira.

## Examples

### Bad example
```ts
export function total(items) {
  console.log("debug", items);
  return items.length;
}
```

### Good example
```ts
export function total(items: Item[]): number {
  logger.debug({ count: items.length });
  return items.length;
}
```

<!-- resync 195856 -->

<!-- fresh import 200114 -->

<!-- fresh import v3 200701 -->

<!-- trace run 201653 -->

<!-- final proof 202505 -->
