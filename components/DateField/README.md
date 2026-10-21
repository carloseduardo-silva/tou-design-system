Data (`DateField`), intervalo de datas (`DateField` com `range`) e hora (`TimeField`), digitáveis e com calendário ou grade de horários.

## O que você fornece
- `DateField`: `label`, `value`/`onChange` ou `range`/`onRangeChange`, `isDisabled(d)` para dias indisponíveis, `today`.
- `TimeField`: `label`, `value`, `onChange`, `step` (min), `from`, `to`, `unavailable`.
- `Calendar` pode ser usado sozinho (agenda).

## Regras visuais
- Hoje: contorno em `text-brand` e peso 600. Selecionado: **círculo cheio** em `primary` (forma, não só cor). Intervalo: faixa em `primary-soft` entre início e fim.
- Indisponível: `text-disabled` **riscado**. Fora do mês: `text-tertiary`.
- Semana começa no domingo; meses e dias em português.
