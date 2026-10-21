Cabeçalho do site: logo, links de navegação, "Entrar" e CTA em pílula; no celular, botão de menu de 44px que abre o painel de links.

## O que você fornece
`links` (`{ label, href, current? }`), `logoSrc`, `cta` (`{ label, onClick | href }`), `login`, `overDark` (sobre hero escuro: transparente e tema marinho).

## Regras
- Fica fixo no topo ao rolar. Sobre o hero escuro, entra transparente; ao abrir o menu no celular, ganha fundo `bg-surface`.
- O botão de menu tem `aria-expanded` e `aria-controls`; Esc fecha. Links do painel com 48px de altura.
- Um só CTA primário ("Agendar demonstração"). Abaixo de 480px ele sai da barra e fica dentro do menu.
- Logo: o colorido em todos os fundos (o arquivo branco fornecido é uma marca-d'água de ~10%).
