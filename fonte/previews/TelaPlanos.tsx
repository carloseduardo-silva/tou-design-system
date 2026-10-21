import { AppFrame } from './_app';
import { mountScreen, Label } from './_screens';
import { T } from './_doc';
const { PageHeader, Card, Button, Badge, ProgressBar, Alert, SegmentedControl, DataTable, Accordion, Icon, ConfirmDialog, Toast, Link } = T;

// Valores ilustrativos: substituir pela tabela de preços real da TOU.
const PLANS = [
  { id: 'essencial', name: 'Essencial', desc: 'Para clínicas começando a organizar o WhatsApp.', month: 297, users: '3 atendentes', convs: '10.000 conversas/mês', feats: ['1 número de WhatsApp', 'Funil de vendas (kanban)', 'Mensagens em massa', 'Integração com agenda'], off: ['Automações e IA', 'Relatórios avançados'] },
  { id: 'pro', name: 'Pro', desc: 'Para equipes que atendem e vendem o dia todo.', month: 597, users: '10 atendentes', convs: '50.000 conversas/mês', feats: ['3 números de WhatsApp', 'Tudo do Essencial', 'Automações e chatbot', 'Assistente de IA no atendimento', 'Relatórios e BI'], off: [] },
  { id: 'enterprise', name: 'Enterprise', desc: 'Para redes e grupos com várias unidades.', month: null, users: 'Atendentes ilimitados', convs: 'Conversas sob medida', feats: ['Números ilimitados', 'Tudo do Pro', 'API e webhooks', 'Gerente de conta', 'SLA de suporte'], off: [] },
];

const yes = (t = 'Incluído') => <span className="scr-cell-yes"><Icon name="check" size={16} label={t} /><span aria-hidden="true">{t === 'Incluído' ? '' : t}</span></span>;
const no = <span className="scr-cell-no"><Icon name="minus" size={16} label="Não incluído" /></span>;
const ROWS = [
  { id: 'r1', feat: 'Atendentes', e: '3', p: '10', x: 'Ilimitados' },
  { id: 'r2', feat: 'Conversas por mês', e: '10.000', p: '50.000', x: 'Sob medida' },
  { id: 'r3', feat: 'Números de WhatsApp', e: '1', p: '3', x: 'Ilimitados' },
  { id: 'r4', feat: 'Funil de vendas e etiquetas', e: true, p: true, x: true },
  { id: 'r5', feat: 'Mensagens em massa', e: true, p: true, x: true },
  { id: 'r6', feat: 'Automações e chatbot', e: false, p: true, x: true },
  { id: 'r7', feat: 'Assistente de IA', e: false, p: true, x: true },
  { id: 'r8', feat: 'Relatórios e BI', e: false, p: true, x: true },
  { id: 'r9', feat: 'API e webhooks', e: false, p: false, x: true },
];
const cell = (v: any) => (v === true ? yes() : v === false ? no : <span className="tou-mono" style={{ fontFamily: 'var(--font-sans)', fontSize: 14 }}>{v}</span>);
const COLS = [
  { key: 'feat', header: 'Recurso', render: (r: any) => <span style={{ fontWeight: 500 }}>{r.feat}</span> },
  { key: 'e', header: 'Essencial (atual)', render: (r: any) => cell(r.e) },
  { key: 'p', header: 'Pro', render: (r: any) => cell(r.p) },
  { key: 'x', header: 'Enterprise', render: (r: any) => cell(r.x) },
];
const FAQ = [
  { id: 'f1', title: 'Posso mudar de plano quando quiser?', content: 'Sim. No upgrade, você paga só a diferença proporcional até a próxima renovação. No downgrade, a mudança vale a partir da próxima fatura.' },
  { id: 'f2', title: 'Como funciona o desconto do plano anual?', content: 'O plano anual é cobrado de uma vez, com 15% de desconto sobre 12 mensalidades. Dá para trocar para mensal na renovação.' },
  { id: 'f3', title: 'O que acontece se eu passar do limite de conversas?', content: 'Nada para de funcionar. Avisamos quando você chegar a 80% e 100%; as conversas extras são cobradas por pacote na fatura seguinte.' },
  { id: 'f4', title: 'Como cancelo a assinatura?', content: 'Em Minha empresa › Assinatura. O acesso continua até o fim do período já pago e seus contatos podem ser exportados.' },
];
const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 });

