/**
 * TOU — tipos dos componentes (documentação; window.TOU).
 * Carregue React 18 e ReactDOM 18 antes de components/bundle.js. Estilos: tokens.css + components/bundle.css.
 * Ícones: Lucide (ISC), nomes abaixo em IconName.
 */
import * as React from 'react';

export type IconName =
  | 'check'
  | 'x'
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevrons-up-down'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-up-down'
  | 'search'
  | 'plus'
  | 'minus'
  | 'trash'
  | 'pencil'
  | 'ellipsis-vertical'
  | 'list-filter'
  | 'sliders-horizontal'
  | 'calendar'
  | 'clock'
  | 'info'
  | 'circle-alert'
  | 'triangle-alert'
  | 'circle-check'
  | 'circle-x'
  | 'circle-question-mark'
  | 'user'
  | 'users'
  | 'user-plus'
  | 'message-square'
  | 'message-circle'
  | 'phone'
  | 'mail'
  | 'tag'
  | 'eye'
  | 'eye-off'
  | 'settings'
  | 'bell'
  | 'log-out'
  | 'house'
  | 'chart-column'
  | 'funnel'
  | 'send'
  | 'bot'
  | 'megaphone'
  | 'building'
  | 'credit-card'
  | 'lock'
  | 'external-link'
  | 'inbox'
  | 'download'
  | 'upload'
  | 'refresh-cw'
  | 'copy'
  | 'star'
  | 'panel-left-close'
  | 'panel-left-open'
  | 'workflow'
  | 'contact'
  | 'funnel-x'
  | 'check-check'
  | 'trending-up'
  | 'trending-down'
  | 'moon'
  | 'sun'
  | 'file-text'
  | 'zap'
  | 'sparkles'
  | 'headset'
  | 'search-x'
  | 'calendar-range'
  | 'image'
  | 'arrow-left'
  | 'arrow-right'
  | 'list'
  | 'square-kanban'
  | 'play'
  | 'pause'
  | 'menu'
  | 'chevron-first'
  | 'chevron-last';

// ---- core ----
export declare function cx(...parts: Array<string | false | null | undefined | 0>): string;
export declare function useId(prefix?: string): string;
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
export declare function Icon({ name, size, strokeWidth, label, className }: IconProps): import("react").JSX.Element;
export interface SpinnerProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** Nome acessível (padrão "Carregando"). Use "" quando o texto ao lado já diz o que carrega. */
    label?: string;
    className?: string;
}
/** Indicador de carregamento na cor do texto em volta. Com "reduzir movimento", fica parado. */
export declare function Spinner({ size, label, className }: SpinnerProps): import("react").JSX.Element;
export interface SkeletonProps {
    variant?: 'text' | 'title' | 'circle' | 'block';
    width?: number | string;
    height?: number | string;
    className?: string;
}
/** Bloco de carregamento com brilho. O brilho para com "reduzir movimento". */
export declare function Skeleton({ variant, width, height, className }: SkeletonProps): import("react").JSX.Element;
/** Fecha popovers ao clicar fora ou apertar Esc. */
export declare function useDismiss(open: boolean, onClose: () => void, refs: Array<React.RefObject<HTMLElement>>): void;

// ---- buttons ----
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
export declare const Button: (props: ButtonProps & {
    ref?: React.Ref<HTMLButtonElement>;
}) => React.ReactElement;
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
export declare const IconButton: (props: IconButtonProps & {
    ref?: React.Ref<HTMLButtonElement>;
}) => React.ReactElement;

