import { T, Themes, H, mount } from './_doc';
const { SegmentedControl } = T;

function Demo(p: any) {
  const [v, setV] = React.useState(p.start);
  return <SegmentedControl {...p} value={v} onChange={setV} />;
}

mount(
  <Themes>
    {() => (
      <>
        <H>Selecionado, hover e foco</H>
        <div className="doc-flex" style={{ gap: 24 }}>
          <Demo label="Período" start="7d" stateClasses={{ '30d': 'is-hover', '90d': 'is-focus' }} options={[{ value: 'hoje', label: 'Hoje' }, { value: '7d', label: '7 dias' }, { value: '30d', label: '30 dias' }, { value: '90d', label: '90 dias' }]} />
          <Demo label="Visualização" start="lista" options={[{ value: 'lista', label: 'Lista', icon: 'list' }, { value: 'kanban', label: 'Kanban', icon: 'square-kanban' }]} />
          <Demo label="Visualização" start="lista" options={[{ value: 'lista', label: 'Lista', icon: 'list', hideLabel: true }, { value: 'kanban', label: 'Kanban', icon: 'square-kanban', hideLabel: true }]} />
        </div>
        <H>Pequeno e com opção desabilitada</H>
        <div className="doc-flex" style={{ gap: 24 }}>
          <Demo size="sm" label="Agrupar por" start="dia" options={[{ value: 'dia', label: 'Dia' }, { value: 'semana', label: 'Semana' }, { value: 'mes', label: 'Mês' }]} />
          <Demo label="Canal" start="wa" options={[{ value: 'wa', label: 'WhatsApp' }, { value: 'ig', label: 'Instagram', disabled: true }]} />
        </div>
      </>
    )}
  </Themes>,
);
