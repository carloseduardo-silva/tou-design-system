// Telas de produto (Fase 3): casca do app, dados fictícios e a tela de contatos.
import { T } from './_doc';
const {
  Sidebar, IconButton, PageHeader, Button, Menu, FilterBar, DataTable, EmptyState, Avatar, Badge, Tag, StatusDot, Icon,
  Modal, TextField, Select, MultiSelect, DateField, Textarea, Toast, ConfirmDialog, Drawer, Combobox,
} = T;

export const LOGO = '/_blob/8f07a50b6138d5ca2a3a7814f73d9b41';
// O arquivo branco fornecido (tou-30.webp) tem ~10% de opacidade (marca-d'água): no escuro usamos o logo colorido, como no site atual.
export const LOGO_W = '/_blob/8f07a50b6138d5ca2a3a7814f73d9b41';
export const TODAY = new Date(2026, 9, 6);

/* ------------------------------------------------------------------ */
/* Dados fictícios (nomes, telefones e e-mails inventados)              */
/* ------------------------------------------------------------------ */
const FIRST = ['Mariana', 'Rafael', 'Beatriz', 'Lucas', 'Joana', 'Pedro', 'Camila', 'Thiago', 'Larissa', 'Gustavo', 'Fernanda', 'Diego', 'Aline', 'Bruno', 'Patrícia', 'Rodrigo', 'Juliana', 'Eduardo', 'Renata', 'Marcelo', 'Vanessa', 'Felipe', 'Priscila', 'André'];
const LAST = ['Couto', 'Nunes', 'Lima', 'Ferraz', 'Prado', 'Albuquerque', 'Rocha', 'Teixeira', 'Barros', 'Moura', 'Siqueira', 'Pacheco', 'Antunes', 'Viana', 'Queiroz', 'Freitas'];
const ORGS = ['Clínica Sorriso Pleno', 'Studio Bem Estar', 'Odonto Vida Santos', 'Instituto Pele Viva'];
export const STAGES: [string, string][] = [['Lead', 'primary'], ['Lead quente', 'warning'], ['Agendado', 'info'], ['Compareceu', 'success'], ['Contrato', 'success'], ['Sem etapa', 'neutral']];
export const TAGS: [string, string][] = [['Lead quente', 'danger'], ['Retorno', 'warning'], ['Cliente', 'success'], ['Indicação', 'primary'], ['Campanha outubro', 'neutral'], ['Implante', 'neutral'], ['Clareamento', 'neutral']];
export const OWNERS = ['Ana Ribeiro', 'Bruno Sales', 'Carla Mendes', 'Diego Torres'];
const QUEUES = ['Recepção', 'Agendamentos', 'Comercial', 'Pós-venda'];
const CHANNELS = ['WhatsApp API', 'WhatsApp API', 'WhatsApp Web', 'Instagram'];
const STATUSES: [string, string][] = [['Em atendimento', 'primary'], ['Pendente', 'warning'], ['Concluído', 'success'], ['Sem WhatsApp', 'danger']];
const UPDATED = ['há 2 min', 'há 5 min', 'há 18 min', 'há 1 h', 'há 3 h', 'ontem', '04/10', '03/10', '01/10', '28/09'];

function strip(s: string) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }

export interface Contact { id: string; name: string; phone: string; email: string; channel: string; stage: string; stageTone: string; tags: [string, string][]; owner: string; queue: string; value: number; updated: string; status: string; statusTone: string; isNew?: boolean }

