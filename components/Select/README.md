Escolha de uma opção numa lista curta (até ~15 itens); para listas longas ou buscáveis, use `Combobox`.

## O que você fornece
`label`, `options` (`{ value, label, meta?, icon?, disabled?, group? }`), `value`, `onChange`, `placeholder`, `help`, `error`, `size`, `disabled`.

## Comportamento
- Gatilho é um botão com `aria-haspopup="listbox"`. Setas abrem a lista; dentro dela, setas, Home/End, Enter/Espaço escolhem, Esc e Tab fecham e devolvem o foco.
- Opção ativa (teclado/hover) em `bg-hover`; selecionada com peso 500 e check em `text-brand` (não só cor); desabilitada em `text-disabled`.
- Grupos com título em overline.
