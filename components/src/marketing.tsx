import { cx, Icon, IconName, useId } from './core';
import { Button, IconButton } from './buttons';
import { Avatar } from './display';
import { Accordion, AccordionItem } from './nav';
import { TextField, Select, Checkbox, Calendar } from './fields';
import { Modal } from './overlays';

function useReducedMotion() {
  const [r, setR] = React.useState(() => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  React.useEffect(() => {
    if (!window.matchMedia) return;
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setR(m.matches);
    m.addEventListener?.('change', on);
    return () => m.removeEventListener?.('change', on);
  }, []);
  return r;
}

/* ------------------------------------------------------------------ */
/* Destaque em serif                                                   */
/* ------------------------------------------------------------------ */
/** Uma palavra em Instrument Serif itálico dentro de um título de marketing. Em seção marinho fica em brand-cyan. */
export function Accent({ children }: { children: React.ReactNode }) {
  return <em className="tou-accent">{children}</em>;
}

/* ------------------------------------------------------------------ */
/* Cabeçalho do site                                                   */
/* ------------------------------------------------------------------ */
export interface SiteLink { label: string; href: string; current?: boolean }
export interface SiteHeaderProps {
  links: SiteLink[];
  /** Logo colorido (fundo claro) e branco (sobre hero escuro). */
  logoSrc: string;
  logoOnDarkSrc?: string;
  /** Sobre um hero escuro: fundo transparente, tema marinho, logo branco. */
  overDark?: boolean;
  cta: { label: string; onClick?: () => void; href?: string };
  login?: { label: string; href: string };
  /** Menu do celular aberto (documentação). */
  defaultOpen?: boolean;
}

/** Cabeçalho do site: logo, links, CTA em pílula; no celular, botão de menu (44px) que abre o painel de links. */
export function SiteHeader({ links, logoSrc, logoOnDarkSrc, overDark, cta, login, defaultOpen }: SiteHeaderProps) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const id = useId('sitenav');
  React.useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  }, [open]);
  const dark = overDark && !open;
  return (
    <header className={cx('tou-sitehead', overDark && 'tou-sitehead--over', open && 'is-open')} data-theme={dark ? 'navy' : 'light'}>
      <div className="tou-container tou-sitehead__bar">
        <a className="tou-sitehead__logo" href="#inicio" aria-label="TOU, página inicial"><img src={dark && logoOnDarkSrc ? logoOnDarkSrc : logoSrc} alt="" /></a>
        <nav aria-label="Principal">
          <ul className="tou-sitehead__nav">
            {links.map((l) => <li key={l.href}><a className="tou-sitehead__link" href={l.href} aria-current={l.current ? 'page' : undefined}>{l.label}</a></li>)}
          </ul>
        </nav>
        <div className="tou-sitehead__actions">
          {login ? <a className="tou-sitehead__link tou-sitehead__login" href={login.href}>{login.label}</a> : null}
          <Button className="tou-sitehead__cta" pill onClick={cta.onClick} href={cta.href}>{cta.label}</Button>
          <IconButton className="tou-sitehead__burger" icon={open ? 'x' : 'menu'} label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} />
        </div>
      </div>
      <div id={id} className={cx('tou-sitehead__panel', open && 'is-open')} hidden={!open}>
        <ul className="tou-container">
          {links.map((l) => <li key={l.href}><a className="tou-sitehead__plink" href={l.href} onClick={() => setOpen(false)} aria-current={l.current ? 'page' : undefined}>{l.label}</a></li>)}
          {login ? <li><a className="tou-sitehead__plink" href={login.href}>{login.label}</a></li> : null}
        </ul>
        <Button pill size="lg" onClick={() => { setOpen(false); cta.onClick?.(); }}>{cta.label}</Button>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Preview do produto                                                  */
