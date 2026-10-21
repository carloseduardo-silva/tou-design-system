import { cx, Icon, Skeleton, useId, useDismiss } from './core';
import { Button, IconButton } from './buttons';
import { Badge, Chip, FilterChip, EmptyState } from './display';
import { Checkbox, TextField, Select, Option } from './fields';

/* ------------------------------------------------------------------ */
/* Tabela de dados                                                     */
/* ------------------------------------------------------------------ */

export interface Column<T> {
  key: string;
  header: React.ReactNode;
  /** Largura fixa (px ou %). */
  width?: number | string;
  align?: 'left' | 'right';
  /** Coluna numérica: alinhada à direita, mono, tabular. */
  numeric?: boolean;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  /** Como a coluna aparece no layout de cards (mobile): título, linha "rótulo: valor", área de etiquetas ou oculta. */
  mobile?: 'title' | 'row' | 'tags' | 'hidden';
}

export type SortState = { key: string; dir: 'asc' | 'desc' } | null;

export interface PaginationState {
  page: number;
  pageSize: number;
  total: number;
  onPageChange?: (page: number) => void;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  /** Rótulo acessível da tabela (vira <caption> oculto). */
  caption: string;
  /** dense: linhas de 40px, uma linha de texto. comfortable: 56px, permite segunda linha (canal, telefone). */
  density?: 'dense' | 'comfortable';
  selectable?: boolean;
  selected?: string[];
  onSelectionChange?: (keys: string[]) => void;
  /** Ações em massa, mostradas na barra que aparece quando há seleção. */
  bulkActions?: React.ReactNode;
  sort?: SortState;
  onSortChange?: (s: SortState) => void;
  /** Conteúdo da linha expandida. */
  renderDetail?: (row: T) => React.ReactNode;
  expanded?: string[];
  onExpandedChange?: (keys: string[]) => void;
  /** Ações da linha (normalmente um IconButton "Mais ações"). */
  rowActions?: (row: T) => React.ReactNode;
  loading?: boolean;
  /** Estado vazio compacto (EmptyState compact). */
  empty?: React.ReactNode;
  pagination?: PaginationState & { itemLabel?: string };
  /** auto: vira lista de cards abaixo de 768px de largura do container. */
  layout?: 'auto' | 'table' | 'cards';
  /** Documentação: força hover numa linha. */
  hoverRow?: string;
  className?: string;
}

export interface PaginationProps extends PaginationState {
  /** Celular e listas estreitas: tira "Mostrando" e "Página", fica "1–40 de 52.218" e "1 de 1.306". */
  compact?: boolean;
  /** Nome dos itens no texto ("itens", "contatos"). */
  itemLabel?: string;
  /** Sem a borda de cima (fora de tabela). */
  standalone?: boolean;
  className?: string;
}

/** Paginação simples: "Mostrando 1–40 de 52.218 itens" à esquerda; "Página 1 de 1.306" e primeira, anterior, próxima e última à direita. */
export function Pagination({ page, pageSize, total, onPageChange, compact, itemLabel = 'itens', standalone, className }: PaginationProps) {
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const from = total ? (page - 1) * pageSize + 1 : 0;
  const to = Math.min(total, page * pageSize);
  const f = (n: number) => n.toLocaleString('pt-BR');
  const go = (n: number) => onPageChange?.(Math.min(pages, Math.max(1, n)));
  return (
    <nav className={cx('tou-table-foot', standalone && 'tou-table-foot--standalone', compact && 'tou-table-foot--compact', className)} aria-label={`Paginação de ${itemLabel}`}>
      <span className="tou-table-foot__range" aria-live="polite">
        {compact ? null : 'Mostrando '}{f(from)}–{f(to)} de {f(total)} {itemLabel}
      </span>
      <span className="tou-pager">
        <span className="tou-pager__label">{compact ? `${f(page)} de ${f(pages)}` : `Página ${f(page)} de ${f(pages)}`}</span>
        <IconButton icon="chevron-first" label="Primeira página" size="sm" disabled={page <= 1} onClick={() => go(1)} />
        <IconButton icon="chevron-left" label="Página anterior" size="sm" disabled={page <= 1} onClick={() => go(page - 1)} />
        <IconButton icon="chevron-right" label="Próxima página" size="sm" disabled={page >= pages} onClick={() => go(page + 1)} />
        <IconButton icon="chevron-last" label="Última página" size="sm" disabled={page >= pages} onClick={() => go(pages)} />
      </span>
    </nav>
  );
}

