import { cx, Icon, IconName, useId } from './core';
import { Button, IconButton } from './buttons';

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/** Prende o foco dentro do diálogo, fecha com Esc e devolve o foco ao fechar. */
function useDialog(open: boolean, ref: React.RefObject<HTMLElement>, onClose?: () => void, active = true) {
  React.useEffect(() => {
    if (!open || !active) return;
    const prev = document.activeElement as HTMLElement | null;
    const el = ref.current;
    const first = el?.querySelector<HTMLElement>('[data-autofocus]') || el?.querySelector<HTMLElement>('.tou-modal__body ' + FOCUSABLE + ', .tou-drawer__body ' + FOCUSABLE) || el;
    setTimeout(() => first?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose?.(); return; }
      if (e.key !== 'Tab' || !el) return;
      const items = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((n) => n.offsetParent !== null);
      if (!items.length) return;
      const a = items[0], b = items[items.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); b.focus(); }
      else if (!e.shiftKey && document.activeElement === b) { e.preventDefault(); a.focus(); }
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = overflow; prev?.focus?.(); };
  }, [open, active]);
}

function portal(node: React.ReactNode, inline?: boolean) {
  return inline ? node : ReactDOM.createPortal(node, document.body);
}

export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** sm 480 · md 640 · lg 880 · xl 1120. No celular (< 600px) vira tela cheia. */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
  /** Botões do rodapé, da esquerda para a direita: secundário, depois primário. */
  footer?: React.ReactNode;
  /** Texto à esquerda do rodapé ("* campos obrigatórios"). */
  footerStart?: React.ReactNode;
  /** Fecha ao clicar no véu (padrão true; false em formulários longos). */
  closeOnOverlay?: boolean;
  /** Renderiza no lugar, sem portal nem posição fixa (documentação). */
  inline?: boolean;
  /** Cobre só o container posicionado mais próximo (protótipos, painéis), mantendo foco preso e Esc. */
  contained?: boolean;
  /** Força a versão de tela cheia (documentação do mobile). */
  fullScreen?: boolean;
  className?: string;
}

/** Diálogo modal: título, corpo rolável e rodapé de ações. Foco preso, Esc fecha, foco volta ao fechar. */
export function Modal({ open, onClose, title, subtitle, size = 'md', children, footer, footerStart, closeOnOverlay = true, inline, contained, fullScreen, className }: ModalProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const id = useId('modal');
  useDialog(open, ref, onClose, !inline);
  if (!open) return null;
  return portal(
    <div className={cx('tou-overlay', inline && 'tou-overlay--inline', contained && 'tou-overlay--contained')} onMouseDown={(e) => { if (closeOnOverlay && e.target === e.currentTarget) onClose?.(); }} style={fullScreen ? { padding: 0, alignItems: 'stretch' } : undefined}>
      <div ref={ref} className={cx('tou-modal', size !== 'md' && `tou-modal--${size}`, fullScreen && 'tou-modal--full', className)} role="dialog" aria-modal="true" aria-labelledby={`${id}-t`} aria-describedby={subtitle ? `${id}-s` : undefined} tabIndex={-1}>
        <div className="tou-modal__head">
          <div className="tou-modal__titles">
            <h2 className="tou-modal__title" id={`${id}-t`}>{title}</h2>
            {subtitle ? <p className="tou-modal__subtitle" id={`${id}-s`}>{subtitle}</p> : null}
          </div>
        </div>
        <IconButton className="tou-modal__close" icon="x" label="Fechar" size="sm" onClick={onClose} />
        <div className="tou-modal__body">{children}</div>
        {footer ? <div className="tou-modal__foot">{footerStart ? <span className="tou-modal__foot-start">{footerStart}</span> : null}{footer}</div> : null}
      </div>
    </div>,
    inline || contained,
  );
}

export interface ConfirmDialogProps {
  open: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Verbo da ação ("Excluir 3 contatos"). Nunca "Sim"/"OK". */
  confirmLabel: string;
  cancelLabel?: string;
  /** danger: ação destrutiva (botão vermelho, ícone de alerta). */
  tone?: 'danger' | 'warning' | 'primary';
  loading?: boolean;
  inline?: boolean;
  contained?: boolean;
}

