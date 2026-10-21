import { ICONS } from './icon-data';

export function cx(...parts: Array<string | false | null | undefined | 0>): string {
  return parts.filter(Boolean).join(' ');
}

let _id = 0;
export function useId(prefix = 'tou'): string {
  const ref = React.useRef<string | null>(null);
  if (ref.current === null) ref.current = `${prefix}-${++_id}`;
  return ref.current;
}

export type IconName = keyof typeof ICONS | string;

export interface IconProps {
  /** Nome do ícone Lucide (ex.: "search", "user-plus"). */
  name: IconName;
  /** Tamanho em px (padrão 16). */
  size?: number;
  /** Espessura do traço (padrão 2). */
  strokeWidth?: number;
  /** Nome acessível. Sem ele o ícone é decorativo (aria-hidden). */
  label?: string;
  className?: string;
}

/** Ícone de traço da família Lucide, herdando a cor do texto (currentColor). */
export function Icon({ name, size = 16, strokeWidth = 2, label, className }: IconProps) {
  const nodes = (ICONS as any)[name] || [];
  return (
    <svg
      className={cx('tou-icon', className)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
      focusable="false"
    >
      {nodes.map(([tag, attrs]: [string, any], i: number) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Nome acessível (padrão "Carregando"). Use "" quando o texto ao lado já diz o que carrega. */
  label?: string;
  className?: string;
}

/** Indicador de carregamento na cor do texto em volta. Com "reduzir movimento", fica parado. */
export function Spinner({ size = 'md', label = 'Carregando', className }: SpinnerProps) {
  return (
    <span className={cx('tou-spinner', size !== 'md' && `tou-spinner--${size}`, className)} role={label ? 'status' : undefined} aria-label={label || undefined} aria-hidden={label ? undefined : true}>
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="3">
        <circle className="tou-spinner__track" cx="12" cy="12" r="9" />
        <path className="tou-spinner__arc" d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export interface SkeletonProps {
  variant?: 'text' | 'title' | 'circle' | 'block';
  width?: number | string;
  height?: number | string;
  className?: string;
}

/** Bloco de carregamento com brilho. O brilho para com "reduzir movimento". */
export function Skeleton({ variant = 'text', width, height, className }: SkeletonProps) {
  return (
    <span
      className={cx('tou-skel', variant !== 'block' && `tou-skel--${variant}`, className)}
      style={{ width, height: height ?? (variant === 'circle' ? width : undefined) }}
      aria-hidden="true"
    />
  );
}

/** Fecha popovers ao clicar fora ou apertar Esc. */
export function useDismiss(open: boolean, onClose: () => void, refs: Array<React.RefObject<HTMLElement>>) {
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (refs.some((r) => r.current && r.current.contains(e.target as Node))) return;
      onClose();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.stopPropagation(); onClose(); } };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);
}
