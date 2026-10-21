import { T, Themes, Matrix, H, mount } from './_doc';
const { Tag } = T;
const noop = () => {};
const TONES: [string, string, string][] = [
  ['neutral', 'Neutro', 'Campanha outubro'],
  ['primary', 'Primário', 'Indicação'],
  ['success', 'Sucesso', 'Cliente'],
  ['warning', 'Alerta', 'Retorno'],
  ['danger', 'Erro', 'Lead quente'],
];

mount(
  <Themes>
    {() => (
      <>
        <H>Tons × formas</H>
        <Matrix
          cols={['Suave', 'Sólido', 'Removível', 'Remover: hover', 'Remover: foco', 'Pequena (20)']}
          first={80}
          rows={TONES.map(([t, l, txt]) => ({
            label: l,
            cells: [
              <Tag tone={t}>{txt}</Tag>,
              <Tag tone={t} solid>{txt}</Tag>,
              <Tag tone={t} onRemove={noop}>{txt}</Tag>,
              <span className="tou-hov"><Tag tone={t} onRemove={noop}>{txt}</Tag></span>,
              <span className="tou-foc"><Tag tone={t} onRemove={noop}>{txt}</Tag></span>,
              <Tag tone={t} size="sm">{txt}</Tag>,
            ],
          }))}
        />
        <H>Desabilitada e com ícone</H>
        <div className="doc-flex">
          <Tag disabled>Arquivada</Tag>
          <Tag tone="primary" icon="tag">Campanha #3706</Tag>
          <Tag tone="neutral" icon="bot">Criada pelo chatbot</Tag>
        </div>
      </>
    )}
  </Themes>,
);
// estados forçados do botão remover
document.head.insertAdjacentHTML('beforeend', '<style>.tou-hov .tou-tag__remove{background:rgba(1,20,31,.12)}[data-theme="dark"] .tou-hov .tou-tag__remove{background:rgba(255,255,255,.16)}.tou-foc .tou-tag__remove{outline:2px solid var(--focus-ring);outline-offset:1px}</style>');
