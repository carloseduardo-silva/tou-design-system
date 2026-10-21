# TOU design system: pacote completo

Cópia completa do design system publicado, com tudo o que é preciso para usar e manter.

## O que tem aqui
- `README.md`: o guia da marca e do sistema (princípios, cor, tipografia, componentes, regras).
- `tokens.json`: todos os tokens (cor nos temas claro, escuro e navy; tipografia; espaço; raio; sombra; movimento).
- `tokens.css`: os mesmos tokens como variáveis CSS, prontos para importar.
- `fonts/`: Geist, Geist Mono e Instrument Serif Italic (woff2).
- `assets/Logos/`: logo colorido e o arquivo branco (marca-d'água de ~10%; veja o README da pasta).
- `components/`:
  - `bundle.js` e `bundle.css`: os componentes prontos (React 18, em `window.TOU`).
  - `index.d.ts`: os tipos e as props de cada componente.
  - `src/`: o código-fonte TSX de cada componente.
  - `<Componente>/README.md`: regras de cada componente.
  - `<Componente>/preview.html`: a prévia no formato do design system publicado. Ela só abre dentro dele; fora dele, use `previews-offline/`.
- `previews-offline/`: as mesmas prévias, que abrem direto no navegador. Comece por `index.html`.
- `fonte/`: o projeto que gera tudo: tokens, bundle, tipos, prévias e READMEs.

## Usar os componentes
Carregue nesta ordem:
1. `tokens.css`
2. `components/bundle.css`
3. React 18 e ReactDOM 18
4. `components/bundle.js`

O tema vem de `data-theme="light" | "dark" | "navy"` no `<html>` ou num container.

## Regerar a partir da fonte
```bash
cd fonte
npm install
python3 build_tokens.py ../tokens.json                  # tokens.json + checagem de contraste
python3 tools/tokens-css.py .. ../tokens.css            # tokens.css
node tools/icons.mjs                                    # ícones Lucide usados
node tools/build.mjs                                    # bundle.js, bundle.css e as prévias
npx tsc -p tsconfig.json && node tools/dts.mjs          # index.d.ts
python3 tools/readmes.py ..                             # README de cada componente
```
