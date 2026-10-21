import { T, Themes, Matrix, H, mount } from './_doc';
const { Switch } = T;
const noop = () => {};
const COLS = ['Padrão', 'Hover', 'Foco (teclado)', 'Desabilitado'];
const row = (label: string, checked: boolean) => ({
  label,
  cells: [
    <Switch label="Resposta automática" checked={checked} onChange={noop} />,
    <Switch label="Resposta automática" checked={checked} onChange={noop} stateClassName="is-hover" />,
    <Switch label="Resposta automática" checked={checked} onChange={noop} stateClassName="is-focus" />,
    <Switch label="Resposta automática" checked={checked} onChange={noop} disabled />,
  ],
});

mount(
  <Themes>
    {() => (
      <>
        <H>Estados (ligado também mostra o check no botão, não só a cor)</H>
        <Matrix cols={COLS} first={88} rows={[row('Desligado', false), row('Ligado', true)]} />
        <H>Lista de configurações (rótulo à esquerda)</H>
        <div className="doc-box" style={{ maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Switch end label="Distribuir conversas automaticamente" description="Novas conversas vão para o atendente com menos atendimentos." checked onChange={noop} />
          <Switch end label="Avisar quando a conversa ficar sem resposta" description="Depois de 15 minutos." onChange={noop} />
          <Switch end label="Chatbot fora do horário" description="Disponível no plano Pro." disabled onChange={noop} />
        </div>
      </>
    )}
  </Themes>,
);
