import { T, Themes, H, mount } from './_doc';
const { Menu, IconButton, Button } = T;
const noop = () => {};
const ITEMS = [
  { id: 'abrir', label: 'Abrir conversa', icon: 'message-square' },
  { id: 'editar', label: 'Editar contato', icon: 'pencil', hint: 'E' },
  { id: 'etiqueta', label: 'Adicionar etiqueta', icon: 'tag' },
  { id: 'transferir', label: 'Transferir', icon: 'arrow-up-down', disabled: true },
  { id: 'excluir', label: 'Excluir contato', icon: 'trash', danger: true, separator: true },
];
const EXPORT = [
  { id: 'csv', label: 'Exportar CSV', icon: 'download', group: 'Exportar' },
  { id: 'xlsx', label: 'Exportar planilha (.xlsx)', icon: 'download' },
  { id: 'imp', label: 'Importar contatos', icon: 'upload', group: 'Importar', separator: true },
];

mount(
  <Themes>
    {() => (
      <>
        <H>Ações da linha (alinhado à direita): item ativo, desabilitado e destrutivo</H>
        <div className="doc-flex-top" style={{ gap: 220, minHeight: 250, justifyContent: 'flex-start', paddingLeft: 200 }}>
          <Menu open activeId="editar" align="end" items={ITEMS} onSelect={noop} trigger={<IconButton icon="ellipsis-vertical" label="Mais ações para Mariana Couto" size="sm" className="is-active" />} />
          <Menu open activeId="xlsx" items={EXPORT} onSelect={noop} trigger={<Button variant="secondary" iconStart="arrow-up-down" iconEnd="chevron-down" className="is-active">Importar / exportar</Button>} />
        </div>
        <H>Fechado (clique ou ↓ abre; setas, Home/End e letras navegam; Esc fecha)</H>
        <div className="doc-flex">
          <Menu align="end" items={ITEMS} onSelect={noop} trigger={<IconButton icon="ellipsis-vertical" label="Mais ações" size="sm" />} />
          <Menu items={EXPORT} onSelect={noop} trigger={<Button variant="secondary" iconEnd="chevron-down">Importar / exportar</Button>} />
        </div>
      </>
    )}
  </Themes>,
);
