import { T, Themes, H, mount } from './_doc';
const { Tooltip, InfoTip, IconButton } = T;

mount(
  <Themes>
    {() => (
      <>
        <div className="doc-grid3" style={{ paddingTop: 48, alignItems: 'end' }}>
          <div>
            <Tooltip content="Agendar mensagem" open><IconButton icon="clock" label="Agendar mensagem" variant="default" className="is-focus" /></Tooltip>
            <span className="doc-cap">Tooltip em cima (foco por teclado)</span>
          </div>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontWeight: 500 }}>Tempo médio de resposta <InfoTip about="tempo médio de resposta" content="Do recebimento da mensagem até a primeira resposta de um atendente, no horário de trabalho." open stateClassName="is-hover" /></span>
            <span className="doc-cap">Ícone de informação (24px de alvo, focável)</span>
          </div>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2, fontWeight: 500 }}>Qualidade do número <InfoTip about="qualidade do número" content="Classificação da Meta." stateClassName="is-focus" /></span>
            <span className="doc-cap">Ícone de informação: foco</span>
          </div>
        </div>
        <H>Abaixo e à direita</H>
        <div className="doc-flex" style={{ paddingBottom: 48, gap: 160 }}>
          <Tooltip content="Anexar arquivo" placement="bottom" open><IconButton icon="upload" label="Anexar arquivo" /></Tooltip>
          <Tooltip content="Conversas" placement="right" open><IconButton icon="message-square" label="Conversas" /></Tooltip>
        </div>
      </>
    )}
  </Themes>,
);
