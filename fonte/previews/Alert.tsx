import { T, Themes, H, mount } from './_doc';
const { Alert, Button, Link } = T;
const noop = () => {};

mount(
  <Themes>
    {() => (
      <>
        <H>Suave</H>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Alert tone="info" title="Nova versão do chatbot" onClose={noop}>As respostas automáticas agora entendem áudios. <Link href="#">Ver novidades</Link></Alert>
          <Alert tone="success" title="Integração conectada">As consultas do Feegow aparecem na agenda a partir de agora.</Alert>
          <Alert tone="warning" title="Qualidade do número caiu" actions={<Button variant="secondary" size="sm">Ver recomendações</Button>}>O número (13) 99700-0000 passou de Alta para Média. Reduza os envios em massa nas próximas 24 horas.</Alert>
          <Alert tone="danger" title="Template rejeitado" actions={<><Button variant="secondary" size="sm">Editar template</Button><Button variant="tertiary" size="sm">Ver motivo</Button></>}>“boas_vindas_clinica” foi rejeitado pela Meta: formato inválido.</Alert>
        </div>
        <H>Sólido (bloqueia o uso)</H>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Alert tone="danger" solid title="WhatsApp desconectado" actions={<Button variant="secondary" size="sm">Reconectar</Button>}>As mensagens não estão sendo recebidas.</Alert>
          <Alert tone="warning" solid title="Instabilidade na Meta">Envio e recebimento podem atrasar. Estamos acompanhando.</Alert>
        </div>
        <H>Banner (topo da página)</H>
        <div className="doc-box" style={{ padding: 0, overflow: 'hidden' }}>
          <Alert banner tone="warning" title="Seu plano vence em 3 dias." onClose={noop} actions={<Link href="#" standalone>Renovar agora</Link>} />
          <div style={{ height: 40 }} />
        </div>
      </>
    )}
  </Themes>,
);