export const CONTACTS: Contact[] = Array.from({ length: 48 }, (_, i) => {
  const org = i % 12 === 7 ? ORGS[(i / 12) | 0] : null;
  const name = org || `${FIRST[i % FIRST.length]} ${LAST[(i * 7 + 3) % LAST.length]}`;
  const st = STAGES[(i * 5 + 1) % STAGES.length];
  const ss = i % 11 === 4 ? STATUSES[3] : STATUSES[(i * 2 + (i >> 2)) % 3];
  const tags: [string, string][] = [];
  if (i % 3 === 0) tags.push(TAGS[(i / 3) % TAGS.length | 0]);
  if (i % 4 === 1) tags.push(TAGS[4]);
  if (i % 5 === 2 && !tags.find((t) => t[0] === TAGS[1][0])) tags.push(TAGS[1]);
  const n = 1001 + i * 137;
  const ddd = i % 6 === 5 ? '11' : '13';
  return {
    id: `c${i + 1}`,
    name,
    phone: org ? `+55 (${ddd}) 3300-${String(1100 + i * 7).slice(-4)}` : `+55 (${ddd}) 99700-${String(n).slice(-4)}`,
    email: i % 7 === 3 ? '' : `${strip(name).replace(/[^a-z ]/g, '').split(' ').slice(0, 2).join('.')}@${org ? 'empresa.com.br' : 'email.com'}`,
    channel: CHANNELS[(i * 3 + 1) % CHANNELS.length],
    stage: st[0], stageTone: st[1], tags,
    owner: OWNERS[(i * 3) % OWNERS.length],
    queue: QUEUES[(i * 5) % QUEUES.length],
    value: st[0] === 'Contrato' ? 4800 + ((i * 731) % 9000) : st[0] === 'Compareceu' ? 850 + ((i * 97) % 1500) : i % 4 === 0 ? 500 : 0,
    updated: UPDATED[i % UPDATED.length],
    status: ss[0], statusTone: ss[1],
  };
});

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */
export const NAV = [
  { items: [{ id: 'inicio', label: 'Início', icon: 'house' }, { id: 'central', label: 'Atendimento', icon: 'message-square', badge: 7 }] },
  { label: 'Relacionamento', items: [
    { id: 'contatos', label: 'Contatos', icon: 'contact', children: [{ id: 'lista', label: 'Lista de contatos' }, { id: 'etapas', label: 'Etapas (kanban)' }, { id: 'etiquetas', label: 'Etiquetas' }] },
    { id: 'filas', label: 'Filas e equipes', icon: 'headset' },
    { id: 'massa', label: 'Mensagens em massa', icon: 'send' },
  ] },
  { label: 'Automação', items: [
    { id: 'integracoes', label: 'Integrações', icon: 'workflow' },
    { id: 'ia', label: 'Automações e IA', icon: 'bot', locked: true, lockedHint: 'Disponível no plano Pro' },
    { id: 'relatorios', label: 'Relatórios', icon: 'chart-column' },
  ] },
  { label: 'Conta', items: [{ id: 'empresa', label: 'Minha empresa', icon: 'building' }, { id: 'plano', label: 'Meu plano', icon: 'credit-card' }, { id: 'ajuda', label: 'Ajuda', icon: 'circle-question-mark' }] },
];
export const USER = { name: 'Ana Ribeiro', org: 'Clínica Sorriso Pleno', status: 'online' as const };

export function NavFooter() {
  return (
    <>
      <IconButton icon="user" label="Meu perfil" size="sm" />
      <IconButton icon="moon" label="Alternar tema" size="sm" />
      <IconButton icon="bell" label="Notificações" size="sm" badge={12} />
      <IconButton icon="settings" label="Configurações" size="sm" />
      <IconButton icon="log-out" label="Sair" size="sm" />
    </>
  );
}

