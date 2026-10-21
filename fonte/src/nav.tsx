import { cx, Icon, IconName, Skeleton, useId } from './core';
import { Badge } from './display';
import { IconButton } from './buttons';
import { InfoTip, Tooltip } from './overlays';
import { Avatar } from './display';
import { TextField } from './fields';

/* ---------- Link ---------- */
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Abre em nova aba, mostra o ícone e anuncia "(abre em nova aba)". */
  external?: boolean;
  /** Link solto (fora de texto corrido): sem sublinhado até o hover. */
  standalone?: boolean;
  disabled?: boolean;
}

/** Link inline (sublinhado) ou solto. Externo abre em nova aba com ícone. */
export function Link({ external, standalone, disabled, className, children, href, ...rest }: LinkProps) {
  return (
    <a
      className={cx('tou-link', standalone && 'tou-link--standalone', className)}
      href={disabled ? undefined : href}
      aria-disabled={disabled || undefined}
      role={disabled ? 'link' : undefined}
      target={external ? '_blank' : rest.target}
      rel={external ? 'noopener noreferrer' : rest.rel}
      {...rest}
    >
      {children}
      {external ? <><Icon name="external-link" size={14} /><span className="tou-sr"> (abre em nova aba)</span></> : null}
    </a>
  );
}

/* ---------- Abas ---------- */
export interface TabItem { id: string; label: string; icon?: IconName; count?: number; disabled?: boolean }
export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  /** Rótulo acessível da lista de abas. */
  label: string;
  /** Conteúdo do painel ativo. */
  children?: React.ReactNode;
  /** Documentação: classes de estado por aba ({ id: 'is-hover' }). */
  stateClasses?: Record<string, string>;
}

/** Abas com navegação por setas (Home/End), indicador de 2px na primária. */
export function Tabs({ items, value, onChange, label, children, stateClasses = {} }: TabsProps) {
  const id = useId('abas');
  const refs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const enabled = items.filter((t) => !t.disabled);
  const onKey = (e: React.KeyboardEvent) => {
    const i = enabled.findIndex((t) => t.id === value);
    let n = -1;
    if (e.key === 'ArrowRight') n = (i + 1) % enabled.length;
    else if (e.key === 'ArrowLeft') n = (i - 1 + enabled.length) % enabled.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = enabled.length - 1;
    if (n >= 0) { e.preventDefault(); onChange(enabled[n].id); refs.current[enabled[n].id]?.focus(); }
  };
  return (
    <div className="tou-tabs">
      <div className="tou-tablist" role="tablist" aria-label={label} onKeyDown={onKey}>
        {items.map((t) => (
          <button
            key={t.id}
            ref={(el) => { refs.current[t.id] = el; }}
            type="button"
            role="tab"
            id={`${id}-${t.id}`}
            className={cx('tou-tab', stateClasses[t.id])}
            aria-selected={t.id === value}
            aria-controls={t.id === value && children !== undefined ? `${id}-${t.id}-p` : undefined}
            tabIndex={t.id === value ? 0 : -1}
            disabled={t.disabled}
            onClick={() => onChange(t.id)}
          >
            {t.icon ? <Icon name={t.icon} size={16} /> : null}
            {t.label}
            {t.count != null ? <Badge tone={t.id === value ? 'primary' : 'neutral'} count>{t.count}</Badge> : null}
          </button>
        ))}
      </div>
      {children !== undefined ? <div className="tou-tabpanel" role="tabpanel" id={`${id}-${value}-p`} aria-labelledby={`${id}-${value}`} tabIndex={0}>{children}</div> : null}
    </div>
  );
}

/* ---------- Controle segmentado ---------- */
export interface SegmentedOption { value: string; label: string; icon?: IconName; disabled?: boolean; hideLabel?: boolean }
export interface SegmentedControlProps {
  options: SegmentedOption[];
  value: string;
  onChange: (v: string) => void;
  /** Rótulo acessível do grupo. */
  label: string;
  size?: 'sm' | 'md';
  block?: boolean;
  stateClasses?: Record<string, string>;
}

