import { T, Themes, H, mount } from './_doc';
const { PageHeader, Button, TextField } = T;

mount(
  <Themes>
    {() => (
      <>
        <H>Lista com contagem, ações e busca</H>
        <PageHeader title="Lista de contatos" count={667} subtitle="Gerencie os contatos que chegaram à empresa." actions={<><Button variant="secondary" iconStart="arrow-up-down">Importar / exportar</Button><Button iconStart="plus">Adicionar contato</Button></>}>
          <TextField label="Buscar contatos" className="tou-sr-label" icon="search" placeholder="Buscar por nome, telefone ou e-mail" />
        </PageHeader>
        <H>Detalhe com voltar</H>
        <PageHeader back={{ label: 'Contatos', href: '#' }} title="Mariana Couto" subtitle="Lead · Fila Agendamentos · atribuído a Ana Ribeiro" actions={<><Button variant="secondary" iconStart="message-square">Abrir conversa</Button><Button variant="tertiary" iconStart="trash">Excluir</Button></>} />
      </>
    )}
  </Themes>,
);
