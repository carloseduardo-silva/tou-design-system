import json, sys

OUT = sys.argv[1]
TH = ["light", "dark", "navy"]

def t(name, value, usage):
    return {"name": name, "value": value, "usage": usage}

def th(l, d, n=None):
    return {"light": l, "dark": d, "navy": n if n is not None else d}

colors = []
# ---------- Primária ----------
prim = {"50": "#F2F7FF", "100": "#E2EEFF", "200": "#C5DDFF", "300": "#9CC5FF", "400": "#5F9FFA",
        "500": "#3C86ED", "600": "#1D70DC", "700": "#0E5CBD", "800": "#08499A", "900": "#0B3976", "950": "#072650"}
prim_use = {
    "50": "Fundo suave de info e de item selecionado no tema claro.",
    "100": "Fundo de chip/tag primária suave no claro; hover sobre primary-50.",
    "200": "Bordas suaves de elementos primários no claro (não para texto).",
    "300": "Ilustração e gráficos; não usar como texto no claro.",
    "400": "Texto, link e anel de foco nos temas escuros (~7:1 sobre bg-page e bg-surface escuros).",
    "500": "Gráficos e séries de dados. Não usar como texto nem fundo de texto branco.",
    "600": "A primária da TOU. Fundo do botão primário com texto branco (4,77:1) e anel de foco no claro. Como texto, só sobre branco puro.",
    "700": "Texto e link sobre qualquer fundo claro (inclusive os que não são branco puro) e hover do botão primário.",
    "800": "Pressionado do botão primário.",
    "900": "Fundos profundos de destaque; texto sobre primary-50/100 quando se quer mais peso.",
    "950": "Fundo suave de info nos temas escuros.",
}
for k, v in prim.items():
    colors.append(t(f"primary-{k}", v, prim_use[k]))

# ---------- Ink ----------
ink = {"50": "#F8FAFC", "100": "#EEF3F5", "200": "#DFE6E9", "300": "#C3CCD1", "400": "#7E8B94",
       "500": "#5F707A", "600": "#455864", "700": "#213642", "800": "#0A222F", "900": "#01141F", "950": "#000910"}
ink_use = {
    "50": "Fundo da página do produto (claro); texto principal nos temas escuros.",
    "100": "Fundo sutil/poço no claro; hover de linha e de item no claro.",
    "200": "Trilho de switch e de barra de progresso, skeleton no claro.",
    "300": "Texto secundário nos temas escuros.",
    "400": "Texto desabilitado no claro; texto terciário e borda de campo nos escuros.",
    "500": "Texto terciário (placeholder, meta) e borda de campo no claro; desabilitado nos escuros.",
    "600": "Texto secundário no claro.",
    "700": "Texto de ênfase média; ícones fortes no claro.",
    "800": "Hover e item selecionado no tema marinho.",
    "900": "Texto principal no claro; superfície no tema marinho; texto escuro sobre âmbar.",
    "950": "Fundo do tema marinho: seções escuras do site (hero, CTA) e painel interno de leads.",
}
for k, v in ink.items():
    colors.append(t(f"ink-{k}", v, ink_use[k]))

# ---------- Cinzas puros (escuro do produto) ----------
colors += [
    t("gray-800", "#333333", "Escuro do produto: hover, chip e item selecionado sobre bg-surface."),
    t("gray-900", "#1E1E1E", "Escuro do produto: superfície (card, modal, menu)."),
    t("gray-950", "#121212", "Escuro do produto: fundo da página e poço."),
]
# ---------- Papéis do marketing ----------
colors += [
    t("paper-50", "#FCFCF9", "Marketing: fundo sutil de seção alternada (no lugar de ink-100)."),
    t("paper-100", "#F8F7F2", "Marketing: fundo de faixa de logos, FAQ e blocos de apoio."),
    t("paper-200", "#EFECE7", "Marketing: divisor e borda sobre papéis; fundo de card sobre paper-100."),
]
# ---------- Família de marca (acento) ----------
colors += [
    t("brand-blue", "#269BE5", "Início do gradiente do logotipo. Só acento: gradientes, brilhos, ilustração. Nunca texto sobre claro, nunca fundo de texto branco."),
    t("brand-cyan", "#17C1D5", "Meio do gradiente do logotipo. Acento e títulos/palavra em destaque sobre ink-950/ink-900. Nunca texto sobre claro, nunca fundo de texto branco (1,8–3:1)."),
    t("brand-teal", "#0ED5CC", "Fim do gradiente do logotipo. Brilhos e destaques sobre fundo escuro. Nunca texto sobre claro, nunca fundo de texto branco."),
]

