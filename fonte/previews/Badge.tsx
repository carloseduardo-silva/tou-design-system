import { T, Themes, Matrix, H, mount } from './_doc';
const { Badge, StatusDot } = T;
const TONES: [string, string, string, string][] = [
  ['neutral', 'Neutro', 'Rascunho', 'file-text'],
  ['primary', 'Primário', 'Novo lead', 'sparkles'],
  ['success', 'Sucesso', 'Entregue', 'check'],
  ['warning', 'Alerta', 'Sem WhatsApp', 'triangle-alert'],
  ['danger', 'Erro', 'Rejeitado', 'x'],
  ['info', 'Info', 'Agendado', 'info'],
];

mount(
  <Themes>
    {() => (
      <>
        <H>Badge: suave e sólido, com e sem ícone</H>
        <Matrix
          cols={['Suave', 'Suave + ícone', 'Sólido', 'Sólido + ícone', 'Contador']}
          first={80}
          rows={TONES.map(([t, l, txt, ic]) => ({
            label: l,
            cells: [
              <Badge tone={t}>{txt}</Badge>,
              <Badge tone={t} icon={ic}>{txt}</Badge>,
              <Badge tone={t} solid>{txt}</Badge>,
              <Badge tone={t} solid icon={ic}>{txt}</Badge>,
              <Badge tone={t} solid={t !== 'neutral'} count>{t === 'danger' ? '99+' : '12'}</Badge>,
            ],
          }))}
        />
        <H>Ponto de status (sempre com texto)</H>
        <div className="doc-flex">
          <StatusDot tone="success">Conectado</StatusDot>
          <StatusDot tone="primary">Em atendimento</StatusDot>
          <StatusDot tone="warning">Ausente</StatusDot>
          <StatusDot tone="danger">Desconectado</StatusDot>
          <StatusDot tone="neutral">Offline</StatusDot>
        </div>
      </>
    )}
  </Themes>,
);
