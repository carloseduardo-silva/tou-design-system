import os, sys
DS = sys.argv[1]
R = {}

R['Button'] = """Botão de ação com texto, em cinco variantes (primário, secundário, terciário, perigo, sucesso), três tamanhos (32/40/48) e formato padrão ou pílula.

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
"""

R['IconButton'] = """Botão só com ícone, sempre com nome acessível (`label`), em três variantes (padrão com contorno, tonal e ghost) e dois tamanhos (32 e 40).

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
"""

R['Link'] = """Link inline (sublinhado, dentro de texto corrido) ou solto (sem sublinhado até o hover), com variante externa que abre em nova aba.

## Regras
- Cor `link` (o 700 no claro, o 400 no escuro): passa em qualquer fundo do tema.
- Hover engrossa o sublinhado; foco mostra o anel.
- `external`: ícone + "(abre em nova aba)" para leitores de tela.
- Para ações (não navegação), use `Button variant="tertiary"`, não link.
"""

R['TextField'] = """Campo de texto de uma linha e `Textarea`, com rótulo sempre visível acima, ajuda e erro abaixo ligados ao campo.

## O que você fornece
`label` (obrigatório), `required` ou `optional`, `placeholder` (só exemplo, nunca o rótulo), `help`, `error`, `icon`, `prefix`/`suffix` ("R$", "dias"), `addonStart` (seletor de país do telefone), `onClear`, `maxLength` (mostra contador), `size` (`sm` 32 para filtros e tabelas, `md` 40 para formulários), `disabled`, `readOnly`.

## Estados
Padrão (`border-control`, 3:1), hover (borda `text-secondary`), foco (borda e anel `focus-ring`), erro (borda `danger`, mensagem com ícone, `aria-invalid`), desabilitado (`bg-disabled`) e somente leitura (`bg-sunken`).

## Texto
- Erro diz como corrigir: "Digite um e-mail completo, como nome@empresa.com.", não "Formato inválido".
- Marque o que é minoria: se quase tudo é obrigatório, marque os opcionais.

## Exceção
A busca da `FilterBar` e do `PageHeader` usa rótulo acessível oculto (`className="tou-sr-label"`): a lupa e o papel `search` fazem o papel visual. Em formulário, o rótulo é sempre visível.
"""

R['Select'] = """Escolha de uma opção numa lista curta (até ~15 itens); para listas longas ou buscáveis, use `Combobox`.

## O que você fornece
`label`, `options` (`{ value, label, meta?, icon?, disabled?, group? }`), `value`, `onChange`, `placeholder`, `help`, `error`, `size`, `disabled`.

## Comportamento
- Gatilho é um botão com `aria-haspopup="listbox"`. Setas abrem a lista; dentro dela, setas, Home/End, Enter/Espaço escolhem, Esc e Tab fecham e devolvem o foco.
- Opção ativa (teclado/hover) em `bg-hover`; selecionada com peso 500 e check em `text-brand` (não só cor); desabilitada em `text-disabled`.
- Grupos com título em overline.
"""

R['MultiSelect'] = """Várias escolhas numa lista, mostradas como etiquetas removíveis dentro do campo; o excesso vira "+N".

## O que você fornece
`label`, `options`, `value: string[]`, `onChange`, `maxChips` (padrão 3), `placeholder`, `help`, `error`.

## Comportamento
- Opções com checkbox; a seleção vale na hora (sem "Aplicar"). Rodapé mostra quantas estão marcadas e "Limpar".
- Cada etiqueta tem botão "Remover etiqueta X" com nome acessível.
"""

R['Combobox'] = """Campo com busca para listas longas (contatos, atendentes, templates), com o trecho buscado destacado, estado sem resultados e buscando.

## O que você fornece
`label`, `options`, `value`, `onChange`, `placeholder`, `loading` (busca remota), `help`, `error`.

## Comportamento
- `role="combobox"` no input, `aria-activedescendant` na opção ativa; setas navegam, Enter escolhe, Esc fecha.
- A busca ignora acentos e caixa ("joao" acha "João").
- Sem resultados: ícone + "Nenhum resultado para “…”." Buscando: spinner + texto.
"""

