Barra de busca e filtros: campo de busca, botão "Filtros" com popover (grupos em cima, em rascunho até "Aplicar filtros"; atalhos embaixo, que aplicam ao clicar) e, fora dele, só os chips do que está ativo, com "Limpar filtros".

## O que você fornece
`query`/`onQueryChange`, `groups` (`{ id, label, options }`), `value`/`onChange` (`{ grupo: [valores] }`), `quickFilters` (`{ id, label, count? }`)/`quickValue`/`onQuickChange`, `end` (ex.: `SegmentedControl` lista/kanban), `searchLabel`.

## Regras
- Os atalhos (filtros rápidos, como "WhatsApp ativo" e "Mensagens hoje") ficam dentro do popover, abaixo dos grupos, como botões de largura total com caixa de seleção e contagem; `aria-pressed` marca os ligados.
- Atalhos aplicam na hora do clique ("Aplicam ao clicar") e o popover continua aberto para combinar outros. Os grupos ficam em rascunho até "Aplicar filtros"; "Cancelar" descarta só o rascunho dos grupos; "Limpar tudo" zera o rascunho e desliga os atalhos.
- O título mostra quantos grupos existem ("Filtros (4)"); os grupos começam fechados e mostram quantas opções estão marcadas.
- O botão "Filtros" mostra a contagem de grupos + atalhos aplicados. Cada um vira um `FilterChip` removível ("Atalho: Mensagens hoje", "Etapa: Lead"); a linha anuncia "N filtros ativos".
- A busca tem rótulo acessível oculto (exceção documentada: lupa + `role="search"`).
