import { T, Themes, H, mount } from './_doc';
const { Spinner, Button } = T;

mount(
  <Themes>
    {() => (
      <>
        <H>Tamanhos 12 · 16 · 24 · 32 (herda a cor do texto)</H>
        <div className="doc-flex" style={{ gap: 24 }}>
          <Spinner size="sm" />
          <Spinner />
          <span style={{ color: 'var(--text-brand)' }}><Spinner size="lg" /></span>
          <span style={{ color: 'var(--text-secondary)' }}><Spinner size="xl" /></span>
          <span style={{ display: 'inline-flex', gap: 8, alignItems: 'center', color: 'var(--text-secondary)', fontSize: 13 }}><Spinner label="" />Sincronizando conversas…</span>
          <Button loading>Salvando…</Button>
          <Button variant="secondary" loading>Exportando…</Button>
        </div>
        <p className="doc-note">Com "reduzir movimento" o arco fica parado; o texto ao lado continua dizendo o que está carregando.</p>
      </>
    )}
  </Themes>,
);
