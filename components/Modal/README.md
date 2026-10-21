Diálogo modal (480/640/880/1120) com título, corpo rolável e rodapé de ações, e `ConfirmDialog` para confirmações, inclusive destrutivas.

## O que você fornece
- `Modal`: `open`, `onClose`, `title`, `subtitle`, `size`, `children`, `footer` (secundário e depois primário), `footerStart`, `closeOnOverlay`.
- `ConfirmDialog`: `title` em pergunta ("Excluir 3 contatos?"), `description` com a consequência, `confirmLabel` com o verbo (nunca "Sim"/"OK"), `tone` (`danger`, `warning`, `primary`), `loading`.

## Comportamento
- Foco vai para o primeiro campo (ou para "Cancelar" na confirmação), fica preso no diálogo, Esc fecha e o foco volta para quem abriu.
- Fechar (×) fica no canto, fora do título. Véu `bg-overlay`; sombra `shadow-xl`; raio `radius-xl`.
- Abaixo de 600px vira tela cheia e os botões dividem o rodapé.

## Faça / não faça
- Faça: mostre os erros nos campos e um resumo no rodapé ("2 campos precisam de atenção").
- Não faça: modal sobre modal. Não faça: fechar pelo véu em formulário longo (`closeOnOverlay={false}`).
