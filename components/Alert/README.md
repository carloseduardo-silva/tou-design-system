Mensagem persistente no contexto da página, suave ou sólida por estado (info, sucesso, alerta, erro), e banner de largura total no topo.

## O que você fornece
`tone`, `solid`, `banner`, `title`, `children` (descrição), `actions`, `onClose`.

## Regras
- Suave: fundo `*-soft`, borda e ícone no token de texto do estado (3:1). Sólido: só para o que bloqueia o uso (WhatsApp desconectado).
- Âmbar sólido leva texto escuro (`on-warning`), nunca branco.
- Ícone + título sempre: nunca só cor. Erro e alerta usam `role="alert"`; os demais, `status`.
