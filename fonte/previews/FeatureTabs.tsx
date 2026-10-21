import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { featureItems } from './_landing';
const { FeatureTabs } = T;
mountMkt(<>
  <L>Desktop: troca a cada 7 s com barra de progresso; pausa no hover, no foco e no botão; setas navegam</L>
  <Site pad><div className="tou-container"><FeatureTabs label="Recursos do TOU" items={featureItems()} /></div></Site>
  <L>Pausado na 2ª aba</L>
  <Site pad><div className="tou-container"><FeatureTabs label="Recursos do TOU" items={featureItems()} startIndex={1} paused /></div></Site>
  <L>Celular: as abas viram chips roláveis e a descrição sobe para o painel</L>
  <Site mobile pad><div className="tou-container"><FeatureTabs label="Recursos do TOU" items={featureItems(true)} startIndex={2} /></div></Site>
</>);
