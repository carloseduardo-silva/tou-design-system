import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
const { SectionHeader, Accent } = T;
mountMkt(<>
  <L>Centralizado (padrão) · um tamanho de título para todas as seções</L>
  <Site pad><SectionHeader eyebrow="Recursos" title={<>Visão completa da sua <Accent>clínica</Accent>.</>} subtitle="Do primeiro contato ao fechamento: automações, dados e relacionamento trabalhando juntos." /></Site>
  <L>Alinhado à esquerda, sobre papel e sobre marinho</L>
  <div className="mk-row">
    <div style={{ flex: 1, minWidth: 320 }}><Site pad><div className="tou-section--paper" style={{ padding: 32 }}><SectionHeader align="start" eyebrow="Integrações" title="Conecte o que sua equipe já usa" subtitle="Agenda, prontuário e planilhas." /></div></Site></div>
    <div style={{ flex: 1, minWidth: 320 }}><Site pad><div data-theme="navy" style={{ background: 'var(--bg-page)', padding: 32 }}><SectionHeader align="start" eyebrow="Para redes" title={<>Várias unidades, uma <Accent>operação</Accent></>} subtitle="Cada unidade com seu número e sua fila." /></div></Site></div>
  </div>
</>);
