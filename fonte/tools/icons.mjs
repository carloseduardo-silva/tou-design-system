import fs from 'fs';
const names = `check x chevron-down chevron-up chevron-left chevron-right chevrons-up-down arrow-up arrow-down arrow-up-down search plus minus trash pencil ellipsis-vertical list-filter sliders-horizontal calendar clock info circle-alert triangle-alert circle-check circle-x circle-question-mark user users user-plus message-square message-circle phone mail tag eye eye-off settings bell log-out house chart-column funnel send bot megaphone building credit-card lock external-link inbox download upload refresh-cw copy star panel-left-close panel-left-open workflow contact funnel-x check-check trending-up trending-down moon sun file-text zap sparkles headset search-x calendar-range image arrow-left arrow-right list square-kanban play pause menu chevron-first chevron-last`.split(' ');
const out = {}; const miss = [];
for (const n of names) {
  const f = `node_modules/lucide/dist/esm/icons/${n}.mjs`;
  if (!fs.existsSync(f)) { miss.push(n); continue; }
  const src = fs.readFileSync(f, 'utf8');
  const arr = src.slice(src.indexOf('= [') + 2, src.lastIndexOf('];') + 1);
  out[n] = eval(arr);
}
fs.writeFileSync('src/icon-data.ts', '/* Lucide icons (ISC license, lucide.dev) — path data copied verbatim */\nexport const ICONS: Record<string, [string, Record<string, string>][]> = ' + JSON.stringify(out) + ';\n');
console.log('icons', Object.keys(out).length, 'missing', miss);
