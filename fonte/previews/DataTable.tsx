import { T, Themes, H, mount, CONTACTS } from './_doc';
import { columns, actions, detail } from './_rows';
const { DataTable, EmptyState, Button } = T;

function Live({ density = 'comfortable', hover, startSel = [] as string[], startExp = [] as string[], sort = { key: 'name', dir: 'asc' } as any, layout = 'table' }) {
  const [sel, setSel] = React.useState(startSel);
  const [exp, setExp] = React.useState(startExp);
  const [s, setS] = React.useState(sort);
  const [page, setPage] = React.useState(1);
  const rows = [...CONTACTS].sort((a: any, b: any) => {
    if (!s) return 0;
    const va = a[s.key], vb = b[s.key];
    const r = typeof va === 'number' ? va - vb : String(va).localeCompare(String(vb), 'pt-BR');
    return s.dir === 'asc' ? r : -r;
  });
  return (
    <DataTable
      caption="Contatos"
      columns={columns.filter((c: any) => (density === 'dense' ? !['updated', 'phone', 'status'].includes(c.key) : !['updated', 'tags'].includes(c.key)) || layout === 'cards')}
      rows={rows}
      rowKey={(r: any) => r.id}
      density={density}
      selectable
      selected={sel}
      onSelectionChange={setSel}
      bulkActions={<><Button variant="secondary" size="sm" iconStart="tag">Etiquetar</Button><Button variant="secondary" size="sm" iconStart="send">Enviar mensagem</Button><Button variant="tertiary" size="sm" iconStart="trash">Excluir</Button></>}
      sort={s}
      onSortChange={setS}
      renderDetail={detail}
      expanded={exp}
      onExpandedChange={setExp}
      rowActions={actions}
      pagination={{ page, pageSize: 25, total: 667, onPageChange: setPage }}
      hoverRow={hover}
      layout={layout}
    />
  );
}

const empty = (
  <EmptyState compact icon="search-x" title="Nenhum contato com esses filtros" description="Remova algum filtro ou busque por outro nome." actions={<Button variant="secondary" size="sm" iconStart="funnel-x">Limpar filtros</Button>} />
);

mount(
  <Themes>
    {() => (
      <>
        <H>Confortável (56px): ordenada por nome, linha em hover, 2 selecionadas, 1 expandida</H>
        <Live hover="c3" startSel={['c1', 'c2']} startExp={['c2']} />
        <H>Densa (40px): uma linha de texto por célula, ordenada por valor (decrescente)</H>
        <Live density="dense" sort={{ key: 'value', dir: 'desc' }} />
        <div className="doc-grid2" style={{ marginTop: 4 }}>
          <div>
            <H>Carregando</H>
            <DataTable caption="Contatos" columns={columns.slice(0, 3)} rows={[]} rowKey={(r: any) => r.id} selectable loading layout="table" pagination={{ page: 1, pageSize: 4, total: 0 }} />
          </div>
          <div>
            <H>Vazio (estado compacto dentro da tabela)</H>
            <DataTable caption="Contatos" columns={columns.slice(0, 3)} rows={[]} rowKey={(r: any) => r.id} selectable layout="table" empty={empty} />
          </div>
        </div>
        <H>Mobile: vira lista de cards (abaixo de 768px de largura)</H>
        <div style={{ width: 360, maxWidth: '100%' }}>
          <Live layout="cards" startSel={['c1']} />
        </div>
      </>
    )}
  </Themes>,
);