/** Moldura de tela: tema próprio, menu lateral e área principal rolável. */
export function AppFrame({ theme, current, width = 1280, height = 1080, label, children }: { theme: string; current: string; width?: number; height?: number; label: string; children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [cur, setCur] = React.useState(current);
  return (
    <div className="scr-frame" data-theme={theme} style={{ width, height }} role="region" aria-label={label}>
      <Sidebar groups={NAV} current={cur} onNavigate={setCur} collapsed={collapsed} onCollapsedChange={setCollapsed} logoSrc={theme === 'dark' ? LOGO_W : LOGO} user={USER} footerActions={<NavFooter />} />
      <main className="scr-main">{children}</main>
    </div>
  );
}

export const SCREEN_CSS = `
.scr-label{font-size:12px;line-height:16px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-tertiary);margin:32px 0 12px;display:flex;gap:8px;align-items:center}
.scr-label:first-child{margin-top:0}
.scr-label span{font-weight:400;letter-spacing:0;text-transform:none;color:var(--text-secondary)}
.scr-frame{position:relative;display:flex;overflow:hidden;background:var(--bg-page);color:var(--text);border:1px solid var(--border);border-radius:12px;font-family:var(--font-sans);box-shadow:0 1px 3px rgba(1,20,31,.08)}
.scr-frame .tou-nav{flex:none}
.scr-main{flex:1;min-width:0;overflow:auto;padding:32px;display:flex;flex-direction:column;gap:24px}
.scr-phone{position:relative;display:flex;flex-direction:column;overflow:hidden;background:var(--bg-page);color:var(--text);border:1px solid var(--border);border-radius:28px;font-family:var(--font-sans)}
.scr-appbar{flex:none;display:flex;align-items:center;justify-content:space-between;gap:8px;height:56px;padding:0 8px;background:var(--bg-surface);border-bottom:1px solid var(--border)}
.scr-appbar img{height:22px;display:block}
.scr-phone .scr-main{padding:16px;gap:16px}
.scr-plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;align-items:stretch}
.scr-price{display:flex;align-items:baseline;gap:4px;margin:4px 0 12px}
.scr-price b{font-size:30px;line-height:38px;font-weight:600;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.scr-price span{color:var(--text-secondary);font-size:13px;line-height:18px}
.scr-feats{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
.scr-feats li{display:flex;gap:8px;align-items:flex-start}
.scr-feats li .tou-icon{color:var(--text-brand);margin-top:2px}
.scr-feats li.off{color:var(--text-tertiary)}
.scr-feats li.off .tou-icon{color:var(--text-tertiary)}
.scr-usage{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
.scr-row{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.scr-h2{margin:0;font-size:24px;line-height:32px;font-weight:600;letter-spacing:-.01em}
.scr-toast{position:absolute;right:24px;bottom:24px;width:360px;z-index:60}
.scr-cell-yes{display:inline-flex;align-items:center;gap:6px;color:var(--text)}
.scr-cell-yes .tou-icon{color:var(--success)}
.scr-cell-no{display:inline-flex;align-items:center;gap:6px;color:var(--text-tertiary)}
`;

/* ------------------------------------------------------------------ */
/* Colunas da tabela                                                   */
/* ------------------------------------------------------------------ */
const CH_ICON: Record<string, string> = { Instagram: 'image' };
export const ROW_MENU = [
  { id: 'abrir', label: 'Abrir conversa', icon: 'message-square' },
  { id: 'editar', label: 'Editar contato', icon: 'pencil' },
  { id: 'etiqueta', label: 'Adicionar etiqueta', icon: 'tag' },
  { id: 'transferir', label: 'Transferir', icon: 'arrow-up-down' },
  { id: 'excluir', label: 'Excluir contato', icon: 'trash', danger: true, separator: true },
];

export function contactColumns() {
  return [
    {
      key: 'name', header: 'Contato', sortable: true, mobile: 'title',
      render: (r: Contact) => (
        <span className="tou-cell-person">
          <Avatar name={r.name} size="sm" />
          <span className="tou-cell-person__text">
            <span className="tou-cell-person__name">{r.name}{r.isNew ? <> <Badge tone="primary">Novo</Badge></> : null}</span>
            <span className="tou-cell-person__meta"><Icon name={CH_ICON[r.channel] || 'message-circle'} size={12} />{r.channel}</span>
          </span>
        </span>
      ),
    },
    { key: 'phone', header: 'WhatsApp', mobile: 'row', render: (r: Contact) => <span className="tou-mono">{r.phone}</span> },
    { key: 'stage', header: 'Etapa', sortable: true, mobile: 'row', render: (r: Contact) => (r.stage === 'Sem etapa' ? <span className="tou-cell-muted">Sem etapa</span> : <Badge tone={r.stageTone}>{r.stage}</Badge>) },
    { key: 'status', header: 'Atendimento', mobile: 'row', render: (r: Contact) => <StatusDot tone={r.statusTone}>{r.status}</StatusDot> },
    { key: 'tags', header: 'Etiquetas', mobile: 'tags', render: (r: Contact) => (r.tags.length ? <span className="tou-cell-tags">{r.tags.slice(0, 2).map(([t, tone]) => <Tag key={t} size="sm" tone={tone}>{t}</Tag>)}{r.tags.length > 2 ? <Tag size="sm">+{r.tags.length - 2}</Tag> : null}</span> : <span className="tou-cell-muted">Sem etiquetas</span>) },
    { key: 'owner', header: 'Responsável', sortable: true, mobile: 'hidden', render: (r: Contact) => <span style={{ whiteSpace: 'nowrap' }}>{r.owner.split(' ')[0]}</span> },
    { key: 'updated', header: 'Atualizado', mobile: 'hidden', render: (r: Contact) => <span className="tou-cell-muted" style={{ whiteSpace: 'nowrap' }}>{r.updated}</span> },
  ];
}

export const FILTER_GROUPS = [
  { id: 'tags', label: 'Etiquetas', options: TAGS.map(([t]) => ({ value: t, label: t })) },
  { id: 'stage', label: 'Etapa', options: STAGES.map(([s]) => ({ value: s, label: s })) },
  { id: 'channel', label: 'Canal', options: [{ value: 'WhatsApp API', label: 'WhatsApp API' }, { value: 'WhatsApp Web', label: 'WhatsApp Web' }, { value: 'Instagram', label: 'Instagram' }] },
  { id: 'owner', label: 'Responsável', options: OWNERS.map((o) => ({ value: o, label: o })) },
];

function applyFilters(rows: Contact[], q: string, f: Record<string, string[]>, quick: string[]) {
  const nq = strip(q.trim());
  const digits = q.replace(/\D/g, '');
  return rows.filter((r) => {
    if (nq && !(strip(r.name).includes(nq) || strip(r.email).includes(nq) || (digits.length >= 3 && r.phone.replace(/\D/g, '').includes(digits)))) return false;
    if (f.tags?.length && !r.tags.some(([t]) => f.tags.includes(t))) return false;
    if (f.stage?.length && !f.stage.includes(r.stage)) return false;
    if (f.channel?.length && !f.channel.includes(r.channel)) return false;
    if (f.owner?.length && !f.owner.includes(r.owner)) return false;
    if (quick.includes('atendimento') && r.status !== 'Em atendimento') return false;
    if (quick.includes('pendente') && r.status !== 'Pendente') return false;
    if (quick.includes('semwa') && r.status !== 'Sem WhatsApp') return false;
    return true;
  });
}

/* ------------------------------------------------------------------ */
/* Formulário "Novo contato"                                           */
/* ------------------------------------------------------------------ */
export interface FormState { name: string; phone: string; doc: string; email: string; cep: string; value: string; stage: string; tags: string[]; owner: string | null; birth: Date | null; notes: string }
export const EMPTY_FORM: FormState = { name: '', phone: '', doc: '', email: '', cep: '', value: '', stage: 'Lead', tags: [], owner: null, birth: null, notes: '' };

function maskPhone(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function maskDoc(v: string) {
  const d = v.replace(/\D/g, '').slice(0, 14);
  if (d.length <= 11) return d.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return d.replace(/^(\d{2})(\d)/, '$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3').replace(/\.(\d{3})(\d)/, '.$1/$2').replace(/(\d{4})(\d)/, '$1-$2');
}
function maskCep(v: string) { const d = v.replace(/\D/g, '').slice(0, 8); return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d; }

export function validate(f: FormState): Record<string, string> {
  const e: Record<string, string> = {};
  if (!f.name.trim()) e.name = 'Digite o nome do contato.';
  else if (f.name.trim().length < 2) e.name = 'Use pelo menos 2 letras.';
  const pd = f.phone.replace(/\D/g, '');
  if (!pd) e.phone = 'Digite o número do WhatsApp com DDD.';
  else if (pd.length < 10) e.phone = 'Número incompleto: digite o DDD e o número (10 ou 11 dígitos).';
  else if (CONTACTS.some((c) => c.phone.replace(/\D/g, '').endsWith(pd))) e.phone = 'Já existe um contato com este número.';
  const dd = f.doc.replace(/\D/g, '');
  if (dd && dd.length !== 11 && dd.length !== 14) e.doc = 'Use 11 dígitos para CPF ou 14 para CNPJ.';
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email)) e.email = 'Digite um e-mail completo, como nome@empresa.com.';
  const cd = f.cep.replace(/\D/g, '');
  if (cd && cd.length !== 8) e.cep = 'O CEP tem 8 dígitos.';
  return e;
}

