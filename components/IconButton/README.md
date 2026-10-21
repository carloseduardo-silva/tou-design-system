Botão só com ícone, sempre com nome acessível (`label`), em três variantes (padrão com contorno, tonal e ghost) e dois tamanhos (32 e 40).

## Quando usar
- **Ghost** (padrão do componente): toolbars, linhas de tabela ("Mais ações"), cabeçalho do chat.
- **Padrão** (`variant="default"`): ação isolada que precisa de contorno (atualizar lista, editar).
- **Tonal**: ação de destaque compacta ("Nova conversa").
- `pressed` para alternâncias (fixar conversa); `badge` para contador (notificações).

## O que você fornece
`icon` (Lucide), `label` (obrigatório: vira `aria-label`; com `badge`, o número entra no nome), `variant`, `size`, `onClick`.

## Acessibilidade
- O tooltip é opcional e **não substitui** o `label`.
- Alvo mínimo: 32px no produto (24px é o piso). No celular do site, 44px.
