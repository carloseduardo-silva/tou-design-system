Barra de progresso determinada ou indeterminada para tarefas longas (importação, disparo), com tons de sucesso e erro.

## O que você fornece
`label`, `value` (0–100; sem valor = indeterminado), `tone`, `help` ("428 de 667 contatos"), `size`, `showValue`.

## Regras
- `role="progressbar"` com `aria-valuenow`. Sucesso e erro levam ícone na ajuda.
- O indeterminado fica parado com "reduzir movimento".