function TablePagination(p: PaginationState & { compact?: boolean }) { return <Pagination {...p} />; }

/** Tabela densa ou confortável, com ordenação, seleção, linha expansível, carregando, vazio e paginação. Vira lista de cards no mobile. */
export function DataTable<T>(props: DataTableProps<T>) {
  const { columns, rows, rowKey, caption, density = 'comfortable', selectable, selected = [], onSelectionChange, bulkActions, sort, onSortChange, renderDetail, expanded = [], onExpandedChange, rowActions, loading, empty, pagination, layout = 'auto', hoverRow, className } = props;
  const wrap = React.useRef<HTMLDivElement>(null);
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    if (layout !== 'auto' || !wrap.current || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(([e]) => setNarrow(e.contentRect.width < 768));
    ro.observe(wrap.current);
    return () => ro.disconnect();
  }, [layout]);
  const cards = layout === 'cards' || (layout === 'auto' && narrow);
  const keys = rows.map(rowKey);
  const allSel = keys.length > 0 && keys.every((k) => selected.includes(k));
  const someSel = !allSel && keys.some((k) => selected.includes(k));
  const toggleAll = () => onSelectionChange?.(allSel ? selected.filter((k) => !keys.includes(k)) : Array.from(new Set([...selected, ...keys])));
  const toggle = (k: string) => onSelectionChange?.(selected.includes(k) ? selected.filter((x) => x !== k) : [...selected, k]);
  const colCount = columns.length + (selectable ? 1 : 0) + (renderDetail ? 1 : 0) + (rowActions ? 1 : 0);
  const sortBy = (c: Column<T>) => {
    if (!onSortChange) return;
    if (!sort || sort.key !== c.key) onSortChange({ key: c.key, dir: 'asc' });
    else if (sort.dir === 'asc') onSortChange({ key: c.key, dir: 'desc' });
    else onSortChange(null);
  };
  const titleCol = columns.find((c) => c.mobile === 'title') || columns[0];
  const cell = (c: Column<T>, r: T) => (c.render ? c.render(r) : (r as any)[c.key]);
  const bulk = selectable && selected.length > 0 ? (
    <div className="tou-table-bulk" role="region" aria-label="Ações em massa">
      <span className="tou-table-bulk__count" aria-live="polite">{selected.length} {selected.length === 1 ? 'selecionado' : 'selecionados'}</span>
      {bulkActions}
      <span className="tou-table-bulk__spacer" />
      <Button variant="tertiary" size="sm" onClick={() => onSelectionChange?.([])}>Limpar seleção</Button>
    </div>
  ) : null;

  if (cards) {
    return (
      <div ref={wrap} className={cx('tou-table-wrap', className)}>
        {bulk}
        {loading ? (
          <ul className="tou-cardlist" aria-busy="true" aria-label={caption}>
            {[0, 1, 2].map((i) => (
              <li key={i} className="tou-cardlist__item"><Skeleton variant="circle" width={32} /><div className="tou-cardlist__main"><Skeleton variant="text" width="60%" /><Skeleton variant="text" width="40%" /><Skeleton variant="text" width="80%" /></div><span /></li>
            ))}
          </ul>
        ) : !rows.length ? (
          empty
        ) : (
          <ul className="tou-cardlist" aria-label={caption}>
            {rows.map((r) => {
              const k = rowKey(r);
              const isSel = selected.includes(k);
              return (
                <li key={k} className={cx('tou-cardlist__item', isSel && 'is-selected')}>
                  <span className="tou-cardlist__lead">{selectable ? <Checkbox ariaLabel={`Selecionar ${String((r as any).name ?? k)}`} checked={isSel} onChange={() => toggle(k)} /> : null}</span>
                  <div className="tou-cardlist__main">
                    <div className="tou-cardlist__title">{cell(titleCol, r)}</div>
                    <dl className="tou-cardlist__rows">
                      {columns.filter((c) => c.mobile === 'row').map((c) => (
                        <React.Fragment key={c.key}><dt>{c.header}</dt><dd>{cell(c, r)}</dd></React.Fragment>
                      ))}
                    </dl>
                    {columns.filter((c) => c.mobile === 'tags').map((c) => <div key={c.key} className="tou-cardlist__tags">{cell(c, r)}</div>)}
                  </div>
                  <span>{rowActions ? rowActions(r) : null}</span>
                </li>
              );
            })}
          </ul>
        )}
        {pagination ? <TablePagination {...pagination} compact /> : null}
      </div>
    );
  }

  return (
    <div ref={wrap} className={cx('tou-table-wrap', className)}>
      {bulk}
      <div className="tou-table-scroll">
        <table className={cx('tou-table', density === 'dense' && 'tou-table--dense')} aria-busy={loading || undefined}>
          <caption className="tou-sr">{caption}</caption>
          <thead>
            <tr>
              {renderDetail ? <th className="tou-col-expand"><span className="tou-sr">Expandir</span></th> : null}
              {selectable ? (
                <th className="tou-col-check">
                  <Checkbox ariaLabel={allSel ? 'Desmarcar todos desta página' : 'Selecionar todos desta página'} checked={allSel} indeterminate={someSel} onChange={toggleAll} disabled={loading || !rows.length} />
                </th>
              ) : null}
              {columns.map((c) => {
                const active = sort?.key === c.key;
                return (
                  <th key={c.key} style={{ width: c.width }} className={cx(c.numeric && 'tou-col-num')} aria-sort={c.sortable ? (active ? (sort!.dir === 'asc' ? 'ascending' : 'descending') : 'none') : undefined}>
                    {c.sortable ? (
                      <button type="button" className="tou-table__sort" onClick={() => sortBy(c)}>
                        {c.header}
                        <Icon name={active ? (sort!.dir === 'asc' ? 'arrow-up' : 'arrow-down') : 'chevrons-up-down'} size={14} />
                      </button>
                    ) : c.header}
                  </th>
                );
              })}
              {rowActions ? <th className="tou-col-actions"><span className="tou-sr">Ações</span></th> : null}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: Math.min(pagination?.pageSize ?? 5, 5) }).map((_, i) => (
                <tr key={i}>
                  {renderDetail ? <td className="tou-col-expand" /> : null}
                  {selectable ? <td className="tou-col-check"><Skeleton variant="block" width={16} height={16} /></td> : null}
                  {columns.map((c, j) => (
                    <td key={c.key}>
                      {j === 0 ? <span className="tou-cell-person"><Skeleton variant="circle" width={32} /><span style={{ flex: 1 }}><Skeleton variant="text" width={`${60 + ((i * 13) % 30)}%`} /></span></span> : <Skeleton variant="text" width={`${40 + ((i * 7 + j * 11) % 45)}%`} />}
                    </td>
                  ))}
                  {rowActions ? <td /> : null}
                </tr>
              ))
            ) : !rows.length ? (
              <tr className="tou-table__empty"><td colSpan={colCount}>{empty}</td></tr>
            ) : (
              rows.map((r) => {
                const k = rowKey(r);
                const isSel = selected.includes(k);
                const isOpen = expanded.includes(k);
                return (
                  <React.Fragment key={k}>
                    <tr className={cx(isSel && 'is-selected', hoverRow === k && 'is-hover')} aria-selected={selectable ? isSel : undefined}>
                      {renderDetail ? (
                        <td className="tou-col-expand">
                          <button type="button" className="tou-table__expand" aria-expanded={isOpen} aria-controls={`det-${k}`} aria-label={isOpen ? 'Recolher detalhes' : 'Ver detalhes'} onClick={() => onExpandedChange?.(isOpen ? expanded.filter((x) => x !== k) : [...expanded, k])}>
                            <Icon name="chevron-right" size={16} />
                          </button>
                        </td>
                      ) : null}
                      {selectable ? <td className="tou-col-check"><Checkbox ariaLabel={`Selecionar ${String((r as any).name ?? k)}`} checked={isSel} onChange={() => toggle(k)} /></td> : null}
                      {columns.map((c) => <td key={c.key} className={cx(c.numeric && 'tou-col-num')} style={c.align === 'right' ? { textAlign: 'right' } : undefined}>{cell(c, r)}</td>)}
                      {rowActions ? <td className="tou-col-actions">{rowActions(r)}</td> : null}
                    </tr>
                    {renderDetail && isOpen ? <tr className="tou-table__detail" id={`det-${k}`}><td colSpan={colCount}>{renderDetail(r)}</td></tr> : null}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {pagination && (rows.length || loading) ? <TablePagination {...pagination} /> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Barra de filtros                                                    */
/* ------------------------------------------------------------------ */

export interface FilterGroup {
  id: string;
  label: string;
  options: Option[];
}

export interface QuickFilter {
  id: string;
  label: string;
  count?: number;
}

export interface FilterBarProps {
  /** Valor da busca. */
  query: string;
  onQueryChange: (q: string) => void;
  searchLabel?: string;
  searchPlaceholder?: string;
  /** Grupos do popover de filtros. */
  groups: FilterGroup[];
  /** Filtros aplicados: { idDoGrupo: [valores] }. */
  value: Record<string, string[]>;
  onChange: (v: Record<string, string[]>) => void;
  quickFilters?: QuickFilter[];
  quickValue?: string[];
  onQuickChange?: (ids: string[]) => void;
  /** Ações extras à direita (ex.: alternar visualização). */
  end?: React.ReactNode;
  /** Abre o popover (documentação). */
  open?: boolean;
  /** Grupos abertos no popover (documentação). */
  openGroups?: string[];
  className?: string;
}

/** Busca + um botão "Filtros" que abre um popover com os grupos (rascunho até "Aplicar filtros") e, embaixo, os atalhos (filtros rápidos, aplicam ao clicar). Fora dele ficam só os chips do que está ativo. */
export function FilterBar({ query, onQueryChange, searchLabel = 'Buscar', searchPlaceholder = 'Buscar por nome, telefone ou e-mail', groups, value, onChange, quickFilters, quickValue = [], onQuickChange, end, open: openProp, openGroups, className }: FilterBarProps) {
  const id = useId('filtros');
  const [openState, setOpen] = React.useState(false);
  const open = openProp ?? openState;
  const [draft, setDraft] = React.useState<Record<string, string[]>>(value);
  const [expandedG, setExpandedG] = React.useState<string[]>(openGroups ?? []);
  const wrap = React.useRef<HTMLDivElement>(null);
  const btn = React.useRef<HTMLButtonElement>(null);
  useDismiss(open && openProp === undefined, () => setOpen(false), [wrap]);
  React.useEffect(() => { if (open) setDraft(value); }, [open]);
  const total = Object.values(value).reduce((n, v) => n + v.length, 0) + quickValue.length;
  const draftTotal = Object.values(draft).reduce((n, v) => n + v.length, 0);
  const active: { g: FilterGroup; o: Option }[] = [];
  groups.forEach((g) => (value[g.id] || []).forEach((v) => { const o = g.options.find((x) => x.value === v); if (o) active.push({ g, o }); }));
  const activeQuick = (quickFilters || []).filter((q) => quickValue.includes(q.id));
  const activeCount = active.length + activeQuick.length;
  const toggleDraft = (g: string, v: string) => setDraft((d) => ({ ...d, [g]: (d[g] || []).includes(v) ? d[g].filter((x) => x !== v) : [...(d[g] || []), v] }));
  // Atalhos não passam pelo rascunho: aplicam na hora, e o popover continua aberto para combinar outros.
  const toggleQuick = (q: string) => onQuickChange?.(quickValue.includes(q) ? quickValue.filter((x) => x !== q) : [...quickValue, q]);
  const close = () => { setOpen(false); btn.current?.focus(); };
  return (
    <div className={cx('tou-filterbar', className)} role="search" aria-label="Busca e filtros">
      <div className="tou-filterbar__row">
        <div className="tou-filterbar__search">
          <TextField label={searchLabel} className="tou-sr-label" icon="search" placeholder={searchPlaceholder} value={query} onChange={(e) => onQueryChange(e.target.value)} onClear={() => onQueryChange('')} />
        </div>
        <div className="tou-anchor" ref={wrap}>
          <Button ref={btn as any} variant="secondary" iconStart="list-filter" aria-haspopup="dialog" aria-expanded={open} aria-controls={`${id}-pop`} onClick={() => setOpen(!open)}>
            Filtros{total ? <Badge tone="primary" solid count className="tou-badge--ring">{total}</Badge> : null}
          </Button>
          {open ? (
            <div className="tou-popover tou-filter-pop" id={`${id}-pop`} role="dialog" aria-label="Filtros" style={{ left: 'auto', right: 0, maxHeight: 'none' }}>
              <div className="tou-filter-pop__head">
                <span className="tou-filter-pop__title">Filtros <span className="tou-filter-pop__count">({groups.length})</span></span>
                <Button variant="tertiary" size="sm" disabled={!draftTotal && !quickValue.length} onClick={() => { setDraft({}); if (quickValue.length) onQuickChange?.([]); }}>Limpar tudo</Button>
              </div>
              <div className="tou-filter-pop__groups">
                {groups.map((g) => {
                  const isOpen = expandedG.includes(g.id);
                  const n = (draft[g.id] || []).length;
                  return (
                    <div key={g.id} className="tou-filter-pop__group">
                      <button type="button" className="tou-filter-pop__toggle" aria-expanded={isOpen} aria-controls={`${id}-${g.id}`} onClick={() => setExpandedG(isOpen ? expandedG.filter((x) => x !== g.id) : [...expandedG, g.id])}>
                        <span>{g.label}</span>
                        {n ? <Badge tone="primary" count>{n}</Badge> : null}
                        <Icon name="chevron-down" size={16} />
                      </button>
                      {isOpen ? (
                        <div className="tou-filter-pop__options" id={`${id}-${g.id}`} role="group" aria-label={g.label}>
                          {g.options.map((o) => <Checkbox key={o.value} label={o.label} description={o.meta} checked={(draft[g.id] || []).includes(o.value)} disabled={o.disabled} onChange={() => toggleDraft(g.id, o.value)} />)}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
              {quickFilters?.length ? (
                <div className="tou-filter-pop__quick" role="group" aria-labelledby={`${id}-quick`} aria-describedby={`${id}-quick-hint`}>
                  <span className="tou-filter-pop__quick-head"><span className="tou-filter-pop__quick-title" id={`${id}-quick`}>Atalhos</span><span className="tou-filter-pop__quick-hint" id={`${id}-quick-hint`}>Aplicam ao clicar</span></span>
                  {quickFilters.map((q) => {
                    const on = quickValue.includes(q.id);
                    return (
                      <button key={q.id} type="button" className="tou-filter-pop__shortcut" aria-pressed={on} onClick={() => toggleQuick(q.id)}>
                        <span className="tou-filter-pop__shortcut-check" aria-hidden="true">{on ? <Icon name="check" size={14} /> : null}</span>
                        <span className="tou-filter-pop__shortcut-label">{q.label}</span>
                        {q.count !== undefined ? <span className="tou-filter-pop__shortcut-count">{q.count.toLocaleString('pt-BR')}</span> : null}
                      </button>
                    );
                  })}
                </div>
              ) : null}
              <div className="tou-filter-pop__foot">
                <Button variant="secondary" size="sm" onClick={close}>Cancelar</Button>
                <Button size="sm" onClick={() => { onChange(draft); close(); }}>Aplicar filtros</Button>
              </div>
            </div>
          ) : null}
        </div>
        {end}
      </div>
      {activeCount ? (
        <div className="tou-filterbar__active" aria-live="polite">
          <span className="tou-filterbar__active-label">{activeCount} {activeCount === 1 ? 'filtro ativo' : 'filtros ativos'}:</span>
          {activeQuick.map((q) => (
            <FilterChip key={'q' + q.id} field="Atalho" value={q.label} onRemove={() => onQuickChange?.(quickValue.filter((x) => x !== q.id))} />
          ))}
          {active.map(({ g, o }) => (
            <FilterChip key={g.id + o.value} field={g.label} value={o.label} onRemove={() => onChange({ ...value, [g.id]: value[g.id].filter((x) => x !== o.value) })} />
          ))}
          <Button variant="tertiary" size="sm" iconStart="funnel-x" onClick={() => { onChange({}); onQuickChange?.([]); }}>Limpar filtros</Button>
        </div>
      ) : null}
    </div>
  );
}
