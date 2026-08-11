# Sardenha · 15–20 de agosto

**No ar: https://leoolmos.github.io/sardinia/**

Roteiro dia a dia com mapa, montado para 8 pessoas: 4 adultos, 2 crianças (7 e 8 anos) e 2 idosos (76 anos). Base no Hotel Marina Garden, em Marina di Orosei. Dois carros.

## Rodar

Abra `index.html` no navegador. Não tem build nem dependência instalada — Leaflet vem por CDN.

Ou sirva localmente:

```bash
npx --yes serve -l 4321 .
```

## Estrutura

| Arquivo | O que é |
| --- | --- |
| `index.html` | Interface, mapa, modal e estilos. Não precisa mexer para editar o roteiro. |
| `data.js` | **O roteiro:** dias, paradas, horários, alertas, reservas. |
| `info.js` | **Contexto longo** de cada parada, mostrado no modal. Chave = `id` da parada. |
| `photos.js` | Gerado automaticamente. Não editar à mão. |
| `photos/` | Imagens grandes (galeria) e `photos/t/` com miniaturas de 320px. |

`data.js` e `info.js` são os dois que você edita. Ambos usam o mesmo `id` de parada como chave — é assim que o app liga roteiro, contexto e fotos.

## Editar pelo celular

Abra `data.js` direto no GitHub e use o lápis de edição. Ao commitar em `main`, o GitHub Pages reconstrói sozinho e https://leoolmos.github.io/sardinia/ atualiza em ~1 min.

A estrutura:

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

Outros blocos editáveis no mesmo arquivo: `BASE` (hotel), `BOATS` (comparação dos tipos de barco), `DECISION` (o card de La Pelosa), `BOOKINGS` (tabela de reservas) e `GROUP_NOTES` (notas por perfil).

### Adicionar contexto longo a uma parada

Em `info.js`, com o mesmo `id` usado em `data.js`:

```js
"id-da-parada": {
  what: "O que é o lugar.",
  why: "Por que importa e o que se faz lá.",
  facts: [["Rótulo", "valor"], ["Altura", "270 m"]],
},
```

Isso aparece no modal que abre ao tocar em **Detalhes e fotos**.

### Fotos

Vêm do Wikimedia Commons, com autor e licença creditados no rodapé do modal. Ficam baixadas no repositório em vez de linkadas de fora: assim carregam rápido mesmo com sinal ruim, e a Wikimedia não bloqueia. Para trocar uma foto, substitua o arquivo em `photos/` mantendo o nome e atualize o crédito em `photos.js`.

Vírgula faltando ou aspas não fechadas quebram a página inteira — se depois de editar a tela ficar em branco, o erro está aí.

## Aviso

Horários de barco, cotas de acesso a praias e taxas mudam a cada temporada. Tudo marcado como reserva no app precisa ser confirmado antes da viagem.
