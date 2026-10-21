Paginação simples: "Mostrando 1–40 de 52.218 itens" à esquerda; "Página 1 de 1.306" e os botões primeira, anterior, próxima e última à direita. Versão compacta ("81–120 de 52.218 itens" e "3 de 1.306") para celular e cards.

## O que você fornece
`page`, `pageSize`, `total`, `onPageChange`, `itemLabel` ("itens", "contatos"), `compact`, `standalone` (fora de tabela, sem borda).

## Regras
- Sem páginas numeradas e sem seletor de linhas por página: o tamanho da página é decidido pela tela.
- Os quatro botões são `IconButton` ghost de 32px com nome acessível ("Primeira página", "Página anterior", "Próxima página", "Última página"). Na primeira página, primeira e anterior ficam desabilitados; na última, próxima e última.
- Números com separador de milhar ("52.218"), em algarismos tabulares. O intervalo é anunciado (`aria-live`) quando a página muda.
- A `DataTable` já usa este componente no rodapé (prop `pagination`).
