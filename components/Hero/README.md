Abertura da landing: eyebrow, título (h1) com uma palavra em serif, lead, CTAs em pílula, prova social e preview do produto, sobre malha de gradiente escura (marinho) ou clara.

## O que você fornece
`tone` (`dark` | `light`), `split` (texto e preview lado a lado), `eyebrow`, `title` (use `<Accent>` em **uma** palavra), `lead`, `actions` (primário + no máximo um secundário, `pill size="lg"`), `proof`, `preview` (um `ProductPreview`), `id`.

## Regras
- A malha e o brilho usam `brand-blue`, `brand-cyan` e `brand-teal` só como luz atrás do conteúdo. Todo texto fica sobre o marinho (`ink-950`), nunca sobre o gradiente.
- No escuro, o destaque em serif fica em `brand-cyan` (9,2:1); no claro, na cor do texto.
- `ProductPreview` mostra a interface real do produto reduzida, inerte (sem foco) e descrita por `label`. Não use capturas antigas nem fotos de banco de imagem.
- O brilho pulsa devagar e para com "reduzir movimento".
- No celular, os CTAs ocupam a largura toda (48px).