R['DateField'] = """Data (`DateField`), intervalo de datas (`DateField` com `range`) e hora (`TimeField`), digitáveis e com calendário ou grade de horários.

## O que você fornece
- `DateField`: `label`, `value`/`onChange` ou `range`/`onRangeChange`, `isDisabled(d)` para dias indisponíveis, `today`.
- `TimeField`: `label`, `value`, `onChange`, `step` (min), `from`, `to`, `unavailable`.
- `Calendar` pode ser usado sozinho (agenda).

## Regras visuais
- Hoje: contorno em `text-brand` e peso 600. Selecionado: **círculo cheio** em `primary` (forma, não só cor). Intervalo: faixa em `primary-soft` entre início e fim.
- Indisponível: `text-disabled` **riscado**. Fora do mês: `text-tertiary`.
- Semana começa no domingo; meses e dias em português.
"""

R['Checkbox'] = """Caixa de seleção (marcado, desmarcado, indeterminado) e `ChoiceGroup` para agrupar opções sob uma pergunta (fieldset + legend).

## O que você fornece
`label` e `description` opcionais; sem texto visível (tabela), `ariaLabel`. `checked`, `indeterminate`, `invalid`, `disabled`, `onChange`.

## Regras
- A caixa tem 16px, mas o alvo tem no mínimo 24px.
- Marcado: `primary` com check branco. Erro: borda `danger` + mensagem do grupo.
- Use checkbox quando a mudança só vale ao salvar; para efeito imediato, `Switch`.
"""

R['Radio'] = """Escolha exclusiva entre poucas opções visíveis, sempre dentro de um `ChoiceGroup` com pergunta.

## Regras
- Marcado: borda `primary` + ponto de 8px (forma, não só cor).
- Setas trocam a opção dentro do grupo (comportamento nativo; dê o mesmo `name`).
- Mais de 5 opções: use `Select`. Duas opções vizinhas e curtas: considere `SegmentedControl`.
"""

R['Switch'] = """Liga/desliga com efeito imediato (configurações), com check no botão quando ligado para não depender só da cor.

## O que você fornece
`label`, `description`, `checked`, `onChange`, `disabled`, `end` (rótulo à esquerda e switch à direita, em listas de configuração).

## Regras
- Trilho desligado em `border-control` (3:1), ligado em `primary`.
- `role="switch"`. Se a mudança só vale depois de "Salvar", use `Checkbox`.
"""

R['Modal'] = """Diálogo modal (480/640/880/1120) com título, corpo rolável e rodapé de ações, e `ConfirmDialog` para confirmações, inclusive destrutivas.

## O que você fornece
- `Modal`: `open`, `onClose`, `title`, `subtitle`, `size`, `children`, `footer` (secundário e depois primário), `footerStart`, `closeOnOverlay`.
- `ConfirmDialog`: `title` em pergunta ("Excluir 3 contatos?"), `description` com a consequência, `confirmLabel` com o verbo (nunca "Sim"/"OK"), `tone` (`danger`, `warning`, `primary`), `loading`.

## Comportamento
- Foco vai para o primeiro campo (ou para "Cancelar" na confirmação), fica preso no diálogo, Esc fecha e o foco volta para quem abriu.
- Fechar (×) fica no canto, fora do título. Véu `bg-overlay`; sombra `shadow-xl`; raio `radius-xl`.
- Abaixo de 600px vira tela cheia e os botões dividem o rodapé.

## Faça / não faça
- Faça: mostre os erros nos campos e um resumo no rodapé ("2 campos precisam de atenção").
- Não faça: modal sobre modal. Não faça: fechar pelo véu em formulário longo (`closeOnOverlay={false}`).
"""

R['Drawer'] = """Painel lateral (400 ou 560) para ver ou editar um item sem sair da lista, como os dados de um contato.

## O que você fornece
`open`, `onClose`, `title`, `subtitle`, `size`, `side`, `children`, `footer`.

## Regras
- Mesmo comportamento de foco do `Modal` (preso, Esc fecha, foco volta).
- No celular ocupa a largura toda. Separação por `border` e `shadow-lg`.
"""

R['Tooltip'] = """Dica curta no hover e no foco (`Tooltip`) e ícone de informação focável que mostra uma explicação (`InfoTip`).

## Regras
- Abre com 300 ms de atraso no hover e na hora no foco; Esc fecha. `aria-describedby` liga a dica ao elemento.
- Fundo `text` com texto `bg-surface`: inverte nos dois temas e passa 4,5:1.
- Nunca coloque informação essencial só no tooltip, e ele nunca substitui o nome acessível de um `IconButton`.
- `InfoTip` tem alvo de 24px e nome "Mais informações sobre {assunto}".
"""

