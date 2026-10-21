import { ContactsScreen } from './_app';
import { mountScreen, Label } from './_screens';

mountScreen(
  <>
    <Label note="filtros e atalhos ativos em chips; 2 linhas selecionadas mostram as ações em massa. A tela é navegável: filtre, ordene, pagine, abra o menu ⋮, a lupa do menu (filtra as telas) e clique em “Adicionar contato”.">Lista de contatos · claro</Label>
    <ContactsScreen theme="light" label="Lista de contatos, tema claro" startFilters={{ stage: ['Lead', 'Lead quente', 'Agendado'] }} startSelectIdx={[1, 3]} />
    <Label note="sem filtros, página 2">Lista de contatos · escuro</Label>
    <ContactsScreen theme="dark" label="Lista de contatos, tema escuro" startPage={2} />
    <Label note="a busca não encontrou nada: estado vazio compacto dentro da tabela, com a ação de limpar">Estado vazio · claro</Label>
    <ContactsScreen theme="light" label="Lista de contatos sem resultados" startQuery="Fernanda Albuquerque" startFilters={{ tags: ['Implante'] }} height={560} />
  </>,
);