function Plans({ startConfirm = false, startToast = false, startPeriod = 'mensal' }) {
  const [period, setPeriod] = React.useState(startPeriod);
  const [faq, setFaq] = React.useState(['f1']);
  const [confirm, setConfirm] = React.useState(startConfirm);
  const [toast, setToast] = React.useState(startToast);
  const [current, setCurrent] = React.useState(startToast ? 'pro' : 'essencial');
  const price = (m: number | null) => (m == null ? null : period === 'anual' ? Math.round(m * 0.85) : m);
  return (
    <AppFrame theme="light" current="plano" label={`Meu plano${startConfirm ? ', confirmando upgrade' : ''}`} height={startConfirm || startToast ? 760 : 1960}>
      <PageHeader title="Meu plano" subtitle="Assinatura, uso do mês e forma de pagamento da Clínica Sorriso Pleno." actions={<><Button variant="tertiary" iconStart="file-text">Ver faturas</Button><Button variant="secondary" iconStart="credit-card">Forma de pagamento</Button></>} />

      <Card variant="plain" title={<span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>Plano {current === 'pro' ? 'Pro' : 'Essencial'} <Badge tone="success" icon="check">Ativo</Badge></span>} subtitle={`Mensal · ${brl(current === 'pro' ? 597 : 297)}/mês · renova em 02/11/2026`}
        footer={<><Icon name="info" size={16} /><span>O uso zera no dia da renovação.</span></>}>
        <div className="scr-usage">
          <ProgressBar label="Atendentes" value={current === 'pro' ? 30 : 100} tone={current === 'pro' ? 'primary' : 'danger'} help={current === 'pro' ? '3 de 10' : '3 de 3 · limite atingido'} />
          <ProgressBar label="Conversas no mês" value={current === 'pro' ? 16 : 82} help={current === 'pro' ? '8.200 de 50.000' : '8.200 de 10.000'} />
          <ProgressBar label="Números de WhatsApp" value={current === 'pro' ? 33 : 100} help={current === 'pro' ? '1 de 3' : '1 de 1'} />
        </div>
      </Card>

      {current === 'essencial' ? (
        <Alert tone="warning" title="Você atingiu o limite de atendentes do plano Essencial." actions={<Button variant="secondary" size="sm" onClick={() => setConfirm(true)}>Ver plano Pro</Button>}>
          Para convidar mais pessoas, mude para o Pro ou remova um atendente em Filas e equipes.
        </Alert>
      ) : null}

      <div className="scr-row">
        <div>
          <h2 className="scr-h2">Planos</h2>
          <p style={{ margin: '4px 0 0', color: 'var(--text-secondary)' }}>Valores sem impostos. Você pode mudar quando quiser.</p>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <SegmentedControl label="Período de cobrança" value={period} onChange={setPeriod} options={[{ value: 'mensal', label: 'Mensal' }, { value: 'anual', label: 'Anual' }]} />
          <Badge tone="success">Anual: −15%</Badge>
        </div>
      </div>

      <div className="scr-plans">
        {PLANS.map((pl) => {
          const isCur = pl.id === current;
          const pr = price(pl.month);
          return (
            <Card key={pl.id} variant={pl.id === 'pro' ? 'elevated' : 'plain'} highlighted={pl.id === 'pro' && !isCur}
              title={<span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}>{pl.name}{isCur ? <Badge tone="neutral">Plano atual</Badge> : pl.id === 'pro' ? <Badge tone="primary" solid icon="star">Recomendado</Badge> : null}</span>}
              subtitle={pl.desc}
              footer={isCur ? <Button variant="secondary" block disabled>Seu plano atual</Button> : pl.id === 'enterprise' ? <Button variant="secondary" block iconStart="message-square">Falar com vendas</Button> : <Button block variant={current === 'pro' ? 'secondary' : 'primary'} onClick={() => setConfirm(true)}>Mudar para o {pl.name}</Button>}>
              <div className="scr-price">{pr == null ? <b>Sob consulta</b> : <><b>{brl(pr)}</b><span>/mês{period === 'anual' ? ', cobrado anualmente' : ''}</span></>}</div>
              <ul className="scr-feats">
                <li><Icon name="users" size={16} /><span><b style={{ fontWeight: 600 }}>{pl.users}</b></span></li>
                <li><Icon name="message-square" size={16} /><span><b style={{ fontWeight: 600 }}>{pl.convs}</b></span></li>
                {pl.feats.map((f) => <li key={f}><Icon name="check" size={16} /><span>{f}</span></li>)}
                {pl.off.map((f) => <li key={f} className="off"><Icon name="minus" size={16} label="Não incluído:" /><span>{f}</span></li>)}
              </ul>
            </Card>
          );
        })}
      </div>

      <div>
        <h2 className="scr-h2" style={{ marginBottom: 12 }}>Compare os recursos</h2>
        <DataTable caption="Comparação de recursos por plano" columns={COLS} rows={ROWS} rowKey={(r: any) => r.id} density="dense" layout="table" />
      </div>

      <div>
        <h2 className="scr-h2" style={{ marginBottom: 12 }}>Dúvidas sobre planos</h2>
        <Accordion items={FAQ} value={faq} onChange={setFaq} headingLevel={3} />
        <p style={{ margin: '16px 0 0', color: 'var(--text-secondary)' }}>Ainda com dúvida? <Link href="#">Fale com o suporte</Link>.</p>
      </div>

      <ConfirmDialog contained open={confirm} tone="primary" onClose={() => setConfirm(false)} title="Mudar para o plano Pro?"
        description={<>Você paga <b>{brl(300)}</b> proporcionais hoje e <b>{brl(597)}/mês</b> a partir de 02/11/2026. Os limites sobem na hora.</>}
        confirmLabel="Confirmar mudança" onConfirm={() => { setConfirm(false); setCurrent('pro'); setToast(true); }} />
      {toast ? <div className="scr-toast"><Toast tone="success" title="Plano alterado para Pro" description="Agora você pode convidar até 10 atendentes." onClose={() => setToast(false)} duration={startToast ? 0 : 5000} /></div> : null}
    </AppFrame>
  );
}

mountScreen(
  <>
    <Label note="parte do produto, sempre no tema claro (mesmo para quem usa o escuro); só componentes e tokens do produto, sem serif nem papéis do marketing. Valores ilustrativos">Meu plano · claro</Label>
    <Plans />
    <Label note="“Mudar para o Pro” confirma antes, com o valor proporcional">Confirmação de mudança</Label>
    <Plans startConfirm />
    <Label note="depois de confirmar: plano atualizado, uso recalculado e toast">Plano alterado · cobrança anual</Label>
    <Plans startToast startPeriod="anual" />
  </>,
);