// ---- display ----
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
export declare function Badge({ tone, solid, icon, count, className, children }: BadgeProps): import("react").JSX.Element;
export interface StatusDotProps {
    tone?: Tone;
    /** O texto é obrigatório: o ponto sozinho não comunica. */
    children: React.ReactNode;
    className?: string;
}
/** Ponto colorido + texto, para presença e estado de conexão ("Online", "Desconectado"). */
export declare function StatusDot({ tone, children, className }: StatusDotProps): import("react").JSX.Element;
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
export declare function Tag({ tone, solid, size, icon, onRemove, disabled, className, children }: TagProps): import("react").JSX.Element;
export interface ChipProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
    /** Chip de alternância (filtro rápido): aria-pressed. */
    selected?: boolean;
    icon?: IconName;
    /** Contagem ao lado do rótulo. */
    count?: number;
    children: React.ReactNode;
}
/** Chip clicável: filtros rápidos e escolhas. Selecionado = fundo primário suave + ícone de check. */
export declare function Chip({ selected, icon, count, className, children, type, ...rest }: ChipProps): import("react").JSX.Element;
export interface FilterChipProps {
    /** Nome do filtro ("Etiqueta"). */
    field: string;
    /** Valor aplicado ("Lead quente"). */
    value: React.ReactNode;
    onRemove: () => void;
    className?: string;
}
/** Filtro ativo: "Etiqueta: Lead quente ×". */
export declare function FilterChip({ field, value, onRemove, className }: FilterChipProps): import("react").JSX.Element;
export interface AvatarProps {
    /** Nome completo: gera as iniciais e o texto alternativo. */
    name?: string;
    src?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    status?: 'online' | 'away' | 'busy' | 'offline';
    className?: string;
}
export declare function initials(name?: string): string;
/** Foto, iniciais ou ícone. Sem nome nem foto, mostra o ícone de pessoa. */
export declare function Avatar({ name, src, size, status, className }: AvatarProps): import("react").JSX.Element;
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
export declare function EmptyState({ icon, tone, title, description, actions, compact, className }: EmptyStateProps): import("react").JSX.Element;

