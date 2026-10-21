import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { LOGO } from './_app';
const { SiteFooter } = T;
const props = {
  logoSrc: LOGO, tagline: 'CRM de atendimento e vendas pelo WhatsApp para clínicas e empresas.',
  columns: [
    { title: 'Produto', links: [{ label: 'Recursos', href: '#' }, { label: 'Integrações', href: '#' }, { label: 'Planos', href: '#' }] },
    { title: 'Empresa', links: [{ label: 'Sobre a TOU', href: '#' }, { label: 'Clientes', href: '#' }, { label: 'Contato', href: '#' }] },
    { title: 'Suporte', links: [{ label: 'Central de ajuda', href: '#' }, { label: 'Status da plataforma', href: '#' }] },
  ],
  legal: '© 2026 TOU · Two of Us. Todos os direitos reservados.', bottomLinks: [{ label: 'Termos de uso', href: '#' }, { label: 'Privacidade', href: '#' }],
};
mountMkt(<>
  <L>Desktop</L>
  <Site><SiteFooter {...props} /></Site>
  <L>Celular: links com 44px de alvo</L>
  <Site mobile><SiteFooter {...props} /></Site>
</>);
