import { T, Themes, H, mount } from './_doc';
const { Sidebar, IconButton } = T;
const LOGO = '/_blob/8f07a50b6138d5ca2a3a7814f73d9b41';
const LOGO_W = '/_blob/8f07a50b6138d5ca2a3a7814f73d9b41';

const GROUPS = [
  { items: [
    { id: 'inicio', label: 'Início', icon: 'house' },
    { id: 'central', label: 'Central de atendimento', icon: 'message-square', badge: 7 },
  ] },
  { label: 'Relacionamento', items: [
    { id: 'contatos', label: 'Contatos', icon: 'contact', children: [{ id: 'lista', label: 'Lista de contatos' }, { id: 'etapas', label: 'Etapas (kanban)' }, { id: 'etiquetas', label: 'Etiquetas' }] },
    { id: 'atendimento', label: 'Atendimento', icon: 'headset', children: [{ id: 'filas', label: 'Filas' }] },
    { id: 'massa', label: 'Mensagens em massa', icon: 'send', keywords: 'campanha disparo contatos' },
  ] },
  { label: 'Automação', items: [
    { id: 'integracoes', label: 'Integrações', icon: 'workflow' },
    { id: 'ia', label: 'Automações e IA', icon: 'bot', locked: true, lockedHint: 'Disponível no plano Pro' },
    { id: 'marketing', label: 'Marketing digital', icon: 'megaphone' },
  ] },
  { label: 'Conta', items: [
    { id: 'empresa', label: 'Minha empresa', icon: 'building', children: [{ id: 'dados', label: 'Dados da empresa' }, { id: 'importar', label: 'Importar contatos' }] },
    { id: 'plano', label: 'Meu plano', icon: 'credit-card' },
    { id: 'ajuda', label: 'Ajuda', icon: 'circle-question-mark' },
  ] },
];

function Demo({ collapsed, theme, states, search }: { collapsed?: boolean; theme: string; states?: Record<string, string>; search?: string }) {
  const [c, setC] = React.useState(!!collapsed);
  const [exp, setExp] = React.useState<string[]>([]);
  const [cur, setCur] = React.useState('lista');
  const footer = (
    <>
      <IconButton icon="user" label="Meu perfil" size="sm" />
      <IconButton icon="moon" label="Tema escuro" size="sm" />
      <IconButton icon="bell" label="Notificações" size="sm" badge={20} />
      <IconButton icon="settings" label="Configurações" size="sm" />
      <IconButton icon="log-out" label="Sair" size="sm" />
    </>
  );
  return (
    <div style={{ height: 820 }}>
      <Sidebar groups={GROUPS} current={cur} onNavigate={setCur} collapsed={c} onCollapsedChange={setC} expanded={exp} onExpandedChange={setExp} logoSrc={theme === 'dark' ? LOGO_W : LOGO} user={{ name: 'Ana Ribeiro', org: 'Clínica Sorriso Pleno', status: 'online' }} footerActions={footer} stateClasses={states} initialSearch={search} />
    </div>
  );
}

mount(
  <Themes>
    {(t) => (
      <>
      <p className="doc-note" style={{ marginTop: 0 }}>Logo à esquerda e lupa à direita. A lupa abre um campo que filtra as telas do menu: grupos somem, o trecho encontrado fica destacado, Enter abre a primeira tela e Esc limpa (de novo, fecha). O botão de recolher fica na borda direita, metade dentro e metade fora.</p>
      <div className="doc-flex-top" style={{ gap: 56, flexWrap: 'wrap' }}>
        <div>
          <H>Expandido · hover · foco · bloqueado · hover no recolher</H>
          <Demo theme={t} states={{ massa: 'is-hover', integracoes: 'is-focus', toggle: 'is-hover' }} />
        </div>
        <div>
          <H>Buscando “contatos”</H>
          <Demo theme={t} search="contatos" />
        </div>
        <div>
          <H>Sem resultado</H>
          <Demo theme={t} search="relatório" />
        </div>
        <div>
          <H>Recolhido (a lupa expande e abre a busca)</H>
          <Demo theme={t} collapsed />
        </div>
      </div>
      </>
    )}
  </Themes>,
);
