Card de número de destaque: rótulo (com informação opcional), valor, variação com seta e sinal e mini-gráfico de tendência.

## O que você fornece
`label`, `value` (já formatado), `delta` (%), `invert` (quando subir é ruim, como tempo de resposta), `comparison` ("vs. setembro"), `trend` + `trendLabels`, `info`, `loading`, `large`.

## Regras
- A variação é um badge de sucesso ou erro **com seta e sinal** ("+12,4%"), nunca só cor.
- Mini-gráfico: uma série, linha de 2px em `primary` com área em `primary-soft` e ponto final de 8px; dica por ponto no hover. Sem eixo nem legenda (o rótulo do card nomeia a série).
- Valor em 30px (ou 36px com `large`), números tabulares.
