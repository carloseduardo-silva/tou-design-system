Recursos em abas: lista de abas com ícone, título e descrição e um painel com a prévia do produto; troca sozinha com barra de progresso e pode ser pausada.

## O que você fornece
`items` (`{ id, icon, title, description, content }`), `label`, `interval` (s; 0 desliga), `startIndex`.

## Regras
- Autoplay pausa no hover, no foco dentro do bloco e no botão "Pausar troca automática" (44px), e fica desligado com "reduzir movimento".
- Setas, Home e End navegam entre as abas. Painel com `role="tabpanel"`.
- No celular, as abas viram chips roláveis e a descrição sobe para o painel.
