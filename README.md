A TOU é um CRM de atendimento e vendas pelo WhatsApp. Este sistema serve aos dois lados da marca com os mesmos tokens, a mesma tipografia e os mesmos componentes base:

- **Produto (CRM):** a ferramenta que equipes de atendimento usam o dia inteiro. Densa, calma e previsível: tabelas, filtros, formulários, chat.
- **Marketing:** site institucional e landing pages. Mais expressivo: hero escuro, gradiente ciano, serif de destaque, CTAs em pílula.

O produto é a prioridade. O marketing é uma camada por cima, nunca outra marca.

## Princípios

1. **Um azul.** `primary` (#1D70DC) é a única cor de interface, no produto e no site. Nenhum outro azul faz papel de botão, link ou seleção.
2. **O ciano é assinatura, não interface.** `brand-blue → brand-cyan → brand-teal` é o gradiente do logotipo: brilho, ilustração e destaque sobre fundo escuro. Nunca texto sobre claro, nunca fundo de texto branco.
3. **Densidade com respiro.** O produto é compacto (corpo 14px, linhas de 40–48px) mas sempre na escala de espaço de 4px.
4. **Acessível por padrão.** Todo par de cor documentado aqui já passa WCAG AA. Quem consome não precisa recalcular; precisa só respeitar os pares.

## Temas

| Tema (`data-theme`) | Onde | Observação |
| --- | --- | --- |
| `light` (Claro) | Produto, site e página de Planos | O tema padrão e o primeiro: tudo o que não especifica tema cai nele. |
| `dark` (Escuro) | Produto, quando o usuário escolhe | Superfícies em cinza neutro puro (`gray-950/900/800`), não azulado. |
| `navy` (Marinho) | Seções escuras do site (hero, CTA) e o painel interno de leads | `ink-950`/`ink-900`. O painel de leads é sempre `navy`. No site, aplique `data-theme="navy"` só no container da seção. |

- A **página de Planos** é parte do produto e é sempre `light`, mesmo para quem usa o produto no escuro. Ela usa os tokens e componentes do produto: sem `mkt-*`, sem serif, sem papéis do marketing.
- O **site** só tem tema claro por enquanto; as seções escuras são `navy`, não `dark`.
- Não existe personalização por cliente (não é whitelabel). Uma marca, um conjunto de temas.

## Cor

**Use os papéis, não a escala.** Componentes e telas consomem os tokens semânticos (`bg-*`, `text-*`, `border*`, estados). As escalas `primary-*`, `ink-*`, `gray-*` e `paper-*` existem para montar esses papéis, para gráficos e para casos de marketing descritos abaixo.

### Fundos

- Página do produto: `bg-page`. Cards, modais, popovers, menu lateral e tabelas: `bg-surface`. Poço, faixa de filtros, área do chat, cabeçalho de tabela: `bg-sunken`.
- Hover de linha, item de menu e botão ghost: `bg-hover`. Item ativo e linha selecionada: `bg-selected`, sempre com mais um sinal (indicador de 2px em `primary`, ícone preenchido ou peso 600).
- Véu atrás de modal e gaveta: `bg-overlay`.
- Site: a página é `bg-surface` (branco). Seções alternadas usam `paper-50`; faixa de logos e FAQ podem usar `paper-100`; divisores sobre papel usam `paper-200`.

### Texto

- `text` para o principal, `text-secondary` para apoio e cabeçalhos de tabela, `text-tertiary` para placeholder e metadados, `text-disabled` para desabilitado.
- No tema escuro, `text-tertiary` é `#929EA6` (ajuste aprovado ao brief): passa 4,5:1 também sobre `bg-hover` e `bg-selected` (#333333), então metadados não trocam de cor no hover.
- `text-brand` para texto na cor da marca (aba ativa, valor em destaque, botão secundário e ghost). `link` é um apelido dele.
- No claro, `primary` (#1D70DC, o 600) como texto **só sobre branco puro** (4,77:1). Em qualquer outro fundo claro, o texto da marca é `text-brand` (o 700). Por isso `text-brand` e `link` já são o 700 por padrão: funcionam em todos os fundos claros.
- Nos temas escuros, `text-brand`, `link` e `focus-ring` passam para `primary-400` (~7:1).
- Sobre `primary`, `primary-hover`, `primary-pressed` e `info-solid`: `text-on-primary` (branco).

### Bordas

- `border` para divisores e contorno de card, tabela e modal (decorativo).
- `border-control` para o contorno de input, select, checkbox e radio. Ele passa 3:1 e é o que mostra que o campo existe; não troque por `border`.

### Estados

Cada estado tem quatro tokens: texto (`success`, `warning`, `danger`, `info`), fundo suave (`*-soft`), fundo sólido (`*-solid`) e o texto sobre o sólido (`on-*`).

| Estado | Suave | Sólido | Quando |
| --- | --- | --- | --- |
| Sucesso | `success` sobre `success-soft` | `on-success` sobre `success-solid` | Salvo, conectado, entregue. |
| Alerta | `warning` sobre `warning-soft` | `on-warning` sobre `warning-solid` | Sem WhatsApp, limite próximo, qualidade caiu. |
| Erro | `danger` sobre `danger-soft` | `on-danger` sobre `danger-solid` | Falha, template rejeitado, ação destrutiva. |
| Info | `info` sobre `info-soft` | `text-on-primary` sobre `info-solid` | Informação neutra. Info **é** a primária. |

- O âmbar sólido (`warning-solid`) leva texto escuro (`on-warning`), **nunca branco**.
- Informação nunca só por cor: todo status leva ícone ou texto ("Conectado", "Sem WhatsApp").
- A borda de um alerta ou campo com erro usa o token de texto do estado (`danger`, `warning`…), que passa 3:1.
- Estrelas de avaliação: `rating`, sempre com a nota escrita ao lado ("4,9 de 5").

### Marca e marketing

- O gradiente de marca é `brand-blue → brand-cyan → brand-teal` (nessa ordem, em diagonal, como no logo). Use em brilhos, malhas de fundo do hero, ilustrações, bordas finas de destaque e palavra de título sobre `navy`.
- **Proibido:** texto branco sobre o gradiente ou sobre qualquer ciano (1,8–3:1); ciano como cor de texto sobre fundo claro; um segundo azul de interface.
- Sobre `navy`, títulos podem ter uma palavra em `brand-cyan` (9:1 sobre `ink-950`). O CTA principal continua `primary` com `text-on-primary`.

## Tipografia

- **Geist** é a única sans (`--font-sans`), no produto e no site. **Geist Mono** (`--font-mono`) para IDs, código, horários e números que precisam alinhar (`font-variant-numeric: tabular-nums`). **Instrument Serif** itálico (`--font-serif`) só no marketing, numa palavra dentro de um título ou numa citação.
- Pesos carregados: 400 (texto), 500 (rótulos, botões), 600 (títulos), 700 (reserva para marketing). Os arquivos são variáveis; não use outros pesos.
- Nunca texto abaixo de 12px (`caption`, `label-sm`), exceto `overline` (11px, caixa alta).
- Use só tamanhos da escala. Nada de 13,6px ou 11,2px.

**Produto** (base 14px): `display` para KPI grande; `h1` uma vez por tela, no cabeçalho da página; `h2` seções; `h3` título de card e modal; `h4`–`h6` subseções; `body` é o padrão de tudo, `body-lg` para descrições de vazio e introduções; `small` e `caption` para metadados e tabelas densas; `label` para rótulos de campo, botões 40/48 e abas; `label-sm` para botão 32, badge, chip e tag; `overline` para rótulo de grupo no menu; `mono` para IDs ("#1118909").

**Marketing** (fluido de 375 a 1280px de viewport): `mkt-display` só no hero; `mkt-h1` páginas internas e CTA; `mkt-h2` **todos** os títulos de seção (um tamanho só, não varie de seção para seção); `mkt-h3` cards e FAQ; `mkt-lead` subtítulos; `mkt-body` texto corrido; `mkt-eyebrow` acima do título de seção. A fórmula `clamp()` de cada um está na nota do estilo.

**Palavra em destaque:** `<Accent>` (classe `tou-accent`) dentro do título, em `font-size: 1.08em` do título, peso 400, sem tracking negativo. Uma por título, nunca em parágrafo, nunca no produto.

Títulos grandes têm tracking negativo (−2% a −3%, já nos estilos); textos de 18px para baixo ficam em 0, e `overline`/`mkt-eyebrow` abrem (+8% e +12%).

## Conteúdo

- Português do Brasil, tratando o usuário por "você". Frases curtas e diretas, verbo no início dos botões: "Adicionar contato", "Importar contatos", "Agendar demonstração".
- **Caixa de frase** em títulos, botões, abas e rótulos ("Adicionar contato", não "ADICIONAR CONTATO" nem "Adicionar Contato"). As únicas caixas altas são `overline` e `mkt-eyebrow`.
- Rótulo sempre visível acima do campo; o placeholder só dá um exemplo ("email@exemplo.com"), nunca substitui o rótulo.
- Mensagens de erro dizem o que fazer: "Digite um número com DDD", não "Formato inválido".
- Sem emoji na interface.

## Espaço e layout

- Base 4px. Use só a escala `space-*`: 2 · 4 · 6 · 8 · 10 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96.
- Produto: margem da página `space-8` no desktop e `space-4` no celular; padding de card e modal `space-6`; gap entre campos empilhados `space-4`; entre rótulo e campo `space-2`.
- Site: padding vertical de seção `space-24` no desktop, `space-20` no tablet, `space-12` no celular; container de até 1200px.
- Breakpoints (min-width): `bp-sm` 600 · `bp-md` 768 · `bp-lg` 1024 · `bp-xl` 1280 · `bp-2xl` 1536.

## Forma

| Token | Valor | Uso |
| --- | --- | --- |
| `radius-2xs` | 2px | indicadores |
| `radius-xs` | 4px | checkbox |
| `radius-sm` | 6px | controles pequenos, tooltip |
| `radius-md` | 8px | botões, inputs, células, itens de menu |
| `radius-lg` | 12px | cards, popovers, toasts |
| `radius-xl` | 16px | modais, gavetas |
| `radius-2xl` | 24px | cards de marketing |
| `radius-pill` | pílula | CTA de marketing, chips, badges, avatares |

Ou é pílula, ou é um raio da escala. Nada de "quase pílula" (20px num botão de 40px).

## Profundidade

- Cinco sombras, `shadow-xs` a `shadow-xl`, tingidas de ink no claro. Não crie outras.
- `shadow-xs` em botão secundário e input; `shadow-sm` em card elevado e card de kanban; `shadow-md` em popover, menu e card interativo no hover; `shadow-lg` em toast e gaveta; `shadow-xl` em modal.
- Nos temas escuros a separação vem de `bg-surface` mais claro que `bg-page` e de `border`. `shadow-xs` e `shadow-sm` são `none` lá; só camadas flutuantes (md–xl) mantêm uma sombra preta discreta.

## Foco e interação

- Todo componente interativo tem, nos dois temas: hover, **foco visível**, pressionado e desabilitado; quando couber, carregando, erro e vazio.
- Foco: `outline: 2px solid var(--focus-ring); outline-offset: 2px;` só em `:focus-visible` (navegação por teclado). Nunca remova o outline sem pôr esse no lugar.
- Alvos de toque: no mínimo 24×24px no produto e 44×44px no celular do site, mesmo quando o ícone é menor.
- Botão só de ícone sempre tem nome acessível (`aria-label`). O tooltip é opcional e não substitui o nome.

## Movimento

- `duration-instant` (100ms) para feedback, `duration-fast` (150ms) para hover e foco, `duration-base` (200ms) como padrão, `duration-slow` (300ms) para modal e gaveta, `duration-slower` (500ms) só para entrada de seções no site.
- `ease-standard` para mudanças na tela, `ease-enter` para o que aparece, `ease-exit` para o que sai, `ease-emphasized` só no marketing.
- Com `prefers-reduced-motion: reduce`, transições viram troca instantânea (ou um fade de `duration-fast`), e toda animação contínua (faixa de logos, brilhos, skeleton, autoplay de abas) para ou fica pausada.

## Logotipo

- O logotipo é o "tou" com o símbolo de dois arcos no gradiente ciano. Ele não muda e não é redesenhado: use os arquivos do grupo **Logos**.
- `tou-logo-cor.webp` em todos os fundos, claros e escuros (`navy`, `dark`), como no site atual.
- `tou-logo-branco.webp` tem ~10% de opacidade (marca-d'água): use só como textura sobre fundo escuro, nunca como logo. Um logo branco sólido ainda precisa ser fornecido.
- Nunca recolorir, contornar ou aplicar sombra no logo.

## Iconografia

- Ícones de traço (outline) de 1,5–2px, em grade de 20px (produto) e 24px (site), herdando a cor do texto ao lado (`currentColor`).
- Ícone que carrega informação (status, erro) usa o token do estado e passa 3:1. Ícone decorativo fica `aria-hidden`.
- A família é **Lucide** (licença ISC), com os traços copiados como estão. O componente `Icon` (`<Icon name="search" />`) cobre os ícones usados pelo sistema; a lista está em `IconName` em `components/index.d.ts`. Para um ícone novo, copie o dele da Lucide, sem desenhar.
- Tamanhos: 16 em botões, campos e chips; 20 no menu lateral e nos botões de ícone de 40; 12 em badges e tags.

## Componentes

- Carregue nesta ordem: `tokens.css`, `components/bundle.css`, React 18 e ReactDOM 18, `components/bundle.js`. Os componentes ficam em `window.TOU` (`TOU.Button`, `TOU.DataTable`…), e as props estão em `components/index.d.ts`.
- Os componentes só usam tokens. Para o tema, ponha `data-theme="light" | "dark" | "navy"` no `<html>` ou num container.
- Toda classe começa com `tou-`. Os modificadores `is-hover`, `is-active`, `is-focus` e `is-open` forçam estados e servem só para documentação e testes; não use em produção.
- Antes de criar algo novo, procure um componente que já resolva. Ações de linha e "Importar / exportar" usam `Menu`; listas longas usam `Pagination` (a `DataTable` já traz a dela); a lupa do `Sidebar` filtra as telas do menu; filtros rápidos são atalhos dentro do popover da `FilterBar`, não chips soltos na tela.
- Overlays (`Modal`, `ConfirmDialog`, `Drawer`) aceitam `contained` para cobrir só um container posicionado, como nas telas de referência.
- **Exceção ao rótulo visível:** o campo de busca da `FilterBar`, do `PageHeader` e da busca do `Sidebar` usa rótulo acessível oculto (`tou-sr-label`). Nesses lugares, a lupa e o `role="search"` cumprem o papel visual. Em qualquer formulário, o rótulo fica visível acima do campo.

## Marketing

- Envolva o site em `.tou-site` (tema `light`). Ele é o container das consultas responsivas: os componentes se adaptam à largura do site, não da janela, e a tipografia fluida usa `cqi` (igual a `vw` quando o site ocupa a tela toda).
- Seções: `tou-section` (96px de respiro no desktop, 80 no tablet, 48 no celular), alternando branco, `tou-section--paper` (`paper-50`) e `tou-section--paper2` (`paper-100`). Hero, CTA e rodapé são `navy`.
- Componentes: `SiteHeader`, `Hero` (+ `ProductPreview` e `Accent`), `SectionHeader`, `LogoStrip` e `TestimonialStrip` (sobre `Marquee`), `FeatureTabs`, `LeadForm` e `ScheduleModal`, `CtaBanner`, `Faq`, `SiteFooter`.
- CTAs do site são `Button pill size="lg"`. Cards de marketing usam `radius-2xl`.
- Movimento: faixas e autoplay sempre com pausa visível (44px) e parados com "reduzir movimento"; entradas usam `duration-slower` + `ease-emphasized`.
- Alvos de toque de 44px no celular do site: botão de menu, pausas, links do rodapé, horários do agendamento.

## Telas de referência

O grupo **Telas** traz páginas navegáveis montadas só com estes componentes: a landing completa (desktop e celular, com o agendamento), a lista de contatos (claro e escuro, com filtros, seleção, paginação e vazio), a mesma lista no celular, o modal "Novo contato" com validação e a página **Meu plano** (sempre no tema claro). Use-as como padrão de composição: margem `space-8`, `PageHeader` → `FilterBar` → `DataTable`, ações primárias à direita. Os dados, os preços, os logos de clientes e os depoimentos dessas telas são fictícios ou marcadores.

## Manter e evitar

**Manter:** o gradiente e os brilhos ciano como assinatura do marketing; as seções escuras em azul-marinho profundo; os cinzas levemente azulados; a densidade do produto; os CTAs em pílula no site; o símbolo de dois arcos.

**Evitar:** mais de um azul de interface; texto branco sobre gradiente; títulos que mudam de tamanho de seção para seção; tamanhos de texto quebrados; sombras fora da escala; raio "quase pílula"; botões só de ícone sem nome; rótulos que são só placeholder; estados vazios diferentes para a mesma situação; mais de uma família sans.
