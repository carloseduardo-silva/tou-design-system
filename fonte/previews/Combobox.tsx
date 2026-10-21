import { T, Themes, H, mount, CONTACTS } from './_doc';
const { Combobox } = T;

const OPTS = CONTACTS.map((c: any) => ({ value: c.id, label: c.name, meta: c.phone }));
const AGENTS = [
  { value: 'ana', label: 'Ana Ribeiro', meta: 'Online · 4 conversas' },
  { value: 'bruno', label: 'Bruno Sales', meta: 'Ausente' },
  { value: 'carla', label: 'Carla Mendes', meta: 'Online · 2 conversas' },
  { value: 'diego', label: 'Diego Torres', meta: 'Offline', disabled: true },
];

mount(
  <Themes>
    {() => (
      <>
        <H>Estados</H>
        <div className="doc-grid3">
          <Combobox label="Contato" options={OPTS} placeholder="Buscar por nome ou telefone" help="Digite ao menos 2 letras." />
          <Combobox label="Transferir para" options={AGENTS} query="Carla Mendes" value="carla" />
          <Combobox label="Contato" required options={OPTS} error="Escolha um contato da lista." />
        </div>
        <H>Aberto: resultados com o trecho buscado, sem resultados e buscando</H>
        <div className="doc-grid3" style={{ minHeight: 300 }}>
          <Combobox label="Contato" options={OPTS} query="ma" open />
          <Combobox label="Contato" options={OPTS} query="Fernanda" open />
          <Combobox label="Transferir para" options={AGENTS} query="" open loading />
        </div>
      </>
    )}
  </Themes>,
);