# ---------- Papéis (semânticos, por tema) ----------
colors += [
    t("bg-page", th("#F8FAFC", "#121212", "#000910"), "Fundo da página do produto. No site (marketing) o fundo da página é bg-surface (branco)."),
    t("bg-surface", th("#FFFFFF", "#1E1E1E", "#01141F"), "Card, modal, popover, menu lateral, tabela. Também o fundo de página do site."),
    t("bg-sunken", th("#EEF3F5", "#121212", "#01141F"), "Fundo sutil / poço: área de chat, faixa de filtros, cabeçalho de tabela. No marketing, use paper-50."),
    t("bg-hover", th("#EEF3F5", "#333333", "#0A222F"), "Hover de linha, item de menu, botão ghost e chip neutro."),
    t("bg-selected", th("#F2F7FF", "#333333", "#0A222F"), "Item ativo do menu, linha selecionada, opção marcada em lista. Sempre junto de outro sinal (ícone, peso ou indicador)."),
    t("bg-overlay", th("#01141F7A", "#000000A3", "#000910B8"), "Véu atrás de modal e gaveta."),

    t("text", th("#01141F", "#F8FAFC", "#F8FAFC"), "Texto principal, sobre bg-page, bg-surface, bg-sunken, bg-hover e bg-selected."),
    t("text-secondary", th("#455864", "#C3CCD1", "#C3CCD1"), "Texto de apoio, subtítulos, cabeçalhos de tabela; sobre os mesmos fundos que text."),
    t("text-tertiary", th("#5F707A", "#929EA6", "#7E8B94"), "Placeholder, metadados, horário de mensagem; sobre bg-page, bg-surface, bg-sunken, bg-hover e bg-selected. No escuro é #929EA6 (ajuste aprovado ao brief: #7E8B94 dava 3,6:1 sobre #333333); no marinho segue #7E8B94."),
    t("text-disabled", th("#7E8B94", "#5F707A", "#5F707A"), "Texto e ícone de controle desabilitado (≥3:1 sobre bg-surface)."),
    t("text-brand", th("#0E5CBD", "#5F9FFA", "#5F9FFA"), "Texto na cor da marca (rótulo ativo, valor em destaque, botão secundário e ghost) sobre qualquer fundo do tema."),
    t("link", "{text-brand}", "Link inline e externo, sobre qualquer fundo do tema. Sublinhado no hover e sempre dentro de texto corrido."),
    t("text-on-primary", "#FFFFFF", "Texto e ícone sobre primary, primary-hover, primary-pressed e info-solid."),

    t("border", th("#D8DFE3", "#FFFFFF1F", "#FFFFFF1F"), "Divisor e borda de card, tabela e modal (decorativo, não carrega informação)."),
    t("border-control", th("#5F707A", "#7E8B94", "#7E8B94"), "Borda de input, select, checkbox e radio (≥3:1 sobre bg-surface e bg-page)."),
    t("focus-ring", th("#1D70DC", "#5F9FFA", "#5F9FFA"), "Anel de foco: 2px sólido com 2px de respiro na cor do fundo, só em :focus-visible."),

    t("primary", "#1D70DC", "Fundo do botão primário, switch ligado, checkbox marcado, indicador de aba ativa. Igual em todos os temas."),
    t("primary-hover", "#0E5CBD", "Hover do botão primário."),
    t("primary-pressed", "#08499A", "Pressionado do botão primário."),
    t("primary-soft", th("#F2F7FF", "#072650", "#072650"), "Fundo de botão tonal e de chip primário suave; hover de botão secundário e terciário. O texto sobre ele é text-brand."),
    t("primary-soft-pressed", th("#E2EEFF", "#0B3976", "#0B3976"), "Pressionado de botão secundário, terciário e tonal (primary-100 no claro, primary-900 nos escuros); o texto sobre ele é text-brand-pressed."),
    t("text-brand-pressed", th("#0E5CBD", "#9CC5FF", "#9CC5FF"), "Texto da marca sobre primary-soft-pressed (botão secundário, terciário e tonal pressionados). No escuro clareia para primary-300 (6,4:1)."),
    t("border-brand", th("#9CC5FF", "#0E5CBD", "#0E5CBD"), "Contorno do botão secundário (primary-300 no claro, primary-700 nos escuros). Decorativo: o rótulo em text-brand identifica o botão."),
    t("bg-pressed", th("#DFE6E9", "#333333", "#0A222F"), "Pressionado de controles neutros (botão de ícone, item de menu). No escuro coincide com bg-hover; o pressionado se distingue pelo texto que passa a text."),
    t("bg-disabled", th("#EEF3F5", "#121212", "#01141F"), "Fundo de botão e campo desabilitados; o texto sobre ele é text-disabled (≥3:1)."),

    t("success", th("#1B763A", "#5AC576", "#5AC576"), "Texto, ícone e borda de sucesso, sobre bg-surface, bg-page e success-soft."),
    t("success-soft", th("#ECFCEE", "#0D2814", "#0D2814"), "Fundo de badge, alerta e toast suaves de sucesso."),
    t("success-solid", "#1B763A", "Fundo de badge, botão e toast sólidos de sucesso; texto on-success."),
    t("on-success", "#FFFFFF", "Texto e ícone sobre success-solid."),

    t("warning", th("#7E4F00", "#FFB24F", "#FFB24F"), "Texto, ícone e borda de alerta, sobre bg-surface, bg-page e warning-soft."),
    t("warning-soft", th("#FFF7EE", "#372103", "#372103"), "Fundo de badge, alerta e toast suaves de alerta."),
    t("warning-solid", "#FFB24F", "Fundo sólido de alerta (âmbar). O texto sobre ele é on-warning, nunca branco."),
    t("on-warning", "#01141F", "Texto e ícone sobre warning-solid (escuro, nunca branco)."),

    t("danger", th("#B32228", "#F5746D", "#F5746D"), "Texto, ícone e borda de erro, sobre bg-surface, bg-page e danger-soft. Mensagem de erro de campo."),
    t("danger-soft", th("#FFF4F3", "#401312", "#401312"), "Fundo de badge, alerta e toast suaves de erro; hover do botão de perigo ghost."),
    t("danger-solid", "#D22D33", "Fundo do botão de perigo e de badge/toast sólidos de erro; texto on-danger."),
    t("on-danger", "#FFFFFF", "Texto e ícone sobre danger-solid."),

    t("info", "{text-brand}", "Texto, ícone e borda de info (usa a primária), sobre bg-surface, bg-page e info-soft."),
    t("info-soft", "{primary-soft}", "Fundo de badge, alerta e toast suaves de info."),
    t("info-solid", "#1D70DC", "Fundo sólido de info; texto text-on-primary."),

    t("rating", th("#BF7901", "#FFB24F", "#FFB24F"), "Estrelas de avaliação (depoimentos). Sempre com a nota em texto ao lado."),
]

