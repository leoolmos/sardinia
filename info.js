/* ---------------------------------------------------------------------------
   INFO — contexto longo de cada parada, mostrado no modal "Detalhes e fotos".

   Chave = o `id` da parada em data.js. Campos:
     what   o que é o lugar
     why    por que importa / o que se faz lá
     facts  pares [rótulo, valor], mostrados em grade

   As fotos ficam em photos.js, geradas a partir do Wikimedia Commons.
   Para adicionar contexto a uma parada nova, crie uma entrada com o mesmo id.
--------------------------------------------------------------------------- */
const INFO = {
  "vela-rooms": {
    what: "Hospedagem na Via Roma 83, a avenida de arcadas que separa a cidade velha do porto de Cagliari. O endereço é o melhor trunfo logístico do dia.",
    why: "Do portão até a base do Bastione Saint Remy são ~400 m no plano, e o bairro Marina — a maior concentração de trattorias da cidade — começa na esquina. Só o Molentargius exige pegar o carro.",
    facts: [["Endereço", "Via Roma 83, Cagliari"], ["Até o Bastione", "~400 m a pé, plano"], ["Até o Molentargius", "7 km, ~15 min"]],
  },

  molentargius: {
    what: "Parque natural regional de 1.600 ha entre Cagliari e Quartu Sant'Elena, espremido entre a cidade e a praia do Poetto. Foi salina ativa até 1985 — o nome vem de molente, burro em campidanês, os animais que carregavam o sal. Hoje é uma das zonas úmidas mais importantes do Mediterrâneo, protegida pela Convenção de Ramsar desde 1977.",
    why: "Os flamingos rosa deixaram de ser apenas visitantes de inverno e passaram a nidificar aqui em 1993. Hoje são milhares de casais por ano — uma das raríssimas colônias de nidificação dentro de uma cidade grande na Europa. Além deles há garças, pernilongos e o pollo sultano, ave azul que virou símbolo do parque. Percorre-se por trilhas planas entre os tanques de água doce e os de água salgada.",
    facts: [["Área", "1.600 ha"], ["Flamingos nidificam desde", "1993"], ["Sítio Ramsar desde", "1977"], ["Entrada", "gratuita"], ["Sombra", "praticamente nenhuma"]],
  },

  "cagliari-castello": {
    what: "O Castello é o bairro medieval murado no ponto mais alto de Cagliari, erguido pelos pisanos no século XIII e depois ocupado pelos aragoneses por quatro séculos. O Bastione Saint Remy é bem mais recente: construído entre 1896 e 1902 em calcário branco sobre as muralhas espanholas, leva o nome do primeiro vice-rei piemontês da ilha.",
    why: "O terraço Umberto I é a vista clássica da cidade — telhados, porto, laguna e mar num único enquadramento. Dentro das muralhas ficam a catedral de Santa Maria, de origem pisana, e ruelas estreitas que dão sombra mesmo em agosto.",
    facts: [["Bastione construído", "1896–1902"], ["Bairro fundado", "século XIII, pelos pisanos"], ["Acesso", "elevador público na Piazza Costituzione"], ["Custo", "gratuito"]],
  },

  "cagliari-elefante": {
    what: "Torre defensiva pisana de 1307, obra do arquiteto Giovanni Capula, com 31 m de altura. O nome vem de uma pequena escultura de elefante encaixada na lateral. Como as outras torres pisanas de Cagliari, tem a face voltada para a cidade totalmente aberta — se um inimigo tomasse a torre, ela não serviria de fortaleza contra os próprios moradores.",
    why: "Vista aberta do alto e um exemplo raro de arquitetura militar pisana intacta. A subida é por escadas e passarelas de madeira.",
    facts: [["Construída", "1307"], ["Altura", "31 m"], ["Custo", "~€3"], ["Acessibilidade", "só escadas — não indicada aos 76 anos"]],
  },

  barumini: {
    what: "Su Nuraxi é o maior e mais importante complexo nurágico da Sardenha, Patrimônio Mundial da UNESCO desde 1997. Um nuraghe é uma torre-fortaleza de pedra seca construída pela civilização nurágica, que ocupou a ilha aproximadamente entre 1800 e 500 a.C. Sobraram cerca de 7.000 deles espalhados pela Sardenha, e não existe nada parecido em nenhum outro lugar do mundo.",
    why: "A torre central de Su Nuraxi foi erguida por volta de 1500 a.C. em blocos de basalto encaixados sem argamassa, e chegava a uns 18 m de altura, com três andares sobrepostos. Depois ganhou um bastião com mais quatro torres ligadas por muralha e, em volta, um povoado de cerca de cinquenta cabanas circulares de pedra. Tudo ficou soterrado sob um morro de terra até ser escavado entre 1950 e 1957 pelo arqueólogo Giovanni Lilliu. Visita só com guia, cerca de 1h.",
    facts: [["Torre central", "~1500 a.C."], ["UNESCO desde", "1997"], ["Escavado por", "Giovanni Lilliu, 1950–57"], ["Nuraghi na Sardenha", "~7.000"], ["Visita", "guiada obrigatória, ~1h"], ["Custo", "€15 adulto"]],
  },

  "marina-orosei": {
    what: "A praia de Orosei fica na foz do rio Cedrino: areia larga, cordão de dunas e um pinheiral plantado atrás para segurar a areia.",
    why: "Está a 3 minutos do Hotel Marina Garden, com acesso plano. É o fim de dia sem esforço nenhum.",
    facts: [["Do hotel", "~3 min a pé"], ["Tipo", "areia larga com dunas"], ["Acesso", "plano"]],
  },

  "cala-liberotto": {
    what: "Sequência de pequenas enseadas de areia branca separadas por rochas graníticas baixas, a 12 km ao norte de Orosei.",
    why: "É a praia mais fácil da região para este grupo: estacionamento perto, entrada na água plana e gradual, quiosques com banheiro e piscinas naturais rasas entre as rochas, onde as crianças ficam seguras.",
    facts: [["Do hotel", "12 km, ~15 min"], ["Entrada na água", "plana e gradual"], ["Estrutura", "quiosques e banheiro"], ["Estacionamento", "pago em agosto"]],
  },

  bidderosa: {
    what: "Oásis protegido de cerca de 860 ha no município de Orosei, com cinco calas de areia clara escondidas dentro de um pinheiral denso, e uma lagoa costeira.",
    why: "O número de carros que entram por dia é limitado — por isso Bidderosa continua vazia mesmo no auge de agosto, quando o resto da costa lota. Dá para entrar de carro até perto das calas, o que resolve a caminhada, e o pinheiral oferece sombra de verdade, coisa rara na Sardenha.",
    facts: [["Área", "~860 ha"], ["Calas", "5"], ["Cota diária", "~130 carros"], ["Custo", "~€12 por carro"], ["Reserva", "online, antecipada"]],
  },

  "orosei-centro": {
    what: "Orosei foi a capital histórica da Baronia e guarda um centro de calcário branco com igrejas dos séculos XVII e XVIII. A Piazza del Popolo concentra a igreja de San Giacomo Maggiore, de cúpula caiada, e o conjunto de Sant'Antonio Abate com sua torre medieval, que já serviu de prisão.",
    why: "Grazia Deledda, única italiana a ganhar o Nobel de Literatura, ambientou Canne al Vento nesta região. O centro é pequeno e plano: 40 minutos a pé cobrem tudo, no fim da tarde, com gelato.",
    facts: [["Do hotel", "~10 min de carro"], ["Terreno", "plano, centro compacto"], ["Melhor horário", "18h–20h"]],
  },

  "cala-gonone-porto": {
    what: "Vila portuária pertencente a Dorgali, encravada entre a montanha e o mar. Até o século XIX só se chegava aqui de barco — foi preciso furar um túnel na rocha para abrir estrada.",
    why: "É o ponto de partida de praticamente todos os barcos do Golfo di Orosei. As calas do golfo não têm estrada: ou se chega por mar, ou por trilhas de várias horas pelo Supramonte.",
    facts: [["Do hotel", "34 km, ~40 min"], ["Embarque", "45 min antes da saída"], ["Estacionamento", "enche cedo em agosto"]],
  },

  "bue-marino": {
    what: "Bue marino, boi-marinho, é como os sardos chamavam a foca-monge do Mediterrâneo, que usava esta caverna como refúgio até os anos 1980. A espécie desapareceu das águas sardas, mas o nome ficou. O sistema de galerias é um dos maiores da Itália, com vários quilômetros mapeados.",
    why: "A visita percorre cerca de 900 m de passarela iluminada por dentro da montanha, com estalactites, um lago de água doce interno e petroglifos neolíticos conhecidos como os dançarinos. É escuro, ecoante e fresco — costuma ser o ponto alto do dia para as crianças.",
    facts: [["Percurso", "~900 m de passarela"], ["Duração", "~1h, com guia"], ["Temperatura interna", "~20 °C"], ["Piso", "úmido — calçado fechado"], ["Custo", "~€10, em geral à parte"]],
  },

  "cala-luna": {
    what: "Praia de cerca de 800 m de areia clara na foz do cânion Codula di Luna, fechada por um paredão calcário de quase 100 m. No fundo da enseada há seis grandes grutas abertas na rocha, ao nível da areia.",
    why: "É a mais espaçosa e a mais fácil das calas do golfo: desembarque direto na areia, praia plana, sombra dentro das grutas a poucos metros e um quiosque. Para os dois de 76 anos, é a melhor parada do dia de barco.",
    facts: [["Extensão", "~800 m de areia"], ["Paredão", "~100 m"], ["Grutas", "6, exploráveis a pé"], ["Acesso", "só por mar ou trilha longa"]],
  },

  "cala-mariolu": {
    what: "Em sardo se chama Ispuligidenie, algo como pulgas de neve, pelos seixos brancos e arredondados que cobrem a praia no lugar da areia. O apelido italiano Mariolu quer dizer ladrão — era como os pescadores chamavam a foca-monge que roubava o peixe das redes.",
    why: "É a água mais bonita do golfo, num degradê de turquesa que vem do fundo de seixo claro. Em compensação, seixo é instável para caminhar e o fundo desce rápido logo depois da margem. Sapatilha de neoprene resolve boa parte do problema.",
    facts: [["Nome sardo", "Ispuligidenie"], ["Fundo", "seixos brancos, desce rápido"], ["Cota diária", "sim — costa de Baunei"], ["Recomendado", "sapatilha de neoprene"]],
  },

  "genna-silana": {
    what: "Passo de montanha a 1.017 m na SS125 Orientale Sarda, entre os Supramontes de Urzulei e de Orgosolo. Do mirante se vê de cima a Gola su Gorropu, o cânion mais profundo da Europa: 1,5 km de extensão com paredes que chegam a 500 m de altura, escavadas pelo rio Flumineddu.",
    why: "Melhor relação vista/esforço da viagem inteira: o mirante fica na beira da estrada, a uns 20 m do estacionamento, em terreno plano. Tem bar com banheiro. Cabras e porcos costumam circular soltos ali.",
    facts: [["Altitude", "1.017 m"], ["Gorropu", "paredes de até 500 m"], ["Esforço", "~20 m no plano"], ["Custo", "gratuito"]],
  },

  "baunei-golgo": {
    what: "Planalto a cerca de 700 m sobre Baunei, assentado num antigo derrame de lava basáltica. No meio dele fica a igreja campestre de San Pietro, do século XVII, cercada pelas cumbessias — casinhas de pedra onde os romeiros se alojavam durante a novena. Ao lado há um betilo, pedra sagrada de origem nurágica.",
    why: "Burros, porcos, cabras e cavalos circulam soltos por todo o planalto, mansos e acostumados a gente. Para as crianças de 7 e 8 anos é o ponto alto do dia. Depois da subida, o planalto em si é plano, com sombra de zimbros centenários.",
    facts: [["Altitude", "~700 m"], ["Igreja de San Pietro", "século XVII"], ["Subida desde Baunei", "10 km de rampa e curvas"], ["Temperatura", "~8 °C abaixo da costa"]],
  },

  "su-sterru": {
    what: "Abismo cárstico aberto no meio do planalto do Golgo, com cerca de 270 m de profundidade e boca de aproximadamente 40 por 20 m. É um dos poços verticais de queda única mais profundos da Europa.",
    why: "Existe mirante cercado na borda. Do estacionamento são uns 300 m de caminhada em terreno de pedra irregular — é a parte mais desconfortável do dia para os 76 anos, e uma parada dispensável se o calor estiver forte.",
    facts: [["Profundidade", "~270 m"], ["Boca", "~40 × 20 m"], ["Caminhada", "~300 m em pedra irregular"], ["Custo", "gratuito"]],
  },

  "pranzo-agriturismo": {
    what: "Na Itália, agriturismo é categoria regulada por lei: para usar o nome, a casa precisa ser uma propriedade agrícola em atividade e a maior parte do que serve tem que sair dali. É a diferença entre comer comida sarda e comer na casa de quem a produz. Funciona com menu fixo e horário único — você não escolhe nada, e vai chegando.",
    why: "A sequência costuma ser antipasto de pecorino e embutidos da casa com pane carasau, depois culurgiones, depois porceddu no espeto, cannonau da região e mirto ou filu 'e ferru no fim. Cada um desses itens aparece nos estudos sobre longevidade sarda — mas o que mais importa aqui não é a química da comida, é que são duas horas e meia à mesa, com a família da casa por perto. A Blue Zone é tanto isso quanto a dieta.",
    facts: [["Formato", "menu fixo, sem carta"], ["Horário", "quase sempre 13h em ponto"], ["Custo", "€35–45 por adulto, vinho em geral incluso"], ["Reserva", "obrigatória, por telefone"], ["Pagamento", "muitos só em dinheiro"], ["Duração", "~2h30"]],
  },

  "baunei-vila": {
    what: "Vila de pastores a 480 m de altitude, agarrada à encosta acima da SS125, com cerca de 3.400 habitantes. É um dos municípios do núcleo Blue Zone, junto com Talana, Urzulei, Arzana e Villagrande Strisaili.",
    why: "Não há atração para visitar, e é justamente esse o ponto. No fim da tarde as portas abrem, as cadeiras saem para a calçada e a praça em frente à igreja de San Nicola enche — inclusive de gente muito velha, na rua, sozinha, resolvendo a própria vida. O componente social é a parte da Blue Zone que nenhum estudo consegue exportar: o idoso não sai de cena, continua morando com a família e mantendo função. Um caffè no bar da praça às seis da tarde mostra isso melhor que qualquer placa.",
    facts: [["Altitude", "480 m"], ["Habitantes", "~3.400"], ["Melhor horário", "17h–19h, quando a vila sai à rua"], ["Terreno", "ruas em rampa; a praça é plana"], ["Um caffè", "~€1,20"]],
  },

  "hotel-base": {
    what: "Hotel Marina Garden, em Marina di Orosei — base fixa dos cinco dias, na faixa de areia.",
    why: "Ficar cinco noites no mesmo lugar foi decisão deliberada: com dois idosos de 76 anos e duas crianças, cada troca de hotel custa meio dia e cansa mais que qualquer passeio. Daqui, nenhum destino do roteiro passa de 1h25 de carro.",
    facts: [["Noites", "5, de 15 a 20/08"], ["Destino mais distante", "Cala Brandinchi, ~55 min"], ["Até a praia", "poucos minutos a pé"], ["Pedir", "quartos térreos ou perto do elevador"]],
  },

  "cala-brandinchi": {
    what: "Praia de areia branca finíssima em San Teodoro, apelidada de Pequeno Taiti pela água transparente que fica rasa por dezenas de metros. A ilha de Tavolara, um bloco calcário de 565 m, domina o horizonte. Atrás da faixa de areia há um pinheiral e a lagoa de Salina Bamba, onde aparecem flamingos.",
    why: "É a praia mais adequada de toda a viagem para crianças e idosos ao mesmo tempo: entrada na água plana e gradual, sombra de pinheiro logo atrás, estacionamento a poucos minutos a pé, quiosque e banheiro. Substituiu La Pelosa no roteiro e entrega o mesmo tipo de cenário a 55 min do hotel em vez de 3h20.",
    facts: [["Do hotel", "62 km, ~55 min"], ["Água rasa por", "dezenas de metros"], ["No horizonte", "ilha de Tavolara, 565 m"], ["Entrada", "paga, com cota diária"], ["Reserva", "online, obrigatória no verão"]],
  },

  "lu-impostu": {
    what: "Praia colada em Cala Brandinchi, na mesma faixa costeira e com a mesma água clara, porém mais larga e sem cota diária de visitantes.",
    why: "É o plano B imediato se a reserva de Cala Brandinchi não sair — e vale por si: atrás das dunas fica a lagoa de Salina Bamba, com flamingos.",
    facts: [["Cota diária", "não tem"], ["Perfil", "mesmo tipo de areia e água"], ["Extra", "lagoa com flamingos atrás das dunas"]],
  },

  "san-teodoro": {
    what: "Vila turística da costa nordeste, com bastante restaurante e sorveteria. A praia de La Cinta corre por cerca de 5 km entre o mar e a lagoa de San Teodoro, outro ponto de flamingos.",
    why: "Centro plano, com sombra e banheiro fácil — bom para o almoço e para esticar a tarde depois da praia.",
    facts: [["La Cinta", "~5 km de areia"], ["Centro", "plano, com sombra"], ["Reserva", "necessária para mesa de 8"]],
  },

  "cagliari-almoco": {
    what: "O bairro Marina, entre a Via Roma e o Castello, é onde Cagliari concentra suas trattorias. Começa na porta do Vela Rooms.",
    why: "Peça o que é daqui e não de qualquer lugar da Itália: fregola con arselle (a massa em esferas tostadas, com vôngoles), culurgiones, malloreddus alla campidanese e, se estiver com fome de verdade, porceddu. De sobremesa, seadas — o pastel frito de queijo com mel.",
    facts: [["Do hotel", "na esquina"], ["Custo", "€25–35 por pessoa"], ["Reserva", "obrigatória para 8, ainda mais no Ferragosto"], ["Pedir mesa", "interna, com ar-condicionado"]],
  },

  "orosei-checkin": {
    what: "Hotel Marina Garden, em Marina di Orosei, base dos cinco dias seguintes. Fica na faixa de areia, a poucos minutos a pé da praia.",
    why: "Ficar cinco noites no mesmo lugar foi decisão deliberada: com dois idosos de 76 anos e duas crianças, cada troca de hotel custa meio dia e desgasta mais que qualquer passeio. Daqui todos os destinos do roteiro ficam a menos de 1h25.",
    facts: [["Noites", "5, de 15 a 20/08"], ["Até a praia", "poucos minutos a pé"], ["Pedir na reserva", "quartos térreos ou perto do elevador"], ["Pedir no check-in", "late check-out para o dia 20"]],
  },

  "cala-gonone-volta": {
    what: "Volta ao porto de Cala Gonone no fim do dia de barco. A estrada de volta a Orosei atravessa a serra entre Cala Gonone e Dorgali, com curvas fechadas e um túnel.",
    why: "Depois de sete horas de mar e sol, o mais provável é que o grupo queira voltar direto ao hotel. Planeje o jantar simples e não conte com disposição para esticar em Cala Gonone. Se ficarem, o porto tem restaurantes de peixe com vista.",
    facts: [["Até o hotel", "34 km, ~40 min"], ["Estrada", "serra com curvas e túnel"], ["Recomendado", "jantar simples, decidido antes"]],
  },

  "su-barchile": {
    what: "Último almoço no centro histórico de Orosei, antes de pegar a estrada.",
    why: "Feche a viagem com peixe do golfo e um cannonau — a mesma uva que aparece em todo estudo sobre a longevidade sarda, e que vocês já terão provado no planalto do Golgo.",
    facts: [["Onde", "centro histórico de Orosei"], ["Reserva", "necessária para 8 pessoas"], ["Se o voo é de Cagliari", "sair com 4h30 de folga"]],
  },

  "hotel-relax": {
    what: "Hotel Marina Garden, em Marina di Orosei, base dos cinco dias. Fica na faixa de areia, o que elimina qualquer deslocamento no último dia.",
    why: "Depois de três dias de estrada e um de barco, um dia sem carro é o que o grupo precisa. Peça late check-out ou um quarto de cortesia para trocar de roupa — com 8 pessoas, isso muda o dia inteiro.",
    facts: [["Deslocamento", "nenhum"], ["Pedir", "late check-out"], ["Se o voo é de Cagliari", "sair com 4h30 de folga"]],
  },
};
