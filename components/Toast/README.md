Aviso passageiro do resultado de uma ação, suave ou sólido por estado, com ação opcional ("Desfazer") e fechar.

## O que você fornece
Envolva o app em `ToastProvider` e dispare com `const toast = useToast(); toast({ tone: 'success', title: 'Contato salvo' })`. Campos: `tone`, `solid`, `title`, `description`, `action`, `duration`.

## Regras
- Some em 5 s; pausa com o mouse em cima ou com foco dentro. Erros que exigem ação: `duration: 0`.
- No máximo 3 empilhados, canto inferior direito, região `aria-live`.
