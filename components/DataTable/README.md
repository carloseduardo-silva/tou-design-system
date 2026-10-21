Tabela de dados densa (40px) ou confortável (56px) com ordenação, seleção com ações em massa, linha expansível, carregando, vazio e paginação, que vira lista de cards abaixo de 768px.

## O que você fornece
`caption`, `columns` (`{ key, header, render?, sortable?, numeric?, width?, mobile: 'title' | 'row' | 'tags' | 'hidden' }`), `rows`, `rowKey`, `density`, `selectable`/`selected`/`onSelectionChange`, `bulkActions`, `sort`/`onSortChange`, `renderDetail`/`expanded`/`onExpandedChange`, `rowActions`, `loading`, `empty` (um `EmptyState compact`), `pagination` (`{ page, pageSize, total, onPageChange, itemLabel }`), `layout`.

## Regras
- Cabeçalho em `bg-sunken`, 12px peso 500, caixa de frase. Ordenável: botão no cabeçalho com `aria-sort`; ativo em `text-brand` com seta.
- Hover de linha `bg-hover`; selecionada `bg-selected` + checkbox marcado. O cabeçalho tem "selecionar todos" com estado indeterminado.
- Números à direita, em mono tabular. Telefones e IDs em mono.
- Ações da linha: `IconButton` ghost "Mais ações para {nome}".
- Densa esconde a segunda linha (canal) da célula de contato.
- Carregando: skeleton com `aria-busy`. Vazio: estado compacto dentro da tabela.
