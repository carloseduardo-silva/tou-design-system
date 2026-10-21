Caixa de seleção (marcado, desmarcado, indeterminado) e `ChoiceGroup` para agrupar opções sob uma pergunta (fieldset + legend).

## O que você fornece
`label` e `description` opcionais; sem texto visível (tabela), `ariaLabel`. `checked`, `indeterminate`, `invalid`, `disabled`, `onChange`.

## Regras
- A caixa tem 16px, mas o alvo tem no mínimo 24px.
- Marcado: `primary` com check branco. Erro: borda `danger` + mensagem do grupo.
- Use checkbox quando a mudança só vale ao salvar; para efeito imediato, `Switch`.
