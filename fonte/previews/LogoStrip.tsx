import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { LOGOS } from './_landing';
const { LogoStrip } = T;
mountMkt(<>
  <L>Rolagem contínua; para no hover, no foco ou no botão de pausa (44px). Com “reduzir movimento”, vira grade parada</L>
  <Site pad><div className="tou-container"><LogoStrip title={<><b>+50 empresas</b> já transformaram suas operações com o TOU</>} logos={LOGOS} /></div></Site>
  <L>Pausada</L>
  <Site pad><div className="tou-container"><LogoStrip title="Clínicas que atendem com o TOU" logos={LOGOS} paused /></div></Site>
</>);