# ---------- Tipografia ----------
SANS = '"Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
MONO = '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
SERIF = '"Instrument Serif", Georgia, "Times New Roman", serif'

def st(name, size, lh, w, usage, sample=None, ls=None, family=None, style=None):
    d = {"name": name, "fontSize": f"{size}px", "lineHeight": lh if isinstance(lh, (int, float)) and lh < 10 else f"{lh}px", "fontWeight": w}
    if ls is not None: d["letterSpacing"] = ls
    if family: d["family"] = family
    if style: d["fontStyle"] = style
    if sample: d["sample"] = sample
    d["usage"] = usage
    return d

# fluid: 375px → 1280px
def clamp(mn, mx, vmin=375, vmax=1280):
    slope = (mx - mn) / (vmax - vmin)
    inter = mn - slope * vmin
    return f"clamp({mn/16:g}rem, {inter/16:.4f}rem + {slope*100:.4f}vw, {mx/16:g}rem)"

product = [
    st("display", 36, 44, 600, "Números de destaque (KPI grande) e títulos de estado vazio grande.", "R$ 48.920", "-0.02em"),
    st("h1", 30, 38, 600, "Título da página (um por tela): \"Lista de Contatos\".", "Lista de Contatos", "-0.02em"),
    st("h2", 24, 32, 600, "Título de seção da página.", "Notificações recentes", "-0.01em"),
    st("h3", 20, 28, 600, "Título de card e de modal.", "Adicionar contato", "-0.01em"),
    st("h4", 18, 26, 600, "Subseção dentro de card ou gaveta.", "Dados do contato"),
    st("h5", 16, 24, 600, "Título de grupo de campos; nome no cabeçalho do chat.", "Informações de cobrança"),
    st("h6", 14, 20, 600, "Título de bloco denso: nome na lista de conversas, cabeçalho de popover.", "Mariana Couto"),
    st("body-lg", 16, 24, 400, "Texto corrido de destaque: descrição de estado vazio, introdução de modal.", "Nenhum contato encontrado com esses filtros."),
    st("body", 14, 20, 400, "Texto padrão do produto: células, mensagens do chat, parágrafos.", "Gerencie os contatos que chegaram à empresa."),
    st("small", 13, 18, 400, "Metadados e tabelas densas: canal do contato, data de atualização.", "Atualizado há 5 minutos"),
    st("caption", 12, 16, 400, "Legenda, ajuda de campo, contador de caracteres. Menor tamanho de texto permitido.", "Use o formato (99) 99999-9999"),
    st("label", 14, 20, 500, "Rótulo de campo, texto de botão 40/48, abas, item de menu.", "Número do WhatsApp"),
    st("label-sm", 12, 16, 500, "Texto de botão 32, badge, chip, tag.", "Disparo #3706"),
    st("overline", 11, 16, 600, "Rótulo de grupo em CAIXA ALTA (text-transform: uppercase), +8%. Única exceção abaixo de 12px.", "CONTATOS", "0.08em"),
    st("mono", 13, 20, 400, "IDs, código, valores e números tabulares (font-variant-numeric: tabular-nums).", "#1118909 · 10:55", family="mono"),
]
marketing = [
    st("mkt-display", 72, 1.05, 600, f"Título do hero. Fluido 44→72px: font-size {clamp(44,72)}.", "Atenda mais. Venda mais.", "-0.03em"),
    st("mkt-h1", 56, 1.1, 600, f"Título de página interna e de CTA. Fluido 36→56px: {clamp(36,56)}.", "Visão completa da sua clínica.", "-0.03em"),
    st("mkt-h2", 44, 1.15, 600, f"Título de seção (um tamanho para todas as seções). Fluido 28→44px: {clamp(28,44)}.", "Integre suas ferramentas favoritas", "-0.02em"),
    st("mkt-h3", 28, 1.25, 600, f"Título de card de recurso, pergunta do FAQ aberta. Fluido 22→28px: {clamp(22,28)}.", "Centralização da operação", "-0.02em"),
    st("mkt-lead", 18, 30, 400, "Subtítulo do hero e de seção.", "Automação de atendimento e agenda organizada pra sua clínica vender mais."),
    st("mkt-body", 16, 26, 400, "Texto corrido do site: cards, depoimentos, FAQ.", "Conecte WhatsApp, CRM, automações e dados em uma única plataforma."),
    st("mkt-eyebrow", 12, 16, 600, "Eyebrow acima do título de seção, CAIXA ALTA, +12%.", "PLATAFORMA · CRM + IA + BI", "0.12em"),
    st("mkt-accent", 72, 1.05, 400, "Instrument Serif itálico: só UMA palavra dentro de um título de marketing ou uma citação. Dentro do título, em font-size 1.08em (a serif é mais baixa que a Geist), sem tracking negativo; nunca no produto nem na página de Planos.", "única", family="serif", style="italic"),
]

