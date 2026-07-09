---
title: "Padrão de logging (teste vivo)"
scope: "file"
path: ["src/manual_a/**/*.ts", "lib/manual_b/**/*.ts"]
severity_min: "high"
languages: ["jsts"]
enabled: true
---

@kody-sync

## Instructions
- **LOG1** Nunca use `console.log` em código de produção; use o logger estruturado.
- **LOG2** Toda função exportada deve ter tipo de retorno explícito **e JSDoc de uma linha**. (EDITADO pelo kit-4)
- Este texto deve aparecer na UI EXATAMENTE como está no arquivo — incluindo **LOG1**/**LOG2** em negrito e esta frase inteira.

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
