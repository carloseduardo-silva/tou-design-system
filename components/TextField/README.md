Campo de texto de uma linha e `Textarea`, com rótulo sempre visível acima, ajuda e erro abaixo ligados ao campo.

## O que você fornece
`label` (obrigatório), `required` ou `optional`, `placeholder` (só exemplo, nunca o rótulo), `help`, `error`, `icon`, `prefix`/`suffix` ("R$", "dias"), `addonStart` (seletor de país do telefone), `onClear`, `maxLength` (mostra contador), `size` (`sm` 32 para filtros e tabelas, `md` 40 para formulários), `disabled`, `readOnly`.

## Estados
Padrão (`border-control`, 3:1), hover (borda `text-secondary`), foco (borda e anel `focus-ring`), erro (borda `danger`, mensagem com ícone, `aria-invalid`), desabilitado (`bg-disabled`) e somente leitura (`bg-sunken`).

## Texto
- Erro diz como corrigir: "Digite um e-mail completo, como nome@empresa.com.", não "Formato inválido".
- Marque o que é minoria: se quase tudo é obrigatório, marque os opcionais.

## Exceção
A busca da `FilterBar` e do `PageHeader` usa rótulo acessível oculto (`className="tou-sr-label"`): a lupa e o papel `search` fazem o papel visual. Em formulário, o rótulo é sempre visível.
