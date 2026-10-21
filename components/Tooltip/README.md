Dica curta no hover e no foco (`Tooltip`) e ícone de informação focável que mostra uma explicação (`InfoTip`).

## Regras
- Abre com 300 ms de atraso no hover e na hora no foco; Esc fecha. `aria-describedby` liga a dica ao elemento.
- Fundo `text` com texto `bg-surface`: inverte nos dois temas e passa 4,5:1.
- Nunca coloque informação essencial só no tooltip, e ele nunca substitui o nome acessível de um `IconButton`.
- `InfoTip` tem alvo de 24px e nome "Mais informações sobre {assunto}".
