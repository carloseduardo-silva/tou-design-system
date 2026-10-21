import { cx, Icon, IconName } from './core';

export type Tone = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface BadgeProps {
  /** neutral, primary ou um dos quatro estados. */
  tone?: Tone;
  /** Sólido (mais peso) em vez de suave. */
  solid?: boolean;
  /** Ícone à esquerda — use em status para não depender só de cor. */
  icon?: IconName;
  /** Formato de contador (número centralizado, mono). */
  count?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Rótulo curto de status ou contagem. Não é clicável. */
export function Badge({ tone = 'neutral', solid, icon, count, className, children }: BadgeProps) {
  return (
    <span className={cx('tou-badge', `tou-badge--${tone}`, solid && 'tou-badge--solid', count && 'tou-badge--count', className)}>
      {icon ? <Icon name={icon} size={12} strokeWidth={2.5} /> : null}
      {children}
    </span>
  );
}

export interface StatusDotProps {
  tone?: Tone;
  /** O texto é obrigatório: o ponto sozinho não comunica. */
  children: React.ReactNode;
  className?: string;
}

/** Ponto colorido + texto, para presença e estado de conexão ("Online", "Desconectado"). */
export function StatusDot({ tone = 'neutral', children, className }: StatusDotProps) {
  return (
    <span className={cx('tou-status', `tou-status--${tone}`, className)}>
      <span className="tou-status__dot" aria-hidden="true" />
      {children}
    </span>
  );
}

export interface TagProps {
  tone?: Tone;
  solid?: boolean;
  size?: 'sm' | 'md';
  icon?: IconName;
  /** Quando presente, mostra o botão de remover (com nome acessível "Remover etiqueta …"). */
  onRemove?: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

/** Etiqueta aplicada a contatos e conversas ("Lead quente", "Disparo #3706"). Pode ser removível. */
export function Tag({ tone = 'neutral', solid, size = 'md', icon, onRemove, disabled, className, children }: TagProps) {
  const text = typeof children === 'string' ? children : '';
  return (
    <span className={cx('tou-tag', `tou-tag--${tone}`, solid && 'tou-tag--solid', size === 'sm' && 'tou-tag--sm', disabled && 'is-disabled', className)}>
      {icon ? <Icon name={icon} size={12} strokeWidth={2.5} /> : null}
      <span className="tou-tag__label">{children}</span>
      {onRemove && !disabled ? (
        <button type="button" className="tou-tag__remove" aria-label={`Remover etiqueta ${text}`.trim()} onClick={onRemove}>
          <Icon name="x" size={12} strokeWidth={2.5} />
        </button>
      ) : null}
    </span>
  );
}

export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Chip de alternância (filtro rápido): aria-pressed. */
  selected?: boolean;
  icon?: IconName;
  /** Contagem ao lado do rótulo. */
  count?: number;
  children: React.ReactNode;
}

/** Chip clicável: filtros rápidos e escolhas. Selecionado = fundo primário suave + ícone de check. */
export function Chip({ selected, icon, count, className, children, type, ...rest }: ChipProps) {
  return (
    <button type={type || 'button'} className={cx('tou-chip', className)} aria-pressed={selected ?? undefined} {...rest}>
      {selected ? <Icon name="check" size={16} /> : icon ? <Icon name={icon} size={16} /> : null}
      <span>{children}</span>
      {count != null ? <span className="tou-chip__count">{count}</span> : null}
    </button>
  );
}

export interface FilterChipProps {
  /** Nome do filtro ("Etiqueta"). */
  field: string;
  /** Valor aplicado ("Lead quente"). */
  value: React.ReactNode;
  onRemove: () => void;
  className?: string;
}

/** Filtro ativo: "Etiqueta: Lead quente ×". */
export function FilterChip({ field, value, onRemove, className }: FilterChipProps) {
  return (
    <span className={cx('tou-chip tou-chip--filter', className)}>
      <span className="tou-chip__key">{field}:</span>
      <span>{value}</span>
      <button type="button" className="tou-chip__remove" aria-label={`Remover filtro ${field}: ${typeof value === 'string' ? value : ''}`} onClick={onRemove}>
        <Icon name="x" size={14} />
      </button>
    </span>
  );
}

export interface AvatarProps {
  /** Nome completo: gera as iniciais e o texto alternativo. */
  name?: string;
  src?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  status?: 'online' | 'away' | 'busy' | 'offline';
  className?: string;
}

const STATUS_PT: Record<string, string> = { online: 'online', away: 'ausente', busy: 'ocupado', offline: 'offline' };

export function initials(name = ''): string {
  const parts = name.trim().split(/\s+/).filter((p) => /[A-Za-zÀ-ÿ]/.test(p[0] || ''));
  if (!parts.length) return '';
  return ((parts[0][0] || '') + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}

/** Foto, iniciais ou ícone. Sem nome nem foto, mostra o ícone de pessoa. */
export function Avatar({ name, src, size = 'md', status, className }: AvatarProps) {
  const ini = initials(name);
  const mode = src ? 'img' : ini ? 'ini' : 'icon';
  const label = [name || 'Contato sem nome', status ? STATUS_PT[status] : ''].filter(Boolean).join(', ');
  return (
    <span className={cx('tou-avatar', size !== 'md' && `tou-avatar--${size}`, mode === 'icon' && 'tou-avatar--icon', className)} role="img" aria-label={label}>
      {mode === 'img' ? <img src={src} alt="" /> : mode === 'ini' ? <span aria-hidden="true">{ini}</span> : <Icon name="user" />}
      {status ? <span className={cx('tou-avatar__status', `tou-avatar__status--${status}`)} aria-hidden="true" /> : null}
    </span>
  );
}

export interface EmptyStateProps {
  icon?: IconName;
  /** primary (padrão), neutral (nada a fazer) ou danger (erro ao carregar). */
  tone?: 'primary' | 'neutral' | 'danger';
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Botões de ação. Use no máximo dois: um primário e um secundário. */
  actions?: React.ReactNode;
  /** Versão em linha, para dentro de tabela, lista ou popover. */
  compact?: boolean;
  className?: string;
}

/** Estado vazio: o mesmo para a mesma situação em todo o produto. */
export function EmptyState({ icon = 'inbox', tone = 'primary', title, description, actions, compact, className }: EmptyStateProps) {
  return (
    <div className={cx('tou-empty', compact && 'tou-empty--compact', className)} role="status">
      <span className={cx('tou-empty__art', tone !== 'primary' && `tou-empty__art--${tone}`)} aria-hidden="true"><Icon name={icon} size={compact ? 20 : 24} /></span>
      <div style={compact ? { display: 'flex', flexDirection: 'column' } : { display: 'contents' }}>
        <p className="tou-empty__title">{title}</p>
        {description ? <p className="tou-empty__desc">{description}</p> : null}
      </div>
      {actions ? <div className="tou-empty__actions">{actions}</div> : null}
    </div>
  );
}
