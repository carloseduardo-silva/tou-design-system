import { T, Themes, H, mount } from './_doc';
const { Card, IconButton, Badge, Button } = T;

mount(
  <Themes>
    {() => (
      <>
        <H>Plano, elevado e interativo</H>
        <div className="doc-grid3">
          <Card title="Notificações recentes" subtitle="Atualizações do sistema" action={<IconButton icon="ellipsis-vertical" label="Mais ações" size="sm" />} footer={<><span>5 não lidas</span><span style={{ marginLeft: 'auto' }}><Button variant="tertiary" size="sm">Ver todas</Button></span></>}>
            Template “boas_vindas_clinica” foi rejeitado. Motivo: formato inválido.
          </Card>
          <Card variant="elevated" title="Integração Feegow" subtitle="Agenda e prontuário">
            <Badge tone="success" icon="check">Conectada</Badge>
          </Card>
          <Card variant="interactive" href="#" title="Etapas do funil" subtitle="Arraste contatos entre etapas">
            16 contatos ativos em 4 etapas.
          </Card>
        </div>
        <H>Interativo: hover, foco, pressionado, selecionado e desabilitado</H>
        <div className="doc-grid3">
          <Card variant="interactive" href="#" title="Plano Essencial" subtitle="Hover" stateClassName="is-hover">Até 3 atendentes</Card>
          <Card variant="interactive" href="#" title="Plano Essencial" subtitle="Foco (teclado)" stateClassName="is-focus">Até 3 atendentes</Card>
          <Card variant="interactive" href="#" title="Plano Essencial" subtitle="Pressionado" stateClassName="is-active">Até 3 atendentes</Card>
          <Card variant="interactive" onClick={() => {}} selected title="Plano Pro" subtitle="Selecionado">Até 10 atendentes</Card>
          <Card variant="interactive" disabled title="Plano Enterprise" subtitle="Desabilitado">Fale com vendas</Card>
        </div>
      </>
    )}
  </Themes>,
);