/* ------------------------------------------------------------------ */
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
export function ProductPreview({ children, label, designWidth = 1280, designHeight = 760, url = 'app.tou.com.br', theme = 'light', rounded, light }: ProductPreviewProps) {
  const stage = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = React.useState(0.6);
  React.useLayoutEffect(() => {
    const el = stage.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / designWidth);
    fit();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);
  return (
    <figure className={cx('tou-preview', rounded && 'tou-preview--rounded', light && 'tou-preview--light')} style={{ margin: 0 }} role="img" aria-label={label}>
      <div className="tou-preview__window">
        <div className="tou-preview__chrome" aria-hidden="true"><i /><i /><i /><span>{url}</span></div>
        <div className="tou-preview__stage" ref={stage} style={{ height: designHeight * scale }} aria-hidden="true">
          <div className="tou-preview__scale" data-theme={theme} style={{ width: designWidth, height: designHeight, transform: `scale(${scale})`, background: 'var(--bg-page)' }} {...({ inert: '' } as any)}>
            {children}
          </div>
        </div>
      </div>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
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
export function Hero({ tone = 'dark', split, eyebrow, title, lead, actions, proof, preview, id }: HeroProps) {
  return (
    <section className={cx('tou-hero', `tou-hero--${tone}`, split && 'tou-hero--split')} data-theme={tone === 'dark' ? 'navy' : 'light'} id={id} aria-labelledby={id ? `${id}-t` : undefined}>
      <div className="tou-hero__mesh" aria-hidden="true" />
      <div className="tou-hero__grid" aria-hidden="true" />
      <div className="tou-hero__glow" aria-hidden="true" />
      <div className="tou-container tou-hero__inner">
        <div className={split ? 'tou-hero__copy' : 'tou-hero__inner'} style={split ? undefined : { display: 'contents' }}>
          {eyebrow ? <p className="tou-mkt-eyebrow">{eyebrow}</p> : null}
          <h1 className="tou-mkt-display" id={id ? `${id}-t` : undefined}>{title}</h1>
          {lead ? <p className="tou-mkt-lead">{lead}</p> : null}
          {actions ? <div className="tou-hero__actions">{actions}</div> : null}
          {proof ? <div className="tou-hero__proof">{proof}</div> : null}
        </div>
        {preview ? <div className="tou-hero__preview">{preview}</div> : null}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Cabeçalho de seção                                                  */
/* ------------------------------------------------------------------ */
export interface SectionHeaderProps {
  eyebrow?: string;
  /** Título (h2, mkt-h2 em todas as seções). */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'center' | 'start';
  id?: string;
}

/** Eyebrow + título (um tamanho para todas as seções) + subtítulo. */
export function SectionHeader({ eyebrow, title, subtitle, align = 'center', id }: SectionHeaderProps) {
  return (
    <div className={cx('tou-sechead', align === 'start' && 'tou-sechead--start')}>
      {eyebrow ? <p className="tou-mkt-eyebrow">{eyebrow}</p> : null}
      <h2 className="tou-mkt-h2" id={id}>{title}</h2>
      {subtitle ? <p className="tou-mkt-lead">{subtitle}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Faixa contínua                                                      */
/* ------------------------------------------------------------------ */
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
export function Marquee({ items, label, duration = 40, gap = 48, paused: pausedInit = false }: MarqueeProps) {
  const [paused, setPaused] = React.useState(pausedInit);
  const reduce = useReducedMotion();
  return (
    <div className={cx('tou-marquee', paused && 'is-paused')} role="region" aria-label={label} style={{ ['--marquee-duration' as any]: `${duration}s`, ['--marquee-gap' as any]: `${gap}px` }}>
      <div className="tou-marquee__viewport">
        <div className="tou-marquee__track">
          <ul className="tou-marquee__group" style={{ listStyle: 'none', margin: 0, padding: 0 }}>{items.map((it, i) => <li key={i} style={{ display: 'flex' }}>{it}</li>)}</ul>
          {!reduce ? <ul className="tou-marquee__group" aria-hidden="true" style={{ listStyle: 'none', margin: 0, padding: 0 }} {...({ inert: '' } as any)}>{items.map((it, i) => <li key={i} style={{ display: 'flex' }}>{it}</li>)}</ul> : null}
        </div>
      </div>
      {!reduce ? <IconButton className="tou-marquee__toggle" variant="default" icon={paused ? 'play' : 'pause'} label={paused ? 'Retomar rolagem' : 'Pausar rolagem'} onClick={() => setPaused(!paused)} /> : null}
    </div>
  );
}

export interface LogoStripProps {
  title: React.ReactNode;
  /** Logos dos clientes (imagens com alt) ou, enquanto não houver arquivo, o nome em texto. */
  logos: { name: string; src?: string }[];
  duration?: number;
  paused?: boolean;
}

/** Faixa de logos de clientes em rolagem contínua, com título de prova social. */
export function LogoStrip({ title, logos, duration = 45, paused }: LogoStripProps) {
  return (
    <div className="tou-logostrip">
      <p className="tou-logostrip__title">{title}</p>
      <Marquee label="Clientes da TOU" duration={duration} paused={paused} items={logos.map((l) => (
        <span className="tou-wordmark">{l.src ? <img src={l.src} alt={l.name} /> : <><Icon name="building" size={20} />{l.name}</>}</span>
      ))} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Depoimento                                                          */
/* ------------------------------------------------------------------ */
export function Stars({ value, max = 5 }: { value: number; max?: number }) {
  return (
    <span className="tou-stars">
      <span aria-hidden="true" style={{ display: 'inline-flex', gap: 2 }}>{Array.from({ length: max }, (_, i) => <Icon key={i} name="star" size={16} className={i < Math.round(value) ? '' : 'is-off'} />)}</span>
      <span className="tou-stars__text">{value.toLocaleString('pt-BR')} de {max}</span>
    </span>
  );
}

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
export function Testimonial({ quote, name, role, avatarSrc, rating, serif, feature }: TestimonialProps) {
  return (
    <figure className={cx('tou-quote', feature && 'tou-quote--feature')} style={{ margin: 0 }}>
      {rating ? <Stars value={rating} /> : null}
      <blockquote style={{ margin: 0 }}><p className={cx('tou-quote__text', serif && 'tou-quote__text--serif')}>“{quote}”</p></blockquote>
      <figcaption className="tou-quote__who">
        <Avatar name={name.startsWith('[') ? undefined : name} src={avatarSrc} />
        <span><span className="tou-quote__name">{name}</span><span className="tou-quote__role">{role}</span></span>
      </figcaption>
    </figure>
  );
}

/** Faixa de depoimentos em rolagem contínua com pausa. */
export function TestimonialStrip({ items, duration = 70, paused }: { items: TestimonialProps[]; duration?: number; paused?: boolean }) {
  return <Marquee label="Depoimentos de clientes" duration={duration} gap={24} paused={paused} items={items.map((t) => <Testimonial {...t} />)} />;
}

/* ------------------------------------------------------------------ */
/* Recursos em abas                                                    */
/* ------------------------------------------------------------------ */
export interface FeatureTab { id: string; icon: IconName; title: string; description: string; content: React.ReactNode }
export interface FeatureTabsProps {
  items: FeatureTab[];
  /** Troca sozinha a cada N segundos (padrão 7). 0 desliga. Pausa no hover, no foco e no botão; desliga com "reduzir movimento". */
  interval?: number;
  label: string;
  startIndex?: number;
  paused?: boolean;
}

/** Recursos em abas com autoplay pausável e barra de progresso na aba ativa. Setas navegam. */
export function FeatureTabs({ items, interval = 7, label, startIndex = 0, paused: pausedInit = false }: FeatureTabsProps) {
  const id = useId('ftabs');
  const reduce = useReducedMotion();
  const [i, setI] = React.useState(startIndex);
  const [paused, setPaused] = React.useState(pausedInit);
  const [hover, setHover] = React.useState(false);
  const [tick, setTick] = React.useState(0);
  const refs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const auto = interval > 0 && !reduce;
  const running = auto && !paused && !hover;
  React.useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => { setI((x) => (x + 1) % items.length); setTick((n) => n + 1); }, interval * 1000);
    return () => clearTimeout(t);
  }, [running, i, tick]);
  const go = (n: number, focus = false) => { setI(n); setTick((x) => x + 1); if (focus) refs.current[n]?.focus(); };
  const onKey = (e: React.KeyboardEvent) => {
    const k = e.key;
    if (k === 'ArrowDown' || k === 'ArrowRight') { e.preventDefault(); go((i + 1) % items.length, true); }
    if (k === 'ArrowUp' || k === 'ArrowLeft') { e.preventDefault(); go((i - 1 + items.length) % items.length, true); }
    if (k === 'Home') { e.preventDefault(); go(0, true); }
    if (k === 'End') { e.preventDefault(); go(items.length - 1, true); }
  };
  const cur = items[i];
  return (
    <div className={cx('tou-ftabs', !running && 'is-paused')} style={{ ['--ftab-duration' as any]: `${interval}s` }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
      <div>
        <div className="tou-ftabs__list" role="tablist" aria-label={label} aria-orientation="vertical" onKeyDown={onKey}>
          {items.map((t, n) => (
            <button key={t.id} ref={(el) => { refs.current[n] = el; }} type="button" role="tab" id={`${id}-${t.id}`} aria-selected={n === i} aria-controls={`${id}-panel`} tabIndex={n === i ? 0 : -1} className="tou-ftab" onClick={() => go(n)}>
              <span className="tou-ftab__icon" aria-hidden="true"><Icon name={t.icon} size={20} /></span>
              <span className="tou-ftab__text"><span className="tou-ftab__title">{t.title}</span><span className="tou-ftab__desc">{t.description}</span></span>
              {auto ? <span className="tou-ftab__progress" aria-hidden="true"><i key={`${i}-${tick}`} className={n === i ? 'is-running' : ''} style={n < i ? { width: '100%' } : undefined} /></span> : null}
            </button>
          ))}
        </div>
        {auto ? (
          <div className="tou-ftabs__controls">
            <IconButton variant="default" icon={paused ? 'play' : 'pause'} label={paused ? 'Retomar troca automática' : 'Pausar troca automática'} onClick={() => setPaused(!paused)} />
            <span aria-live="polite">{paused ? 'Troca automática pausada' : `Troca a cada ${interval} segundos`}</span>
          </div>
        ) : null}
      </div>
      <div className="tou-ftabs__panel" key={cur.id} role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-${cur.id}`} tabIndex={0}>
        <p className="tou-ftabs__mdesc">{cur.description}</p>
        {cur.content}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA escuro                                                          */
/* ------------------------------------------------------------------ */
export interface CtaBannerProps {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** CTAs em pílula. */
  actions: React.ReactNode;
}

/** Bloco de chamada final em azul-marinho com brilho de marca. Texto sempre sobre o marinho, nunca sobre o gradiente. */
export function CtaBanner({ eyebrow, title, lead, actions }: CtaBannerProps) {
  return (
    <div className="tou-cta" data-theme="navy">
      {eyebrow ? <p className="tou-mkt-eyebrow">{eyebrow}</p> : null}
      <h2 className="tou-mkt-h1">{title}</h2>
      {lead ? <p className="tou-mkt-lead">{lead}</p> : null}
      <div className="tou-cta__actions">{actions}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export interface FaqProps { items: AccordionItem[]; defaultOpen?: string[] }

/** Perguntas frequentes: o Accordion do sistema com a escala do site. */
export function Faq({ items, defaultOpen = [] }: FaqProps) {
  const [v, setV] = React.useState<string[]>(defaultOpen);
  return <div className="tou-faq"><Accordion items={items} value={v} onChange={setV} headingLevel={3} /></div>;
}

/* ------------------------------------------------------------------ */
/* Formulário de lead                                                  */
/* ------------------------------------------------------------------ */
export interface LeadData { name: string; phone: string; email: string; company: string; team: string; consent: boolean }
const EMPTY_LEAD: LeadData = { name: '', phone: '', email: '', company: '', team: '', consent: false };
const TEAM = [{ value: '1-3', label: '1 a 3 pessoas' }, { value: '4-10', label: '4 a 10 pessoas' }, { value: '11-30', label: '11 a 30 pessoas' }, { value: '30+', label: 'Mais de 30' }];

function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function validateLead(f: LeadData, step?: number) {
  const e: Record<string, string> = {};
  const s1 = step == null || step === 0;
  const s2 = step == null || step === 1;
  if (s1) {
    if (!f.name.trim()) e.name = 'Digite seu nome.';
    const pd = f.phone.replace(/\D/g, '');
    if (!pd) e.phone = 'Digite seu WhatsApp com DDD.';
    else if (pd.length < 10) e.phone = 'Número incompleto: DDD + número.';
    if (!f.email) e.email = 'Digite seu e-mail de trabalho.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.email = 'Digite um e-mail completo, como nome@clinica.com.';
  }
  if (s2) {
    if (!f.company.trim()) e.company = 'Digite o nome da clínica ou empresa.';
    if (!f.team) e.team = 'Escolha o tamanho da equipe.';
    if (!f.consent) e.consent = 'Precisamos da sua autorização para entrar em contato.';
  }
  return e;
}

function LeadFields({ f, set, errs, step }: { f: LeadData; set: (k: keyof LeadData, v: any) => void; errs: Record<string, string>; step?: number }) {
  const all = step == null;
  return (
    <div className="tou-leadform__grid">
      {all || step === 0 ? (
        <>
          <div className="tou-span-2" data-lead="name"><TextField label="Seu nome" required autoComplete="name" value={f.name} onChange={(e: any) => set('name', e.target.value)} error={errs.name} /></div>
          <div data-lead="phone"><TextField label="WhatsApp" required inputMode="tel" autoComplete="tel-national" placeholder="(13) 99999-9999" value={f.phone} onChange={(e: any) => set('phone', maskPhone(e.target.value))} error={errs.phone} /></div>
          <div data-lead="email"><TextField label="E-mail de trabalho" required type="email" autoComplete="email" placeholder="nome@clinica.com" value={f.email} onChange={(e: any) => set('email', e.target.value)} error={errs.email} /></div>
        </>
      ) : null}
      {all || step === 1 ? (
        <>
          <div data-lead="company" className={all ? undefined : 'tou-span-2'}><TextField label="Clínica ou empresa" required autoComplete="organization" value={f.company} onChange={(e: any) => set('company', e.target.value)} error={errs.company} /></div>
          <div data-lead="team" className={all ? undefined : 'tou-span-2'}><Select label="Pessoas no atendimento" required options={TEAM} value={f.team || null} onChange={(v: string) => set('team', v)} error={errs.team} placeholder="Selecione" /></div>
          <div className="tou-span-2" data-lead="consent">
            <Checkbox label="Autorizo a TOU a falar comigo por WhatsApp e e-mail sobre a demonstração." checked={f.consent} invalid={!!errs.consent} onChange={(e: any) => set('consent', e.target.checked)} />
            {errs.consent ? <span className="tou-help tou-help--error" style={{ marginTop: 4 }}><Icon name="circle-alert" size={14} /><span>{errs.consent}</span></span> : null}
          </div>
        </>
      ) : null}
    </div>
  );
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
export function LeadForm({ title = 'Agende uma demonstração', onSubmit, initial, submitted: subInit = false, done: doneInit = false }: LeadFormProps) {
  const [f, setF] = React.useState<LeadData>({ ...EMPTY_LEAD, ...initial });
  const [submitted, setSubmitted] = React.useState(subInit);
  const [sending, setSending] = React.useState(false);
  const [done, setDone] = React.useState(doneInit);
  const id = useId('lead');
  const errs = submitted ? validateLead(f) : {};
  const set = (k: keyof LeadData, v: any) => setF((s) => ({ ...s, [k]: v }));
  const submit = async (e?: any) => {
    e?.preventDefault?.();
    setSubmitted(true);
    const er = validateLead(f);
    if (Object.keys(er).length) {
      const k = Object.keys(er)[0];
      setTimeout(() => (document.querySelector(`#${id} [data-lead="${k}"] input, #${id} [data-lead="${k}"] button`) as HTMLElement | null)?.focus(), 0);
      return;
    }
    setSending(true);
    await (onSubmit ? onSubmit(f) : new Promise((r) => setTimeout(r, 900)));
    setSending(false); setDone(true);
  };
  if (done) {
    return (
      <div className="tou-leadform" id={id} role="status">
        <div className="tou-leadform__done">
          <span className="tou-empty__art" aria-hidden="true"><Icon name="check" size={28} /></span>
          <h3 className="tou-leadform__title">Pedido recebido</h3>
          <p className="tou-mkt-body">Nossa equipe vai chamar você no WhatsApp {f.phone ? <b>{f.phone}</b> : null} em até 1 dia útil para combinar o melhor horário.</p>
          <Button variant="secondary" pill onClick={() => { setDone(false); setSubmitted(false); setF(EMPTY_LEAD); }}>Enviar outro pedido</Button>
        </div>
      </div>
    );
  }
  const n = Object.keys(errs).length;
  return (
    <form className="tou-leadform" id={id} noValidate onSubmit={submit} aria-labelledby={`${id}-t`}>
      <h3 className="tou-leadform__title" id={`${id}-t`}>{title}</h3>
      <LeadFields f={f} set={set} errs={errs} />
      {n ? <span className="tou-help tou-help--error" role="alert"><Icon name="circle-alert" size={14} /><span>{n === 1 ? '1 campo precisa de atenção.' : `${n} campos precisam de atenção.`}</span></span> : null}
      <Button type="submit" size="lg" pill block loading={sending} iconEnd={sending ? undefined : 'arrow-right'}>{sending ? 'Enviando…' : 'Quero uma demonstração'}</Button>
      <p className="tou-leadform__legal">Seus dados são usados só para este contato. Sem spam.</p>
    </form>
  );
}

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

const STEP_LABELS = ['Seus dados', 'Sua clínica', 'Horário'];

/** Agendamento de demonstração em etapas: dados, clínica, data e hora; termina com o resumo. */
export function ScheduleModal({ open, onClose, startStep = 0, initial, submitted: subInit = false, contained, fullScreen, today = new Date() }: ScheduleModalProps) {
  const [step, setStep] = React.useState(startStep);
  const [f, setF] = React.useState<LeadData>({ ...EMPTY_LEAD, ...initial });
  const [submitted, setSubmitted] = React.useState(subInit);
  const nextBiz = (d: Date) => { const x = new Date(d); x.setDate(x.getDate() + 1); while (x.getDay() === 0 || x.getDay() === 6) x.setDate(x.getDate() + 1); return x; };
  const [day, setDay] = React.useState<Date | null>(startStep >= 2 ? nextBiz(today) : null);
  const [month, setMonth] = React.useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [time, setTime] = React.useState<string | null>(startStep >= 3 ? '10:30' : null);
  const [slotErr, setSlotErr] = React.useState(false);
  const errs = submitted && step < 2 ? validateLead(f, step) : {};
  const set = (k: keyof LeadData, v: any) => setF((s) => ({ ...s, [k]: v }));
  const next = () => {
    if (step < 2) {
      setSubmitted(true);
      if (Object.keys(validateLead(f, step)).length) return;
      setSubmitted(false); setStep(step + 1); return;
    }
    if (step === 2) { if (!day || !time) { setSlotErr(true); return; } setStep(3); }
  };
  const dis = (d: Date) => d.getDay() === 0 || d.getDay() === 6 || d < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  const busy = ['09:00', '11:00', '14:30', '16:00'];
  const slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
  const fmt = (d: Date) => d.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long' });
  const footer = step < 3 ? (
    <>
      {step > 0 ? <Button variant="secondary" pill onClick={() => setStep(step - 1)} iconStart="arrow-left">Voltar</Button> : <Button variant="secondary" pill onClick={onClose}>Cancelar</Button>}
      <Button pill onClick={next} iconEnd={step === 2 ? 'check' : 'arrow-right'}>{step === 2 ? 'Confirmar horário' : 'Continuar'}</Button>
    </>
  ) : <Button pill onClick={onClose}>Fechar</Button>;
  return (
    <Modal open={open} onClose={onClose} contained={contained} fullScreen={fullScreen} size="md" closeOnOverlay={false}
      title={step === 3 ? 'Demonstração agendada' : 'Agende uma demonstração'} subtitle={step === 3 ? undefined : '30 minutos com um especialista, por videochamada.'} footer={footer}
      footerStart={step < 3 ? <span className="tou-mono" aria-live="polite">Etapa {step + 1} de 3</span> : undefined}>
      {step < 3 ? (
        <ol className="tou-steps" aria-label="Etapas">
          {STEP_LABELS.map((l, n) => <li key={l} className={n < step ? 'is-done' : undefined} aria-current={n === step ? 'step' : undefined}><span><span className="tou-steps__num">{n + 1}</span>{l}{n < step ? <span className="tou-sr"> (concluída)</span> : null}</span></li>)}
        </ol>
      ) : null}
      {step < 2 ? <LeadFields f={f} set={set} errs={errs} step={step} /> : null}
      {step === 2 ? (
        <div className="tou-slots">
          <div className="tou-popover tou-popover--static" style={{ padding: 0, minWidth: 0 }}>
            <Calendar month={month} onMonthChange={setMonth} value={day} today={today} isDisabled={dis} onSelect={(d: Date) => { setDay(d); setSlotErr(false); }} footer={<span>Fins de semana indisponíveis</span>} />
          </div>
          <div>
            <p className="tou-slots__head">{day ? fmt(day) : 'Escolha um dia'}</p>
            {day ? (
              <div className="tou-times" role="listbox" aria-label="Horários disponíveis">
                {slots.map((s) => <button key={s} type="button" role="option" className="tou-time" aria-selected={s === time} disabled={busy.includes(s)} aria-label={busy.includes(s) ? `${s}, ocupado` : s} onClick={() => { setTime(s); setSlotErr(false); }}>{s}</button>)}
              </div>
            ) : <p className="tou-mkt-body" style={{ fontSize: 14, lineHeight: '20px' }}>Os horários aparecem depois que você escolher o dia.</p>}
            {slotErr ? <span className="tou-help tou-help--error" role="alert" style={{ marginTop: 8 }}><Icon name="circle-alert" size={14} /><span>{!day ? 'Escolha um dia no calendário.' : 'Escolha um horário.'}</span></span> : null}
            <p className="tou-help" style={{ marginTop: 12 }}>Horário de Brasília. Riscados já estão ocupados.</p>
          </div>
        </div>
      ) : null}
      {step === 3 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }} role="status">
          <p className="tou-mkt-body" style={{ color: 'var(--text)' }}>Pronto, {f.name.split(' ')[0] || 'tudo certo'}! Enviamos o convite para <b>{f.email || 'seu e-mail'}</b> e um lembrete vai chegar no WhatsApp 1 hora antes.</p>
          <dl className="tou-summary">
            <dt>Quando</dt><dd>{day ? fmt(day) : ''}, às {time}</dd>
            <dt>Duração</dt><dd>30 minutos, por videochamada</dd>
            <dt>Clínica</dt><dd>{f.company || '—'}</dd>
          </dl>
        </div>
      ) : null}
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/* Rodapé do site                                                      */
/* ------------------------------------------------------------------ */
export interface SiteFooterProps {
  logoSrc: string;
  tagline: string;
  columns: { title: string; links: SiteLink[] }[];
  legal: React.ReactNode;
  bottomLinks?: SiteLink[];
}

/** Rodapé em azul-marinho: logo branco, colunas de links (44px de alvo no celular) e linha legal. */
export function SiteFooter({ logoSrc, tagline, columns, legal, bottomLinks = [] }: SiteFooterProps) {
  return (
    <footer className="tou-sitefoot" data-theme="navy">
      <div className="tou-container">
        <div className="tou-sitefoot__top">
          <div className="tou-sitefoot__brand"><img src={logoSrc} alt="TOU" /><p>{tagline}</p></div>
          {columns.map((c) => (
            <nav key={c.title} className="tou-sitefoot__col" aria-label={c.title}>
              <h2>{c.title}</h2>
              <ul>{c.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
            </nav>
          ))}
        </div>
        <div className="tou-sitefoot__bottom">
          <span>{legal}</span>
          <span style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>{bottomLinks.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}</span>
        </div>
      </div>
    </footer>
  );
}
