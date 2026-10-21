import { ContactsScreen } from './_app';
import { mountScreen, Label } from './_screens';

mountScreen(
  <>
    <Label note="375 × 780. Ações do cabeçalho viram botões de ícone; os atalhos ficam dentro de Filtros; a lupa do menu filtra as telas; a tabela vira lista de cards com paginação compacta">Lista no celular</Label>
    <div className="doc-flex-top" style={{ gap: 32 }}>
      <div><p className="doc-rl" style={{ margin: '0 0 8px' }}>Claro · 1 selecionado</p><ContactsScreen mobile theme="light" label="Lista no celular, tema claro" startSelectIdx={[0]} startQuick={['atendimento']} /></div>
      <div><p className="doc-rl" style={{ margin: '0 0 8px' }}>Escuro</p><ContactsScreen mobile theme="dark" label="Lista no celular, tema escuro" /></div>
      <div><p className="doc-rl" style={{ margin: '0 0 8px' }}>Menu aberto (gaveta à esquerda)</p><ContactsScreen mobile theme="light" label="Menu no celular" startDrawer /></div>
    </div>
  </>,
);
