import { cx, Icon, IconName, useId, useDismiss } from './core';
import { Tag } from './display';
import { IconButton } from './buttons';

/* ------------------------------------------------------------------ */
/* Moldura de campo                                                    */
/* ------------------------------------------------------------------ */

export interface FieldBaseProps {
  /** Rótulo sempre visível acima do campo. Obrigatório (o placeholder nunca faz papel de rótulo). */
  label: string;
  /** Mostra o asterisco e anuncia "obrigatório". */
  required?: boolean;
  /** Mostra "(opcional)" ao lado do rótulo. Use em formulários onde quase tudo é obrigatório. */
  optional?: boolean;
  /** Texto de ajuda abaixo do campo, ligado por aria-describedby. */
  help?: React.ReactNode;
  /** Mensagem de erro. Substitui a ajuda, pinta a borda e marca aria-invalid. Diga como corrigir. */
  error?: React.ReactNode;
  disabled?: boolean;
  /** sm = 32px (filtros e tabelas), md = 40px (formulários). */
  size?: 'sm' | 'md';
  className?: string;
  /** Classes extras no controle (documentação: is-hover, is-focus, is-open). */
  controlClassName?: string;
}

interface FieldFrameProps extends FieldBaseProps {
  id: string;
  counter?: React.ReactNode;
  children: React.ReactNode;
  labelAs?: 'label' | 'span';
}

export function FieldFrame({ id, label, required, optional, help, error, disabled, className, counter, labelAs = 'label', children }: FieldFrameProps) {
  const L: any = labelAs;
  return (
    <div className={cx('tou-field', disabled && 'is-disabled', className)}>
      <L className="tou-label" {...(labelAs === 'label' ? { htmlFor: id, id: `${id}-lbl` } : { id: `${id}-label` })}>
        {label}
        {required ? <><span className="tou-label__req" aria-hidden="true">*</span><span className="tou-sr"> (obrigatório)</span></> : null}
        {optional && !required ? <span className="tou-label__opt">(opcional)</span> : null}
      </L>
      {children}
      {error ? (
        <span className="tou-help tou-help--error" id={`${id}-msg`}>
          <Icon name="circle-alert" size={14} />
          <span>{error}</span>
          {counter ? <span className="tou-help__count">{counter}</span> : null}
        </span>
      ) : help || counter ? (
        <span className="tou-help" id={`${id}-msg`}>
          {help ? <span>{help}</span> : null}
          {counter ? <span className="tou-help__count">{counter}</span> : null}
        </span>
      ) : null}
    </div>
  );
}

function describedBy(id: string, p: { help?: any; error?: any }, counter?: any) {
  return p.error || p.help || counter ? `${id}-msg` : undefined;
}

/* ------------------------------------------------------------------ */
/* Input de texto                                                      */
/* ------------------------------------------------------------------ */

export interface TextFieldProps extends FieldBaseProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'className' | 'disabled' | 'required' | 'prefix'> {
  /** Ícone dentro do campo, à esquerda (ex.: "search", "mail"). */
  icon?: IconName;
  /** Texto fixo antes do valor ("R$", "+55"). */
  prefix?: React.ReactNode;
  /** Elemento antes do campo separado por divisória (ex.: seletor de país do telefone). */
  addonStart?: React.ReactNode;
  /** Texto fixo depois do valor ("%", "dias"). */
  suffix?: React.ReactNode;
  /** Mostra o botão "Limpar" quando há valor. */
  onClear?: () => void;
  /** Mostra o contador "12/80" com este limite. */
  maxLength?: number;
  readOnly?: boolean;
}

/** Campo de texto de uma linha, com rótulo, ajuda e erro. */
export function TextField(props: TextFieldProps) {
  const { label, required, optional, help, error, disabled, size = 'md', className, controlClassName, icon, prefix, suffix, addonStart, onClear, maxLength, readOnly, id: idProp, value, defaultValue, ...rest } = props;
  const auto = useId('campo');
  const id = idProp || auto;
  const len = String(value ?? defaultValue ?? '').length;
  const counter = maxLength ? `${len}/${maxLength}` : undefined;
  return (
    <FieldFrame id={id} label={label} required={required} optional={optional} help={help} error={error} disabled={disabled} className={className} counter={counter}>
      <div className={cx('tou-control', size === 'sm' && 'tou-control--sm', error && 'is-invalid', disabled && 'is-disabled', readOnly && 'is-readonly', controlClassName)}>
        {addonStart ? <span className="tou-control__addon tou-control__addon--start">{addonStart}</span> : null}
        {icon ? <span className="tou-control__icon"><Icon name={icon} /></span> : null}
        {prefix ? <span className="tou-control__addon">{prefix}</span> : null}
        <input
          id={id}
          className="tou-control__input"
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, props, counter)}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          {...rest}
        />
        {suffix ? <span className="tou-control__addon">{suffix}</span> : null}
        {onClear && len > 0 && !disabled ? (
          <button type="button" className="tou-control__clear" aria-label={`Limpar ${label.toLowerCase()}`} onClick={onClear}><Icon name="x" size={14} /></button>
        ) : null}
      </div>
    </FieldFrame>
  );
}

