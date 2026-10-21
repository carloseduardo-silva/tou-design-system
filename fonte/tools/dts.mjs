import fs from 'fs';
const T = 'out/types/';
const icons = Object.keys(JSON.parse(fs.readFileSync('src/icon-data.ts', 'utf8').split(' = ')[1].trim().replace(/;$/, '')));
let out = `/**\n * TOU — tipos dos componentes (documentação; window.TOU).\n * Carregue React 18 e ReactDOM 18 antes de components/bundle.js. Estilos: tokens.css + components/bundle.css.\n * Ícones: Lucide (ISC), nomes abaixo em IconName.\n */\nimport * as React from 'react';\n\nexport type IconName =\n  | ${icons.map((n) => `'${n}'`).join('\n  | ')};\n\n`;
for (const f of ['core', 'buttons', 'display', 'fields', 'overlays', 'menu', 'data', 'nav', 'marketing']) {
  let s = fs.readFileSync(T + f + '.d.ts', 'utf8');
  s = s.split('\n').filter((l) => !/^import /.test(l) && !/^export type IconName/.test(l)).join('\n');
  out += `// ---- ${f} ----\n` + s.trim() + '\n\n';
}
fs.writeFileSync('../components/index.d.ts', out);
console.log('index.d.ts', out.length, 'bytes', icons.length, 'icons');
