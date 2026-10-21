import { SCREEN_CSS } from './_app';
import { DOC_CSS } from './_doc';
export function mountScreen(node: React.ReactNode) {
  const style = document.createElement('style');
  style.textContent = DOC_CSS + SCREEN_CSS + 'body{padding:32px 40px 48px;background:var(--bg-page)}';
  document.head.appendChild(style);
  document.documentElement.setAttribute('data-theme', 'light');
  ReactDOM.createRoot(document.getElementById('root')!).render(node);
}
export function Label({ children, note }: { children: React.ReactNode; note?: string }) {
  return <p className="scr-label">{children}{note ? <span>· {note}</span> : null}</p>;
}
