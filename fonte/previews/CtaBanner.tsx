import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
const { CtaBanner, Accent, Button } = T;
const a = <><Button pill size="lg" iconEnd="arrow-right">Quero uma demonstração</Button><Button pill size="lg" variant="secondary" iconStart="message-circle">Falar no WhatsApp</Button></>;
mountMkt(<>
  <L>Marinho com brilho de marca; texto sempre sobre o marinho, nunca sobre o gradiente</L>
  <Site pad><div className="tou-container"><CtaBanner eyebrow="Comece agora" title={<>Pronto para atender mais com a mesma <Accent>equipe</Accent>?</>} lead="Agende uma demonstração e veja o TOU com o seu WhatsApp, a sua agenda e o seu funil." actions={a} /></div></Site>
  <L>Celular</L>
  <Site mobile pad><div className="tou-container"><CtaBanner title={<>Pronto para atender mais com a mesma <Accent>equipe</Accent>?</>} lead="Agende uma demonstração." actions={a} /></div></Site>
</>);