types = {
    "fonts": [
        {"family": "Geist", "file": "fonts/Geist-Variable.woff2", "weight": "100 900", "style": "normal"},
        {"family": "Geist Mono", "file": "fonts/GeistMono-Variable.woff2", "weight": "100 900", "style": "normal"},
        {"family": "Instrument Serif", "file": "fonts/InstrumentSerif-Italic.woff2", "weight": "400", "style": "italic"},
    ],
    "families": {"sans": SANS, "mono": MONO, "serif": SERIF},
    "groups": [
        {"name": "Produto", "family": "sans", "note": "Escala densa do CRM, base 14px. Pesos 400 (texto), 500 (rótulos) e 600 (títulos).", "styles": product},
        {"name": "Marketing", "family": "sans", "note": "Escala fluida do site (375→1280px de viewport). O tamanho mostrado é o máximo; a fórmula clamp() está em cada nota.", "styles": marketing},
    ],
}

spacing = [
    ("space-0.5", 2, "Respiro entre ícone e badge; deslocamento do anel de foco."),
    ("space-1", 4, "Gap entre ícone e texto em chips e badges."),
    ("space-1.5", 6, "Gap entre ícone e texto em botões 32; padding vertical de chip."),
    ("space-2", 8, "Gap entre ícone e texto em botões 40/48; entre rótulo e campo."),
    ("space-2.5", 10, "Padding vertical de input 40 e de célula densa."),
    ("space-3", 12, "Padding horizontal de botão 32 e de célula; gap entre campos em linha."),
    ("space-4", 16, "Padding horizontal de botão 40/48 e de input; gap entre campos empilhados; gutter mobile."),
    ("space-5", 20, "Padding de card denso e de popover."),
    ("space-6", 24, "Padding de card e de modal; gap entre cards."),
    ("space-8", 32, "Margem da página do produto no desktop; entre seções de um formulário."),
    ("space-10", 40, "Entre blocos da página."),
    ("space-12", 48, "Respiro de estado vazio; padding interno de seção no mobile do site."),
    ("space-16", 64, "Gap entre título de seção e conteúdo no site."),
    ("space-20", 80, "Padding vertical de seção do site no tablet."),
    ("space-24", 96, "Padding vertical de seção do site no desktop."),
]
radius = [
    ("radius-2xs", "2px", "Indicadores: barra da aba ativa, marcador do item ativo do menu, barra de progresso."),
    ("radius-xs", "4px", "Checkbox."),
    ("radius-sm", "6px", "Controles pequenos: botão de ícone 32, tooltip, opção de controle segmentado."),
    ("radius-md", "8px", "Botões, inputs, selects, células e itens de menu."),
    ("radius-lg", "12px", "Cards, popovers, menus suspensos, toasts, alertas."),
    ("radius-xl", "16px", "Modais e gavetas."),
    ("radius-2xl", "24px", "Cards de marketing e preview do produto no hero."),
    ("radius-pill", "9999px", "CTA de marketing, chips, badges, tags e avatares. Ou é pílula, ou é um raio da escala."),
]