R['Alert'] = """Mensagem persistente no contexto da página, suave ou sólida por estado (info, sucesso, alerta, erro), e banner de largura total no topo.

## O que você fornece
`tone`, `solid`, `banner`, `title`, `children` (descrição), `actions`, `onClose`.

## Regras
- Suave: fundo `*-soft`, borda e ícone no token de texto do estado (3:1). Sólido: só para o que bloqueia o uso (WhatsApp desconectado).
- Âmbar sólido leva texto escuro (`on-warning`), nunca branco.
- Ícone + título sempre: nunca só cor. Erro e alerta usam `role="alert"`; os demais, `status`.
"""

R['Toast'] = """Aviso passageiro do resultado de uma ação, suave ou sólido por estado, com ação opcional ("Desfazer") e fechar.

## O que você fornece
Envolva o app em `ToastProvider` e dispare com `const toast = useToast(); toast({ tone: 'success', title: 'Contato salvo' })`. Campos: `tone`, `solid`, `title`, `description`, `action`, `duration`.

## Regras
- Some em 5 s; pausa com o mouse em cima ou com foco dentro. Erros que exigem ação: `duration: 0`.
- No máximo 3 empilhados, canto inferior direito, região `aria-live`.
"""

R['Spinner'] = """Indicador de carregamento circular (12/16/24/32) que herda a cor do texto ao lado.

## Regras
- Sempre com texto dizendo o que carrega, ou com `label` (padrão "Carregando").
- Com "reduzir movimento", o arco fica parado.
- Dentro de `Button`, use a prop `loading`.
"""

R['Skeleton'] = """Blocos de carregamento com brilho (texto, título, círculo e bloco), no formato do conteúdo que vai chegar.

## Regras
- O container leva `aria-busy="true"` e um rótulo; os blocos são `aria-hidden`.
- Fundo `bg-pressed`. O brilho para com "reduzir movimento".
- Use para listas e cards; para ações curtas, `Spinner`.
"""

R['ProgressBar'] = """Barra de progresso determinada ou indeterminada para tarefas longas (importação, disparo), com tons de sucesso e erro.

## O que você fornece
`label`, `value` (0–100; sem valor = indeterminado), `tone`, `help` ("428 de 667 contatos"), `size`, `showValue`.

## Regras
- `role="progressbar"` com `aria-valuenow`. Sucesso e erro levam ícone na ajuda.
- O indeterminado fica parado com "reduzir movimento".
"""

R['EmptyState'] = """Estado vazio com ícone, título, descrição e até duas ações, e versão compacta para dentro de tabela, lista ou popover.

## Use o mesmo vazio para a mesma situação
| Situação | Ícone | Tom | Ação |
| --- | --- | --- | --- |
| Primeiro uso | do recurso (`user-plus`, `message-square`) | `primary` | criar / importar |
| Sem resultados de busca ou filtro | `search-x` | `neutral` | "Limpar filtros" |
| Erro ao carregar | `circle-alert` | `danger` | "Tentar de novo" |
| Tudo em dia | `check-check` | `neutral` | nenhuma |

## O que você fornece
`icon`, `tone`, `title`, `description`, `actions`, `compact`.
"""

R['Badge'] = """Rótulo curto de status ou contagem (neutro, primário e os quatro estados; suave ou sólido) e `StatusDot`, ponto colorido sempre acompanhado de texto.

## Regras
- Badge não é clicável. Para filtros, `Chip`; para etiquetas de contato, `Tag`.
- Status leva texto e, quando cabe, ícone (`icon`): nunca só cor.
- Contador (`count`): números em mono tabular; acima de 99, "99+".
"""

R['Tag'] = """Etiqueta aplicada a contatos e conversas ("Lead quente", "Campanha outubro"), em tons neutro, primário e de estado, suave ou sólida, opcionalmente removível.

## Regras
- Removível: botão de 16px com área de 24px e nome "Remover etiqueta X".
- Tons de estado só quando a etiqueta significa o estado (ex.: "Lead quente" em erro). Etiquetas de campanha e origem ficam neutras.
- Cores personalizadas por cliente não fazem parte do sistema.
"""

R['Chip'] = """Chip clicável para filtros rápidos e escolhas (alternância com check), e `FilterChip` para mostrar um filtro ativo com botão de remover.

## Regras
- Ligado: fundo `primary-soft`, borda `border-brand`, texto `text-brand` **e** ícone de check (`aria-pressed`).
- `FilterChip` mostra campo e valor ("Etiqueta: Lead quente") e remove com um clique (nome "Remover filtro …").
"""

