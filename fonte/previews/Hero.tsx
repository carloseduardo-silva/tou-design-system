import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { ContactsScreen } from './_app';
const { Hero, Accent, Button, ProductPreview, Icon } = T;
const pv = <ProductPreview label="Prévia da lista de contatos do TOU" designWidth={1280} designHeight={720}><ContactsScreen theme="light" label="Prévia" width={1280} height={720} /></ProductPreview>;
const actions = <><Button pill size="lg" iconEnd="arrow-right">Quero uma demonstração</Button><Button pill size="lg" variant="secondary">Ver recursos</Button></>;
mountMkt(<>
  <L>Escuro (marinho): malha de gradiente + brilho, palavra em serif ciano, preview do produto embaixo</L>
  <Site><Hero tone="dark" eyebrow="Plataforma · CRM + IA + BI" title={<>Atenda mais. Venda mais. Tudo com a mesma <Accent>equipe</Accent>.</>} lead="Atendimento pelo WhatsApp, funil de vendas e automações num só lugar." actions={actions} proof={<><Icon name="building" size={16} /><span>+50 empresas já atendem com o TOU</span></>} preview={pv} /></Site>
  <L>Claro, lado a lado: destaque em serif na cor do texto (ciano nunca é texto sobre claro)</L>
  <Site><Hero tone="light" split eyebrow="Agenda e WhatsApp" title={<>Menos faltas, mais <Accent>consultas</Accent>.</>} lead="Lembretes automáticos com confirmação em um toque e remarcação sem ligação." actions={actions} preview={<ProductPreview rounded label="Prévia da lista de contatos" designWidth={1280} designHeight={800}><ContactsScreen theme="light" label="Prévia" width={1280} height={800} startQuick={['pendente']} /></ProductPreview>} /></Site>
  <L>Celular</L>
  <Site mobile><Hero tone="dark" eyebrow="Plataforma · CRM + IA + BI" title={<>Atenda mais. Venda mais. Tudo com a mesma <Accent>equipe</Accent>.</>} lead="Atendimento pelo WhatsApp, funil de vendas e automações num só lugar." actions={actions} preview={pv} /></Site>
</>);