const LABELS: Record<string, string> = { name: 'Nome', phone: 'Número do WhatsApp', doc: 'CPF ou CNPJ', email: 'E-mail', cep: 'CEP' };

export function NewContactModal({ open, onClose, onSaved, initial = EMPTY_FORM, submitted: submittedInit = false, saving: savingInit = false, contained = true, fullScreen }: { open: boolean; onClose: () => void; onSaved?: (c: Contact) => void; initial?: FormState; submitted?: boolean; saving?: boolean; contained?: boolean; fullScreen?: boolean }) {
  const [f, setF] = React.useState<FormState>(initial);
  const [submitted, setSubmitted] = React.useState(submittedInit);
  const [saving, setSaving] = React.useState(savingInit);
  const errs = submitted ? validate(f) : {};
  const n = Object.keys(errs).length;
  const set = (k: keyof FormState) => (e: any) => setF({ ...f, [k]: e?.target ? e.target.value : e });
  const save = () => {
    setSubmitted(true);
    const e = validate(f);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      setTimeout(() => (document.querySelector(`[data-field="${first}"] input`) as HTMLElement | null)?.focus(), 0);
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      const st = STAGES.find((s) => s[0] === f.stage) || STAGES[0];
      onSaved?.({ id: `n${Date.now()}`, name: f.name.trim(), phone: `+55 ${f.phone}`, email: f.email, channel: 'WhatsApp API', stage: st[0], stageTone: st[1], tags: f.tags.map((t) => TAGS.find((x) => x[0] === t) || [t, 'neutral']) as any, owner: f.owner ? OWNERS.find((o) => o.toLowerCase().startsWith(f.owner!)) || OWNERS[0] : OWNERS[0], queue: 'Recepção', value: +f.value.replace(/\D/g, '') / 100 || 0, updated: 'agora', status: 'Pendente', statusTone: 'warning', isNew: true });
      setF(EMPTY_FORM); setSubmitted(false);
    }, 900);
  };
  return (
    <Modal open={open} onClose={saving ? undefined : onClose} contained={contained} fullScreen={fullScreen} closeOnOverlay={false} size="md" title="Novo contato" subtitle={fullScreen ? undefined : 'O contato entra na etapa escolhida e já pode receber mensagens.'}
      footerStart={fullScreen ? undefined : n ? <span style={{ color: 'var(--danger)', display: 'inline-flex', gap: 6, alignItems: 'center' }} role="alert"><Icon name="circle-alert" size={14} />{n === 1 ? `1 campo precisa de atenção: ${LABELS[Object.keys(errs)[0]]}` : `${n} campos precisam de atenção`}</span> : '* campos obrigatórios'}
      footer={<><Button variant="secondary" onClick={onClose} disabled={saving}>Cancelar</Button><Button iconStart={saving ? undefined : 'check'} loading={saving} onClick={save}>{saving ? 'Adicionando…' : 'Adicionar contato'}</Button></>}>
      <form className="tou-form-grid" noValidate onSubmit={(e: any) => { e.preventDefault(); save(); }}>
        <div className="tou-span-2" data-field="name"><TextField label="Nome" required autoComplete="off" placeholder="Ex.: Mariana Couto" value={f.name} onChange={set('name')} error={errs.name} /></div>
        <div data-field="phone"><TextField label="Número do WhatsApp" required inputMode="tel" placeholder="(13) 99999-9999" addonStart={<><span className="tou-mono">BR +55</span><Icon name="chevron-down" size={14} /></>} value={f.phone} onChange={(e: any) => setF({ ...f, phone: maskPhone(e.target.value) })} error={errs.phone} help={errs.phone ? undefined : 'Com DDD. Usamos para iniciar conversas.'} /></div>
        <div data-field="doc"><TextField label="CPF ou CNPJ" optional inputMode="numeric" placeholder="000.000.000-00" value={f.doc} onChange={(e: any) => setF({ ...f, doc: maskDoc(e.target.value) })} error={errs.doc} /></div>
        <div data-field="email"><TextField label="E-mail" optional type="email" icon="mail" placeholder="nome@empresa.com" value={f.email} onChange={set('email')} error={errs.email} /></div>
        <div data-field="cep"><TextField label="CEP" optional inputMode="numeric" placeholder="00000-000" value={f.cep} onChange={(e: any) => setF({ ...f, cep: maskCep(e.target.value) })} error={errs.cep} /></div>
        <Select label="Etapa do funil" options={STAGES.map(([s]) => ({ value: s, label: s }))} value={f.stage} onChange={set('stage')} />
        <Combobox label="Responsável" optional placeholder="Buscar atendente" options={OWNERS.map((o) => ({ value: o.split(' ')[0].toLowerCase(), label: o, meta: o === 'Diego Torres' ? 'Offline' : 'Online' }))} value={f.owner} onChange={(v: any) => setF({ ...f, owner: v })} />
        <MultiSelect className="tou-span-2" label="Etiquetas" optional placeholder="Adicionar etiquetas" options={TAGS.map(([t]) => ({ value: t, label: t }))} value={f.tags} onChange={set('tags')} />
        <TextField label="Valor do negócio" optional prefix="R$" inputMode="decimal" placeholder="0,00" value={f.value} onChange={set('value')} />
        <DateField label="Data de nascimento" optional today={TODAY} value={f.birth} onChange={set('birth')} help=" " />
      </form>
    </Modal>
  );
}