// ---- fields ----
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
export declare function FieldFrame({ id, label, required, optional, help, error, disabled, className, counter, labelAs, children }: FieldFrameProps): import("react").JSX.Element;
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
export declare function TextField(props: TextFieldProps): import("react").JSX.Element;
export interface TextareaProps extends FieldBaseProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'disabled' | 'required'> {
    maxLength?: number;
    rows?: number;
}
/** Texto de várias linhas (observações, mensagem de template). */
export declare function Textarea(props: TextareaProps): import("react").JSX.Element;
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
export declare function Select(props: SelectProps): import("react").JSX.Element;
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
export declare function MultiSelect(props: MultiSelectProps): import("react").JSX.Element;
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
export declare function Combobox(props: ComboboxProps): import("react").JSX.Element;
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
export declare function Checkbox({ label, description, ariaLabel, indeterminate, invalid, disabled, className, stateClassName, checked, ...rest }: CheckboxProps): import("react").JSX.Element;
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label: React.ReactNode;
    description?: React.ReactNode;
    invalid?: boolean;
    stateClassName?: string;
}
export declare function Radio({ label, description, invalid, disabled, className, stateClassName, checked, ...rest }: RadioProps): import("react").JSX.Element;
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
export declare function ChoiceGroup({ label, required, help, error, row, children, className }: ChoiceGroupProps): import("react").JSX.Element;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    label: React.ReactNode;
    description?: React.ReactNode;
    /** Rótulo à esquerda e switch à direita, ocupando a linha (listas de configurações). */
    end?: boolean;
    stateClassName?: string;
}
/** Liga/desliga com efeito imediato. Se a mudança só vale ao salvar, use Checkbox. */
export declare function Switch({ label, description, end, disabled, checked, className, stateClassName, ...rest }: SwitchProps): import("react").JSX.Element;
export interface CalendarProps {
    /** Mês exibido. */
    month: Date;
    /** Data selecionada (modo simples). */
    value?: Date | null;
    /** Intervalo selecionado (modo intervalo). */
    range?: {
        start?: Date | null;
        end?: Date | null;
    };
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
export declare function Calendar({ month, value, range, today, isDisabled, onSelect, onMonthChange, focusDay, footer }: CalendarProps): import("react").JSX.Element;
export interface DateFieldProps extends FieldBaseProps {
    value?: Date | null;
    onChange?: (d: Date | null) => void;
    /** Modo intervalo ("de … até …"). */
    range?: {
        start?: Date | null;
        end?: Date | null;
    };
    onRangeChange?: (r: {
        start?: Date | null;
        end?: Date | null;
    }) => void;
    open?: boolean;
    isDisabled?: (d: Date) => boolean;
    today?: Date;
}
/** Data ou intervalo de datas, digitável (dd/mm/aaaa) e com calendário. */
export declare function DateField(props: DateFieldProps): import("react").JSX.Element;
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
export declare function TimeField(props: TimeFieldProps): import("react").JSX.Element;
export {};

// ---- overlays ----
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
export declare function Modal({ open, onClose, title, subtitle, size, children, footer, footerStart, closeOnOverlay, inline, contained, fullScreen, className }: ModalProps): import("react").ReactNode;
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
export declare function ConfirmDialog({ open, onClose, onConfirm, title, description, confirmLabel, cancelLabel, tone, loading, inline, contained }: ConfirmDialogProps): import("react").ReactNode;
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
export declare function Drawer({ open, onClose, title, subtitle, size, side, children, footer, inline, contained, bare }: DrawerProps): import("react").ReactNode;
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
export declare function Tooltip({ content, placement, open: openProp, children }: TooltipProps): import("react").JSX.Element;
export interface InfoTipProps {
    /** O assunto, para o nome acessível: "Mais informações sobre {about}". */
    about: string;
    content: React.ReactNode;
    placement?: 'top' | 'bottom' | 'right';
    open?: boolean;
    stateClassName?: string;
}
/** Ícone de informação focável que mostra uma explicação curta. */
export declare function InfoTip({ about, content, placement, open, stateClassName }: InfoTipProps): import("react").JSX.Element;
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
export declare function Alert({ tone, solid, banner, title, children, actions, onClose, className }: AlertProps): import("react").JSX.Element;
export interface ToastProps {
    tone?: 'info' | 'success' | 'warning' | 'danger';
    solid?: boolean;
    title: React.ReactNode;
    description?: React.ReactNode;
    action?: {
        label: string;
        onClick: () => void;
    };
    onClose?: () => void;
    /** Some sozinho depois de N ms (padrão 5000; 0 = fica). Pausa com o mouse em cima ou com foco dentro. */
    duration?: number;
    className?: string;
}
/** Aviso passageiro de resultado de ação ("Contato salvo"). Erros que exigem ação ficam (duration 0). */
export declare function Toast({ tone, solid, title, description, action, onClose, duration, className }: ToastProps): import("react").JSX.Element;
/** Provedor de toasts: região aria-live no canto inferior direito. */
export declare function ToastProvider({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
/** Dispara um toast: const toast = useToast(); toast({ title: 'Contato salvo' }). */
export declare function useToast(): (t: ToastProps) => void;

// ---- menu ----
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
export declare function Menu({ trigger, items, onSelect, align, label, open: openProp, activeId, className }: MenuProps): import("react").JSX.Element;

// ---- data ----
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
export type SortState = {
    key: string;
    dir: 'asc' | 'desc';
} | null;
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
    pagination?: PaginationState & {
        itemLabel?: string;
    };
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
export declare function Pagination({ page, pageSize, total, onPageChange, compact, itemLabel, standalone, className }: PaginationProps): import("react").JSX.Element;
/** Tabela densa ou confortável, com ordenação, seleção, linha expansível, carregando, vazio e paginação. Vira lista de cards no mobile. */
export declare function DataTable<T>(props: DataTableProps<T>): import("react").JSX.Element;
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
export declare function FilterBar({ query, onQueryChange, searchLabel, searchPlaceholder, groups, value, onChange, quickFilters, quickValue, onQuickChange, end, open: openProp, openGroups, className }: FilterBarProps): import("react").JSX.Element;

// ---- nav ----
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Abre em nova aba, mostra o ícone e anuncia "(abre em nova aba)". */
    external?: boolean;
    /** Link solto (fora de texto corrido): sem sublinhado até o hover. */
    standalone?: boolean;
    disabled?: boolean;
}
/** Link inline (sublinhado) ou solto. Externo abre em nova aba com ícone. */
export declare function Link({ external, standalone, disabled, className, children, href, ...rest }: LinkProps): import("react").JSX.Element;
export interface TabItem {
    id: string;
    label: string;
    icon?: IconName;
    count?: number;
    disabled?: boolean;
}
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
export declare function Tabs({ items, value, onChange, label, children, stateClasses }: TabsProps): import("react").JSX.Element;
export interface SegmentedOption {
    value: string;
    label: string;
    icon?: IconName;
    disabled?: boolean;
    hideLabel?: boolean;
}
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
export declare function SegmentedControl({ options, value, onChange, label, size, block, stateClasses }: SegmentedControlProps): import("react").JSX.Element;
export interface AccordionItem {
    id: string;
    title: React.ReactNode;
    meta?: React.ReactNode;
    content: React.ReactNode;
    disabled?: boolean;
}
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
export declare function Accordion({ items, value, onChange, single, headingLevel, stateClasses }: AccordionProps): import("react").JSX.Element;
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
export declare function ProgressBar({ label, value, tone, help, size, showValue }: ProgressBarProps): import("react").JSX.Element;
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
export declare function Card({ variant, title, subtitle, action, footer, href, onClick, selected, highlighted, disabled, children, className, stateClassName, headingLevel }: CardProps): import("react").JSX.Element;
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
/** Número de destaque com variação e mini-gráfico. A variação tem seta e sinal, nunca só cor. */
export declare function KpiCard({ label, value, delta, invert, comparison, trend, trendLabels, info, loading, large }: KpiCardProps): import("react").JSX.Element;
export interface NavItem {
    id: string;
    label: string;
    icon: IconName;
    href?: string;
    /** Subitens (abre/fecha). */
    children?: {
        id: string;
        label: string;
        href?: string;
        keywords?: string;
    }[];
    /** Recurso fora do plano: cadeado + dica. Continua focável (leva à página de Planos). */
    locked?: boolean;
    lockedHint?: string;
    badge?: number;
    /** Termos extras para a busca do menu (sinônimos). */
    keywords?: string;
}
export interface NavGroup {
    label?: string;
    items: NavItem[];
}
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
    user: {
        name: string;
        org: string;
        avatar?: string;
        status?: 'online' | 'away' | 'busy' | 'offline';
    };
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
/** Navegação principal do produto: expandido (248px) ou recolhido (64px, só ícones com dica). A lupa abre um filtro das telas do menu. */
export declare function Sidebar({ groups, current, collapsed, onCollapsedChange, expanded, onExpandedChange, logoSrc, user, footerActions, onNavigate, onClose, searchable, initialSearch, stateClasses }: SidebarProps): import("react").JSX.Element;
export interface PageHeaderProps {
    title: React.ReactNode;
    /** Contagem ao lado do título (ex.: total de contatos). */
    count?: number;
    subtitle?: React.ReactNode;
    /** Ações à direita: secundárias primeiro, a primária por último. */
    actions?: React.ReactNode;
    /** Link "voltar" acima do título. */
    back?: {
        label: string;
        href: string;
    };
    /** Linha abaixo (busca, barra de filtros, abas). */
    children?: React.ReactNode;
}
/** Topo de toda página do produto: título (h1, um por tela), subtítulo, ações e busca. */
export declare function PageHeader({ title, count, subtitle, actions, back, children }: PageHeaderProps): import("react").JSX.Element;

// ---- marketing ----
/** Uma palavra em Instrument Serif itálico dentro de um título de marketing. Em seção marinho fica em brand-cyan. */
export declare function Accent({ children }: {
    children: React.ReactNode;
}): import("react").JSX.Element;
export interface SiteLink {
    label: string;
    href: string;
    current?: boolean;
}
export interface SiteHeaderProps {
    links: SiteLink[];
    /** Logo colorido (fundo claro) e branco (sobre hero escuro). */
    logoSrc: string;
    logoOnDarkSrc?: string;
    /** Sobre um hero escuro: fundo transparente, tema marinho, logo branco. */
    overDark?: boolean;
    cta: {
        label: string;
        onClick?: () => void;
        href?: string;
    };
    login?: {
        label: string;
        href: string;
    };
    /** Menu do celular aberto (documentação). */
    defaultOpen?: boolean;
}
/** Cabeçalho do site: logo, links, CTA em pílula; no celular, botão de menu (44px) que abre o painel de links. */
export declare function SiteHeader({ links, logoSrc, logoOnDarkSrc, overDark, cta, login, defaultOpen }: SiteHeaderProps): import("react").JSX.Element;
export interface ProductPreviewProps {
    /** A interface real (componentes do produto) desenhada na largura `designWidth`. Fica inerte: não recebe foco nem é lida. */
    children: React.ReactNode;
    /** Descrição para leitores de tela ("Prévia da lista de contatos do TOU"). */
    label: string;
    designWidth?: number;
    designHeight?: number;
    /** Endereço mostrado na barra da janela. */
    url?: string;
    /** Tema da interface dentro da janela. */
    theme?: 'light' | 'dark';
    /** Cantos arredondados embaixo também (fora do hero). */
    rounded?: boolean;
    /** Moldura clara (sobre papel). */
    light?: boolean;
}
/** Janela com a interface real do produto reduzida. Inerte e descrita por `label`. */
export declare function ProductPreview({ children, label, designWidth, designHeight, url, theme, rounded, light }: ProductPreviewProps): import("react").JSX.Element;
export interface HeroProps {
    /** dark: azul-marinho com malha e brilho de marca (padrão). light: papel claro. */
    tone?: 'dark' | 'light';
    /** Texto e preview lado a lado (desktop). Padrão: centralizado, preview embaixo. */
    split?: boolean;
    eyebrow?: string;
    /** Título (h1). Use `<Accent>` em uma palavra. */
    title: React.ReactNode;
    lead?: React.ReactNode;
    /** CTAs em pílula: primário e, no máximo, um secundário. */
    actions?: React.ReactNode;
    /** Prova social curta (ex.: avaliação). */
    proof?: React.ReactNode;
    /** Normalmente um ProductPreview. */
    preview?: React.ReactNode;
    id?: string;
}
/** Abertura da landing: eyebrow, título com destaque em serif, lead, CTAs e preview do produto sobre malha de gradiente. */
export declare function Hero({ tone, split, eyebrow, title, lead, actions, proof, preview, id }: HeroProps): import("react").JSX.Element;
export interface SectionHeaderProps {
    eyebrow?: string;
    /** Título (h2, mkt-h2 em todas as seções). */
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    align?: 'center' | 'start';
    id?: string;
}
/** Eyebrow + título (um tamanho para todas as seções) + subtítulo. */
export declare function SectionHeader({ eyebrow, title, subtitle, align, id }: SectionHeaderProps): import("react").JSX.Element;
export interface MarqueeProps {
    /** Itens da faixa (logos, depoimentos). São duplicados para o laço; a cópia é aria-hidden e inerte. */
    items: React.ReactNode[];
    /** Rótulo da região ("Clientes da TOU"). */
    label: string;
    /** Segundos para uma volta completa. */
    duration?: number;
    gap?: number;
    /** Começa pausada (documentação). */
    paused?: boolean;
}
/** Rolagem contínua com pausa: para no hover, no foco e no botão de pausa (44px). Com "reduzir movimento", vira grade parada. */
export declare function Marquee({ items, label, duration, gap, paused: pausedInit }: MarqueeProps): import("react").JSX.Element;
export interface LogoStripProps {
    title: React.ReactNode;
    /** Logos dos clientes (imagens com alt) ou, enquanto não houver arquivo, o nome em texto. */
    logos: {
        name: string;
        src?: string;
    }[];
    duration?: number;
    paused?: boolean;
}
/** Faixa de logos de clientes em rolagem contínua, com título de prova social. */
export declare function LogoStrip({ title, logos, duration, paused }: LogoStripProps): import("react").JSX.Element;
export declare function Stars({ value, max }: {
    value: number;
    max?: number;
}): import("react").JSX.Element;
export interface TestimonialProps {
    quote: string;
    name: string;
    role: string;
    avatarSrc?: string;
    rating?: number;
    /** Citação em Instrument Serif (use num depoimento em destaque, não em todos). */
    serif?: boolean;
    feature?: boolean;
}
/** Depoimento: citação, nota em estrelas com o número escrito e autoria. */
export declare function Testimonial({ quote, name, role, avatarSrc, rating, serif, feature }: TestimonialProps): import("react").JSX.Element;
/** Faixa de depoimentos em rolagem contínua com pausa. */
export declare function TestimonialStrip({ items, duration, paused }: {
    items: TestimonialProps[];
    duration?: number;
    paused?: boolean;
}): import("react").JSX.Element;
export interface FeatureTab {
    id: string;
    icon: IconName;
    title: string;
    description: string;
    content: React.ReactNode;
}
export interface FeatureTabsProps {
    items: FeatureTab[];
    /** Troca sozinha a cada N segundos (padrão 7). 0 desliga. Pausa no hover, no foco e no botão; desliga com "reduzir movimento". */
    interval?: number;
    label: string;
    startIndex?: number;
    paused?: boolean;
}
/** Recursos em abas com autoplay pausável e barra de progresso na aba ativa. Setas navegam. */
export declare function FeatureTabs({ items, interval, label, startIndex, paused: pausedInit }: FeatureTabsProps): import("react").JSX.Element;
export interface CtaBannerProps {
    eyebrow?: string;
    title: React.ReactNode;
    lead?: React.ReactNode;
    /** CTAs em pílula. */
    actions: React.ReactNode;
}
/** Bloco de chamada final em azul-marinho com brilho de marca. Texto sempre sobre o marinho, nunca sobre o gradiente. */
export declare function CtaBanner({ eyebrow, title, lead, actions }: CtaBannerProps): import("react").JSX.Element;
export interface FaqProps {
    items: AccordionItem[];
    defaultOpen?: string[];
}
/** Perguntas frequentes: o Accordion do sistema com a escala do site. */
export declare function Faq({ items, defaultOpen }: FaqProps): import("react").JSX.Element;
export interface LeadData {
    name: string;
    phone: string;
    email: string;
    company: string;
    team: string;
    consent: boolean;
}
export interface LeadFormProps {
    title?: string;
    /** Envio (mostra o estado de sucesso quando resolve). */
    onSubmit?: (d: LeadData) => Promise<void> | void;
    initial?: Partial<LeadData>;
    /** Documentação: já tentou enviar (mostra os erros). */
    submitted?: boolean;
    /** Documentação: estado enviado. */
    done?: boolean;
}
/** Formulário de lead em seção: campos de 48px, validação no envio, consentimento e estado de sucesso. */
export declare function LeadForm({ title, onSubmit, initial, submitted: subInit, done: doneInit }: LeadFormProps): import("react").JSX.Element;
export interface ScheduleModalProps {
    open: boolean;
    onClose: () => void;
    /** Etapa inicial (documentação): 0 dados, 1 empresa, 2 horário, 3 confirmado. */
    startStep?: number;
    initial?: Partial<LeadData>;
    submitted?: boolean;
    /** Cobre só o container (moldura). */
    contained?: boolean;
    fullScreen?: boolean;
    today?: Date;
}
/** Agendamento de demonstração em etapas: dados, clínica, data e hora; termina com o resumo. */
export declare function ScheduleModal({ open, onClose, startStep, initial, submitted: subInit, contained, fullScreen, today }: ScheduleModalProps): import("react").JSX.Element;
export interface SiteFooterProps {
    logoSrc: string;
    tagline: string;
    columns: {
        title: string;
        links: SiteLink[];
    }[];
    legal: React.ReactNode;
    bottomLinks?: SiteLink[];
}
/** Rodapé em azul-marinho: logo branco, colunas de links (44px de alvo no celular) e linha legal. */
export declare function SiteFooter({ logoSrc, tagline, columns, legal, bottomLinks }: SiteFooterProps): import("react").JSX.Element;

