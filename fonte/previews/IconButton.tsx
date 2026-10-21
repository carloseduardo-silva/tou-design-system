import { T, Themes, Matrix, H, mount, STATES, ST } from './_doc';
const { IconButton, Tooltip } = T;

const V: [string, string, string, string][] = [
  ['default', 'Padrão (contorno)', 'pencil', 'Editar contato'],
  ['tonal', 'Tonal', 'plus', 'Nova conversa'],
  ['ghost', 'Ghost', 'ellipsis-vertical', 'Mais ações'],
];

mount(
  <Themes>
    {() => (
      <>
        <H>Variantes × estados (40px)</H>
        <Matrix
          cols={STATES}
          first={136}
          rows={V.map(([v, l, icon, label]) => ({
            label: l,
            cells: [...ST.map((s) => <IconButton variant={v} icon={icon} label={label} className={s} />), <IconButton variant={v} icon={icon} label={label} disabled />],
          }))}
        />
        <H>Tamanhos 32 · 40, alternância e contador</H>
        <div className="doc-flex">
          <IconButton variant="default" size="sm" icon="refresh-cw" label="Atualizar lista" />
          <IconButton variant="default" icon="refresh-cw" label="Atualizar lista" />
          <IconButton variant="ghost" size="sm" icon="star" label="Fixar conversa" pressed />
          <IconButton variant="ghost" icon="star" label="Fixar conversa" pressed />
          <IconButton variant="ghost" icon="bell" label="Notificações" badge={20} />
          <IconButton variant="default" icon="settings" label="Configurações" />
        </div>
        <H>Com tooltip (o nome acessível continua no botão)</H>
        <div className="doc-flex" style={{ paddingTop: 40 }}>
          <Tooltip content="Transferir atendimento" open><IconButton variant="ghost" icon="arrow-up-down" label="Transferir atendimento" className="is-focus" /></Tooltip>
          <IconButton variant="ghost" icon="check" label="Concluir atendimento" />
          <IconButton variant="ghost" icon="users" label="Participantes" />
        </div>
      </>
    )}
  </Themes>,
);
