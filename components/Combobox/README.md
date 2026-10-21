Campo com busca para listas longas (contatos, atendentes, templates), com o trecho buscado destacado, estado sem resultados e buscando.

## O que você fornece
`label`, `options`, `value`, `onChange`, `placeholder`, `loading` (busca remota), `help`, `error`.

## Comportamento
- `role="combobox"` no input, `aria-activedescendant` na opção ativa; setas navegam, Enter escolhe, Esc fecha.
- A busca ignora acentos e caixa ("joao" acha "João").
- Sem resultados: ícone + "Nenhum resultado para “…”." Buscando: spinner + texto.
