import { T, Themes, H, mount } from './_doc';
const { Pagination } = T;

function Demo(p: any) {
  const [page, setPage] = React.useState(p.page || 1);
  return <div className="doc-box" style={{ padding: '0 16px' }}><Pagination standalone itemLabel={p.itemLabel} total={p.total} page={page} pageSize={p.pageSize || 40} onPageChange={setPage} compact={p.compact} /></div>;
}

mount(
  <Themes>
    {() => (
      <>
        <H>Primeira, do meio e última página</H>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Demo total={52218} page={1} />
          <Demo total={52218} page={640} />
          <Demo total={52218} page={1306} />
          <Demo total={18} page={1} itemLabel="contatos" />
        </div>
        <p className="doc-note">Sem páginas numeradas nem seletor de linhas por página. Os botões desabilitados mostram onde não há para onde ir; cada um tem nome acessível ("Primeira página", "Próxima página").</p>
        <H>Compacta (celular e cards)</H>
        <div style={{ width: 343 }}><Demo total={52218} page={3} compact /></div>
      </>
    )}
  </Themes>,
);