export interface TextareaProps extends FieldBaseProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'disabled' | 'required'> {
  maxLength?: number;
  rows?: number;
}

/** Texto de várias linhas (observações, mensagem de template). */
export function Textarea(props: TextareaProps) {
  const { label, required, optional, help, error, disabled, className, controlClassName, maxLength, id: idProp, value, defaultValue, rows = 4, ...rest } = props;
  const auto = useId('texto');
  const id = idProp || auto;
  const len = String(value ?? defaultValue ?? '').length;
  const counter = maxLength ? `${len}/${maxLength}` : undefined;
  return (
    <FieldFrame id={id} label={label} required={required} optional={optional} help={help} error={error} disabled={disabled} className={className} counter={counter}>
      <div className={cx('tou-control tou-control--multiline', error && 'is-invalid', disabled && 'is-disabled', controlClassName)}>
        <textarea id={id} className="tou-control__input" rows={rows} disabled={disabled} required={required} aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, props, counter)} maxLength={maxLength} value={value} defaultValue={defaultValue} {...rest} />
      </div>
    </FieldFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Listbox compartilhado                                               */
/* ------------------------------------------------------------------ */

export interface Option {
  value: string;
  label: string;
  /** Segunda linha (telefone, descrição). */
  meta?: string;
  icon?: IconName;
  disabled?: boolean;
  /** Agrupa opções sob um título. */
  group?: string;
}

function norm(s: string) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }

function highlight(label: string, q: string) {
  if (!q) return label;
  const i = norm(label).indexOf(norm(q));
  if (i < 0) return label;
  return <>{label.slice(0, i)}<mark>{label.slice(i, i + q.length)}</mark>{label.slice(i + q.length)}</>;
}

interface ListProps {
  id: string;
  options: Option[];
  selected: string[];
  active: number;
  multi?: boolean;
  query?: string;
  onPick: (o: Option) => void;
  onHover: (i: number) => void;
  labelledBy?: string;
  focusable?: boolean;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  listRef?: React.RefObject<HTMLUListElement>;
}

