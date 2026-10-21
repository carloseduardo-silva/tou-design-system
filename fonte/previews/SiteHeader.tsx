import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { SITE_LINKS } from './_landing';
import { LOGO } from './_app';
const { SiteHeader } = T;
const cta = { label: 'Agendar demonstração' };
mountMkt(<>
  <L>Sobre fundo claro (fixo no topo ao rolar)</L>
  <Site><SiteHeader links={[{ ...SITE_LINKS[0], current: true }, ...SITE_LINKS.slice(1)]} logoSrc={LOGO} cta={cta} login={{ label: 'Entrar', href: '#' }} /></Site>
  <L>Sobre o hero escuro (transparente, tema marinho)</L>
  <Site><div data-theme="navy" style={{ background: 'var(--bg-page)', height: 88, position: 'relative' }}><SiteHeader overDark links={SITE_LINKS} logoSrc={LOGO} cta={cta} login={{ label: 'Entrar', href: '#' }} /></div></Site>
  <L>Celular: botão de menu de 44px; o painel abre embaixo, Esc fecha</L>
  <div className="mk-row">
    <Site mobile><SiteHeader links={SITE_LINKS} logoSrc={LOGO} cta={cta} /></Site>
    <Site mobile h={420}><SiteHeader links={SITE_LINKS} logoSrc={LOGO} cta={cta} login={{ label: 'Entrar', href: '#' }} defaultOpen /></Site>
  </div>
</>);