/** Escolha exclusiva entre 2–5 opções vizinhas (visualização, período). Radio group com setas. */
export function SegmentedControl({ options, value, onChange, label, size = 'md', block, stateClasses = {} }: SegmentedControlProps) {
  const refs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const enabled = options.filter((o) => !o.disabled);
  const onKey = (e: React.KeyboardEvent) => {
    const i = enabled.findIndex((o) => o.value === value);
    let n = -1;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % enabled.length;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + enabled.length) % enabled.length;
    if (n >= 0) { e.preventDefault(); onChange(enabled[n].value); refs.current[enabled[n].value]?.focus(); }
  };
  return (
    <div className={cx('tou-seg', size === 'sm' && 'tou-seg--sm', block && 'tou-seg--block')} role="radiogroup" aria-label={label} onKeyDown={onKey}>
      {options.map((o) => (
        <button key={o.value} ref={(el) => { refs.current[o.value] = el; }} type="button" role="radio" aria-checked={o.value === value} tabIndex={o.value === value ? 0 : -1} disabled={o.disabled} className={cx('tou-seg__btn', stateClasses[o.value])} aria-label={o.hideLabel ? o.label : undefined} onClick={() => onChange(o.value)}>
          {o.icon ? <Icon name={o.icon} size={16} /> : null}
          {o.hideLabel ? null : o.label}
        </button>
      ))}
    </div>
  );
}

/* ---------- Accordion ---------- */
export interface AccordionItem { id: string; title: React.ReactNode; meta?: React.ReactNode; content: React.ReactNode; disabled?: boolean }
export interface AccordionProps {
  items: AccordionItem[];
  /** Itens abertos. */
  value: string[];
  onChange: (ids: string[]) => void;
  /** Só um aberto por vez. */
  single?: boolean;
  /** Nível do título (h3 por padrão). */
  headingLevel?: 2 | 3 | 4;
  stateClasses?: Record<string, string>;
}

