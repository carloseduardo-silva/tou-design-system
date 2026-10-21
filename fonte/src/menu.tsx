import { cx, Icon, IconName, useId, useDismiss } from './core';

export interface MenuItem {
  id: string;
  label: string;
  icon?: IconName;
  /** Ação destrutiva (texto e ícone em danger). Peça confirmação depois. */
  danger?: boolean;
  disabled?: boolean;
  /** Texto à direita (atalho ou contexto, ex.: "Ctrl+E"). */
  hint?: string;
  /** Linha divisória antes deste item. */
  separator?: boolean;
  /** Título de grupo antes deste item. */
  group?: string;
}

export interface MenuProps {
  /** Elemento que abre o menu: normalmente um IconButton "Mais ações" ou um Button com chevron. Recebe ref, aria-haspopup e aria-expanded. */
  trigger: React.ReactElement;
  items: MenuItem[];
  onSelect: (id: string) => void;
  /** Alinha o menu pela direita do gatilho (padrão em ações de linha). */
  align?: 'start' | 'end';
  /** Rótulo acessível do menu (padrão: o nome do gatilho). */
  label?: string;
  /** Força aberto (documentação). */
  open?: boolean;
  /** Item ativo forçado (documentação). */
  activeId?: string;
  className?: string;
}

/** Menu suspenso de ações (role="menu"): setas, Home/End e letras navegam; Enter escolhe; Esc fecha e devolve o foco. */
export function Menu({ trigger, items, onSelect, align = 'start', label, open: openProp, activeId, className }: MenuProps) {
  const id = useId('menu');
  const [openState, setOpen] = React.useState(false);
  const open = openProp ?? openState;
  const enabled = items.filter((i) => !i.disabled);
  const [active, setActive] = React.useState<string | null>(activeId ?? null);
  const wrap = React.useRef<HTMLSpanElement>(null);
  const trig = React.useRef<HTMLElement>(null);
  const refs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const close = (focus = true) => { setOpen(false); setActive(null); if (focus) trig.current?.focus(); };
  useDismiss(open && openProp === undefined, () => close(false), [wrap]);
  React.useEffect(() => { if (open && openProp === undefined && active) refs.current[active]?.focus(); }, [open, active]);
  const openWith = (which: 'first' | 'last') => { setOpen(true); setActive((which === 'first' ? enabled[0] : enabled[enabled.length - 1])?.id ?? null); };
  const move = (d: number) => {
    const i = enabled.findIndex((x) => x.id === active);
    setActive(enabled[(i + d + enabled.length) % enabled.length].id);
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Home') { e.preventDefault(); setActive(enabled[0].id); }
    else if (e.key === 'End') { e.preventDefault(); setActive(enabled[enabled.length - 1].id); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') { close(false); }
    else if (e.key.length === 1) {
      const k = e.key.toLowerCase();
      const i = enabled.findIndex((x) => x.id === active);
      const next = [...enabled.slice(i + 1), ...enabled.slice(0, i + 1)].find((x) => x.label.toLowerCase().startsWith(k));
      if (next) setActive(next.id);
    }
  };
  const t = React.cloneElement(trigger, {
    ref: trig,
    'aria-haspopup': 'menu',
    'aria-expanded': open,
    'aria-controls': open ? id : undefined,
    onClick: () => (open ? close() : openWith('first')),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); openWith('first'); }
      if (e.key === 'ArrowUp') { e.preventDefault(); openWith('last'); }
    },
  });
  const trigLabel = trigger.props.label || trigger.props['aria-label'] || (typeof trigger.props.children === 'string' ? trigger.props.children : 'Ações');
  return (
    <span className={cx('tou-anchor tou-menu-anchor', className)} ref={wrap}>
      {t}
      {open ? (
        <div className={cx('tou-popover tou-menu', align === 'end' && 'tou-menu--end')} id={id} role="menu" aria-label={label || trigLabel} onKeyDown={onKey}>
          {items.map((it) => (
            <React.Fragment key={it.id}>
              {it.separator ? <div className="tou-listbox__sep" role="separator" /> : null}
              {it.group ? <div className="tou-listbox__group" role="presentation">{it.group}</div> : null}
              <button
                ref={(el) => { refs.current[it.id] = el; }}
                type="button"
                role="menuitem"
                className={cx('tou-menu__item', it.danger && 'tou-menu__item--danger', active === it.id && 'is-active')}
                tabIndex={active === it.id ? 0 : -1}
                disabled={it.disabled}
                aria-disabled={it.disabled || undefined}
                onMouseEnter={() => !it.disabled && setActive(it.id)}
                onClick={() => { onSelect(it.id); close(); }}
              >
                {it.icon ? <Icon name={it.icon} size={16} /> : <span style={{ width: 16 }} aria-hidden="true" />}
                <span className="tou-menu__label">{it.label}</span>
                {it.hint ? <span className="tou-menu__hint">{it.hint}</span> : null}
              </button>
            </React.Fragment>
          ))}
        </div>
      ) : null}
    </span>
  );
}
