import { T, Themes, mount } from './_doc';
const { KpiCard } = T;
const W = ['Sem. 1', 'Sem. 2', 'Sem. 3', 'Sem. 4', 'Sem. 5', 'Sem. 6', 'Sem. 7', 'Sem. 8', 'Sem. 9', 'Sem. 10'];

mount(
  <Themes>
    {() => (
      <div className="doc-grid2">
        <KpiCard label="Conversas atendidas" value="1.284" delta={12.4} comparison="vs. setembro" trend={[82, 95, 90, 104, 99, 118, 112, 126, 131, 140]} trendLabels={W} info="Conversas com ao menos uma resposta de atendente no período." />
        <KpiCard label="Tempo médio de resposta" value="4 min 32 s" delta={8.1} invert comparison="vs. setembro" trend={[3.9, 4.1, 4.0, 4.4, 4.2, 4.6, 4.5, 4.4, 4.7, 4.5]} trendLabels={W} />
        <KpiCard label="Valor em negociação" value="R$ 48.920" delta={-3.2} comparison="vs. setembro" large />
        <KpiCard label="Agendamentos" value="" loading />
      </div>
    )}
  </Themes>,
);
