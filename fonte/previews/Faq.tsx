import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { FAQ } from './_landing';
const { Faq } = T;
mountMkt(<>
  <L>O Accordion do sistema na escala do site (perguntas 18px, respostas 16px)</L>
  <Site pad><div className="tou-container"><Faq items={FAQ} defaultOpen={['q1']} /></div></Site>
</>);