ink_rgb = "1, 20, 31"
def sh(l, d):
    return {"light": l, "dark": d, "navy": d}
shadows = [
    t("shadow-xs", sh(f"0 1px 2px rgba({ink_rgb}, 0.06)", "none"), "Botão secundário e input em repouso (claro). No escuro: nada — a borda separa."),
    t("shadow-sm", sh(f"0 1px 3px rgba({ink_rgb}, 0.08), 0 1px 2px rgba({ink_rgb}, 0.04)", "none"), "Card elevado, card de kanban (claro). No escuro: nada."),
    t("shadow-md", sh(f"0 4px 12px -2px rgba({ink_rgb}, 0.10), 0 2px 4px -2px rgba({ink_rgb}, 0.06)", "0 4px 12px -2px rgba(0, 0, 0, 0.40)"), "Card interativo no hover, popover, menu suspenso, tooltip."),
    t("shadow-lg", sh(f"0 12px 24px -4px rgba({ink_rgb}, 0.12), 0 4px 8px -4px rgba({ink_rgb}, 0.06)", "0 12px 24px -4px rgba(0, 0, 0, 0.50)"), "Toast, gaveta lateral, card de marketing em destaque."),
    t("shadow-xl", sh(f"0 24px 48px -12px rgba({ink_rgb}, 0.20)", "0 24px 48px -12px rgba(0, 0, 0, 0.60)"), "Modal e preview do produto no hero."),
]

