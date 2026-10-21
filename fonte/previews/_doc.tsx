// Ajudantes só dos previews (não entram no bundle).
export const T: any = (window as any).TOU;

export const DOC_CSS = `
html,body{margin:0;background:var(--bg-page);}
body{font-family:var(--font-sans);color:var(--text);font-size:14px;line-height:20px;-webkit-font-smoothing:antialiased;}
.doc-theme{background:var(--bg-page);color:var(--text);padding:20px 24px 28px;}
.doc-theme+.doc-theme{border-top:1px solid var(--border);}
.doc-tl{display:flex;align-items:center;gap:8px;font-size:11px;line-height:16px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-tertiary);margin:0 0 16px;}
.doc-tl::after{content:"";flex:1;height:1px;background:var(--border);}
.doc-h{font-size:13px;line-height:18px;font-weight:600;color:var(--text-secondary);margin:20px 0 10px;}
.doc-h:first-of-type{margin-top:0;}
.doc-matrix{display:grid;gap:12px 16px;align-items:center;overflow-x:auto;padding:4px;margin:-4px;}
.doc-col{font-size:12px;line-height:16px;color:var(--text-tertiary);font-weight:500;}
.doc-rl{font-size:12px;line-height:16px;color:var(--text-secondary);font-weight:500;}
.doc-flex{display:flex;flex-wrap:wrap;gap:12px;align-items:center;}
.doc-flex-top{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start;}
.doc-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 24px;align-items:start;}
.doc-grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px 24px;align-items:start;}
.doc-grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px 20px;align-items:start;}
@media (max-width:720px){.doc-grid2,.doc-grid3,.doc-grid4{grid-template-columns:1fr;}}
.doc-cap{display:block;font-size:12px;line-height:16px;color:var(--text-tertiary);margin-top:6px;}
.doc-box{background:var(--bg-surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:16px;}
.doc-pad{padding-bottom:var(--doc-pad,0);}
.doc-note{font-size:12px;line-height:16px;color:var(--text-secondary);margin-top:12px;display:flex;gap:6px;align-items:flex-start;}
`;

export function Themes({ children, only }: { children: (theme: 'light' | 'dark') => React.ReactNode; only?: 'light' | 'dark' }) {
  const list: ('light' | 'dark')[] = only ? [only] : ['light', 'dark'];
  return (
    <>
      {list.map((t) => (
        <section key={t} className="doc-theme" data-theme={t} aria-label={t === 'light' ? 'Tema claro' : 'Tema escuro'}>
          <p className="doc-tl">{t === 'light' ? 'Claro' : 'Escuro'}</p>
          {children(t)}
        </section>
      ))}
    </>
  );
}

/** Matriz: linhas × colunas (estados). */
export function Matrix({ cols, rows, first = 112 }: { cols: string[]; rows: { label: string; cells: React.ReactNode[] }[]; first?: number }) {
  return (
    <div className="doc-matrix" style={{ gridTemplateColumns: `${first}px repeat(${cols.length}, max-content)` }}>
      <span />
      {cols.map((c) => <span key={c} className="doc-col">{c}</span>)}
      {rows.map((r) => (
        <React.Fragment key={r.label}>
          <span className="doc-rl">{r.label}</span>
          {r.cells.map((c, i) => <span key={i}>{c}</span>)}
        </React.Fragment>
      ))}
    </div>
  );
}

export function H({ children }: { children: React.ReactNode }) { return <p className="doc-h">{children}</p>; }

export function mount(node: React.ReactNode) {
  const el = document.getElementById('root')!;
  const style = document.createElement('style');
  style.textContent = DOC_CSS;
  document.head.appendChild(style);
  ReactDOM.createRoot(el).render(node);
}

export const STATES = ['Padrão', 'Hover', 'Foco (teclado)', 'Pressionado', 'Desabilitado'];
export const ST = ['', 'is-hover', 'is-focus', 'is-active'];

/** Dados realistas de CRM. */
export const CONTACTS = [
  { id: 'c1', name: 'Mariana Couto', phone: '+55 (13) 99700-1201', email: 'mariana.couto@email.com', channel: 'WhatsApp API', stage: 'Compareceu', stageTone: 'success', tags: [['Lead quente', 'danger'], ['Campanha outubro', 'neutral']], owner: 'Ana', queue: 'Agendamentos', value: 1850, updated: 'há 5 min', status: 'Em atendimento' },
  { id: 'c2', name: 'Rafael Nunes', phone: '+55 (13) 99700-3415', email: 'rafael.nunes@email.com', channel: 'WhatsApp API', stage: 'Lead', stageTone: 'primary', tags: [['Retorno', 'warning']], owner: 'Bruno', queue: 'Comercial', value: 500, updated: 'há 2 h', status: 'Pendente' },
  { id: 'c3', name: 'Beatriz Lima', phone: '+55 (11) 99700-5520', email: '', channel: 'Instagram', stage: 'Lead', stageTone: 'primary', tags: [['Campanha outubro', 'neutral']], owner: 'Carla', queue: 'Comercial', value: 0, updated: 'ontem', status: 'Pendente' },
  { id: 'c4', name: 'Clínica Sorriso Pleno', phone: '+55 (13) 3300-1100', email: 'contato@sorrisopleno.com.br', channel: 'WhatsApp Web', stage: 'Contrato', stageTone: 'success', tags: [['Cliente', 'success'], ['Indicação', 'neutral']], owner: 'Ana', queue: 'Pós-venda', value: 12400, updated: '03/10', status: 'Concluído' },
  { id: 'c5', name: 'Joana Prado', phone: '+55 (13) 99700-8834', email: 'joana.prado@email.com', channel: 'WhatsApp API', stage: 'Sem etapa', stageTone: 'neutral', tags: [], owner: '—', queue: 'Recepção', value: 0, updated: '01/10', status: 'Sem WhatsApp' },
];

export const TODAY = new Date(2026, 9, 6);