/** Confirmação curta antes de uma ação. A variante destrutiva usa o botão de perigo. */
export function ConfirmDialog({ open, onClose, onConfirm, title, description, confirmLabel, cancelLabel = 'Cancelar', tone = 'danger', loading, inline, contained }: ConfirmDialogProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const id = useId('confirm');
  useDialog(open, ref, onClose, !inline);
  if (!open) return null;
  const icon: IconName = tone === 'primary' ? 'info' : 'triangle-alert';
  return portal(
    <div className={cx('tou-overlay', inline && 'tou-overlay--inline', contained && 'tou-overlay--contained')}>
      <div ref={ref} className="tou-modal tou-modal--sm tou-modal--confirm" role="alertdialog" aria-modal="true" aria-labelledby={`${id}-t`} aria-describedby={description ? `${id}-d` : undefined} tabIndex={-1}>
        <div className="tou-modal__head">
          <span className={cx('tou-modal__icon', tone !== 'danger' && `tou-modal__icon--${tone}`)} aria-hidden="true"><Icon name={icon} size={20} /></span>
          <div className="tou-modal__titles" style={{ paddingTop: 6 }}>
            <h2 className="tou-modal__title" id={`${id}-t`}>{title}</h2>
          </div>
        </div>
        <IconButton className="tou-modal__close" icon="x" label="Fechar" size="sm" onClick={onClose} />
        {description ? <div className="tou-modal__body" id={`${id}-d`}>{description}</div> : null}
        <div className="tou-modal__foot">
          <Button variant="secondary" onClick={onClose} data-autofocus="">{cancelLabel}</Button>
          <Button variant={tone === 'danger' ? 'danger' : 'primary'} loading={loading} onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>,
    inline || contained,
  );
}

export interface DrawerProps {
  open: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** md 400 · lg 560. No celular ocupa a largura toda. */
  size?: 'md' | 'lg';
  side?: 'right' | 'left';
  children?: React.ReactNode;
  footer?: React.ReactNode;
  inline?: boolean;
  contained?: boolean;
  /** Sem cabeçalho próprio (quando o conteúdo já tem um, como o menu lateral no celular). */
  bare?: boolean;
}

/** Painel lateral para detalhe ou edição sem sair da lista (ex.: dados do contato). */
export function Drawer({ open, onClose, title, subtitle, size = 'md', side = 'right', children, footer, inline, contained, bare }: DrawerProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const id = useId('drawer');
  useDialog(open, ref, onClose, !inline);
  if (!open) return null;
  return portal(
    <div className={cx('tou-overlay tou-overlay--drawer', inline && 'tou-overlay--inline', contained && 'tou-overlay--contained')} style={side === 'left' ? { justifyContent: 'flex-start' } : undefined} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose?.(); }}>
      <aside ref={ref} className={cx('tou-drawer', size === 'lg' && 'tou-drawer--lg', side === 'left' && 'tou-drawer--left', bare && 'tou-drawer--bare')} role="dialog" aria-modal="true" aria-labelledby={bare ? undefined : `${id}-t`} aria-label={bare ? String(title) : undefined} tabIndex={-1}>
        {bare ? null : (
          <div className="tou-drawer__head">
            <div>
              <h2 className="tou-drawer__title" id={`${id}-t`}>{title}</h2>
              {subtitle ? <p className="tou-drawer__subtitle">{subtitle}</p> : null}
            </div>
          </div>
        )}
        {bare ? null : <IconButton className="tou-drawer__close" icon="x" label="Fechar" size="sm" onClick={onClose} />}
        <div className="tou-drawer__body">{children}</div>
        {footer ? <div className="tou-drawer__foot">{footer}</div> : null}
      </aside>
    </div>,
    inline || contained,
  );
}

export interface TooltipProps {
  /** Texto curto. Não coloque informação essencial só aqui. */
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'right';
  /** Força aberto (documentação). */
  open?: boolean;
  /** Um único elemento focável. */
  children: React.ReactElement;
}

/** Dica curta no hover e no foco. Esc fecha. Complementa, nunca substitui, o nome acessível. */
export function Tooltip({ content, placement = 'top', open: openProp, children }: TooltipProps) {
  const id = useId('tip');
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef<any>();
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), 300); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const visible = openProp ?? open;
  const child = React.cloneElement(children, { 'aria-describedby': id, onMouseEnter: show, onMouseLeave: hide, onFocus: () => setOpen(true), onBlur: hide });
  return (
    <span className="tou-tip-anchor">
      {child}
      <span role="tooltip" id={id} className={cx('tou-tooltip', placement !== 'top' && `tou-tooltip--${placement}`)} hidden={!visible}>{content}</span>
    </span>
  );
}

export interface InfoTipProps {
  /** O assunto, para o nome acessível: "Mais informações sobre {about}". */
  about: string;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'right';
  open?: boolean;
  stateClassName?: string;
}

