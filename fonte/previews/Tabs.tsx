import { T, Themes, H, mount } from './_doc';
const { Tabs } = T;

function Demo({ states }: { states?: Record<string, string> }) {
  const [v, setV] = React.useState('atendimento');
  return (
    <Tabs label="Conversas" value={v} onChange={setV} stateClasses={states} items={[
      { id: 'atendimento', label: 'Em atendimento', icon: 'message-square', count: 12 },
      { id: 'pendente', label: 'Pendentes', icon: 'clock', count: 7 },
      { id: 'concluido', label: 'Concluídas', icon: 'check', count: 3 },
      { id: 'arquivo', label: 'Arquivadas', disabled: true },
    ]} />
  );
}

mount(
  <Themes>
    {() => (
      <>
        <H>Ativa, padrão, desabilitada</H>
        <Demo />
        <H>Hover (Pendentes) e foco de teclado (Concluídas) — setas, Home e End navegam</H>
        <Demo states={{ pendente: 'is-hover', concluido: 'is-focus' }} />
      </>
    )}
  </Themes>,
);
