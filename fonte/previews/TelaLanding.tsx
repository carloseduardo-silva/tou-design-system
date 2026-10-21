import { Landing } from './_landing';
import { mountScreen, Label } from './_screens';

const frame = (h?: number): React.CSSProperties => ({ width: 1440, height: h, overflow: 'hidden', border: '1px solid var(--border)', borderRadius: 12 });

mountScreen(
  <>
    <Label note="1440px. Tema claro; hero, CTA e rodapé em azul-marinho. Faixas rolam e pausam (hover, foco ou botão); recursos trocam sozinhos com pausa. Textos de rascunho; logos e depoimentos são marcadores para trocar pelos reais">Landing completa · desktop</Label>
    <div style={frame()}><Landing /></div>
    <Label note="“Agendar demonstração” abre o agendamento em 3 etapas">Agendamento · etapa 1 com erros</Label>
    <div style={frame(900)}><Landing schedule frameHeight={900} scheduleSubmitted /></div>
    <Label>Agendamento · etapa 3 (horário)</Label>
    <div style={frame(900)}><Landing schedule frameHeight={900} scheduleStep={2} /></div>
    <Label>Agendamento · confirmado</Label>
    <div style={frame(900)}><Landing schedule frameHeight={900} scheduleStep={3} /></div>
  </>,
);
