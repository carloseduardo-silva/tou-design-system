import { T, Themes, H, mount } from './_doc';
const { Avatar } = T;
const SIZES = ['xs', 'sm', 'md', 'lg'];
const PHOTO = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="#9CC5FF"/><circle cx="24" cy="19" r="9" fill="#0B3976"/><path d="M6 48c2-11 9-16 18-16s16 5 18 16z" fill="#0B3976"/></svg>');

mount(
  <Themes>
    {() => (
      <>
        <H>Iniciais, imagem e ícone · 24 · 32 · 40 · 48</H>
        <div style={{ display: 'grid', gridTemplateColumns: '96px repeat(4, max-content)', gap: '12px 24px', alignItems: 'center' }}>
          <span className="doc-rl">Iniciais</span>{SIZES.map((s) => <Avatar key={s} size={s} name="Mariana Couto" />)}
          <span className="doc-rl">Imagem</span>{SIZES.map((s) => <Avatar key={s} size={s} name="Rafael Nunes" src={PHOTO} />)}
          <span className="doc-rl">Sem nome</span>{SIZES.map((s) => <Avatar key={s} size={s} />)}
          <span className="doc-rl">Com status</span>{(['online', 'away', 'busy', 'offline'] as const).map((st, i) => <Avatar key={st} size={SIZES[i]} name="Ana Ribeiro" status={st} />)}
        </div>
        <p className="doc-note">A foto acima é um ilustrativo neutro. O status vem acompanhado de texto onde importa (lista de atendentes); no avatar ele também entra no nome acessível.</p>
      </>
    )}
  </Themes>,
);
