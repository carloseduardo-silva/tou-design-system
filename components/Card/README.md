Container de conteúdo: plano (borda), elevado (`shadow-sm`) e interativo (o card inteiro clicável, com hover, foco, pressionado, selecionado e desabilitado).

## O que você fornece
`variant`, `title`, `subtitle`, `action` (só em card não interativo), `footer`, `href` ou `onClick` (interativo), `selected`, `disabled`, `children`.

## Regras
- O interativo usa um link/botão esticado no título: um só alvo, um só nome. Não coloque outros botões dentro dele.
- Selecionado: borda `primary` dupla (forma), não só cor de fundo.