R['Avatar'] = """Avatar redondo (24/32/40/48) com foto, iniciais ou ícone de pessoa, e indicador de presença opcional.

## Regras
- Iniciais: primeira e última palavra do nome, em `text-brand` sobre `primary-soft`.
- Sem nome nem foto: ícone de pessoa em `bg-hover`.
- O status entra no nome acessível ("Ana Ribeiro, online"); em listas de atendentes, mostre também o texto.
"""

R['Card'] = """Container de conteúdo: plano (borda), elevado (`shadow-sm`) e interativo (o card inteiro clicável, com hover, foco, pressionado, selecionado e desabilitado).

## O que você fornece
`variant`, `title`, `subtitle`, `action` (só em card não interativo), `footer`, `href` ou `onClick` (interativo), `selected`, `disabled`, `children`.

## Regras
- O interativo usa um link/botão esticado no título: um só alvo, um só nome. Não coloque outros botões dentro dele.
- Selecionado: borda `primary` dupla (forma), não só cor de fundo.
"""

R['Tabs'] = """Abas com indicador de 2px na primária, ícone e contador opcionais, navegação por setas, Home e End.

## Regras
- Ativa: `text-brand`, peso 600 e indicador (não só cor). Hover: `bg-hover`.
- Uma aba por vez no tab order (roving tabindex); o painel é focável.
- Mais de 6 abas ou rótulos longos: repense a navegação.
"""

R['SegmentedControl'] = """Escolha exclusiva entre 2 a 5 opções vizinhas (período, visualização), como grupo de rádio com setas.

## Regras
- Selecionado: fundo `bg-surface` com borda e sombra xs dentro do trilho `bg-sunken`, peso 600.
- Opção só com ícone (`hideLabel`) mantém o nome acessível.
- Mudança aplica na hora. Para navegação entre páginas, `Tabs`.
"""

R['Accordion'] = """Seções que abrem e fecham, com cabeçalho-botão dentro de um título (h3), meta à direita e chevron que gira.

## O que você fornece
`items` (`{ id, title, meta?, content, disabled? }`), `value` (abertos), `onChange`, `single`, `headingLevel`.

## Regras
- `aria-expanded` e `aria-controls`; o painel é uma região rotulada pelo cabeçalho.
- No site (FAQ) use o mesmo componente.
"""

R['Sidebar'] = """Menu lateral do produto, expandido (248px) ou recolhido (64px, só ícones com dica), com logo, lupa que filtra as telas, grupos, subitens, item ativo, item bloqueado e bloco do usuário.

## O que você fornece
`groups` (`{ label?, items: [{ id, label, icon, href?, children?, locked?, lockedHint?, badge?, keywords? }] }`), `current`, `collapsed`/`onCollapsedChange`, `expanded`/`onExpandedChange`, `logoSrc` (logo colorido nos dois temas), `searchable` (padrão `true`), `user`, `footerActions`, `onNavigate`, `onClose` (dentro da gaveta do celular).

## Regras
- Topo: logo à esquerda e lupa à direita (`IconButton` ghost de 40px, "Buscar no menu", `aria-pressed` enquanto a busca está aberta). Recolhido: logo e a lupa logo abaixo; clicar na lupa expande o menu e já abre a busca.
- Busca do menu: só filtra as telas do próprio menu. O campo aparece abaixo do logo; os rótulos de grupo somem; um item aparece se o nome (ou `keywords`) contém o texto, sem acento e sem caixa, ou se algum subitem contém. Item que bate mostra todos os subitens; pai de subitem que bate fica aberto e destacado. O trecho encontrado fica em peso 600 com fundo `primary-soft` e sublinhado, nunca só por cor.
- Abaixo do campo: "Filtro ativo · N telas · Esc para limpar" (anunciado). Enter abre a primeira tela da lista; Esc limpa o texto e, com o campo vazio, fecha a busca e devolve o foco à lupa. Sem resultado: "Nenhuma tela com “…”" e "Limpar busca".
- Recolher/expandir: botão redondo de 24px na borda direita, metade dentro e metade fora do menu, alinhado à lupa; seta para a esquerda (recolher) ou direita (expandir), `aria-expanded` e dica. Na gaveta do celular ele some e entra o "Fechar menu" (X) ao lado da lupa.
- Ativo: `bg-selected`, `text-brand`, peso 600 e indicador de 3px em `primary` (`aria-current="page"`).
- Bloqueado: cadeado + dica ("Disponível no plano Pro"); continua focável e leva à página de Planos.
- Recolhido: cada item tem nome acessível e tooltip; o grupo com subitem ativo fica marcado.
- Grupos em overline. Não use cores por item.
"""

