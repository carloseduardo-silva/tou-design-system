import { T, Themes, H, mount } from './_doc';
const { Toast } = T;
const noop = () => {};

mount(
  <Themes>
    {() => (
      <div className="doc-grid2">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <H>Suave</H>
          <Toast tone="success" title="Contato salvo" description="Mariana Couto entrou na etapa Lead." action={{ label: 'Abrir contato', onClick: noop }} onClose={noop} duration={0} />
          <Toast tone="info" title="Conversa transferida" description="Ana Ribeiro foi notificada." onClose={noop} duration={0} />
          <Toast tone="warning" title="3 contatos sem WhatsApp" description="Eles ficaram fora do disparo." onClose={noop} duration={0} />
          <Toast tone="danger" title="Não foi possível enviar" description="Verifique a conexão e tente de novo." action={{ label: 'Tentar de novo', onClick: noop }} onClose={noop} duration={0} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <H>Sólido</H>
          <Toast tone="success" solid title="Contato salvo" action={{ label: 'Desfazer', onClick: noop }} onClose={noop} duration={0} />
          <Toast tone="info" solid title="Exportação iniciada" description="Avisamos quando o arquivo estiver pronto." onClose={noop} duration={0} />
          <Toast tone="warning" solid title="Limite de envios próximo" onClose={noop} duration={0} />
          <Toast tone="danger" solid title="Falha no envio" description="O template foi rejeitado." onClose={noop} duration={0} />
          <p className="doc-note">Some sozinho em 5 s (pausa com o mouse em cima ou com foco). Erros que pedem ação ficam até serem fechados.</p>
        </div>
      </div>
    )}
  </Themes>,
);
