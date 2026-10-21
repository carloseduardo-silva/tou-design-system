import { T, Themes, H, mount } from './_doc';
const { Skeleton } = T;

function ConvRow() {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
      <Skeleton variant="circle" width={40} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="45%" />
        <Skeleton variant="text" width="80%" />
      </div>
      <Skeleton variant="text" width={40} />
    </div>
  );
}

mount(
  <Themes>
    {() => (
      <div className="doc-grid2">
        <div>
          <H>Lista de conversas</H>
          <div className="doc-box" style={{ paddingTop: 0, paddingBottom: 0 }} role="status" aria-busy="true" aria-label="Carregando conversas"><ConvRow /><ConvRow /><ConvRow /></div>
        </div>
        <div>
          <H>Card</H>
          <div className="doc-box" role="status" aria-busy="true" aria-label="Carregando métrica">
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="title" width="60%" height={32} />
            <Skeleton variant="block" width="100%" height={72} />
          </div>
          <p className="doc-note">O brilho para com "reduzir movimento". O container leva aria-busy e um rótulo.</p>
        </div>
      </div>
    )}
  </Themes>,
);