/* ------------------------------------------------------------------ */
/* Tela: lista de contatos                                             */
/* ------------------------------------------------------------------ */
export interface ContactsProps {
  theme: string;
  startQuery?: string;
  startFilters?: Record<string, string[]>;
  startQuick?: string[];
  startSelected?: string[];
  /** Seleciona as linhas N (índices na 1ª página) ao abrir. */
  startSelectIdx?: number[];
  startPage?: number;
  startModal?: boolean;
  modalInitial?: FormState;
  modalSubmitted?: boolean;
  modalSaving?: boolean;
  startToast?: boolean;
  mobile?: boolean;
  startDrawer?: boolean;
  label: string;
  width?: number;
  height?: number;
}

export function ContactsScreen(p: ContactsProps) {
  const [rows, setRows] = React.useState<Contact[]>(p.startToast ? [{ ...CONTACTS[3], id: 'n1', name: 'Lucas Ferraz', phone: '+55 (13) 99700-4410', email: 'lucas.ferraz@email.com', stage: 'Lead', stageTone: 'primary', tags: [TAGS[3]], owner: OWNERS[0], status: 'Pendente', statusTone: 'warning', updated: 'agora', isNew: true }, ...CONTACTS] : CONTACTS);
  const [q, setQ] = React.useState(p.startQuery || '');
  const [filters, setFilters] = React.useState<Record<string, string[]>>(p.startFilters || {});
  const [quick, setQuick] = React.useState<string[]>(p.startQuick || []);
  const [sort, setSort] = React.useState<any>({ key: 'name', dir: 'asc' });
  const [sel, setSel] = React.useState<string[]>(() => {
    if (!p.startSelectIdx) return p.startSelected || [];
    const base = applyFilters(CONTACTS, p.startQuery || '', p.startFilters || {}, p.startQuick || []).sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    return p.startSelectIdx.map((i) => base[i]?.id).filter(Boolean) as string[];
  });
  const [page, setPage] = React.useState(p.startPage || 1);
  const size = p.mobile ? 4 : 10;
  const [modal, setModal] = React.useState(!!p.startModal);
  const [toast, setToast] = React.useState<any>(p.startToast ? { title: 'Contato adicionado', description: 'Lucas Ferraz entrou na etapa Lead.' } : null);
  const [confirm, setConfirm] = React.useState<null | { ids: string[]; label: string }>(null);
  const [drawer, setDrawer] = React.useState(!!p.startDrawer);
  React.useEffect(() => setPage(1), [q, filters, quick]);
  const filtered = applyFilters(rows, q, filters, quick);
  const sorted = [...filtered].sort((a: any, b: any) => {
    if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
    if (!sort) return 0;
    const r = String(a[sort.key]).localeCompare(String(b[sort.key]), 'pt-BR');
    return sort.dir === 'asc' ? r : -r;
  });
  const pageRows = sorted.slice((page - 1) * size, page * size);
  const count = (pred: (c: Contact) => boolean) => rows.filter(pred).length;
  const quickF = [
    { id: 'atendimento', label: 'Em atendimento', count: count((c) => c.status === 'Em atendimento') },
    { id: 'pendente', label: 'Pendentes', count: count((c) => c.status === 'Pendente') },
    { id: 'semwa', label: 'Sem WhatsApp', count: count((c) => c.status === 'Sem WhatsApp') },
  ];
  const hasFilters = !!q || quick.length > 0 || Object.values(filters).some((v) => v.length);
  const clearAll = () => { setQ(''); setFilters({}); setQuick([]); };
  const onRow = (id: string, r: Contact) => { if (id === 'excluir') setConfirm({ ids: [r.id], label: r.name }); };
  const cols = contactColumns().filter((c) => !p.mobile || c.mobile !== 'hidden');
  const empty = hasFilters ? (
    <EmptyState compact icon="search-x" tone="neutral" title="Nenhum contato com esses filtros" description={q ? `Nada corresponde a “${q}”. Confira a grafia ou remova algum filtro.` : 'Remova algum filtro para ver mais contatos.'} actions={<Button variant="secondary" size="sm" iconStart="funnel-x" onClick={clearAll}>Limpar filtros</Button>} />
  ) : (
    <EmptyState icon="user-plus" title="Você ainda não tem contatos" description="Importe uma planilha ou adicione o primeiro contato." actions={<Button iconStart="plus" onClick={() => setModal(true)}>Adicionar contato</Button>} />
  );
  const importMenu = (
    <Menu align="end" onSelect={() => {}} items={[{ id: 'imp', label: 'Importar planilha', icon: 'upload' }, { id: 'csv', label: 'Exportar CSV', icon: 'download', separator: true }, { id: 'xlsx', label: 'Exportar .xlsx', icon: 'download' }]}
      trigger={p.mobile ? <IconButton icon="ellipsis-vertical" label="Importar ou exportar" variant="default" /> : <Button variant="secondary" iconStart="arrow-up-down" iconEnd="chevron-down">Importar / exportar</Button>} />
  );
  const content = (
    <>
      <PageHeader title="Contatos" count={rows.length} subtitle="Todos que já falaram com a clínica por WhatsApp ou Instagram."
        actions={<>{importMenu}{p.mobile ? <IconButton icon="user-plus" label="Adicionar contato" variant="tonal" onClick={() => setModal(true)} /> : <Button iconStart="plus" onClick={() => setModal(true)}>Adicionar contato</Button>}</>} />
      <FilterBar query={q} onQueryChange={setQ} searchLabel="Buscar contatos" searchPlaceholder={p.mobile ? 'Buscar contatos' : 'Buscar por nome, telefone ou e-mail'} groups={FILTER_GROUPS} value={filters} onChange={setFilters} quickFilters={quickF} quickValue={quick} onQuickChange={setQuick} />
      <DataTable
        caption="Contatos"
        columns={cols}
        rows={pageRows}
        rowKey={(r: Contact) => r.id}
        density="comfortable"
        layout={p.mobile ? 'cards' : 'table'}
        selectable
        selected={sel}
        onSelectionChange={setSel}
        bulkActions={p.mobile ? <Button variant="secondary" size="sm" iconStart="tag">Etiquetar</Button> : <><Button variant="secondary" size="sm" iconStart="tag">Etiquetar</Button><Button variant="secondary" size="sm" iconStart="send">Enviar mensagem</Button><Button variant="secondary" size="sm" iconStart="arrow-up-down">Transferir</Button><Button variant="tertiary" size="sm" iconStart="trash" onClick={() => setConfirm({ ids: sel, label: `${sel.length} contatos` })}>Excluir</Button></>}
        sort={sort}
        onSortChange={setSort}
        rowActions={(r: Contact) => <Menu align="end" items={ROW_MENU} onSelect={(id: string) => onRow(id, r)} trigger={<IconButton icon="ellipsis-vertical" label={`Mais ações para ${r.name}`} size="sm" />} />}
        empty={empty}
        pagination={{ page, pageSize: size, total: filtered.length, onPageChange: setPage, itemLabel: 'contatos' }}
      />
    </>
  );
  const overlays = (
    <>
      <NewContactModal open={modal} onClose={() => setModal(false)} initial={p.modalInitial} submitted={p.modalSubmitted} saving={p.modalSaving} fullScreen={p.mobile}
        onSaved={(c) => { setRows([c, ...rows]); setModal(false); setToast({ title: 'Contato adicionado', description: `${c.name} entrou na etapa ${c.stage}.` }); }} />
      <ConfirmDialog contained open={!!confirm} onClose={() => setConfirm(null)} title={`Excluir ${confirm?.ids.length === 1 ? confirm.label : confirm?.label}?`} description="As conversas e o histórico também serão excluídos. Não dá para desfazer." confirmLabel={confirm?.ids.length === 1 ? 'Excluir contato' : `Excluir ${confirm?.ids.length} contatos`}
        onConfirm={() => { const ids = confirm!.ids; setRows(rows.filter((r) => !ids.includes(r.id))); setSel(sel.filter((s) => !ids.includes(s))); setConfirm(null); setToast({ title: ids.length === 1 ? 'Contato excluído' : `${ids.length} contatos excluídos`, tone: 'success' }); }} />
      {toast ? <div className="scr-toast" style={p.mobile ? { left: 16, right: 16, bottom: 16, width: 'auto' } : undefined}><Toast tone={toast.tone || 'success'} title={toast.title} description={toast.description} onClose={() => setToast(null)} duration={p.startToast ? 0 : 5000} /></div> : null}
    </>
  );
  if (p.mobile) {
    return (
      <div className="scr-phone" data-theme={p.theme} style={{ width: p.width || 375, height: p.height || 812 }} role="region" aria-label={p.label}>
        <div className="scr-appbar">
          <IconButton icon="panel-left-open" label="Abrir menu" onClick={() => setDrawer(true)} />
          <img src={p.theme === 'dark' ? LOGO_W : LOGO} alt="TOU" />
          <IconButton icon="bell" label="Notificações" badge={12} />
        </div>
        <main className="scr-main">{content}</main>
        <Drawer contained bare side="left" open={drawer} onClose={() => setDrawer(false)} title="Menu principal">
          <Sidebar groups={NAV} current="lista" logoSrc={p.theme === 'dark' ? LOGO_W : LOGO} user={USER} onClose={() => setDrawer(false)} footerActions={<NavFooter />} />
        </Drawer>
        {overlays}
      </div>
    );
  }
  return (
    <AppFrame theme={p.theme} current="lista" label={p.label} width={p.width} height={p.height}>
      {content}
      {overlays}
    </AppFrame>
  );
}
