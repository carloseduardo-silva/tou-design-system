import { Landing } from './_landing';
import { mountScreen, Label } from './_screens';

const phone = (h?: number): React.CSSProperties => ({ width: 375, height: h, overflow: 'hidden', border: '1px solid var(--border)', borderRadius: 28, flex: 'none' });

mountScreen(
  <>
    <Label note="375px. Botão de menu, CTAs em largura total com 48px, alvos de no mínimo 44px, abas de recursos viram chips roláveis">Landing completa · celular</Label>
    <div className="doc-flex-top" style={{ gap: 40 }}>
      <div style={phone()}><Landing mobile /></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div><p className="doc-rl" style={{ margin: '0 0 8px' }}>Menu aberto</p><div style={phone(700)}><Landing mobile menuOpen frameHeight={700} /></div></div>
        <div><p className="doc-rl" style={{ margin: '0 0 8px' }}>Agendamento em tela cheia · horário</p><div style={phone(812)}><Landing mobile schedule frameHeight={812} scheduleStep={2} /></div></div>
        <div><p className="doc-rl" style={{ margin: '0 0 8px' }}>Formulário com erros</p><div style={phone(812)}><Landing mobile leadSubmitted frameHeight={812} scrollTo="demonstracao" /></div></div>
      </div>
    </div>
  </>,
);
