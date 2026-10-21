import { cx, Icon, Spinner, IconName } from './core';
import { Badge } from './display';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success';
export type ControlSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** primary: ação principal (uma por área). secondary: contorno. tertiary: ghost. danger: destrutiva. success: confirmação positiva. */
  variant?: ButtonVariant;
  /** sm = 32px (texto 12), md = 40px (texto 14), lg = 48px (texto 14, ícone 20). */
  size?: ControlSize;
  /** Formato pílula: CTA de marketing. No produto, use o formato padrão. */
  pill?: boolean;
  /** Ocupa toda a largura do container. */
  block?: boolean;
  /** Ícone antes do texto. */
  iconStart?: IconName;
  /** Ícone depois do texto. */
  iconEnd?: IconName;
  /** Mostra o spinner no lugar do ícone inicial e bloqueia o clique. Troque o texto para o gerúndio ("Salvando…"). */
  loading?: boolean;
  /** Renderiza como <a> quando há href. */
  href?: string;
  children: React.ReactNode;
}

/** Botão de ação com texto. Cinco variantes, três tamanhos, formato padrão ou pílula. */
export const Button = React.forwardRef(function Button({ variant = 'primary', size = 'md', pill, block, iconStart, iconEnd, loading, disabled, href, className, children, type, ...rest }: ButtonProps, ref: any) {
  const iconSize = size === 'lg' ? 20 : 16;
  const cls = cx('tou-btn', `tou-btn--${variant}`, size !== 'md' && `tou-btn--${size}`, pill && 'tou-btn--pill', block && 'tou-btn--block', loading && 'is-loading', className);
  const inner = (
    <>
      {loading ? <Spinner size={size === 'lg' ? 'md' : 'md'} label="" /> : iconStart ? <Icon name={iconStart} size={iconSize} /> : null}
      <span>{children}</span>
      {iconEnd && !loading ? <Icon name={iconEnd} size={iconSize} /> : null}
    </>
  );
  if (href && !disabled) {
    return <a ref={ref} className={cls} href={href} aria-busy={loading || undefined} {...(rest as any)}>{inner}</a>;
  }
  return (
    <button
      ref={ref}
      type={type || 'button'}
      className={cls}
      disabled={disabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
      {...rest}
      {...(loading ? { onClick: (e: any) => e.preventDefault() } : {})}
    >
      {inner}
    </button>
  );
}) as (props: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) => React.ReactElement;

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Ícone Lucide. */
  icon: IconName;
  /** Nome acessível — obrigatório. Vira aria-label. O tooltip, se houver, não substitui este nome. */
  label: string;
  /** default: contorno neutro. tonal: fundo primário suave. ghost: sem fundo (barras de ferramentas, tabelas). */
  variant?: 'default' | 'tonal' | 'ghost';
  /** sm = 32px (ícone 16), md = 40px (ícone 20). */
  size?: 'sm' | 'md';
  /** Contador sobre o botão (ex.: notificações). */
  badge?: number;
  /** Para botões de alternância (ex.: favoritar, fixar). */
  pressed?: boolean;
}

/** Botão só com ícone. Sempre com nome acessível. */
export const IconButton = React.forwardRef(function IconButton({ icon, label, variant = 'ghost', size = 'md', badge, pressed, className, type, ...rest }: IconButtonProps, ref: any) {
  return (
    <button
      ref={ref}
      type={type || 'button'}
      className={cx('tou-iconbtn', `tou-iconbtn--${variant}`, size === 'sm' && 'tou-iconbtn--sm', className)}
      aria-label={badge ? `${label} (${badge})` : label}
      aria-pressed={pressed}
      title={rest.title}
      {...rest}
    >
      <Icon name={icon} size={size === 'sm' ? 16 : 20} />
      {badge ? <Badge tone="primary" solid count className="tou-iconbtn__badge tou-badge--ring">{badge > 99 ? '99+' : badge}</Badge> : null}
    </button>
  );
}) as (props: IconButtonProps & { ref?: React.Ref<HTMLButtonElement> }) => React.ReactElement;
