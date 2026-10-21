import { T, Themes, Matrix, H, mount } from './_doc';
const { Checkbox, ChoiceGroup } = T;
const noop = () => {};
const COLS = ['Padrão', 'Hover', 'Foco (teclado)', 'Erro', 'Desabilitado'];
const row = (label: string, p: any) => ({
  label,
  cells: [
    <Checkbox label="Aceita mensagens" onChange={noop} {...p} />,
    <Checkbox label="Aceita mensagens" onChange={noop} stateClassName="is-hover" {...p} />,
    <Checkbox label="Aceita mensagens" onChange={noop} stateClassName="is-focus" {...p} />,
    <Checkbox label="Aceita mensagens" onChange={noop} invalid {...p} />,
    <Checkbox label="Aceita mensagens" onChange={noop} disabled {...p} />,
  ],
});

mount(
  <Themes>
    {() => (
      <>
        <H>Estados</H>
        <Matrix cols={COLS} first={104} rows={[row('Desmarcado', { checked: false }), row('Marcado', { checked: true }), row('Indeterminado', { checked: false, indeterminate: true })]} />
        <H>Em grupo, com descrição e erro</H>
        <div className="doc-grid3">
          <ChoiceGroup label="Canais de contato" help="Usados para lembretes de consulta.">
            <Checkbox label="WhatsApp" checked onChange={noop} />
            <Checkbox label="E-mail" onChange={noop} />
            <Checkbox label="SMS" disabled description="Não contratado no seu plano." onChange={noop} />
          </ChoiceGroup>
          <ChoiceGroup label="Consentimento" required error="Marque para continuar.">
            <Checkbox label="O contato autorizou receber mensagens" invalid description="Exigido pela política do WhatsApp." onChange={noop} />
          </ChoiceGroup>
          <div>
            <span className="doc-rl">Sem texto visível (tabela) — alvo de 24px e aria-label</span>
            <div className="doc-flex" style={{ marginTop: 8 }}>
              <Checkbox ariaLabel="Selecionar Mariana Couto" onChange={noop} />
              <Checkbox ariaLabel="Selecionar Rafael Nunes" checked onChange={noop} />
              <Checkbox ariaLabel="Selecionar todos" indeterminate onChange={noop} />
            </div>
          </div>
        </div>
      </>
    )}
  </Themes>,
);
