// Conteúdo e montagem da landing (Fase 4). Textos de rascunho para o time de marketing revisar.
import { T } from './_doc';
import { ContactsScreen, LOGO, LOGO_W, TODAY } from './_app';
const {
  SiteHeader, Hero, Accent, Button, ProductPreview, LogoStrip, SectionHeader, FeatureTabs, TestimonialStrip, Testimonial,
  LeadForm, Faq, CtaBanner, SiteFooter, ScheduleModal, Stars, KpiCard, DataTable, Badge, Card, Switch, Alert, Avatar, Tag, StatusDot, Icon,
} = T;

export const SITE_LINKS = [
  { label: 'Recursos', href: '#recursos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Planos', href: '#planos' },
  { label: 'Dúvidas', href: '#duvidas' },
];

// Nomes fictícios: substituir pelos logos reais dos clientes (com autorização).
export const LOGOS = ['Clínica Sorriso Pleno', 'Odonto Vida', 'Instituto Pele Viva', 'Studio Bem Estar', 'Clínica Ortomed', 'Visão Clara Oftalmologia', 'Espaço Harmonia', 'Dermacenter'].map((name) => ({ name }));

// Depoimentos de exemplo: substituir por depoimentos reais e autorizados.
export const QUOTES = [
  { quote: 'Antes a recepção perdia conversa no meio do dia. Hoje cada mensagem cai na fila certa e ninguém fica sem resposta.', name: '[Nome do cliente]', role: '[Cargo · clínica odontológica]', rating: 5 },
  { quote: 'O funil mostra exatamente onde o paciente parou. Ficou fácil retomar quem pediu orçamento e sumiu.', name: '[Nome do cliente]', role: '[Cargo · clínica de estética]', rating: 5 },
  { quote: 'Os lembretes automáticos reduziram as faltas e a equipe parou de ligar um por um.', name: '[Nome do cliente]', role: '[Cargo · clínica médica]', rating: 4.8 },
  { quote: 'Conseguimos atender as três unidades com a mesma equipe, cada uma com seu número.', name: '[Nome do cliente]', role: '[Cargo · rede de clínicas]', rating: 5 },
];

export const FAQ = [
  { id: 'q1', title: 'Posso usar o número de WhatsApp que a clínica já tem?', content: 'Sim. Conectamos o número atual e a equipe continua respondendo no mesmo número, agora com filas, etiquetas e histórico.' },
  { id: 'q2', title: 'Quanto tempo leva para começar a usar?', content: 'A configuração inicial costuma levar poucos dias: conectamos o WhatsApp, importamos os contatos e montamos as filas com a sua equipe.' },
  { id: 'q3', title: 'O TOU se integra com o sistema de agenda da clínica?', content: 'Temos integrações com sistemas de gestão e agenda usados por clínicas. Na demonstração mostramos a integração com o seu.' },
  { id: 'q4', title: 'Preciso contratar mais gente para usar o TOU?', content: 'Não. A ideia é o contrário: automações e distribuição de conversas deixam a mesma equipe atender mais pacientes.' },
  { id: 'q5', title: 'Meus dados ficam seguros?', content: 'Os dados ficam em servidores com criptografia e acesso por perfil: cada atendente vê só o que precisa.' },
];

