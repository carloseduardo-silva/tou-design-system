import { T, Themes, H, mount } from './_doc';
const { Select } = T;

const ETAPAS = [
  { value: 'lead', label: 'Lead' },
  { value: 'quente', label: 'Lead quente' },
  { value: 'agendado', label: 'Agendado' },
  { value: 'compareceu', label: 'Compareceu' },
  { value: 'contrato', label: 'Contrato' },
  { value: 'perdido', label: 'Perdido', disabled: true },
];
const FILAS = [
  { value: 'rec', label: 'Recepção', meta: '3 atendentes online', group: 'Atendimento' },
  { value: 'ag', label: 'Agendamentos', meta: '2 atendentes online', group: 'Atendimento' },
  { value: 'com', label: 'Comercial', meta: '4 atendentes online', group: 'Vendas' },
  { value: 'pos', label: 'Pós-venda', meta: 'Ninguém online', group: 'Vendas' },
];

mount(
  <Themes>
    {() => (
      <>
        <H>Estados do gatilho</H>
        <div className="doc-grid4">
          <Select label="Etapa do funil" options={ETAPAS} placeholder="Selecione a etapa" help="Padrão" />
          <Select label="Etapa do funil" options={ETAPAS} value="compareceu" controlClassName="is-hover" help="Hover" />
          <Select label="Etapa do funil" options={ETAPAS} value="compareceu" controlClassName="is-focus" help="Foco" />
          <Select label="Etapa do funil" options={ETAPAS} value="compareceu" disabled help="Desabilitado" />
          <Select label="Fila de atendimento" required options={FILAS} error="Escolha uma fila para distribuir a conversa." />
          <Select label="Etapa" size="sm" options={ETAPAS} value="lead" help="Pequeno (32px)" />
        </div>
        <H>Aberto: opção ativa (teclado/hover), selecionada (check) e desabilitada</H>
        <div className="doc-grid3" style={{ minHeight: 330 }}>
          <Select label="Etapa do funil" options={ETAPAS} value="agendado" open />
          <Select label="Fila de atendimento" options={FILAS} value="com" open />
        </div>
      </>
    )}
  </Themes>,
);
