import { DOC_CSS } from './_doc';
export const MKT_CSS = DOC_CSS + `
body{padding:24px;background:var(--bg-page)}
.mk-l{font-size:11px;line-height:16px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-tertiary);margin:28px 0 10px}
.mk-l:first-child{margin-top:0}
.mk-frame{border:1px solid var(--border);border-radius:12px;overflow:hidden;background:var(--bg-surface)}
.mk-phone{width:375px;border:1px solid var(--border);border-radius:24px;overflow:hidden;background:var(--bg-surface);flex:none}
.mk-row{display:flex;gap:24px;align-items:flex-start;flex-wrap:wrap}
`;
export function mountMkt(node: React.ReactNode) {
  const s = document.createElement('style'); s.textContent = MKT_CSS; document.head.appendChild(s);
  document.documentElement.setAttribute('data-theme', 'light');
  ReactDOM.createRoot(document.getElementById('root')!).render(node);
}
export const L = ({ children }: { children: React.ReactNode }) => <p className="mk-l">{children}</p>;
export function Site({ children, mobile, h, pad }: { children: React.ReactNode; mobile?: boolean; h?: number; pad?: boolean }) {
  return <div className={mobile ? 'mk-phone' : 'mk-frame'} style={{ height: h, position: 'relative' }}><div className="tou-site" data-theme="light" style={{ position: 'relative', height: h ? '100%' : undefined, overflow: h ? 'hidden' : undefined, padding: pad ? (mobile ? '32px 0' : '48px 0') : undefined }}>{children}</div></div>;
}
