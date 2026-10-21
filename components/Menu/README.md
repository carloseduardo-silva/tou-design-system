Menu suspenso de ações (`role="menu"`), aberto por um botão: ações de linha da tabela, "Importar / exportar", ações do cabeçalho do chat.

## O que você fornece
`trigger` (um `IconButton` ou `Button`; o menu põe nele `aria-haspopup`, `aria-expanded` e o clique), `items` (`{ id, label, icon?, danger?, disabled?, hint?, separator?, group? }`), `onSelect(id)`, `align` (`end` para ações de linha), `label`.

## Comportamento
- Clique, Enter ou ↓ abrem com o primeiro item ativo; ↑ abre no último. Setas, Home/End e a primeira letra navegam. Enter escolhe. Esc fecha e devolve o foco ao gatilho; Tab fecha.
- Item ativo em `bg-hover`; destrutivo em `danger` com hover `danger-soft`, sempre por último e depois de um divisor; desabilitado em `text-disabled`.

## Faça / não faça
- Faça: ações destrutivas abrem um `ConfirmDialog` depois do menu.
- Não faça: menu para escolher um valor de formulário — use `Select`. Não faça: mais de 8 itens sem grupos.