/** Seções que abrem e fecham. Cabeçalho é botão dentro de título (h3). */
export function Accordion({ items, value, onChange, single, headingLevel = 3, stateClasses = {} }: AccordionProps) {
  const id = useId('acc');
  const H: any = `h${headingLevel}`;
  return (
    <div className="tou-acc">
      {items.map((it) => {
        const open = value.includes(it.id);
        return (
          <div key={it.id} className="tou-acc__item">
            <H className="tou-acc__head">
              <button type="button" className={cx('tou-acc__btn', stateClasses[it.id])} aria-expanded={open} aria-controls={`${id}-${it.id}`} id={`${id}-${it.id}-b`} disabled={it.disabled}
                onClick={() => onChange(open ? value.filter((x) => x !== it.id) : single ? [it.id] : [...value, it.id])}>
                <span className="tou-acc__title">{it.title}</span>
                {it.meta ? <span className="tou-acc__meta">{it.meta}</span> : null}
                <span className="tou-acc__chev"><Icon name="chevron-down" size={16} /></span>
              </button>
            </H>
            <div className="tou-acc__panel" id={`${id}-${it.id}`} role="region" aria-labelledby={`${id}-${it.id}-b`} hidden={!open}>{it.content}</div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- Barra de progresso ---------- */
export interface ProgressBarProps {
  label: string;
  /** 0–100. Sem valor = indeterminado. */
  value?: number;
  tone?: 'primary' | 'success' | 'danger';
  /** Texto abaixo (ex.: "128 de 200 contatos"). */
  help?: React.ReactNode;
  size?: 'sm' | 'md';
  showValue?: boolean;
}

/** Progresso de uma tarefa (importação, envio de disparo). Indeterminado fica parado com "reduzir movimento". */
export function ProgressBar({ label, value, tone = 'primary', help, size = 'md', showValue = true }: ProgressBarProps) {
  const id = useId('prog');
  const indet = value == null;
  return (
    <div className={cx('tou-progress', `tou-progress--${tone}`, size === 'sm' && 'tou-progress--sm', indet && 'tou-progress--indeterminate')}>
      <div className="tou-progress__row">
        <span className="tou-progress__label" id={`${id}-l`}>{label}</span>
        {!indet && showValue ? <span className="tou-progress__value">{Math.round(value!)}%</span> : null}
      </div>
      <div className="tou-progress__track" role="progressbar" aria-labelledby={`${id}-l`} aria-valuemin={indet ? undefined : 0} aria-valuemax={indet ? undefined : 100} aria-valuenow={indet ? undefined : Math.round(value!)} aria-describedby={help ? `${id}-h` : undefined}>
        <div className="tou-progress__bar" style={indet ? undefined : { width: `${Math.max(0, Math.min(100, value!))}%` }} />
      </div>
      {help ? <span className="tou-progress__help" id={`${id}-h`}>{tone === 'success' ? <Icon name="circle-check" size={14} /> : tone === 'danger' ? <Icon name="circle-alert" size={14} /> : null}{help}</span> : null}
    </div>
  );
}

/* ---------- Card ---------- */
export interface CardProps {
  /** plain: só borda. elevated: sombra sm. interactive: o card inteiro é clicável (passe href ou onClick). */
  variant?: 'plain' | 'elevated' | 'interactive';
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Ação no canto do cabeçalho (ex.: IconButton "Mais ações"). Não use em card interativo. */
  action?: React.ReactNode;
  footer?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  selected?: boolean;
  /** Destaque fixo (ex.: plano recomendado): borda primária dupla. Combine com um Badge que diga o motivo. */
  highlighted?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  stateClassName?: string;
  /** Nível do título (h3 por padrão). */
  headingLevel?: 2 | 3 | 4;
}

/** Container de conteúdo. O interativo usa um link/botão esticado sobre o card (um só alvo, foco visível). */
export function Card({ variant = 'plain', title, subtitle, action, footer, href, onClick, selected, highlighted, disabled, children, className, stateClassName, headingLevel = 3 }: CardProps) {
  const H: any = `h${headingLevel}`;
  const interactive = variant === 'interactive';
  const titleNode = interactive && !disabled ? (
    href ? <a className="tou-card__link" href={href}>{title}</a> : <button type="button" className="tou-card__link" onClick={onClick} aria-pressed={selected ?? undefined} style={{ all: 'unset' }}>{title}</button>
  ) : title;
  return (
    <div className={cx('tou-card', `tou-card--${variant}`, selected && 'is-selected', highlighted && 'is-highlighted', disabled && 'is-disabled', stateClassName, className)} aria-disabled={disabled || undefined}>
      {title || action ? (
        <div className="tou-card__head">
          <div className="tou-card__titles">
            {title ? <H className="tou-card__title">{titleNode}</H> : null}
            {subtitle ? <p className="tou-card__subtitle">{subtitle}</p> : null}
          </div>
          {action && !interactive ? action : null}
        </div>
      ) : null}
      {children ? <div className="tou-card__body">{children}</div> : null}
      {footer ? <div className="tou-card__foot">{footer}</div> : null}
    </div>
  );
}

/* ---------- Card de KPI ---------- */
export interface KpiCardProps {
  label: string;
  /** Valor já formatado ("R$ 48.920", "1.284"). */
  value: React.ReactNode;
  /** Variação em % (positivo = sobe). */
  delta?: number;
  /** Se subir é ruim (ex.: tempo de resposta), inverte as cores. */
  invert?: boolean;
  /** Período de comparação ("vs. setembro"). */
  comparison?: string;
  /** Série para o mini-gráfico (8–30 pontos). */
  trend?: number[];
  /** Rótulos dos pontos, para a dica no hover ("Semana 1"…). */
  trendLabels?: string[];
  /** Explicação da métrica (vira ícone de informação). */
  info?: string;
  loading?: boolean;
  large?: boolean;
}

function Sparkline({ data, label, labels }: { data: number[]; label: string; labels?: string[] }) {
  const W = 120, H = 40, P = 4;
  const min = Math.min(...data), max = Math.max(...data);
  const x = (i: number) => P + (i * (W - 2 * P)) / (data.length - 1);
  const y = (v: number) => H - P - ((v - min) / (max - min || 1)) * (H - 2 * P);
  const line = data.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ');
  const area = `${line} L${x(data.length - 1)} ${H} L${x(0)} ${H} Z`;
  return (
    <svg className="tou-kpi__spark" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
      <path className="area" d={area} />
      <path className="line" d={line} />
      <circle className="end" cx={x(data.length - 1)} cy={y(data[data.length - 1])} r="4" />
      {data.map((v, i) => (
        <g key={i} className="hit">
          <rect x={x(i) - (W - 2 * P) / (data.length - 1) / 2} y={0} width={(W - 2 * P) / (data.length - 1)} height={H} fill="transparent" />
          <circle className="dot" cx={x(i)} cy={y(v)} r="4" />
          <title>{`${labels?.[i] ?? `Ponto ${i + 1}`}: ${v.toLocaleString('pt-BR')}`}</title>
        </g>
      ))}
    </svg>
  );
}

/** Número de destaque com variação e mini-gráfico. A variação tem seta e sinal, nunca só cor. */
export function KpiCard({ label, value, delta, invert, comparison, trend, trendLabels, info, loading, large }: KpiCardProps) {
  const up = (delta ?? 0) >= 0;
  const good = invert ? !up : up;
  const pct = delta != null ? `${up ? '+' : '−'}${Math.abs(delta).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}%` : '';
  return (
    <div className={cx('tou-card tou-card--plain tou-kpi', loading && 'tou-kpi--loading')} aria-busy={loading || undefined}>
      <span className="tou-kpi__label">{label}{info ? <InfoTip about={label} content={info} /> : null}</span>
      <div className="tou-kpi__row">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
          {loading ? <Skeleton variant="block" className="tou-kpi__value" /> : <span className={cx('tou-kpi__value', large && 'tou-kpi__value--lg')}>{value}</span>}
          {loading ? <Skeleton variant="text" width={140} /> : delta != null ? (
            <span className="tou-kpi__delta">
              <Badge tone={good ? 'success' : 'danger'} icon={up ? 'trending-up' : 'trending-down'}><span className="tou-sr">{up ? 'Subiu' : 'Caiu'} </span>{pct}</Badge>
              {comparison ? <span>{comparison}</span> : null}
            </span>
          ) : null}
        </div>
        {trend && !loading ? <Sparkline data={trend} labels={trendLabels} label={`Tendência de ${label}: de ${trend[0]} para ${trend[trend.length - 1]}`} /> : null}
      </div>
    </div>
  );
}

/* ---------- Menu lateral ---------- */
export interface NavItem {
  id: string;
  label: string;
  icon: IconName;
  href?: string;
  /** Subitens (abre/fecha). */
  children?: { id: string; label: string; href?: string; keywords?: string }[];
  /** Recurso fora do plano: cadeado + dica. Continua focável (leva à página de Planos). */
  locked?: boolean;
  lockedHint?: string;
  badge?: number;
  /** Termos extras para a busca do menu (sinônimos). */
  keywords?: string;
}
export interface NavGroup { label?: string; items: NavItem[] }

export interface SidebarProps {
  groups: NavGroup[];
  /** id do item (ou subitem) da página atual. */
  current: string;
  collapsed?: boolean;
  onCollapsedChange?: (c: boolean) => void;
  /** Grupos com subitens abertos. */
  expanded?: string[];
  onExpandedChange?: (ids: string[]) => void;
  logoSrc: string;
  user: { name: string; org: string; avatar?: string; status?: 'online' | 'away' | 'busy' | 'offline' };
  /** Botões do rodapé (perfil, tema, notificações, sair). */
  footerActions?: React.ReactNode;
  onNavigate?: (id: string) => void;
  /** Dentro de uma gaveta (celular): troca o botão de recolher por "Fechar menu". */
  onClose?: () => void;
  /** Lupa no topo: abre um campo que filtra as telas do menu (padrão true). */
  searchable?: boolean;
  /** Documentação: começa com o campo de busca aberto e este texto. */
  initialSearch?: string;
  /** Documentação: classes de estado por item ({ id: 'is-hover' }). */
  stateClasses?: Record<string, string>;
}

const navNorm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const navHas = (text: string, q: string) => navNorm(text).includes(q);

function NavMark({ text, q }: { text: string; q: string }) {
  if (!q) return <>{text}</>;
  const i = navNorm(text).indexOf(q);
  if (i < 0) return <>{text}</>;
  return <>{text.slice(0, i)}<mark className="tou-nav__mark">{text.slice(i, i + q.length)}</mark>{text.slice(i + q.length)}</>;
}

/** Navegação principal do produto: expandido (248px) ou recolhido (64px, só ícones com dica). A lupa abre um filtro das telas do menu. */
export function Sidebar({ groups, current, collapsed, onCollapsedChange, expanded = [], onExpandedChange, logoSrc, user, footerActions, onNavigate, onClose, searchable = true, initialSearch, stateClasses = {} }: SidebarProps) {
  const nid = useId('nav');
  const [searchOpen, setSearchOpen] = React.useState(initialSearch !== undefined);
  const [query, setQuery] = React.useState(initialSearch || '');
  const lupa = React.useRef<HTMLButtonElement>(null);
  const field = React.useRef<HTMLDivElement>(null);
  const q = searchOpen && !collapsed ? navNorm(query.trim()) : '';
  const focusField = () => setTimeout(() => field.current?.querySelector('input')?.focus(), 0);
  const toggleSearch = () => {
    if (collapsed) { onCollapsedChange?.(false); setSearchOpen(true); focusField(); return; }
    if (searchOpen) { setSearchOpen(false); setQuery(''); } else { setSearchOpen(true); focusField(); }
  };
  // Filtra: o item aparece se o rótulo (ou keywords) bate ou se algum subitem bate. Item que bate mostra todos os subitens.
  const filtered = !q ? groups : groups.map((g) => ({
    ...g,
    items: g.items.map((it) => {
      const self = navHas(`${it.label} ${it.keywords || ''}`, q);
      const kids = it.children?.filter((c) => navHas(`${c.label} ${c.keywords || ''}`, q));
      if (self) return it;
      if (kids && kids.length) return { ...it, children: kids };
      return null;
    }).filter(Boolean) as NavItem[],
  })).filter((g) => g.items.length);
  const flat: string[] = [];
  filtered.forEach((g) => g.items.forEach((it) => { if (it.children?.length) it.children.forEach((c) => flat.push(c.id)); else flat.push(it.id); }));
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault(); e.stopPropagation();
      if (query) setQuery(''); else { setSearchOpen(false); lupa.current?.focus(); }
    } else if (e.key === 'Enter' && q && flat[0]) { e.preventDefault(); onNavigate?.(flat[0]); }
  };
  const item = (it: NavItem) => {
    const isCurrent = it.id === current;
    const hasKids = !!it.children?.length;
    const kidCurrent = it.children?.some((c) => c.id === current);
    const open = q ? hasKids : expanded.includes(it.id) || (!!kidCurrent && !collapsed);
    const content = (
      <>
        <Icon name={it.icon} size={20} />
        <span className="tou-nav__label"><NavMark text={it.label} q={q} /></span>
        <span className="tou-nav__trail">
          {it.badge ? <Badge tone="primary" solid count>{it.badge}</Badge> : null}
          {it.locked ? <Icon name="lock" size={16} label="Bloqueado" /> : null}
          {hasKids ? <span className="tou-nav__chev" style={{ display: 'inline-flex' }}><Icon name="chevron-down" size={16} /></span> : null}
        </span>
        {it.locked ? <span className="tou-nav__locked-dot" aria-hidden="true"><Icon name="lock" size={10} /></span> : null}
      </>
    );
    const common = {
      className: cx('tou-nav__item', it.locked && 'is-locked', q && hasKids && 'is-match-parent', stateClasses[it.id]),
      'aria-current': isCurrent || (collapsed && kidCurrent) ? ('page' as const) : undefined,
      'aria-label': collapsed ? `${it.label}${it.locked ? ' (bloqueado)' : ''}` : undefined,
    };
    const el = hasKids && !collapsed ? (
      <button type="button" {...common} aria-expanded={open} onClick={() => { if (!q) onExpandedChange?.(open ? expanded.filter((x) => x !== it.id) : [...expanded, it.id]); }}>{content}</button>
    ) : (
      <a href={it.href || '#'} {...common} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(it.id); } }}>{content}</a>
    );
    const hint = it.locked ? it.lockedHint || 'Disponível no plano Pro' : collapsed ? it.label : null;
    return (
      <li key={it.id}>
        {hint ? <Tooltip content={hint} placement="right">{el}</Tooltip> : el}
        {hasKids && open && !collapsed ? (
          <ul className="tou-nav__sub">
            {it.children!.map((c) => (
              <li key={c.id}><a href={c.href || '#'} className={cx('tou-nav__item', stateClasses[c.id])} aria-current={c.id === current ? 'page' : undefined} onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(c.id); } }}><span className="tou-nav__label"><NavMark text={c.label} q={q} /></span></a></li>
            ))}
          </ul>
        ) : null}
      </li>
    );
  };
  const showSearch = searchable && searchOpen && !collapsed;
  return (
    <nav className={cx('tou-nav', collapsed && 'tou-nav--collapsed', q && 'is-filtering')} aria-label="Menu principal">
      <div className="tou-nav__top">
        {collapsed ? <img className="tou-nav__logo-mark" src={logoSrc} alt="TOU" /> : <img className="tou-nav__logo" src={logoSrc} alt="TOU" />}
        <span className="tou-nav__top-actions">
          {searchable ? (() => {
            const b = <IconButton ref={lupa} className={stateClasses.search} icon="search" label="Buscar no menu" pressed={showSearch} aria-controls={showSearch ? `${nid}-search` : undefined} onClick={toggleSearch} />;
            return onClose ? b : <Tooltip content="Buscar no menu" placement={collapsed ? 'right' : 'bottom'}>{b}</Tooltip>;
          })() : null}
          {onClose ? <IconButton icon="x" label="Fechar menu" onClick={onClose} /> : null}
        </span>
      </div>
      {!onClose && onCollapsedChange ? (
        <span className="tou-nav__edge">
          <Tooltip content={collapsed ? 'Expandir menu' : 'Recolher menu'} placement="right">
            <button type="button" className={cx('tou-nav__edge-btn', stateClasses.toggle)} aria-label={collapsed ? 'Expandir menu' : 'Recolher menu'} aria-expanded={!collapsed} onClick={() => onCollapsedChange(!collapsed)}>
              <Icon name={collapsed ? 'chevron-right' : 'chevron-left'} size={14} />
            </button>
          </Tooltip>
        </span>
      ) : null}
      {showSearch ? (
        <div className="tou-nav__search" id={`${nid}-search`} ref={field} role="search" aria-label="Buscar no menu">
          <TextField label="Buscar no menu" className="tou-sr-label" icon="search" placeholder="Buscar tela" value={query} autoComplete="off"
            aria-describedby={`${nid}-search-hint`} onChange={(e) => setQuery(e.target.value)} onClear={() => { setQuery(''); focusField(); }} onKeyDown={onKey} />
          <p className="tou-nav__search-hint" id={`${nid}-search-hint`} aria-live="polite">
            {q ? <><span className="tou-nav__search-on">{flat.length ? `Filtro ativo · ${flat.length} ${flat.length === 1 ? 'tela' : 'telas'}` : 'Filtro ativo'}</span><span aria-hidden="true"> · </span>Esc para limpar</> : 'Digite o nome de uma tela'}
          </p>
        </div>
      ) : null}
      <div className="tou-nav__scroll">
        {q && !filtered.length ? (
          <div className="tou-nav__empty">
            <Icon name="search-x" size={20} />
            <p>Nenhuma tela com “{query.trim()}”.</p>
            <button type="button" className="tou-nav__empty-btn" onClick={() => { setQuery(''); focusField(); }}>Limpar busca</button>
          </div>
        ) : null}
        {filtered.map((g, gi) => (
          <div key={gi} style={{ width: '100%' }}>
            {g.label && !q ? <div className="tou-nav__group-label" id={`${nid}-g${gi}`}>{g.label}</div> : null}
            <ul className="tou-nav__group" aria-labelledby={g.label && !q ? `${nid}-g${gi}` : undefined}>{g.items.map(item)}</ul>
          </div>
        ))}
      </div>
      <div className="tou-nav__foot">
        {footerActions ? <div className="tou-nav__actions">{footerActions}</div> : null}
        <button type="button" className="tou-nav__user" aria-label={collapsed ? `${user.name}, ${user.org}` : undefined}>
          <Avatar name={user.name} src={user.avatar} size="sm" status={user.status} />
          <span className="tou-nav__user-text"><span className="tou-nav__user-name">{user.name}</span><span className="tou-nav__user-org">{user.org}</span></span>
          <Icon name="chevron-right" size={16} />
        </button>
      </div>
    </nav>
  );
}

