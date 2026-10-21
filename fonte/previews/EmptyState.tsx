import { T, Themes, H, mount } from './_doc';
const { EmptyState, Button } = T;

mount(
  <Themes>
    {() => (
      <>
        <div className="doc-grid2">
          <div>
            <H>Primeiro uso (nada criado ainda)</H>
            <div className="doc-box" style={{ padding: 0 }}>
              <EmptyState icon="user-plus" title="Você ainda não tem contatos" description="Importe uma planilha ou adicione o primeiro contato. Conversas do WhatsApp também criam contatos sozinhas." actions={<><Button variant="secondary" iconStart="upload">Importar planilha</Button><Button iconStart="plus">Adicionar contato</Button></>} />
            </div>
          </div>
          <div>
            <H>Sem resultados (busca ou filtro)</H>
            <div className="doc-box" style={{ padding: 0 }}>
              <EmptyState icon="search-x" tone="neutral" title="Nenhum contato encontrado" description="Nada corresponde a “Fernanda” com os filtros atuais." actions={<Button variant="secondary" iconStart="funnel-x">Limpar filtros</Button>} />
            </div>
          </div>
          <div>
            <H>Erro ao carregar</H>
            <div className="doc-box" style={{ padding: 0 }}>
              <EmptyState icon="circle-alert" tone="danger" title="Não foi possível carregar as conversas" description="A conexão com o WhatsApp está instável. Tente de novo em alguns segundos." actions={<Button variant="secondary" iconStart="refresh-cw">Tentar de novo</Button>} />
            </div>
          </div>
          <div>
            <H>Tudo em dia</H>
            <div className="doc-box" style={{ padding: 0 }}>
              <EmptyState icon="check-check" tone="neutral" title="Nenhuma conversa pendente" description="Novas mensagens aparecem aqui assim que chegarem." />
            </div>
          </div>
        </div>
        <H>Compacto (dentro de tabela, lista ou popover)</H>
        <div className="doc-box" style={{ padding: 0 }}>
          <EmptyState compact icon="search-x" tone="neutral" title="Nenhum contato com esses filtros" description="Remova algum filtro ou busque por outro nome." actions={<Button variant="secondary" size="sm" iconStart="funnel-x">Limpar filtros</Button>} />
        </div>
      </>
    )}
  </Themes>,
);
