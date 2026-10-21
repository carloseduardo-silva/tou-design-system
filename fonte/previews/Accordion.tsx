import { T, Themes, mount } from './_doc';
const { Accordion } = T;

function Demo() {
  const [v, setV] = React.useState(['horario']);
  return (
    <Accordion value={v} onChange={setV} stateClasses={{ distribuicao: 'is-hover', mensagens: 'is-focus' }} items={[
      { id: 'horario', title: 'Horário de trabalho', meta: 'Seg a sex, 08:00–18:00', content: 'Fora deste horário, novas conversas recebem a mensagem de ausência e ficam em Pendentes até o próximo expediente.' },
      { id: 'distribuicao', title: 'Distribuição de conversas', meta: 'Automática', content: 'Conversas novas vão para o atendente da fila com menos atendimentos abertos.' },
      { id: 'mensagens', title: 'Mensagens automáticas', meta: '3 ativas', content: 'Boas-vindas, ausência e pesquisa de satisfação.' },
      { id: 'ia', title: 'Assistente de IA', meta: 'Plano Pro', content: '', disabled: true },
    ]} />
  );
}

mount(
  <Themes>
    {() => (
      <div style={{ maxWidth: 640 }}>
        <p className="doc-h">Aberto, hover (Distribuição), foco (Mensagens) e desabilitado</p>
        <Demo />
      </div>
    )}
  </Themes>,
);
