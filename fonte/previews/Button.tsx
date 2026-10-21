import { T, Themes, Matrix, H, mount, STATES, ST } from './_doc';
const { Button } = T;

const VARIANTS: [string, string, string][] = [
  ['primary', 'Primário', 'Adicionar'],
  ['secondary', 'Secundário', 'Importar'],
  ['tertiary', 'Terciário', 'Histórico'],
  ['danger', 'Perigo', 'Excluir'],
  ['success', 'Sucesso', 'Concluir'],
];
const ICON: Record<string, string> = { primary: 'plus', secondary: 'upload', tertiary: 'clock', danger: 'trash', success: 'check' };

mount(
  <Themes>
    {() => (
      <>
        <H>Variantes × estados</H>
        <Matrix
          cols={[...STATES, 'Carregando']}
          rows={VARIANTS.map(([v, l, txt]) => ({
            label: l,
            cells: [
              ...ST.map((s) => <Button variant={v} className={s} iconStart={ICON[v]}>{txt}</Button>),
              <Button variant={v} disabled iconStart={ICON[v]}>{txt}</Button>,
              <Button variant={v} loading>{v === 'danger' ? 'Excluindo' : v === 'success' ? 'Concluindo' : 'Salvando'}…</Button>,
            ],
          }))}
        />
        <H>Tamanhos: 32 · 40 · 48</H>
        <div className="doc-flex">
          <Button size="sm" iconStart="plus">Novo contato</Button>
          <Button iconStart="plus">Novo contato</Button>
          <Button size="lg" iconStart="plus">Novo contato</Button>
          <Button size="sm" variant="secondary" iconEnd="chevron-down">Exportar</Button>
          <Button variant="secondary" iconEnd="chevron-down">Exportar</Button>
          <Button size="lg" variant="secondary" iconEnd="chevron-down">Exportar</Button>
        </div>
        <H>Pílula (CTA de marketing)</H>
        <div className="doc-flex">
          <Button pill size="lg" iconEnd="arrow-right">Quero uma demonstração</Button>
          <Button pill variant="secondary" size="lg">Falar com vendas</Button>
          <Button pill size="sm">Agendar demonstração</Button>
        </div>
        <H>Par de ações (modal, formulário)</H>
        <div className="doc-flex">
          <Button variant="secondary">Cancelar</Button>
          <Button>Salvar contato</Button>
          <span style={{ width: 24 }} />
          <Button variant="secondary">Cancelar</Button>
          <Button variant="danger" iconStart="trash">Excluir 3 contatos</Button>
        </div>
      </>
    )}
  </Themes>,
);