/* ---------- painéis dos recursos (interface real, reduzida) ---------- */
function SalesPanel() {
  const rows = [
    { id: 'd1', name: 'Mariana Couto', stage: 'Compareceu', tone: 'success', value: 'R$ 1.850' },
    { id: 'd2', name: 'Rafael Nunes', stage: 'Agendado', tone: 'info', value: 'R$ 2.400' },
    { id: 'd3', name: 'Beatriz Lima', stage: 'Lead quente', tone: 'warning', value: 'R$ 3.100' },
    { id: 'd4', name: 'Clínica Sorriso Pleno', stage: 'Contrato', tone: 'success', value: 'R$ 12.400' },
  ];
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <KpiCard label="Valor em negociação" value="R$ 48.920" delta={12.4} comparison="vs. setembro" trend={[30, 34, 33, 38, 41, 40, 44, 49]} />
        <KpiCard label="Agendamentos" value="186" delta={9.1} comparison="vs. setembro" trend={[12, 15, 14, 18, 17, 21, 22, 24]} />
        <KpiCard label="Taxa de comparecimento" value="82%" delta={4.3} comparison="vs. setembro" trend={[70, 72, 74, 73, 76, 79, 80, 82]} />
      </div>
      <DataTable caption="Negócios em andamento" layout="table" density="dense" rows={rows} rowKey={(r: any) => r.id} columns={[
        { key: 'name', header: 'Contato', render: (r: any) => <span className="tou-cell-person"><Avatar name={r.name} size="xs" /><span className="tou-cell-person__name">{r.name}</span></span> },
        { key: 'stage', header: 'Etapa', render: (r: any) => <Badge tone={r.tone}>{r.stage}</Badge> },
        { key: 'value', header: 'Valor', numeric: true, render: (r: any) => r.value },
      ]} />
    </div>
  );
}
function ControlPanel() {
  return (
    <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '280px 1fr', gap: 16 }}>
      <Card title="Mariana Couto" subtitle="+55 (13) 99700-1201 · WhatsApp API">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}><Badge tone="success">Compareceu</Badge><Tag size="sm" tone="danger">Lead quente</Tag><Tag size="sm">Implante</Tag></div>
          <StatusDot tone="primary">Em atendimento com Ana</StatusDot>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Origem: anúncio no Instagram · 02/10</span>
        </div>
      </Card>
      <Card title="Histórico" subtitle="Tudo o que aconteceu com este contato">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
          {[['message-square', 'Mensagem recebida: “Quero saber o valor do implante”', 'há 2 dias'], ['tag', 'Etiqueta “Lead quente” adicionada por Ana', 'há 2 dias'], ['calendar', 'Consulta agendada para 14/10 às 10:30', 'ontem'], ['check', 'Compareceu à avaliação', 'hoje']].map(([ic, t, w]) => (
            <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><span style={{ color: 'var(--text-brand)', marginTop: 2 }}><Icon name={ic} size={16} /></span><span style={{ flex: 1 }}>{t}</span><span style={{ color: 'var(--text-tertiary)', fontSize: 12, whiteSpace: 'nowrap' }}>{w}</span></li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
function AutomationPanel() {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert tone="success" title="Assistente de IA ativo">Respondeu 312 perguntas sobre horários e valores esta semana e passou 41 conversas para a equipe.</Alert>
      <Card title="Automações">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Switch end checked onChange={() => {}} label="Distribuir conversas automaticamente" description="Para quem tem menos atendimentos abertos na fila." />
          <Switch end checked onChange={() => {}} label="Lembrete de consulta 24 h antes" description="Com botões “Confirmar” e “Remarcar”." />
          <Switch end onChange={() => {}} label="Pesquisa de satisfação após o atendimento" description="Enviada 2 horas depois de concluir." />
        </div>
      </Card>
    </div>
  );
}

export function featureItems(mobile?: boolean) {
  const pv = (label: string, node: React.ReactNode, w = 860, h = 520) => <ProductPreview rounded light label={label} designWidth={w} designHeight={h}>{node}</ProductPreview>;
  return [
    { id: 'centralizar', icon: 'message-square', title: 'Centralização da operação', description: 'WhatsApp, Instagram, contatos e automações num lugar só. Cada conversa cai na fila certa, sem planilha.', content: pv('Prévia da lista de contatos com filtros', <ContactsScreen theme="light" label="Prévia" width={1280} height={800} startQuick={['atendimento']} />, 1280, 800) },
    { id: 'vendas', icon: 'trending-up', title: 'Aumento de vendas', description: 'Funil completo, follow-up automático e prioridade para quem está perto de fechar.', content: pv('Prévia dos indicadores de vendas e negócios', <SalesPanel />) },
    { id: 'controle', icon: 'eye', title: 'Controle total', description: 'Histórico de conversas, anotações, anúncios clicados e negociações de cada contato.', content: pv('Prévia do histórico de um contato', <ControlPanel />, 860, 440) },
    { id: 'ia', icon: 'bot', title: 'Automação e IA', description: 'Lembretes, distribuição de conversas e um assistente que responde dúvidas frequentes.', content: pv('Prévia das automações e do assistente de IA', <AutomationPanel />, 860, 440) },
  ];
}

export function Landing({ mobile, schedule, scheduleStep, scheduleSubmitted, menuOpen, leadSubmitted, frameHeight, scrollTo }: { mobile?: boolean; schedule?: boolean; scheduleStep?: number; scheduleSubmitted?: boolean; menuOpen?: boolean; leadSubmitted?: boolean; frameHeight?: number; scrollTo?: string }) {
  const [open, setOpen] = React.useState(!!schedule);
  const root = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => { if (!scrollTo || !root.current) return; const t = root.current.querySelector('#' + scrollTo) as HTMLElement | null; if (t) setTimeout(() => { root.current!.scrollTop = t.offsetTop + (mobile ? 360 : 0); }, 50); }, []);
  const openSchedule = () => setOpen(true);
  return (
    <div ref={root} className="tou-site" data-theme="light" style={{ position: 'relative', height: frameHeight, overflow: frameHeight ? 'hidden' : undefined }}>
      <SiteHeader overDark links={SITE_LINKS} logoSrc={LOGO} logoOnDarkSrc={LOGO_W} cta={{ label: 'Agendar demonstração', onClick: openSchedule }} login={{ label: 'Entrar', href: '#entrar' }} defaultOpen={menuOpen} />
      <main>
        <Hero id="inicio" tone="dark" eyebrow="Plataforma · CRM + IA + BI"
          title={<>Atenda mais. Venda mais. Tudo com a mesma <Accent>equipe</Accent>.</>}
          lead="Atendimento pelo WhatsApp, funil de vendas e automações num só lugar, para sua clínica vender mais procedimentos sem contratar mais gente."
          actions={<><Button pill size="lg" iconEnd="arrow-right" onClick={openSchedule}>Quero uma demonstração</Button><Button pill size="lg" variant="secondary" href="#recursos">Ver recursos</Button></>}
          proof={<><Icon name="building" size={16} /><span>+50 empresas já atendem com o TOU</span></>}
          preview={<ProductPreview label="Prévia da lista de contatos do TOU, com menu lateral, filtros e tabela" designWidth={1280} designHeight={760}><ContactsScreen theme="light" label="Prévia" width={1280} height={760} startFilters={{ stage: ['Lead', 'Lead quente', 'Agendado'] }} startSelectIdx={[1]} /></ProductPreview>}
        />
        <section className="tou-section" style={{ paddingTop: mobile ? 48 : 64, paddingBottom: mobile ? 48 : 64 }} aria-label="Clientes">
          <div className="tou-container">
            <LogoStrip title={<><b>+50 empresas</b> já transformaram suas operações com o TOU</>} logos={LOGOS} />
          </div>
        </section>
        <section className="tou-section tou-section--paper" id="recursos" aria-labelledby="recursos-t">
          <div className="tou-container">
            <SectionHeader id="recursos-t" eyebrow="Recursos" title={<>Visão completa da sua <Accent>clínica</Accent>.</>} subtitle="Do primeiro contato ao fechamento: automações, dados e relacionamento trabalhando juntos." />
            <FeatureTabs label="Recursos do TOU" items={featureItems(mobile)} />
          </div>
        </section>
        <section className="tou-section" id="depoimentos" aria-labelledby="dep-t">
          <div className="tou-container">
            <SectionHeader id="dep-t" eyebrow="Depoimentos" title="Quem usa, atende melhor" subtitle="Clínicas de todos os tamanhos organizaram o atendimento com o TOU." />
          </div>
          {mobile ? (
            <div className="tou-container" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Testimonial {...QUOTES[0]} serif feature />
              <TestimonialStrip items={QUOTES.slice(1)} />
            </div>
          ) : (
            <div className="tou-container"><TestimonialStrip items={QUOTES} /></div>
          )}
        </section>
        <section className="tou-section tou-section--paper2" id="demonstracao" aria-labelledby="lead-t">
          <div className="tou-container tou-leadsec">
            <div className="tou-leadsec__copy">
              <p className="tou-mkt-eyebrow">Demonstração</p>
              <h2 className="tou-mkt-h2" id="lead-t">Veja o TOU funcionando com os dados da sua <Accent>clínica</Accent></h2>
              <p className="tou-mkt-lead">Em 30 minutos, um especialista mostra como organizar o seu atendimento e o seu funil.</p>
              <ul className="tou-leadsec__list">
                <li><Icon name="check" size={16} />Diagnóstico do atendimento atual pelo WhatsApp</li>
                <li><Icon name="check" size={16} />Simulação do funil com as etapas da sua clínica</li>
                <li><Icon name="check" size={16} />Plano de implantação, sem compromisso</li>
              </ul>
            </div>
            <LeadForm submitted={leadSubmitted} initial={leadSubmitted ? { name: 'Joana Prado', phone: '(13) 9970', email: 'joana@' } : undefined} />
          </div>
        </section>
        <section className="tou-section" id="duvidas" aria-labelledby="faq-t">
          <div className="tou-container">
            <SectionHeader id="faq-t" eyebrow="Dúvidas" title="Perguntas frequentes" />
            <Faq items={FAQ} defaultOpen={['q1']} />
          </div>
        </section>
        <section className="tou-section" style={{ paddingTop: 0 }} aria-label="Agende uma demonstração">
          <div className="tou-container">
            <CtaBanner eyebrow="Comece agora" title={<>Pronto para atender mais com a mesma <Accent>equipe</Accent>?</>} lead="Agende uma demonstração e veja o TOU com o seu WhatsApp, a sua agenda e o seu funil."
              actions={<><Button pill size="lg" iconEnd="arrow-right" onClick={openSchedule}>Quero uma demonstração</Button><Button pill size="lg" variant="secondary" iconStart="message-circle" href="#whatsapp">Falar no WhatsApp</Button></>} />
          </div>
        </section>
      </main>
      <SiteFooter logoSrc={LOGO_W} tagline="CRM de atendimento e vendas pelo WhatsApp para clínicas e empresas que querem atender mais com a mesma equipe."
        columns={[
          { title: 'Produto', links: [{ label: 'Recursos', href: '#recursos' }, { label: 'Integrações', href: '#integracoes' }, { label: 'Planos', href: '#planos' }, { label: 'Novidades', href: '#novidades' }] },
          { title: 'Empresa', links: [{ label: 'Sobre a TOU', href: '#sobre' }, { label: 'Clientes', href: '#clientes' }, { label: 'Trabalhe conosco', href: '#vagas' }, { label: 'Contato', href: '#contato' }] },
          { title: 'Suporte', links: [{ label: 'Central de ajuda', href: '#ajuda' }, { label: 'Status da plataforma', href: '#status' }, { label: 'Falar no WhatsApp', href: '#whatsapp' }] },
        ]}
        legal="© 2026 TOU · Two of Us. Todos os direitos reservados."
        bottomLinks={[{ label: 'Termos de uso', href: '#termos' }, { label: 'Privacidade', href: '#privacidade' }]} />
      <ScheduleModal open={open} onClose={() => setOpen(false)} contained fullScreen={mobile} today={TODAY} startStep={scheduleStep} submitted={scheduleSubmitted}
        initial={scheduleStep ? { name: 'Joana Prado', phone: '(13) 99700-8834', email: 'joana.prado@email.com', company: 'Clínica Sorriso Pleno', team: '4-10', consent: true } : undefined} />
    </div>
  );
}
