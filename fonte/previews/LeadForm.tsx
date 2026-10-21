import { T } from './_doc';
import { mountMkt, L, Site } from './_mkt';
import { TODAY } from './_app';
const { LeadForm, ScheduleModal } = T;
const J = { name: 'Joana Prado', phone: '(13) 99700-8834', email: 'joana.prado@email.com', company: 'Clínica Sorriso Pleno', team: '4-10', consent: true };
mountMkt(<>
  <L>Em seção: vazio, com erros e enviado</L>
  <Site pad><div className="tou-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24, alignItems: 'start', maxWidth: 1360 }}>
    <LeadForm />
    <LeadForm submitted initial={{ name: 'Joana Prado', phone: '(13) 9970', email: 'joana@' }} />
    <LeadForm done initial={J} />
  </div></Site>
  <L>Modal de agendamento por etapas: 1 dados (erro) · 2 clínica · 3 horário · confirmado</L>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24 }}>
    <Site h={620}><ScheduleModal open contained onClose={() => {}} today={TODAY} submitted /></Site>
    <Site h={620}><ScheduleModal open contained onClose={() => {}} today={TODAY} startStep={1} initial={{ ...J, company: '', team: '', consent: false }} /></Site>
    <Site h={760}><ScheduleModal open contained onClose={() => {}} today={TODAY} startStep={2} initial={J} /></Site>
    <Site h={760}><ScheduleModal open contained onClose={() => {}} today={TODAY} startStep={3} initial={J} /></Site>
  </div>
  <L>Celular: tela cheia</L>
  <Site mobile h={760}><ScheduleModal open contained fullScreen onClose={() => {}} today={TODAY} startStep={2} initial={J} /></Site>
</>);
