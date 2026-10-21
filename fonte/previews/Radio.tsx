import { T, Themes, Matrix, H, mount } from './_doc';
const { Radio, ChoiceGroup } = T;
const noop = () => {};
const COLS = ['Padrão', 'Hover', 'Foco (teclado)', 'Erro', 'Desabilitado'];
const row = (label: string, checked: boolean) => ({
  label,
  cells: [
    <Radio label="Pessoa física" checked={checked} onChange={noop} />,
    <Radio label="Pessoa física" checked={checked} onChange={noop} stateClassName="is-hover" />,
    <Radio label="Pessoa física" checked={checked} onChange={noop} stateClassName="is-focus" />,
    <Radio label="Pessoa física" checked={checked} onChange={noop} invalid />,
    <Radio label="Pessoa física" checked={checked} onChange={noop} disabled />,
  ],
});

mount(
  <Themes>
    {() => (
      <>
        <H>Estados</H>
        <Matrix cols={COLS} first={104} rows={[row('Desmarcado', false), row('Marcado', true)]} />
        <H>Grupo (setas trocam a opção)</H>
        <div className="doc-grid2">
          <ChoiceGroup label="Tipo de cadastro" required>
            <Radio name="tipo" label="Pessoa física" description="Pede CPF." checked onChange={noop} />
            <Radio name="tipo" label="Pessoa jurídica" description="Pede CNPJ e razão social." onChange={noop} />
          </ChoiceGroup>
          <ChoiceGroup label="Quando distribuir conversas" row error="Escolha uma opção.">
            <Radio name="dist" label="Sempre" invalid onChange={noop} />
            <Radio name="dist" label="No horário de trabalho" invalid onChange={noop} />
            <Radio name="dist" label="Nunca" invalid onChange={noop} />
          </ChoiceGroup>
        </div>
      </>
    )}
  </Themes>,
);