/* ---------- Cabeçalho de página ---------- */
export interface PageHeaderProps {
  title: React.ReactNode;
  /** Contagem ao lado do título (ex.: total de contatos). */
  count?: number;
  subtitle?: React.ReactNode;
  /** Ações à direita: secundárias primeiro, a primária por último. */
  actions?: React.ReactNode;
  /** Link "voltar" acima do título. */
  back?: { label: string; href: string };
  /** Linha abaixo (busca, barra de filtros, abas). */
  children?: React.ReactNode;
}

/** Topo de toda página do produto: título (h1, um por tela), subtítulo, ações e busca. */
export function PageHeader({ title, count, subtitle, actions, back, children }: PageHeaderProps) {
  return (
    <header className="tou-pagehead">
      <div className="tou-pagehead__row">
        <div className="tou-pagehead__titles">
          {back ? <a className="tou-link tou-link--standalone tou-pagehead__back" href={back.href}><Icon name="arrow-left" size={16} />{back.label}</a> : null}
          <h1 className="tou-pagehead__title">{title}{count != null ? <Badge tone="neutral" count>{count.toLocaleString('pt-BR')}</Badge> : null}</h1>
          {subtitle ? <p className="tou-pagehead__subtitle">{subtitle}</p> : null}
        </div>
        {actions ? <div className="tou-pagehead__actions">{actions}</div> : null}
      </div>
      {children}
    </header>
  );
}
