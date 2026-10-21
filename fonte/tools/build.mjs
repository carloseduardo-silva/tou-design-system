// Build: bundle.js + bundle.css + previews (+ index.d.ts via tsc, separately).
import fs from 'fs';
import path from 'path';
import { buildSync } from 'esbuild';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DS = path.resolve(ROOT, '..');
const META = JSON.parse(fs.readFileSync(path.join(ROOT, 'previews/_meta.json'), 'utf8'));
const only = process.argv.slice(2);

const common = {
  bundle: true, format: 'iife', target: 'es2018', jsxFactory: 'React.createElement', jsxFragment: 'React.Fragment',
  inject: [path.join(ROOT, 'src/react-shim.ts')], write: false, minifySyntax: true, legalComments: 'inline', charset: 'utf8',
};
const safe = (s) => s.replace(/<\/script/gi, '<\\/script').replace(/<!--/g, '<\\!--');

// bundle
const order = META.bundleOrder;
const header = `/* @ds-bundle: ${JSON.stringify({ format: 4, namespace: 'TOU', components: order.map((name) => ({ name })) })} */\n`;
const b = buildSync({ ...common, entryPoints: [path.join(ROOT, 'src/index.tsx')], globalName: 'TOU' });
fs.writeFileSync(path.join(DS, 'components/bundle.js'), header + safe(b.outputFiles[0].text));

// css
const css = fs.readdirSync(path.join(ROOT, 'css')).sort().map((f) => fs.readFileSync(path.join(ROOT, 'css', f), 'utf8')).join('\n');
if (/<\/style/i.test(css)) throw new Error('</style in css');
fs.writeFileSync(path.join(DS, 'components/bundle.css'), css);

// previews
for (const [comp, m] of Object.entries(META.cards)) {
  if (only.length && !only.includes(comp)) continue;
  const src = path.join(ROOT, 'previews', `${comp}.tsx`);
  if (!fs.existsSync(src)) { console.log('skip (no preview)', comp); continue; }
  const out = buildSync({ ...common, entryPoints: [src] }).outputFiles[0].text;
  const marker = `<!-- @dsCard group="${m.group}"${m.page ? ' page' : ''}${m.width ? ` width=${m.width}` : ''} height=${m.height}${m.subtitle ? ` subtitle="${m.subtitle}"` : ''} -->`;
  const html = `${marker}\n<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${comp}</title>\n</head>\n<body>\n<div id="root"></div>\n<script>\n${safe(out)}\n</script>\n</body>\n</html>\n`;
  fs.mkdirSync(path.join(DS, 'components', comp), { recursive: true });
  fs.writeFileSync(path.join(DS, 'components', comp, 'preview.html'), html);
}
console.log('built', Object.keys(META.cards).length, 'cards');