function Listbox({ id, options, selected, active, multi, query = '', onPick, onHover, labelledBy, focusable, onKeyDown, listRef }: ListProps) {
  let lastGroup: string | undefined;
  if (!options.length) {
    return (
      <div className="tou-listbox__empty" role="status">
        <Icon name="search-x" size={20} />
        <span>{query ? <>Nenhum resultado para “{query}”.</> : 'Nenhuma opção disponível.'}</span>
      </div>
    );
  }
  return (
    <ul
      id={id}
      ref={listRef}
      className="tou-listbox"
      role="listbox"
      aria-labelledby={labelledBy}
      aria-multiselectable={multi || undefined}
      tabIndex={focusable ? -1 : undefined}
      aria-activedescendant={active >= 0 ? `${id}-opt-${active}` : undefined}
      onKeyDown={onKeyDown}
    >
      {options.map((o, i) => {
        const sel = selected.includes(o.value);
        const head = o.group && o.group !== lastGroup ? (lastGroup = o.group) : null;
        return (
          <React.Fragment key={o.value}>
            {head ? <li className="tou-listbox__group" role="presentation">{head}</li> : null}
            <li
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={sel}
              aria-disabled={o.disabled || undefined}
              className={cx('tou-option', i === active && 'is-active')}
              onMouseEnter={() => onHover(i)}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => !o.disabled && onPick(o)}
            >
              {multi ? (
                <span className={cx('tou-check', sel && 'is-checked', o.disabled && 'is-disabled')} aria-hidden="true" style={{ padding: 0, minHeight: 0 }}>
                  <span className="tou-check__box" style={{ marginTop: 0 }}>{sel ? <Icon name="check" size={12} strokeWidth={3} /> : null}</span>
                </span>
              ) : o.icon ? <Icon name={o.icon} size={16} /> : null}
              <span className="tou-option__body">
                {highlight(o.label, query)}
                {o.meta ? <span className="tou-option__meta">{o.meta}</span> : null}
              </span>
              {!multi && sel ? <span className="tou-option__check"><Icon name="check" size={16} /></span> : null}
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
}

function useListNav(count: number, isDisabled: (i: number) => boolean) {
  const [active, setActive] = React.useState(-1);
  const move = (dir: number) => {
    if (!count) return;
    let i = active;
    for (let n = 0; n < count; n++) {
      i = (i + dir + count) % count;
      if (!isDisabled(i)) break;
    }
    setActive(i);
  };
  return { active, setActive, move };
}

/* ------------------------------------------------------------------ */
/* Select                                                              */
/* ------------------------------------------------------------------ */

export interface SelectProps extends FieldBaseProps {
  options: Option[];
  value?: string | null;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Abre a lista (controlado). Para documentação e testes. */
  open?: boolean;
  defaultOpen?: boolean;
}

/** Escolha de uma opção numa lista curta (até ~15). Para listas longas, use Combobox. */
export function Select(props: SelectProps) {
  const { label, required, optional, help, error, disabled, size = 'md', className, controlClassName, options, value, onChange, placeholder = 'Selecione', open: openProp, defaultOpen } = props;
  const id = useId('select');
  const [openState, setOpen] = React.useState(!!defaultOpen);
  const open = openProp ?? openState;
  const [inner, setInner] = React.useState<string | null>(value ?? null);
  const current = value !== undefined ? value : inner;
  const sel = options.find((o) => o.value === current);
  const nav = useListNav(options.length, (i) => !!options[i].disabled);
  const wrap = React.useRef<HTMLDivElement>(null);
  const btn = React.useRef<HTMLButtonElement>(null);
  const list = React.useRef<HTMLUListElement>(null);
  useDismiss(open && openProp === undefined, () => setOpen(false), [wrap]);
  React.useEffect(() => {
    if (!open) return;
    const si = options.findIndex((o) => o.value === current);
    if (openProp === undefined) { nav.setActive(Math.max(0, si)); setTimeout(() => list.current?.focus(), 0); }
    else nav.setActive(Math.min(options.length - 1, si + 1));
  }, [open]);
  const pick = (o: Option) => { setInner(o.value); onChange?.(o.value); setOpen(false); btn.current?.focus(); };
  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); nav.move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); nav.move(-1); }
    else if (e.key === 'Home') { e.preventDefault(); nav.setActive(0); }
    else if (e.key === 'End') { e.preventDefault(); nav.setActive(options.length - 1); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const o = options[nav.active]; if (o && !o.disabled) pick(o); }
    else if (e.key === 'Escape' || e.key === 'Tab') { setOpen(false); btn.current?.focus(); }
  };
  return (
    <FieldFrame id={id} label={label} required={required} optional={optional} help={help} error={error} disabled={disabled} className={className} labelAs="span">
      <div className="tou-anchor" ref={wrap}>
        <button
          ref={btn}
          type="button"
          id={id}
          className={cx('tou-control tou-select__trigger', size === 'sm' && 'tou-control--sm', error && 'is-invalid', disabled && 'is-disabled', open && 'is-open', controlClassName)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          aria-labelledby={`${id}-label ${id}`}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, props)}
          disabled={disabled}
          onClick={() => setOpen(!open)}
          onKeyDown={(e) => { if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); setOpen(true); } }}
        >
          <span className={cx('tou-select__value', !sel && 'is-placeholder')}>
            {sel?.icon ? <Icon name={sel.icon} /> : null}
            {sel ? sel.label : placeholder}
          </span>
          <span className="tou-select__chev"><Icon name="chevron-down" /></span>
        </button>
        {open ? (
          <div className="tou-popover">
            <Listbox id={`${id}-list`} listRef={list} focusable labelledBy={`${id}-label`} options={options} selected={current ? [current] : []} active={nav.active} onPick={pick} onHover={nav.setActive} onKeyDown={onListKey} />
          </div>
        ) : null}
      </div>
    </FieldFrame>
  );
}

/* ------------------------------------------------------------------ */
/* MultiSelect                                                         */
/* ------------------------------------------------------------------ */

export interface MultiSelectProps extends FieldBaseProps {
  options: Option[];
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  /** Quantos chips aparecem antes de virar "+N". */
  maxChips?: number;
  open?: boolean;
  defaultOpen?: boolean;
}

