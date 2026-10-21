import { ContactsScreen, EMPTY_FORM } from './_app';
import { mountScreen, Label } from './_screens';

const BAD = { ...EMPTY_FORM, name: 'Lucas Ferraz', phone: '(13) 9970', doc: '123.456.789', email: 'lucas.ferraz@', tags: ['Indicação'] };
const OK = { ...EMPTY_FORM, name: 'Lucas Ferraz', phone: '(13) 99700-4410', email: 'lucas.ferraz@email.com', stage: 'Lead', tags: ['Indicação'], owner: 'ana' };

mountScreen(
  <>
    <Label note="abre por “Adicionar contato”. Foco no primeiro campo; Esc ou Cancelar fecham. Clique em “Adicionar contato” vazio para ver a validação">1 · Vazio · claro</Label>
    <ContactsScreen theme="light" label="Novo contato, vazio" startModal />
    <Label note="ao tentar salvar, cada campo mostra o erro com ícone e o que fazer; o rodapé resume; o foco vai para o primeiro campo com erro">2 · Com erros · claro</Label>
    <ContactsScreen theme="light" label="Novo contato com erros" startModal modalInitial={BAD} modalSubmitted />
    <Label>2 · Com erros · escuro</Label>
    <ContactsScreen theme="dark" label="Novo contato com erros, tema escuro" startModal modalInitial={BAD} modalSubmitted />
    <Label note="botão em carregando, Cancelar desabilitado, modal não fecha">3 · Salvando · claro</Label>
    <ContactsScreen theme="light" label="Novo contato salvando" startModal modalInitial={OK} modalSaving height={700} />
    <Label note="o modal fecha, o contato aparece no topo com o badge “Novo” e um toast confirma">4 · Sucesso · claro</Label>
    <ContactsScreen theme="light" label="Contato adicionado" startToast height={700} />
    <Label note="no celular o modal ocupa a tela toda">Celular · com erros</Label>
    <div className="doc-flex-top" style={{ gap: 32 }}>
      <ContactsScreen mobile theme="light" label="Novo contato no celular" startModal modalInitial={BAD} modalSubmitted />
      <ContactsScreen mobile theme="dark" label="Novo contato no celular, tema escuro" startModal />
    </div>
  </>,
);
