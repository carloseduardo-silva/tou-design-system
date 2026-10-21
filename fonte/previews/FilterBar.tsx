import { T, Themes, H, mount } from './_doc';
const { FilterBar, SegmentedControl } = T;

const GROUPS = [
  { id: 'tags', label: 'Etiquetas', options: [{ value: 'quente', label: 'Lead quente' }, { value: 'retorno', label: 'Retorno' }, { value: 'cliente', label: 'Cliente' }, { value: 'indicacao', label: 'Indicação' }] },
  { id: 'etapa', label: 'Etapa', options: [{ value: 'lead', label: 'Lead' }, { value: 'agendado', label: 'Agendado' }, { value: 'compareceu', label: 'Compareceu' }, { value: 'contrato', label: 'Contrato' }] },
  { id: 'canal', label: 'Canal', options: [{ value: 'wa-api', label: 'WhatsApp API' }, { value: 'wa-web', label: 'WhatsApp Web' }, { value: 'ig', label: 'Instagram', meta: 'Requer integração Meta', disabled: true }] },
  { id: 'status', label: 'Status do atendimento', options: [{ value: 'aberto', label: 'Em atendimento' }, { value: 'pendente', label: 'Pendente' }, { value: 'concluido', label: 'Concluído' }] },
];
const QUICK = [{ id: 'ativos', label: 'WhatsApp ativo', count: 512 }, { id: 'hoje', label: 'Mensagens hoje', count: 38 }, { id: 'sem', label: 'Sem resposta', count: 12 }];

function Demo({ open, startValue = {}, startQuick = [] as string[], q = '' }: any) {
  const [query, setQuery] = React.useState(q);
  const [value, setValue] = React.useState(startValue);
  const [quick, setQuick] = React.useState(startQuick);
  const [view, setView] = React.useState('lista');
  return (
    <FilterBar
      query={query}
      onQueryChange={setQuery}
      searchLabel="Buscar contatos"
      groups={GROUPS}
      value={value}
      onChange={setValue}
      quickFilters={QUICK}
      quickValue={quick}
      onQuickChange={setQuick}
      open={open}
      openGroups={['tags']}
      end={<SegmentedControl label="Visualização" value={view} onChange={setView} options={[{ value: 'lista', label: 'Lista', icon: 'list' }, { value: 'kanban', label: 'Kanban', icon: 'square-kanban' }]} />}
    />
  );
}

mount(
  <Themes>
    {() => (
      <>
        <H>Sem filtros</H>
        <Demo />
        <H>Com busca, um atalho e filtros ativos (cada chip remove um filtro)</H>
        <Demo q="Mariana" startQuick={['hoje']} startValue={{ tags: ['quente', 'retorno'], etapa: ['compareceu'] }} />
        <H>Popover aberto: grupos em cima (rascunho até "Aplicar filtros"), atalhos embaixo (aplicam ao clicar)</H>
        <div style={{ minHeight: 660 }}>
          <Demo open startQuick={['hoje']} startValue={{ tags: ['quente'], canal: ['wa-api'] }} />
        </div>
      </>
    )}
  </Themes>,
);