/** Várias escolhas, mostradas como etiquetas removíveis dentro do campo. */
export function MultiSelect(props: MultiSelectProps) {
  const { label, required, optional, help, error, disabled, className, controlClassName, options, value, onChange, placeholder = 'Selecione', maxChips = 3, open: openProp, defaultOpen } = props;
  const id = useId('multi');
  const [openState, setOpen] = React.useState(!!defaultOpen);
  const open = openProp ?? openState;
  const [inner, setInner] = React.useState<string[]>(value ?? []);
  const current = value ?? inner;
  const nav = useListNav(options.length, (i) => !!options[i].disabled);
  const wrap = React.useRef<HTMLDivElement>(null);
  const list = React.useRef<HTMLUListElement>(null);
  const trig = React.useRef<HTMLDivElement>(null);
  useDismiss(open && openProp === undefined, () => setOpen(false), [wrap]);
  React.useEffect(() => { if (!open) return; nav.setActive(openProp === undefined ? 0 : 1); if (openProp === undefined) setTimeout(() => list.current?.focus(), 0); }, [open]);
  const set = (v: string[]) => { setInner(v); onChange?.(v); };
  const toggle = (o: Option) => set(current.includes(o.value) ? current.filter((x) => x !== o.value) : [...current, o.value]);
  const chosen = options.filter((o) => current.includes(o.value));
  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); nav.move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); nav.move(-1); }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const o = options[nav.active]; if (o && !o.disabled) toggle(o); }
    else if (e.key === 'Escape' || e.key === 'Tab') { setOpen(false); trig.current?.focus(); }
  };
  return (
    <FieldFrame id={id} label={label} required={required} optional={optional} help={help} error={error} disabled={disabled} className={className} labelAs="span">
      <div className="tou-anchor" ref={wrap}>
        <div
          ref={trig}
          id={id}
          role="combobox"
          tabIndex={disabled ? -1 : 0}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${id}-list`}
          aria-labelledby={`${id}-label`}
          aria-disabled={disabled || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, props)}
          className={cx('tou-control tou-control--multi tou-select__trigger', error && 'is-invalid', disabled && 'is-disabled', open && 'is-open', controlClassName)}
          onClick={(e) => { if (!disabled && !(e.target as HTMLElement).closest('.tou-tag__remove')) setOpen(!open); }}
          onKeyDown={(e) => { if (!disabled && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setOpen(true); } }}
        >
          <span className="tou-multi__chips">
            {chosen.length ? (
              <>
                {chosen.slice(0, maxChips).map((o) => (
                  <Tag key={o.value} size="sm" tone="primary" disabled={disabled} onRemove={disabled ? undefined : () => toggle(o)}>{o.label}</Tag>
                ))}
                {chosen.length > maxChips ? <Tag size="sm" tone="neutral">+{chosen.length - maxChips}</Tag> : null}
              </>
            ) : (
              <span className="tou-select__value is-placeholder">{placeholder}</span>
            )}
          </span>
          <span className="tou-select__chev"><Icon name="chevron-down" /></span>
        </div>
        {open ? (
          <div className="tou-popover">
            <Listbox id={`${id}-list`} listRef={list} focusable multi labelledBy={`${id}-label`} options={options} selected={current} active={nav.active} onPick={toggle} onHover={nav.setActive} onKeyDown={onListKey} />
            <div className="tou-popover__foot">
              <span className="tou-help" aria-live="polite">{current.length} {current.length === 1 ? 'selecionada' : 'selecionadas'}</span>
              <button type="button" className="tou-link tou-link--standalone" style={{ border: 0, background: 'none', font: 'inherit', fontSize: 13 }} onClick={() => set([])} disabled={!current.length}>Limpar</button>
            </div>
          </div>
        ) : null}
      </div>
    </FieldFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Combobox com busca                                                  */
/* ------------------------------------------------------------------ */

export interface ComboboxProps extends FieldBaseProps {
  options: Option[];
  value?: string | null;
  onChange?: (value: string | null) => void;
  placeholder?: string;
  /** Texto digitado (controlado). */
  query?: string;
  open?: boolean;
  loading?: boolean;
}

/** Campo com busca para listas longas (contatos, atendentes, templates). */
export function Combobox(props: ComboboxProps) {
  const { label, required, optional, help, error, disabled, size = 'md', className, controlClassName, options, value, onChange, placeholder = 'Buscar…', query: queryProp, open: openProp, loading } = props;
  const id = useId('combo');
  const [q, setQ] = React.useState(queryProp ?? '');
  const query = queryProp ?? q;
  const [openState, setOpen] = React.useState(false);
  const open = openProp ?? openState;
  const [inner, setInner] = React.useState<string | null>(value ?? null);
  const current = value !== undefined ? value : inner;
  const filtered = options.filter((o) => norm(o.label + ' ' + (o.meta || '')).includes(norm(query)));
  const nav = useListNav(filtered.length, (i) => !!filtered[i].disabled);
  const wrap = React.useRef<HTMLDivElement>(null);
  useDismiss(open && openProp === undefined, () => setOpen(false), [wrap]);
  const pick = (o: Option) => { setInner(o.value); onChange?.(o.value); setQ(o.label); setOpen(false); };
  React.useEffect(() => { if (open && openProp !== undefined && query) nav.setActive(0); }, [open]);
  return (
    <FieldFrame id={id} label={label} required={required} optional={optional} help={help} error={error} disabled={disabled} className={className}>
      <div className="tou-anchor" ref={wrap}>
        <div className={cx('tou-control', size === 'sm' && 'tou-control--sm', error && 'is-invalid', disabled && 'is-disabled', open && 'is-open', controlClassName)}>
          <span className="tou-control__icon"><Icon name="search" /></span>
          <input
            id={id}
            className="tou-control__input"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={open}
            aria-controls={`${id}-pop`}
            aria-activedescendant={open && !loading && filtered.length && nav.active >= 0 ? `${id}-list-opt-${nav.active}` : undefined}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy(id, props)}
            placeholder={placeholder}
            value={query}
            disabled={disabled}
            autoComplete="off"
            onChange={(e) => { setQ(e.target.value); setOpen(true); nav.setActive(0); }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') { e.preventDefault(); setOpen(true); nav.move(1); }
              else if (e.key === 'ArrowUp') { e.preventDefault(); nav.move(-1); }
              else if (e.key === 'Enter') { const o = filtered[nav.active]; if (open && o && !o.disabled) { e.preventDefault(); pick(o); } }
              else if (e.key === 'Escape') { setOpen(false); }
            }}
          />
          {query && !disabled ? (
            <button type="button" className="tou-control__clear" aria-label="Limpar busca" onClick={() => { setQ(''); setInner(null); onChange?.(null); }}><Icon name="x" size={14} /></button>
          ) : null}
        </div>
        {!open ? <div id={`${id}-pop`} hidden /> : null}
        {open ? (
          <div className="tou-popover" id={`${id}-pop`}>
            {loading ? (
              <div className="tou-listbox__empty" role="status"><span className="tou-spinner"><svg viewBox="0 0 24 24" fill="none" strokeWidth="3"><circle className="tou-spinner__track" cx="12" cy="12" r="9" /><path className="tou-spinner__arc" d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" /></svg></span><span>Buscando contatos…</span></div>
            ) : (
              <Listbox id={`${id}-list`} labelledBy={`${id}-lbl`} options={filtered} selected={current ? [current] : []} active={nav.active} query={query} onPick={pick} onHover={nav.setActive} />
            )}
          </div>
        ) : null}
      </div>
    </FieldFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Checkbox, radio e switch                                            */
/* ------------------------------------------------------------------ */

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Texto ao lado. Sem texto visível (tabela), passe ariaLabel. */
  label?: React.ReactNode;
  description?: React.ReactNode;
  ariaLabel?: string;
  indeterminate?: boolean;
  invalid?: boolean;
  /** Classes de estado para documentação. */
  stateClassName?: string;
}

/** Caixa de seleção. Alvo de toque de 24px mesmo com a caixa de 16px. */
export function Checkbox({ label, description, ariaLabel, indeterminate, invalid, disabled, className, stateClassName, checked, ...rest }: CheckboxProps) {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = !!indeterminate; }, [indeterminate]);
  return (
    <label className={cx('tou-check', !label && 'tou-check--bare', (checked || indeterminate) && 'is-checked', disabled && 'is-disabled', invalid && 'is-invalid', stateClassName, className)}>
      <input ref={ref} type="checkbox" className="tou-check__input" disabled={disabled} checked={checked} aria-label={label ? undefined : ariaLabel} aria-invalid={invalid || undefined} {...rest} />
      <span className="tou-check__box" aria-hidden="true">
        {indeterminate ? <Icon name="minus" size={12} strokeWidth={3} /> : checked ? <Icon name="check" size={12} strokeWidth={3} /> : null}
      </span>
      {label ? <span className="tou-check__text"><span>{label}</span>{description ? <span className="tou-check__desc">{description}</span> : null}</span> : null}
    </label>
  );
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label: React.ReactNode;
  description?: React.ReactNode;
  invalid?: boolean;
  stateClassName?: string;
}

export function Radio({ label, description, invalid, disabled, className, stateClassName, checked, ...rest }: RadioProps) {
  return (
    <label className={cx('tou-check tou-check--radio', checked && 'is-checked', disabled && 'is-disabled', invalid && 'is-invalid', stateClassName, className)}>
      <input type="radio" className="tou-check__input" disabled={disabled} checked={checked} {...rest} />
      <span className="tou-check__box" aria-hidden="true" />
      <span className="tou-check__text"><span>{label}</span>{description ? <span className="tou-check__desc">{description}</span> : null}</span>
    </label>
  );
}

export interface ChoiceGroupProps {
  /** Pergunta do grupo (legend). */
  label: string;
  required?: boolean;
  help?: React.ReactNode;
  error?: React.ReactNode;
  /** Opções em linha em vez de coluna. */
  row?: boolean;
  children: React.ReactNode;
  className?: string;
}

/** Agrupa radios ou checkboxes sob uma pergunta (fieldset + legend). */
export function ChoiceGroup({ label, required, help, error, row, children, className }: ChoiceGroupProps) {
  const id = useId('grupo');
  return (
    <fieldset className={cx('tou-choices', className)} aria-describedby={error || help ? `${id}-msg` : undefined} aria-invalid={error ? true : undefined}>
      <legend className="tou-label">{label}{required ? <><span className="tou-label__req" aria-hidden="true">*</span><span className="tou-sr"> (obrigatório)</span></> : null}</legend>
      <div className={cx('tou-choices', row && 'tou-choices--row')}>{children}</div>
      {error ? <span className="tou-help tou-help--error" id={`${id}-msg`}><Icon name="circle-alert" size={14} /><span>{error}</span></span> : help ? <span className="tou-help" id={`${id}-msg`}>{help}</span> : null}
    </fieldset>
  );
}

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label: React.ReactNode;
  description?: React.ReactNode;
  /** Rótulo à esquerda e switch à direita, ocupando a linha (listas de configurações). */
  end?: boolean;
  stateClassName?: string;
}

/** Liga/desliga com efeito imediato. Se a mudança só vale ao salvar, use Checkbox. */
export function Switch({ label, description, end, disabled, checked, className, stateClassName, ...rest }: SwitchProps) {
  return (
    <label className={cx('tou-switch', end && 'tou-switch--end', checked && 'is-checked', disabled && 'is-disabled', stateClassName, className)}>
      <input type="checkbox" role="switch" className="tou-switch__input" disabled={disabled} checked={checked} {...rest} />
      <span className="tou-switch__track" aria-hidden="true"><span className="tou-switch__thumb"><Icon name="check" size={10} strokeWidth={3.5} /></span></span>
      <span className="tou-check__text"><span>{label}</span>{description ? <span className="tou-check__desc">{description}</span> : null}</span>
    </label>
  );
}

/* ------------------------------------------------------------------ */
/* Data, hora e intervalo                                              */
/* ------------------------------------------------------------------ */

const MONTHS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const DOW = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const DOW_FULL = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const same = (a?: Date | null, b?: Date | null) => !!a && !!b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const fmtDate = (d?: Date | null) => (d ? `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}` : '');

export interface CalendarProps {
  /** Mês exibido. */
  month: Date;
  /** Data selecionada (modo simples). */
  value?: Date | null;
  /** Intervalo selecionado (modo intervalo). */
  range?: { start?: Date | null; end?: Date | null };
  today?: Date;
  /** Datas indisponíveis. */
  isDisabled?: (d: Date) => boolean;
  onSelect?: (d: Date) => void;
  onMonthChange?: (d: Date) => void;
  /** Dia com foco de teclado (documentação). */
  focusDay?: number;
  footer?: React.ReactNode;
}

/** Calendário de um mês. Dia selecionado tem forma (círculo cheio), não só cor; hoje tem contorno. */
export function Calendar({ month, value, range, today = new Date(), isDisabled, onSelect, onMonthChange, focusDay, footer }: CalendarProps) {
  const y = month.getFullYear(), m = month.getMonth();
  const first = new Date(y, m, 1);
  const start = new Date(y, m, 1 - first.getDay());
  const days = Array.from({ length: 42 }, (_, i) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i));
  const rows = days[35].getMonth() !== m ? 35 : 42;
  const id = useId('cal');
  return (
    <div className="tou-cal">
      <div className="tou-cal__head">
        <IconButton icon="chevron-left" label="Mês anterior" size="sm" onClick={() => onMonthChange?.(new Date(y, m - 1, 1))} />
        <span className="tou-cal__title" id={`${id}-t`} aria-live="polite">{MONTHS[m][0].toUpperCase() + MONTHS[m].slice(1)} de {y}</span>
        <IconButton icon="chevron-right" label="Próximo mês" size="sm" onClick={() => onMonthChange?.(new Date(y, m + 1, 1))} />
      </div>
      <div className="tou-cal__grid" role="grid" aria-labelledby={`${id}-t`}>
        <div role="row" style={{ display: 'contents' }}>
          {DOW.map((d, i) => <span key={i} className="tou-cal__dow" role="columnheader" aria-label={DOW_FULL[i]}>{d}</span>)}
        </div>
        {Array.from({ length: rows / 7 }, (_, w) => (
          <div role="row" key={w} style={{ display: 'contents' }}>
        {days.slice(w * 7, w * 7 + 7).map((d, i) => {
          const outside = d.getMonth() !== m;
          const sel = same(d, value);
          const rs = range?.start, re = range?.end;
          const isStart = same(d, rs), isEnd = same(d, re);
          const inRange = rs && re && d > rs && d < re;
          const dis = isDisabled?.(d);
          return (
            <span key={i} role="gridcell" aria-selected={sel || isStart || isEnd || undefined} className={cx('tou-cal__cell', inRange && 'is-in-range', isStart && re && 'is-range-start', isEnd && rs && 'is-range-end')}>
              <button
                type="button"
                className={cx('tou-cal__day', outside && 'is-outside', same(d, today) && 'is-today', isStart && 'is-start', isEnd && 'is-end', focusDay === d.getDate() && !outside && 'is-focus')}
                aria-pressed={sel || isStart || isEnd || undefined}
                aria-current={same(d, today) ? 'date' : undefined}
                aria-label={`${d.getDate()} de ${MONTHS[d.getMonth()]}, ${DOW_FULL[d.getDay()]}${dis ? ', indisponível' : ''}`}
                disabled={dis}
                tabIndex={sel || (focusDay === d.getDate() && !outside) ? 0 : -1}
                onClick={() => onSelect?.(d)}
              >
                {d.getDate()}
              </button>
            </span>
          );
        })}
          </div>
        ))}
      </div>
      {footer ? <div className="tou-cal__foot">{footer}</div> : null}
    </div>
  );
}

export interface DateFieldProps extends FieldBaseProps {
  value?: Date | null;
  onChange?: (d: Date | null) => void;
  /** Modo intervalo ("de … até …"). */
  range?: { start?: Date | null; end?: Date | null };
  onRangeChange?: (r: { start?: Date | null; end?: Date | null }) => void;
  open?: boolean;
  isDisabled?: (d: Date) => boolean;
  today?: Date;
}

/** Data ou intervalo de datas, digitável (dd/mm/aaaa) e com calendário. */
export function DateField(props: DateFieldProps) {
  const { label, required, optional, help, error, disabled, size = 'md', className, controlClassName, value, onChange, range, onRangeChange, open: openProp, isDisabled, today } = props;
  const id = useId('data');
  const [openState, setOpen] = React.useState(false);
  const open = openProp ?? openState;
  const base = range?.start || value || today || new Date();
  const [month, setMonth] = React.useState(new Date(base.getFullYear(), base.getMonth(), 1));
  const wrap = React.useRef<HTMLDivElement>(null);
  useDismiss(open && openProp === undefined, () => setOpen(false), [wrap]);
  const text = range ? (range.start ? `${fmtDate(range.start)} – ${fmtDate(range.end) || '…'}` : '') : fmtDate(value);
  const select = (d: Date) => {
    if (range) {
      if (!range.start || range.end) onRangeChange?.({ start: d, end: null });
      else onRangeChange?.(d < range.start ? { start: d, end: range.start } : { start: range.start, end: d });
    } else { onChange?.(d); setOpen(false); }
  };
  return (
    <FieldFrame id={id} label={label} required={required} optional={optional} help={help ?? (range ? 'Escolha o início e o fim no calendário.' : 'Formato dd/mm/aaaa.')} error={error} disabled={disabled} className={className}>
      <div className="tou-anchor" ref={wrap}>
        <div className={cx('tou-control', size === 'sm' && 'tou-control--sm', error && 'is-invalid', disabled && 'is-disabled', open && 'is-open', controlClassName)}>
          <span className="tou-control__icon"><Icon name={range ? 'calendar-range' : 'calendar'} /></span>
          <input id={id} className="tou-control__input" placeholder={range ? 'dd/mm/aaaa – dd/mm/aaaa' : 'dd/mm/aaaa'} defaultValue={text} key={text} inputMode="numeric" disabled={disabled} aria-invalid={error ? true : undefined} aria-describedby={`${id}-msg`} aria-haspopup="dialog" />
          <IconButton icon="chevron-down" label={open ? 'Fechar calendário' : 'Abrir calendário'} size="sm" disabled={disabled} aria-expanded={open} onClick={() => setOpen(!open)} style={{ marginRight: -8, width: 28, height: 28 }} />
        </div>
        {open ? (
          <div className="tou-popover" role="dialog" aria-label={`Calendário: ${label}`} style={{ padding: 0, minWidth: 0, maxHeight: 'none' }}>
            <Calendar month={month} value={value} range={range} today={today} isDisabled={isDisabled} onSelect={select} onMonthChange={setMonth}
              footer={range ? <><span>{range.start && range.end ? `${Math.round((+range.end - +range.start) / 864e5) + 1} dias` : 'Selecione o fim'}</span><button type="button" className="tou-btn tou-btn--tertiary tou-btn--sm" onClick={() => onRangeChange?.({})}>Limpar</button></> : <><span>Hoje: {fmtDate(today || new Date())}</span><button type="button" className="tou-btn tou-btn--tertiary tou-btn--sm" onClick={() => select(today || new Date())}>Hoje</button></>} />
          </div>
        ) : null}
      </div>
    </FieldFrame>
  );
}

export interface TimeFieldProps extends FieldBaseProps {
  value?: string | null;
  onChange?: (v: string) => void;
  /** Intervalo entre horários em minutos (padrão 30). */
  step?: number;
  from?: string;
  to?: string;
  /** Horários indisponíveis ("09:30"). */
  unavailable?: string[];
  open?: boolean;
}

/** Hora em grade de horários (agenda). Indisponível vem riscado, não só apagado. */
export function TimeField(props: TimeFieldProps) {
  const { label, required, optional, help, error, disabled, size = 'md', className, controlClassName, value, onChange, step = 30, from = '08:00', to = '18:00', unavailable = [], open: openProp } = props;
  const id = useId('hora');
  const [openState, setOpen] = React.useState(false);
  const open = openProp ?? openState;
  const wrap = React.useRef<HTMLDivElement>(null);
  useDismiss(open && openProp === undefined, () => setOpen(false), [wrap]);
  const toMin = (s: string) => +s.slice(0, 2) * 60 + +s.slice(3, 5);
  const slots: string[] = [];
  for (let t = toMin(from); t <= toMin(to); t += step) slots.push(`${String(Math.floor(t / 60)).padStart(2, '0')}:${String(t % 60).padStart(2, '0')}`);
  return (
    <FieldFrame id={id} label={label} required={required} optional={optional} help={help} error={error} disabled={disabled} className={className}>
      <div className="tou-anchor" ref={wrap}>
        <div className={cx('tou-control', size === 'sm' && 'tou-control--sm', error && 'is-invalid', disabled && 'is-disabled', open && 'is-open', controlClassName)}>
          <span className="tou-control__icon"><Icon name="clock" /></span>
          <input id={id} className="tou-control__input" placeholder="hh:mm" defaultValue={value || ''} key={value || ''} inputMode="numeric" disabled={disabled} aria-describedby={describedBy(id, props)} aria-invalid={error ? true : undefined} onFocus={() => setOpen(true)} />
        </div>
        {open ? (
          <div className="tou-popover" role="listbox" aria-label={`Horários: ${label}`} style={{ padding: 0, minWidth: 0 }}>
            <div className="tou-times">
              {slots.map((s) => (
                <button key={s} type="button" role="option" className="tou-time" aria-selected={s === value} disabled={unavailable.includes(s)} aria-label={unavailable.includes(s) ? `${s}, indisponível` : s} onClick={() => { onChange?.(s); setOpen(false); }}>{s}</button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </FieldFrame>
  );
}