/** Ícone de informação focável que mostra uma explicação curta. */
export function InfoTip({ about, content, placement, open, stateClassName }: InfoTipProps) {
  return (
    <Tooltip content={content} placement={placement} open={open}>
      <button type="button" className={cx('tou-infotip', stateClassName)} aria-label={`Mais informações sobre ${about}`}><Icon name="info" size={16} /></button>
    </Tooltip>
  );
}

const STATE_ICON: Record<string, IconName> = { info: 'info', success: 'circle-check', warning: 'triangle-alert', danger: 'circle-alert' };

export interface AlertProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Sólido: mais peso, para o que bloqueia o uso. Suave é o padrão. */
  solid?: boolean;
  /** Faixa de largura total no topo da página (sem raio, borda só embaixo). */
  banner?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

/** Mensagem persistente no contexto da página. Ícone + texto: nunca só cor. */
export function Alert({ tone = 'info', solid, banner, title, children, actions, onClose, className }: AlertProps) {
  const live = tone === 'danger' || tone === 'warning' ? 'alert' : 'status';
  return (
    <div className={cx('tou-alert', `tou-alert--${tone}`, solid && 'tou-alert--solid', banner && 'tou-alert--banner', className)} role={live}>
      <span className="tou-alert__icon"><Icon name={STATE_ICON[tone]} size={16} label={{ info: 'Informação', success: 'Sucesso', warning: 'Atenção', danger: 'Erro' }[tone]} /></span>
      <div className="tou-alert__body">
        {title ? <span className="tou-alert__title">{title}</span> : null}
        {children ? <span className="tou-alert__desc">{children}</span> : null}
        {actions ? <div className="tou-alert__actions">{actions}</div> : null}
      </div>
      {onClose ? <IconButton className="tou-alert__close" icon="x" label="Fechar aviso" size="sm" onClick={onClose} /> : null}
    </div>
  );
}

export interface ToastProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  solid?: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: { label: string; onClick: () => void };
  onClose?: () => void;
  /** Some sozinho depois de N ms (padrão 5000; 0 = fica). Pausa com o mouse em cima ou com foco dentro. */
  duration?: number;
  className?: string;
}

/** Aviso passageiro de resultado de ação ("Contato salvo"). Erros que exigem ação ficam (duration 0). */
export function Toast({ tone = 'success', solid, title, description, action, onClose, duration = 5000, className }: ToastProps) {
  const timer = React.useRef<any>();
  const start = () => { if (duration && onClose) timer.current = setTimeout(onClose, duration); };
  const stop = () => clearTimeout(timer.current);
  React.useEffect(() => { start(); return stop; }, []);
  return (
    <div className={cx('tou-toast', `tou-toast--${tone}`, solid && 'tou-toast--solid', className)} role={tone === 'danger' ? 'alert' : 'status'} onMouseEnter={stop} onMouseLeave={start} onFocus={stop} onBlur={start}>
      <span className="tou-alert__icon"><Icon name={STATE_ICON[tone]} size={16} /></span>
      <div className="tou-alert__body">
        <span className="tou-alert__title">{title}</span>
        {description ? <span className="tou-alert__desc">{description}</span> : null}
        {action ? <div className="tou-alert__actions"><Button variant="tertiary" size="sm" onClick={action.onClick} style={{ marginLeft: -12 }}>{action.label}</Button></div> : null}
      </div>
      {onClose ? <IconButton icon="x" label="Fechar notificação" size="sm" onClick={onClose} /> : null}
    </div>
  );
}

interface ToastItem extends ToastProps { id: number }
const ToastCtx = React.createContext<(t: ToastProps) => void>(() => {});

/** Provedor de toasts: região aria-live no canto inferior direito. */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<ToastItem[]>([]);
  const push = React.useCallback((t: ToastProps) => setItems((s) => [...s.slice(-2), { ...t, id: Date.now() + Math.random() }]), []);
  return (
    <ToastCtx.Provider value={push}>
      {children}
      {ReactDOM.createPortal(
        <div className="tou-toaster" aria-live="polite">
          {items.map((t) => <Toast key={t.id} {...t} onClose={() => setItems((s) => s.filter((x) => x.id !== t.id))} />)}
        </div>,
        document.body,
      )}
    </ToastCtx.Provider>
  );
}

/** Dispara um toast: const toast = useToast(); toast({ title: 'Contato salvo' }). */
export function useToast() { return React.useContext(ToastCtx); }
