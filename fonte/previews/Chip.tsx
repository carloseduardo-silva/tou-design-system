import { T, Themes, Matrix, H, mount, STATES, ST } from './_doc';
const { Chip, FilterChip } = T;
const noop = () => {};

mount(
  <Themes>
    {() => (
      <>
        <H>Chip de filtro rápido (alternância)</H>
        <Matrix
          cols={STATES}
          first={96}
          rows={[
            { label: 'Desligado', cells: [...ST.map((s) => <Chip className={s} selected={false} count={38}>Mensagens hoje</Chip>), <Chip disabled selected={false} count={0}>Mensagens hoje</Chip>] },
            { label: 'Ligado', cells: [...ST.map((s) => <Chip className={s} selected count={38}>Mensagens hoje</Chip>), <Chip disabled selected count={38}>Mensagens hoje</Chip>] },
          ]}
        />
        <H>Com ícone (escolha de canal)</H>
        <div className="doc-flex">
          <Chip icon="message-circle" selected>WhatsApp</Chip>
          <Chip icon="image">Instagram</Chip>
          <Chip icon="mail">E-mail</Chip>
        </div>
        <H>Filtro ativo (removível)</H>
        <div className="doc-flex">
          <FilterChip field="Etiqueta" value="Lead quente" onRemove={noop} />
          <FilterChip field="Etapa" value="Compareceu" onRemove={noop} />
          <FilterChip field="Período" value="01/10 – 31/10" onRemove={noop} />
        </div>
      </>
    )}
  </Themes>,
);
