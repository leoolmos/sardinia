# Sardenha · 15–20 de agosto

Roteiro dia a dia com mapa, montado para 8 pessoas: 4 adultos, 2 crianças (7 e 8 anos) e 2 idosos (76 anos). Base no Hotel Marina Garden, em Marina di Orosei. Deslocamentos de carro.

## Rodar

Abra `index.html` no navegador. Não tem build nem dependência instalada — Leaflet vem por CDN.

Ou sirva localmente:

```bash
npx --yes serve -l 4321 .
```

## Estrutura

| Arquivo | O que é |
| --- | --- |
| `index.html` | Interface, mapa e estilos. Não precisa mexer para editar o roteiro. |
| `data.js` | **Todo o conteúdo do roteiro.** É o único arquivo que você edita no dia a dia. |

## Editar pelo celular

Abra `data.js` direto no GitHub e use o lápis de edição. A estrutura:

### Adicionar uma parada a um dia

Dentro do `stops: [ ... ]` do dia, copie um bloco e ajuste:

```js
{
  id: "id-unico-sem-espaco",
  name: "Nome que aparece no card",
  lat: 40.3846,          // pegue no Google Maps: clique longo no ponto
  lng: 9.7426,
  time: "09:30–13:00",   // opcional
  kind: "praia",         // praia | porto | gruta | cidade | cultura | comida | natureza | vila | base
  desc: "O que é o lugar.",
  senior: "Nota específica para os 76 anos.",   // opcional
  kids: "Nota específica para as crianças.",     // opcional
  cost: "~€2/pessoa",                            // opcional
  book: true,        // opcional, marca como 'reservar'
  optional: true,    // opcional, desenha o card tracejado
}
```

### Adicionar um alerta ao dia

```js
alerts: [
  { level: "warn", text: "Aparece em laranja, para o que trava o dia." },
  { level: "info", text: "Aparece em azul, para contexto." },
]
```

### Adicionar um dia inteiro

Copie um objeto de dia completo dentro de `DAYS` e troque `id`, `date`, `weekday`, `title` e `color`.

Outros blocos editáveis no mesmo arquivo: `BASE` (hotel), `DECISION` (o card de La Pelosa), `BOOKINGS` (tabela de reservas) e `GROUP_NOTES` (notas por perfil).

Vírgula faltando ou aspas não fechadas quebram a página inteira — se depois de editar a tela ficar em branco, o erro está aí.

## Aviso

Horários de barco, cotas de acesso a praias e taxas mudam a cada temporada. Tudo marcado como reserva no app precisa ser confirmado antes da viagem.
