import { T, Themes, H, mount } from './_doc';
const { MultiSelect } = T;

const TAGS = [
  { value: 'quente', label: 'Lead quente' },
  { value: 'retorno', label: 'Retorno' },
  { value: 'indicacao', label: 'Indicação' },
  { value: 'cliente', label: 'Cliente' },
  { value: 'campanha', label: 'Campanha outubro' },
  { value: 'vip', label: 'VIP', disabled: true },
];

mount(
  <Themes>
    {() => (
      <>
        <H>Estados</H>
        <div className="doc-grid3">
          <MultiSelect label="Etiquetas" options={TAGS} placeholder="Adicionar etiquetas" help="Vazio" />
          <MultiSelect label="Etiquetas" options={TAGS} value={['quente', 'retorno']} help="Com seleção (cada etiqueta é removível)" />
          <MultiSelect label="Etiquetas" options={TAGS} value={['quente', 'retorno', 'indicacao', 'cliente', 'campanha']} help="Excesso vira +N" />
          <MultiSelect label="Etiquetas" options={TAGS} value={['quente']} controlClassName="is-focus" help="Foco" />
          <MultiSelect label="Etiquetas" required options={TAGS} error="Escolha pelo menos uma etiqueta." />
          <MultiSelect label="Etiquetas" options={TAGS} value={['cliente']} disabled />
        </div>
        <H>Aberto</H>
        <div className="doc-grid3" style={{ minHeight: 360 }}>
          <MultiSelect label="Etiquetas" options={TAGS} value={['quente', 'cliente']} open />
        </div>
      </>
    )}
  </Themes>,
);
