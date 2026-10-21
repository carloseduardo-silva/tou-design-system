// Colunas da tabela de contatos, usadas no preview da tabela e da barra de filtros.
import { T } from './_doc';
const { Avatar, Badge, Tag, IconButton, Icon, StatusDot, Menu } = T;

const CH_ICON: Record<string, string> = { 'WhatsApp API': 'message-circle', 'WhatsApp Web': 'message-circle', Instagram: 'image' };
const STATUS_TONE: Record<string, string> = { 'Em atendimento': 'primary', Pendente: 'warning', Concluído: 'success', 'Sem WhatsApp': 'danger' };

export const columns = [
  {
    key: 'name', header: 'Contato', sortable: true, mobile: 'title',
    render: (r: any) => (
      <span className="tou-cell-person">
        <Avatar name={r.name} size="sm" />
        <span className="tou-cell-person__text">
          <span className="tou-cell-person__name">{r.name}</span>
          <span className="tou-cell-person__meta"><Icon name={CH_ICON[r.channel] || 'message-circle'} size={12} />{r.channel}</span>
        </span>
      </span>
    ),
  },
  { key: 'phone', header: 'WhatsApp', mobile: 'row', render: (r: any) => <span className="tou-mono">{r.phone}</span> },
  { key: 'stage', header: 'Etapa', sortable: true, mobile: 'row', render: (r: any) => r.stage === 'Sem etapa' ? <span className="tou-cell-muted">Sem etapa</span> : <Badge tone={r.stageTone}>{r.stage}</Badge> },
  { key: 'status', header: 'Status', mobile: 'row', render: (r: any) => <StatusDot tone={STATUS_TONE[r.status]}>{r.status}</StatusDot> },
  { key: 'tags', header: 'Etiquetas', mobile: 'tags', render: (r: any) => r.tags.length ? <span className="tou-cell-tags">{r.tags.map(([t, tone]: any) => <Tag key={t} size="sm" tone={tone}>{t}</Tag>)}</span> : <span className="tou-cell-muted">Sem etiquetas</span> },
  { key: 'value', header: 'Valor', numeric: true, sortable: true, mobile: 'hidden', render: (r: any) => r.value ? r.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : <span className="tou-cell-muted">—</span> },
  { key: 'updated', header: 'Atualizado', mobile: 'hidden', render: (r: any) => <span className="tou-cell-muted" style={{ whiteSpace: 'nowrap' }}>{r.updated}</span> },
];

export const ROW_MENU = [
  { id: 'abrir', label: 'Abrir conversa', icon: 'message-square' },
  { id: 'editar', label: 'Editar contato', icon: 'pencil' },
  { id: 'etiqueta', label: 'Adicionar etiqueta', icon: 'tag' },
  { id: 'transferir', label: 'Transferir', icon: 'arrow-up-down' },
  { id: 'excluir', label: 'Excluir contato', icon: 'trash', danger: true, separator: true },
];
export const actions = (r: any, onSelect: (id: string, r: any) => void = () => {}) => (
  <Menu align="end" items={ROW_MENU} onSelect={(id: string) => onSelect(id, r)} trigger={<IconButton icon="ellipsis-vertical" label={`Mais ações para ${r.name}`} size="sm" />} />
);

export const detail = (r: any) => (
  <dl className="tou-detail-grid" style={{ margin: 0 }}>
    <div><dt>E-mail</dt><dd>{r.email || <span className="tou-cell-muted">Não informado</span>}</dd></div>
    <div><dt>Fila</dt><dd>{r.queue}</dd></div>
    <div><dt>Responsável</dt><dd>{r.owner}</dd></div>
    <div><dt>Última campanha</dt><dd><span className="tou-mono">#3706</span> · 02/10</dd></div>
  </dl>
);