R['PageHeader'] = """Topo de toda página do produto: título (h1, um por tela) com contagem opcional, subtítulo, ações à direita, link de voltar e uma linha para busca, filtros ou abas.

## Regras
- Ações: secundárias primeiro, primária por último (à direita).
- Contagem em badge neutro com número formatado ("667").
- No celular o título cai para 24px e as ações quebram linha.
"""

R['DataTable'] = """Tabela de dados densa (40px) ou confortável (56px) com ordenação, seleção com ações em massa, linha expansível, carregando, vazio e paginação, que vira lista de cards abaixo de 768px.

## O que você fornece
`caption`, `columns` (`{ key, header, render?, sortable?, numeric?, width?, mobile: 'title' | 'row' | 'tags' | 'hidden' }`), `rows`, `rowKey`, `density`, `selectable`/`selected`/`onSelectionChange`, `bulkActions`, `sort`/`onSortChange`, `renderDetail`/`expanded`/`onExpandedChange`, `rowActions`, `loading`, `empty` (um `EmptyState compact`), `pagination` (`{ page, pageSize, total, onPageChange, itemLabel }`), `layout`.

## Regras
- Cabeçalho em `bg-sunken`, 12px peso 500, caixa de frase. Ordenável: botão no cabeçalho com `aria-sort`; ativo em `text-brand` com seta.
- Hover de linha `bg-hover`; selecionada `bg-selected` + checkbox marcado. O cabeçalho tem "selecionar todos" com estado indeterminado.
- Números à direita, em mono tabular. Telefones e IDs em mono.
- Ações da linha: `IconButton` ghost "Mais ações para {nome}".
- Densa esconde a segunda linha (canal) da célula de contato.
- Carregando: skeleton com `aria-busy`. Vazio: estado compacto dentro da tabela.
"""

R['FilterBar'] = """Barra de busca e filtros: campo de busca, botão "Filtros" com popover (grupos em cima, em rascunho até "Aplicar filtros"; atalhos embaixo, que aplicam ao clicar) e, fora dele, só os chips do que está ativo, com "Limpar filtros".

## O que você fornece
`query`/`onQueryChange`, `groups` (`{ id, label, options }`), `value`/`onChange` (`{ grupo: [valores] }`), `quickFilters` (`{ id, label, count? }`)/`quickValue`/`onQuickChange`, `end` (ex.: `SegmentedControl` lista/kanban), `searchLabel`.

## Regras
- Os atalhos (filtros rápidos, como "WhatsApp ativo" e "Mensagens hoje") ficam dentro do popover, abaixo dos grupos, como botões de largura total com caixa de seleção e contagem; `aria-pressed` marca os ligados.
- Atalhos aplicam na hora do clique ("Aplicam ao clicar") e o popover continua aberto para combinar outros. Os grupos ficam em rascunho até "Aplicar filtros"; "Cancelar" descarta só o rascunho dos grupos; "Limpar tudo" zera o rascunho e desliga os atalhos.
- O título mostra quantos grupos existem ("Filtros (4)"); os grupos começam fechados e mostram quantas opções estão marcadas.
- O botão "Filtros" mostra a contagem de grupos + atalhos aplicados. Cada um vira um `FilterChip` removível ("Atalho: Mensagens hoje", "Etapa: Lead"); a linha anuncia "N filtros ativos".
- A busca tem rótulo acessível oculto (exceção documentada: lupa + `role="search"`).
"""

R['KpiCard'] = """Card de número de destaque: rótulo (com informação opcional), valor, variação com seta e sinal e mini-gráfico de tendência.

## O que você fornece
`label`, `value` (já formatado), `delta` (%), `invert` (quando subir é ruim, como tempo de resposta), `comparison` ("vs. setembro"), `trend` + `trendLabels`, `info`, `loading`, `large`.

## Regras
- A variação é um badge de sucesso ou erro **com seta e sinal** ("+12,4%"), nunca só cor.
- Mini-gráfico: uma série, linha de 2px em `primary` com área em `primary-soft` e ponto final de 8px; dica por ponto no hover. Sem eixo nem legenda (o rótulo do card nomeia a série).
- Valor em 30px (ou 36px com `large`), números tabulares.
"""

for k, v in R.items():
    d = os.path.join(DS, 'components', k)
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'README.md'), 'w').write(v.strip() + '\n')
print(len(R), 'readmes')
