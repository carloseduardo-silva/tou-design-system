import { T, Themes, H, mount, TODAY } from './_doc';
const { DateField, TimeField, Calendar } = T;
const sunday = (d: Date) => d.getDay() === 0;

mount(
  <Themes>
    {() => (
      <>
        <H>Campos</H>
        <div className="doc-grid4">
          <DateField label="Data de nascimento" optional today={TODAY} />
          <DateField label="Data da consulta" required value={new Date(2026, 9, 14)} today={TODAY} controlClassName="is-focus" help="Foco" />
          <DateField label="Data da consulta" required value={new Date(2026, 9, 4)} today={TODAY} error="Escolha uma data a partir de hoje." />
          <TimeField label="Horário" value="09:30" disabled />
        </div>
        <H>Calendário: hoje (contorno), selecionado (círculo cheio), foco, indisponível (riscado) e intervalo</H>
        <div className="doc-flex-top">
          <div className="tou-popover tou-popover--static" style={{ padding: 0, minWidth: 0 }}>
            <Calendar month={new Date(2026, 9, 1)} value={new Date(2026, 9, 14)} today={TODAY} isDisabled={sunday} focusDay={21} footer={<><span>Domingos indisponíveis</span><button type="button" className="tou-btn tou-btn--tertiary tou-btn--sm">Hoje</button></>} />
          </div>
          <div className="tou-popover tou-popover--static" style={{ padding: 0, minWidth: 0 }}>
            <Calendar month={new Date(2026, 9, 1)} range={{ start: new Date(2026, 9, 6), end: new Date(2026, 9, 17) }} today={TODAY} footer={<><span>12 dias</span><button type="button" className="tou-btn tou-btn--tertiary tou-btn--sm">Limpar</button></>} />
          </div>
          <div style={{ width: 296 }}>
            <TimeField label="Horário da consulta" value="10:00" unavailable={['08:30', '09:00', '11:30', '14:00']} from="08:00" to="13:30" open />
          </div>
        </div>
        <H>Intervalo no campo</H>
        <div className="doc-grid3">
          <DateField label="Período" range={{ start: new Date(2026, 9, 1), end: new Date(2026, 9, 31) }} today={TODAY} size="sm" />
        </div>
      </>
    )}
  </Themes>,
);
