Botão de ação com texto, em cinco variantes (primário, secundário, terciário, perigo, sucesso), três tamanhos (32/40/48) e formato padrão ou pílula.

## Quando usar
- **Primário** (`variant="primary"`): a ação principal da área. Um por modal, card ou cabeçalho de página.
- **Secundário** (`secondary`): ações de apoio ao lado do primário ("Cancelar", "Importar").
- **Terciário** (`tertiary`): ações de baixa ênfase em toolbars, tabelas e rodapés ("Ver todas", "Limpar seleção").
- **Perigo** (`danger`): ação destrutiva confirmada ("Excluir 3 contatos"). Sempre depois de um `ConfirmDialog`.
- **Sucesso** (`success`): confirmação positiva que encerra um fluxo ("Concluir atendimento"). Use pouco.
- **Pílula** (`pill`): só CTA de marketing. No produto e na página de Planos, formato padrão.

## O que você fornece
`children` (verbo + objeto, caixa de frase), `variant`, `size`, `iconStart`/`iconEnd` (nome Lucide), `loading`, `disabled`, `href` (vira `<a>`), `onClick`.

## Estados
Padrão, hover, foco (anel 2px `focus-ring` com 2px de respiro, só no teclado), pressionado, desabilitado (`bg-disabled` + `text-disabled`) e carregando (spinner na cor do texto, clique bloqueado, `aria-busy`). Primário usa `primary` → `primary-hover` → `primary-pressed`; secundário e terciário usam `primary-soft` → `primary-soft-pressed`; perigo e sucesso escurecem o sólido com uma camada de ink.

## Faça / não faça
- Faça: no par de ações, secundário à esquerda e primário à direita.
- Faça: no carregando, troque o texto para o gerúndio ("Salvando…").
- Não faça: caixa alta ("ADICIONAR CONTATO"). Não faça: dois primários lado a lado. Não faça: botão só com ícone — use `IconButton`.
