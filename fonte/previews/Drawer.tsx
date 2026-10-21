import { T, Themes, H, mount } from './_doc';
const { Drawer, Button, Avatar, Badge, Tag, TextField, Select } = T;
const noop = () => {};

mount(
  <Themes>
    {() => (
      <>
        <H>Detalhe do contato (400) — sobre a lista, com véu</H>
        <div style={{ height: 600 }}>
          <Drawer inline open title="Mariana Couto" subtitle="Contato desde 12/03/2025 · WhatsApp API" footer={<><Button variant="secondary">Cancelar</Button><Button>Salvar alterações</Button></>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Avatar name="Mariana Couto" size="lg" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span className="tou-mono">+55 (13) 99700-1201</span>
                  <span style={{ display: 'flex', gap: 4 }}><Badge tone="success">Compareceu</Badge><Tag size="sm" tone="danger" onRemove={noop}>Lead quente</Tag></span>
                </div>
              </div>
              <TextField label="E-mail" optional icon="mail" value="mariana.couto@email.com" onChange={noop} />
              <Select label="Responsável" options={[{ value: 'ana', label: 'Ana Ribeiro' }]} value="ana" />
            </div>
          </Drawer>
        </div>
      </>
    )}
  </Themes>,
);
