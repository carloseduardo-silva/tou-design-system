import { T, Themes, H, mount } from './_doc';
const { Modal, ConfirmDialog, Button, TextField, Select, Icon } = T;
const noop = () => {};

function ContactForm({ errors }: { errors?: boolean }) {
  return (
    <div className="tou-form-grid">
      <TextField className="tou-span-2" label="Nome" required value="Mariana Couto" onChange={noop} />
      <TextField label="Número do WhatsApp" required addonStart={<><span className="tou-mono">BR +55</span><Icon name="chevron-down" size={14} /></>} value={errors ? '(13) 9970' : '(13) 99700-1201'} onChange={noop} error={errors ? 'Número incompleto: faltam 4 dígitos.' : undefined} />
      <TextField label="E-mail" optional icon="mail" value={errors ? 'mariana@' : ''} placeholder="nome@empresa.com" onChange={noop} error={errors ? 'Digite um e-mail completo.' : undefined} />
      <Select label="Etapa do funil" options={[{ value: 'lead', label: 'Lead' }]} value="lead" />
      <TextField label="Valor do negócio" optional prefix="R$" placeholder="0,00" />
    </div>
  );
}

function Stage({ h, children, w }: { h: number; children: React.ReactNode; w?: number }) {
  return <div style={{ height: h, width: w, maxWidth: '100%' }}>{children}</div>;
}

mount(
  <Themes>
    {() => (
      <>
        <H>Formulário (640) — rodapé com secundário + primário, fechar fora do título</H>
        <Stage h={480}>
          <Modal inline open title="Novo contato" subtitle="O contato entra na etapa escolhida e já pode receber mensagens." footerStart="* campos obrigatórios" footer={<><Button variant="secondary">Cancelar</Button><Button iconStart="check">Adicionar contato</Button></>}>
            <ContactForm />
          </Modal>
        </Stage>
        <H>Com erros de validação e salvando</H>
        <Stage h={500}>
          <Modal inline open title="Novo contato" footerStart="2 campos precisam de atenção" footer={<><Button variant="secondary" disabled>Cancelar</Button><Button loading>Adicionando…</Button></>}>
            <ContactForm errors />
          </Modal>
        </Stage>
        <div className="doc-grid2">
          <div>
            <H>Confirmação destrutiva (480)</H>
            <Stage h={260}>
              <ConfirmDialog inline open title="Excluir 3 contatos?" description="As conversas e o histórico desses contatos também serão excluídos. Não dá para desfazer." confirmLabel="Excluir 3 contatos" />
            </Stage>
          </div>
          <div>
            <H>Confirmação neutra</H>
            <Stage h={260}>
              <ConfirmDialog inline open tone="primary" title="Transferir para Ana Ribeiro?" description="A conversa sai da sua fila e Ana recebe uma notificação." confirmLabel="Transferir" />
            </Stage>
          </div>
        </div>
        <div className="doc-grid2">
          <div>
            <H>Tamanhos</H>
            <div className="doc-box" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['sm', 480, 'Confirmações, ações curtas'], ['md', 640, 'Formulários (padrão)'], ['lg', 880, 'Formulário em 2 colunas, prévia de template'], ['xl', 1120, 'Importação, editor de fluxo']].map(([s, w, u]: any) => (
                <div key={s}>
                  <div style={{ height: 24, width: `${(w / 1120) * 100}%`, borderRadius: 6, background: 'var(--primary-soft)', border: '1px solid var(--border-brand)', display: 'flex', alignItems: 'center', padding: '0 8px', boxSizing: 'border-box', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-brand)' }}>{s} · {w}</div>
                  <span className="doc-cap">{u}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <H>Celular (&lt; 600px): tela cheia, botões dividem o rodapé</H>
            <div style={{ width: 360, height: 560, border: '1px solid var(--border)', borderRadius: 16, overflow: 'hidden', background: 'var(--bg-page)' }}>
              <Modal inline fullScreen open title="Novo contato" footer={<><Button variant="secondary">Cancelar</Button><Button>Adicionar</Button></>}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <TextField label="Nome" required placeholder="Ex.: Mariana Couto" />
                  <TextField label="Número do WhatsApp" required placeholder="(13) 99999-9999" icon="phone" />
                  <TextField label="E-mail" optional icon="mail" placeholder="nome@empresa.com" />
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </>
    )}
  </Themes>,
);