durations = [
    t("duration-instant", "100ms", "Feedback imediato: pressionado, toggle de checkbox e switch."),
    t("duration-fast", "150ms", "Hover e foco (cor, borda, sombra)."),
    t("duration-base", "200ms", "Padrão: abrir popover, tooltip, accordion, troca de aba."),
    t("duration-slow", "300ms", "Modais e gavetas (entrada; a saída usa duration-base)."),
    t("duration-slower", "500ms", "Só marketing: entrada de seção ao rolar, troca de aba de recursos."),
]
easings = [
    t("ease-standard", "cubic-bezier(0.2, 0, 0, 1)", "Padrão para mudanças de estado e movimento dentro da tela."),
    t("ease-enter", "cubic-bezier(0, 0, 0.2, 1)", "Entrada (desacelera): popover, modal, gaveta e toast aparecendo."),
    t("ease-exit", "cubic-bezier(0.4, 0, 1, 1)", "Saída (acelera): o que sai da tela ou fecha."),
    t("ease-emphasized", "cubic-bezier(0.16, 1, 0.3, 1)", "Só marketing: entrada de seções, brilhos e destaques do hero."),
]
breakpoints = [
    t("bp-sm", "600px", "x"),
    t("bp-md", "768px", "Tablet: tabela de dados volta a ser tabela; grade de 2 colunas no site."),
    t("bp-lg", "1024px", "Desktop: menu lateral fixo expandido; grade de 3 colunas no site."),
    t("bp-xl", "1280px", "Desktop largo: tamanho máximo da tipografia fluida; container do site 1200px."),
    t("bp-2xl", "1536px", "Telas grandes: tabelas ganham colunas extras; container do site não cresce mais."),
]
breakpoints[0]["usage"] = "Celular grande: modal deixa de ser tela cheia; formulários ganham 2 colunas."

doc = {
    "name": "TOU",
    "version": 1,
    "color": {
        "themes": [
            {"id": "light", "name": "Claro"},
            {"id": "dark", "name": "Escuro (produto)"},
            {"id": "navy", "name": "Marinho (seções escuras do site e painel de leads)"},
        ],
        "tokens": colors,
    },
    "type": types,
    "spacing": {"tokens": [t(n, f"{v}px", u) for n, v, u in spacing]},
    "radius": {"tokens": [t(n, v, u) for n, v, u in radius]},
    "shadow": {"note": "Cinco níveis, tingidos de ink no claro. Nos temas escuros a separação vem da superfície mais clara e da borda: xs e sm somem, md–xl só existem para camadas flutuantes.", "tokens": shadows},
    "duration": {"note": "Durações de movimento. Tudo para ou pausa com prefers-reduced-motion: reduce.", "tokens": durations},
    "easing": {"note": "Curvas de movimento.", "tokens": easings},
    "breakpoint": {"note": "Larguras mínimas (min-width).", "tokens": breakpoints},
}
json.dump(doc, open(OUT, "w"), ensure_ascii=False, indent=2)

