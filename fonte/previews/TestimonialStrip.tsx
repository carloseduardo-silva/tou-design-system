import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { QUOTES } from './_landing';
const { Testimonial, TestimonialStrip } = T;
mountMkt(<>
  <L>Depoimento: nota com o número escrito, citação e autoria (marcadores: trocar por depoimentos reais e autorizados)</L>
  <div className="mk-row">
    <Testimonial {...QUOTES[0]} />
    <div style={{ width: 460 }}><Testimonial {...QUOTES[1]} serif feature /></div>
  </div>
  <L>Faixa de depoimentos (rolagem contínua com pausa)</L>
  <Site pad><div className="tou-container"><TestimonialStrip items={QUOTES} /></div></Site>
</>);
