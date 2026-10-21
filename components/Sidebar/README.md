Menu lateral do produto, expandido (248px) ou recolhido (64px, só ícones com dica), com logo, lupa que filtra as telas, grupos, subitens, item ativo, item bloqueado e bloco do usuário.

## O que você fornece
`groups` (`{ label?, items: [{ id, label, icon, href?, children?, locked?, lockedHint?, badge?, keywords? }] }`), `current`, `collapsed`/`onCollapsedChange`, `expanded`/`onExpandedChange`, `logoSrc` (logo colorido nos dois temas), `searchable` (padrão `true`), `user`, `footerActions`, `onNavigate`, `onClose` (dentro da gaveta do celular).

## Regras
- Topo: logo à esquerda e lupa à direita (`IconButton` ghost de 40px, "Buscar no menu", `aria-pressed` enquanto a busca está aberta). Recolhido: logo e a lupa logo abaixo; clicar na lupa expande o menu e já abre a busca.
- Busca do menu: só filtra as telas do próprio menu. O campo aparece abaixo do logo; os rótulos de grupo somem; um item aparece se o nome (ou `keywords`) contém o texto, sem acento e sem caixa, ou se algum subitem contém. Item que bate mostra todos os subitens; pai de subitem que bate fica aberto e destacado. O trecho encontrado fica em peso 600 com fundo `primary-soft` e sublinhado, nunca só por cor.
- Abaixo do campo: "Filtro ativo · N telas · Esc para limpar" (anunciado). Enter abre a primeira tela da lista; Esc limpa o texto e, com o campo vazio, fecha a busca e devolve o foco à lupa. Sem resultado: "Nenhuma tela com “…”" e "Limpar busca".
- Recolher/expandir: botão redondo de 24px na borda direita, metade dentro e metade fora do menu, alinhado à lupa; seta para a esquerda (recolher) ou direita (expandir), `aria-expanded` e dica. Na gaveta do celular ele some e entra o "Fechar menu" (X) ao lado da lupa.
- Ativo: `bg-selected`, `text-brand`, peso 600 e indicador de 3px em `primary` (`aria-current="page"`).
- Bloqueado: cadeado + dica ("Disponível no plano Pro"); continua focável e leva à página de Planos.
- Recolhido: cada item tem nome acessível e tooltip; o grupo com subitem ativo fica marcado.
- Grupos em overline. Não use cores por item.