# ----- contrast check -----
def hex2rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) / 255 for i in (0, 2, 4)), (int(h[6:8], 16) / 255 if len(h) == 8 else 1)
def lum(c):
    f = lambda x: x / 12.92 if x <= 0.03928 else ((x + 0.055) / 1.055) ** 2.4
    r, g, b = map(f, c); return 0.2126 * r + 0.7152 * g + 0.0722 * b
def comp(fg, bg):
    (c, a), (b, _) = hex2rgb(fg), hex2rgb(bg)
    return tuple(a * c[i] + (1 - a) * b[i] for i in range(3))
def cr(fg, bg):
    bgc, _ = hex2rgb(bg); fgc = comp(fg, bg)
    l1, l2 = sorted([lum(fgc), lum(bgc)], reverse=True)
    return (l1 + 0.05) / (l2 + 0.05)

by = {c["name"]: c["value"] for c in colors}
def v(name, theme):
    x = by[name]
    if isinstance(x, dict): x = x.get(theme, x["light"])
    if x.startswith("{"): return v(x[1:-1], theme)
    return x
checks = [
    ("text", ["bg-page", "bg-surface", "bg-sunken", "bg-hover", "bg-selected"], 4.5),
    ("text-secondary", ["bg-page", "bg-surface", "bg-sunken", "bg-hover", "bg-selected"], 4.5),
    ("text-tertiary", ["bg-page", "bg-surface", "bg-sunken", "bg-hover", "bg-selected"], 4.5),
    ("text-disabled", ["bg-disabled"], 3),
    ("text-brand-pressed", ["primary-soft-pressed"], 4.5),
    ("text-disabled", ["bg-surface", "bg-page"], 3),
    ("text-brand", ["bg-page", "bg-surface", "bg-sunken", "bg-hover", "bg-selected", "primary-soft"], 4.5),
    ("text-on-primary", ["primary", "primary-hover", "primary-pressed", "info-solid"], 4.5),
    ("border-control", ["bg-surface", "bg-page"], 3),
    ("focus-ring", ["bg-surface", "bg-page", "bg-sunken"], 3),
    ("success", ["bg-surface", "bg-page", "success-soft"], 4.5),
    ("warning", ["bg-surface", "bg-page", "warning-soft"], 4.5),
    ("danger", ["bg-surface", "bg-page", "danger-soft"], 4.5),
    ("info", ["bg-surface", "bg-page", "info-soft"], 4.5),
    ("on-success", ["success-solid"], 4.5),
    ("on-warning", ["warning-solid"], 4.5),
    ("on-danger", ["danger-solid"], 4.5),
    ("rating", ["bg-surface"], 3),
    ("primary", ["bg-surface", "bg-page"], 3),
]
fails = 0
for theme in TH:
    for fg, bgs, mn in checks:
        for bg in bgs:
            r = cr(v(fg, theme), v(bg, theme))
            flag = "" if r >= mn else "  <-- FAIL"
            if flag: fails += 1
            if flag or "-v" in sys.argv: print(f"{theme:6} {fg:16} on {bg:14} {r:5.2f} (min {mn}){flag}")
print("fails:", fails)
# marketing pairs
for fg, bg in [("#01141F", "#FCFCF9"), ("#455864", "#F8F7F2"), ("#5F707A", "#F8F7F2"), ("#0E5CBD", "#FCFCF9"), ("#0E5CBD", "#F8F7F2"), ("#17C1D5", "#000910"), ("#0ED5CC", "#01141F"), ("#269BE5", "#000910"), ("#1D70DC", "#FFFFFF"), ("#FFFFFF", "#17C1D5"), ("#FFFFFF", "#269BE5")]:
    print("mkt", fg, "on", bg, round(cr(fg, bg), 2))
