import { T, Themes, H, mount } from './_doc';
const { ProgressBar } = T;

mount(
  <Themes>
    {() => (
      <div className="doc-grid2">
        <ProgressBar label="Importando contatos" value={64} help="428 de 667 contatos" />
        <ProgressBar label="Enviando disparo #3706" help="Preparando a fila de envio…" />
        <ProgressBar label="Importação concluída" value={100} tone="success" help="667 contatos importados" />
        <ProgressBar label="Envio interrompido" value={38} tone="danger" help="Template rejeitado pela Meta. 254 mensagens não enviadas." />
        <ProgressBar label="Uso do plano: conversas" value={82} size="sm" help="8.200 de 10.000 conversas este mês" />
      </div>
    )}
  </Themes>,
);
