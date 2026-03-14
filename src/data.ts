export interface ChallengeData {
  day: number;
  level: number;
  levelName: string;
  instruction: string;
  content: string;
  image: string;
  type: 'texto-principal' | 'frase-texto' | 'minitexto';
  colorClass: string;
}

const alphabet = [
  { l: "A", i: "🐝", s: "A E I O U" }, { l: "B", i: "🎈", s: "BA BE BI BO BU" },
  { l: "C", i: "🏠", s: "CA CE CI CO CU" }, { l: "D", i: "🎲", s: "DA DE DI DO DU" },
  { l: "E", i: "🐘", s: "E A I O U" }, { l: "F", i: "🍃", s: "FA FE FI FO FU" },
  { l: "G", i: "🐱", s: "GA GE GI GO GU" }, { l: "H", i: "🚁", s: "HA HE HI HO HU" },
  { l: "I", i: "⛪", s: "I A E O U" }, { l: "J", i: "🐊", s: "JA JE JI JO JU" },
  { l: "K", i: "🥝", s: "KA KE KI KO KU" }, { l: "L", i: "🌙", s: "LA LE LI LO LU" },
  { l: "M", i: "🐒", s: "MA ME MI MO MU" }, { l: "N", i: "☁️", s: "NA NE NI NO NU" },
  { l: "O", i: "🥚", s: "O A E I U" }, { l: "P", i: "🍿", s: "PA PE PI PO PU" },
  { l: "Q", i: "🧀", s: "QUA QUE QUI QUO" }, { l: "R", i: "🐀", s: "RA RE RI RO RU" },
  { l: "S", i: "🐸", s: "SA SE SI SO SU" }, { l: "T", i: "🐢", s: "TA TE TI TO TU" },
  { l: "U", i: "🍇", s: "U A E I O" }, { l: "V", i: "🐄", s: "VA VE VI VO VU" },
  { l: "W", i: "🧇", s: "WA WE WI WO WU" }, { l: "X", i: "🍵", s: "XA XE XI XO XU" },
  { l: "Y", i: "🧘", s: "YA YE YI YO YU" }, { l: "Z", i: "🦓", s: "ZA ZE ZI ZO ZU" }
];

const words = [
  { p: "BOLA", i: "⚽" }, { p: "CASA", i: "🏠" }, { p: "DADO", i: "🎲" }, { p: "GATO", i: "🐱" },
  { p: "FOCA", i: "🦭" }, { p: "LOBO", i: "🐺" }, { p: "MACACO", i: "🐒" }, { p: "PATO", i: "🦆" },
  { p: "RATO", i: "🐭" }, { p: "SAPO", i: "🐸" }, { p: "TATU", i: "🦔" }, { p: "VACA", i: "🐮" },
  { p: "BOLO", i: "🎂" }, { p: "PIPA", i: "🪁" }, { p: "MESA", i: "🪑" }, { p: "SUCO", i: "🍹" },
  { p: "FOGO", i: "🔥" }, { p: "GELO", i: "🧊" }, { p: "LUA", i: "🌙" }, { p: "SOL", i: "☀️" },
  { p: "MAR", i: "🌊" }, { p: "REI", i: "👑" }, { p: "PÃO", i: "🍞" }, { p: "MÃO", i: "✋" },
  { p: "PÉ", i: "🦶" }, { p: "CÉU", i: "🌌" }, { p: "RIO", i: "🏞️" }, { p: "FLOR", i: "🌸" },
  { p: "TREM", i: "🚂" }, { p: "NAVIO", i: "🚢" }, { p: "CARRO", i: "🚗" }, { p: "MOTO", i: "🏍️" },
  { p: "BIKE", i: "🚲" }, { p: "AVIÃO", i: "✈️" }, { p: "BALÃO", i: "🎈" }, { p: "PIANO", i: "🎹" },
  { p: "VIOLÃO", i: "🎸" }, { p: "RÁDIO", i: "📻" }, { p: "SINO", i: "🔔" }, { p: "VELA", i: "🕯️" },
  { p: "BOTA", i: "🥾" }, { p: "LUVA", i: "🧤" }, { p: "GORRO", i: "🧣" }, { p: "SAIA", i: "👗" },
  { p: "MEIA", i: "🧦" }, { p: "COPO", i: "🥛" }, { p: "FACA", i: "🔪" }, { p: "GARFO", i: "🍴" },
  { p: "PRATO", i: "🍽️" }, { p: "CAMA", i: "🛏️" }, { p: "SOFÁ", i: "🛋️" }, { p: "TV", i: "📺" },
  { p: "LIVRO", i: "📖" }, { p: "LÁPIS", i: "✏️" }, { p: "COLA", i: "🧪" }, { p: "PAPEL", i: "📄" },
  { p: "MALETA", i: "💼" }, { p: "CHAVE", i: "🔑" }, { p: "ANEL", i: "💍" }, { p: "RELÓGIO", i: "⌚" },
  { p: "BONECA", i: "🪆" }, { p: "URSO", i: "🧸" }, { p: "PEIXE", i: "🐟" }, { p: "AVE", i: "🐦" },
  { p: "LEÃO", i: "🦁" }, { p: "TIGRE", i: "🐯" }, { p: "ZEBRA", i: "🦓" }, { p: "GIRAFA", i: "🦒" },
  { p: "GOLFINHO", i: "🐬" }, { p: "COELHO", i: "🐇" }, { p: "PORCO", i: "🐷" }, { p: "GALO", i: "🐓" },
  { p: "OVO", i: "🥚" }, { p: "LEITE", i: "🥛" }, { p: "MEL", i: "🍯" }, { p: "UVA", i: "🍇" },
  { p: "MAÇÃ", i: "🍎" }, { p: "PERA", i: "🍐" }, { p: "BANANA", i: "🍌" }, { p: "LIMÃO", i: "🍋" },
  { p: "COCO", i: "🥥" }, { p: "MILHO", i: "🌽" }, { p: "BATATA", i: "🥔" }, { p: "TOMATE", i: "🍅" },
  { p: "CENOURA", i: "🥕" }, { p: "CEBOLA", i: "🧅" }, { p: "ALHO", i: "🧄" }, { p: "PIMENTA", i: "🌶️" },
  { p: "COGUMELO", i: "🍄" }, { p: "NOZ", i: "🥜" }
];

const phrases = [
  { f: "O gato dorme no sofá.", i: "🛋️" },
  { f: "A bola caiu no mato.", i: "🌳" },
  { f: "O suco é de laranja.", i: "🍊" },
  { f: "A fada é muito bela.", i: "🪄" },
  { f: "O rato roeu a roupa.", i: "👕" },
  { f: "O sapo pula no lago.", i: "💧" },
  { f: "A menina joga bola.", i: "⚽" },
  { f: "O menino corre no parque.", i: "🏃" },
  { f: "O bolo é de chocolate.", i: "🍫" },
  { f: "A flor é amarela.", i: "🌻" },
  { f: "O pássaro voa alto.", i: "🦅" },
  { f: "A chuva molha a terra.", i: "🌧️" },
  { f: "O sol brilha forte.", i: "☀️" },
  { f: "A lua aparece à noite.", i: "🌙" },
  { f: "O peixe nada no rio.", i: "🐟" },
  { f: "A vaca dá leite fresco.", i: "🥛" },
  { f: "O cavalo corre veloz.", i: "🐎" },
  { f: "A galinha bota ovo.", i: "🥚" },
  { f: "O cachorro late alto.", i: "🐕" },
  { f: "O macaco come banana.", i: "🍌" },
  { f: "A abelha faz mel.", i: "🍯" },
  { f: "O urso gosta de mel.", i: "🧸" },
  { f: "A aranha faz a teia.", i: "🕸️" },
  { f: "O leão é o rei da selva.", i: "🦁" },
  { f: "A zebra tem listras.", i: "🦓" },
  { f: "O elefante é grande.", i: "🐘" },
  { f: "A girafa tem pescoço longo.", i: "🦒" },
  { f: "O coelho pula rápido.", i: "🐇" },
  { f: "A tartaruga anda devagar.", i: "🐢" },
  { f: "O jacaré vive no rio.", i: "🐊" },
  { f: "A cobra rasteja no chão.", i: "🐍" },
  { f: "O lobo uiva para a lua.", i: "🐺" },
  { f: "A raposa é esperta.", i: "🦊" },
  { f: "O esquilo guarda nozes.", i: "🐿️" },
  { f: "A coruja voa à noite.", i: "🦉" },
  { f: "O morcego vive na caverna.", i: "🦇" },
  { f: "A borboleta é colorida.", i: "🦋" },
  { f: "O grilo canta no campo.", i: "🦗" },
  { f: "A formiga trabalha muito.", i: "🐜" },
  { f: "O caracol leva a casa.", i: "🐌" },
  { f: "A joaninha é pintadinha.", i: "🐞" },
  { f: "O escorpião tem ferrão.", i: "🦂" },
  { f: "A lagarta vira borboleta.", i: "🐛" },
  { f: "O polvo tem oito braços.", i: "🐙" },
  { f: "A baleia vive no mar.", i: "🐋" },
  { f: "O tubarão tem dentes afiados.", i: "🦈" },
  { f: "O golfinho é inteligente.", i: "🐬" },
  { f: "A estrela do mar é bonita.", i: "⭐" },
  { f: "O caranguejo anda de lado.", i: "🦀" },
  { f: "A lagosta vive no fundo.", i: "🦞" },
  { f: "O camarão é pequeno.", i: "🦐" },
  { f: "A lula solta tinta.", i: "🦑" },
  { f: "O pinguim vive no gelo.", i: "🐧" },
  { f: "A foca gosta de peixe.", i: "🦭" },
  { f: "O urso polar é branco.", i: "🐻‍❄️" },
  { f: "A rena puxa o trenó.", i: "🦌" },
  { f: "O lobo-marinho é forte.", i: "🦭" },
  { f: "A gaivota voa no mar.", i: "🐦" },
  { f: "O pelicano tem bico grande.", i: "🐦" },
  { f: "A garça vive no brejo.", i: "🐦" },
  { f: "O tucano tem bico colorido.", i: "🦜" },
  { f: "A arara é barulhenta.", i: "🦜" },
  { f: "O papagaio fala muito.", i: "🦜" },
  { f: "O beija-flor gosta de néctar.", i: "🐦" },
  { f: "A pomba é o símbolo da paz.", i: "🕊️" },
  { f: "O pavão abre a cauda.", i: "🦚" },
  { f: "O cisne é elegante.", i: "🦢" },
  { f: "O pato nada no lago.", i: "🦆" },
  { f: "A galinha cacareja.", i: "🐔" },
  { f: "O galo canta de manhã.", i: "🐓" },
  { f: "O peru faz gluglu.", i: "🦃" },
  { f: "O avestruz corre muito.", i: "🐦" },
  { f: "O flamingo é rosa.", i: "🦩" },
  { f: "O morcego dorme de cabeça para baixo.", i: "🦇" },
  { f: "A águia tem visão aguçada.", i: "🦅" },
  { f: "O falcão é caçador.", i: "🦅" },
  { f: "O abutre come carniça.", i: "🐦" },
  { f: "O corvo é inteligente.", i: "🐦" },
  { f: "A cegonha traz o bebê.", i: "🐦" },
  { f: "O pica-pau bate no tronco.", i: "🐦" },
  { f: "A andorinha faz o ninho.", i: "🐦" },
  { f: "O pardal é pequeno.", i: "🐦" },
  { f: "O canário canta bonito.", i: "🐦" },
  { f: "O rouxinol canta à noite.", i: "🐦" },
  { f: "O tico-tico come milho.", i: "🐦" },
  { f: "A sabiá canta no pomar.", i: "🐦" },
  { f: "O bem-te-vi canta o nome.", i: "🐦" },
  { f: "O joão-de-barro faz casa de barro.", i: "🐦" },
  { f: "A seriema corre no campo.", i: "🐦" },
  { f: "O ema é a maior ave.", i: "🐦" },
  { f: "O condor voa nos Andes.", i: "🐦" },
  { f: "A fragata voa no litoral.", i: "🐦" },
  { f: "O albatroz voa longe.", i: "🐦" },
  { f: "O petrel voa na tempestade.", i: "🐦" },
  { f: "A caturrita é verde.", i: "🦜" },
  { f: "O periquito é alegre.", i: "🦜" },
  { f: "A calopsita é mansa.", i: "🦜" },
  { f: "O cacatua tem crista.", i: "🦜" },
  { f: "O kiwi não voa.", i: "🥝" },
  { f: "O dodo está extinto.", i: "🐦" }
];

const texts = [
  { t: "O PATO NADA NO LAGO.<br>ELE VÊ O PEIXE.<br>O PATO É FELIZ!", i: "🦢" },
  { t: "A MENINA TEM UMA BONECA.<br>A BONECA SE CHAMA BIA.<br>BIA DORME NA CAMA.", i: "👧" },
  { t: "O DIA ESTÁ LINDO.<br>O SOL BRILHA NO CÉU.<br>VAMOS BRINCAR NO PARQUE?", i: "☀️" },
  { t: "O GATO MIA NO TELHADO.<br>ELE QUER COMER PEIXE.<br>O GATO É MUITO ESPERTO.", i: "🐱" },
  { t: "A BOLA É COLORIDA.<br>O MENINO CHUTA A BOLA.<br>A BOLA VAI LONGE.", i: "⚽" },
  { t: "O SAPO PULA NA LAGOA.<br>ELE COME MUITA MOSCA.<br>O SAPO É VERDE.", i: "🐸" },
  { t: "A CASA É GRANDE E BELA.<br>TEM UM JARDIM COM FLORES.<br>EU MORO NELA COM AMOR.", i: "🏠" },
  { t: "O TREM APITA FORTE.<br>ELE VAI PARA A CIDADE.<br>MUITA GENTE VAI NO TREM.", i: "🚂" },
  { t: "A CHUVA CAI NO CHÃO.<br>AS PLANTAS FICAM FELIZES.<br>O JARDIM FICA VERDE.", i: "🌧️" },
  { t: "O CACHORRO É AMIGO.<br>ELE LATE PARA O GATO.<br>O CACHORRO GOSTA DE OSSO.", i: "🐕" },
  { t: "A ABELHA TRABALHA MUITO.<br>ELA FAZ O MEL DOCE.<br>A ABELHA VOA NAS FLORES.", i: "🐝" },
  { t: "O LEÃO É O REI.<br>ELE VIVE NA SELVA.<br>O LEÃO TEM UMA JUBA.", i: "🦁" },
  { t: "A BORBOLETA VOA ALTO.<br>ELA É MUITO COLORIDA.<br>A BORBOLETA GOSTA DE LUZ.", i: "🦋" },
  { t: "O PEIXE VIVE NA ÁGUA.<br>ELE NADA COM AS NADADEIRAS.<br>O PEIXE É MUITO RÁPIDO.", i: "🐟" },
  { t: "O COELHO COME CENOURA.<br>ELE TEM ORELHAS LONGAS.<br>O COELHO PULA NO MATO.", i: "🐇" },
  { t: "A VACA DÁ O LEITE.<br>O LEITE É MUITO BOM.<br>A VACA VIVE NO PASTO.", i: "🐮" },
  { t: "O MACACO SOBE NA ÁRVORE.<br>ELE GOSTA DE BANANA.<br>O MACACO É ENGRAÇADO.", i: "🐒" },
  { t: "O ELEFANTE É PESADO.<br>ELE TEM UMA TROMPA.<br>O ELEFANTE É CINZA.", i: "🐘" },
  { t: "A GIRAFA É ALTA.<br>ELA COME AS FOLHAS.<br>A GIRAFA TEM MANCHAS.", i: "🦒" },
  { t: "O RATO GOSTA DE QUEIJO.<br>ELE MORA NO BURACO.<br>O RATO É MUITO PEQUENO.", i: "🐭" },
  { t: "A FORMIGA É PEQUENA.<br>ELA CARREGA A FOLHA.<br>A FORMIGA É FORTE.", i: "🐜" },
  { t: "O SOL NASCE CEDO.<br>O DIA FICA QUENTE.<br>TODO MUNDO ACORDA.", i: "🌅" },
  { t: "A LUA BRILHA NO CÉU.<br>AS ESTRELAS SÃO LINDAS.<br>É HORA DE DORMIR.", i: "🌃" },
  { t: "O MAR É AZUL E GRANDE.<br>TEM MUITA ONDA NO MAR.<br>O BARCO NAVEGA LONGE.", i: "🌊" },
  { t: "A MAÇÃ É VERMELHA.<br>ELA É MUITO DOCE.<br>EU GOSTO DE COMER MAÇÃ.", i: "🍎" },
  { t: "O PÃO ESTÁ QUENTINHO.<br>O CAFÉ ESTÁ NA MESA.<br>BOM DIA PARA VOCÊ!", i: "☕" },
  { t: "A ESCOLA É LEGAL.<br>EU APRENDO A LER.<br>EU TENHO MUITOS AMIGOS.", i: "🏫" },
  { t: "O LIVRO TEM HISTÓRIAS.<br>EU GOSTO DE LER LIVROS.<br>A HISTÓRIA É DIVERTIDA.", i: "📖" },
  { t: "O LÁPIS ESCREVE NO PAPEL.<br>EU DESENHO UMA FLOR.<br>O DESENHO FICOU LINDO.", i: "✏️" },
  { t: "A PIPA VOA NO CÉU.<br>O VENTO LEVA A PIPA.<br>O MENINO SEGURA A LINHA.", i: "🪁" },
  { t: "O BOLO É DE FESTA.<br>TEM VELA NO BOLO.<br>PARABÉNS PARA VOCÊ!", i: "🎂" },
  { t: "A BALA É DE MORANGO.<br>ELA É MUITO DOCE.<br>EU GOSTO DE BALA.", i: "🍬" },
  { t: "O SORVETE É GELADO.<br>ELE É DE BAUNILHA.<br>O SORVETE É BOM NO CALOR.", i: "🍦" },
  { t: "A FRUTA É SAUDÁVEL.<br>TEM UVA E BANANA.<br>VAMOS COMER FRUTAS!", i: "🧺" },
  { t: "O SUCO É DE UVA.<br>ELE ESTÁ NA JARRA.<br>O SUCO É MUITO ROXO.", i: "🍹" },
  { t: "A SOPA ESTÁ QUENTE.<br>ELA TEM LEGUMES.<br>A SOPA É BOA NO FRIO.", i: "🥣" },
  { t: "O CARRO É RÁPIDO.<br>ELE VAI PELA ESTRADA.<br>O PAPAI DIRIGE O CARRO.", i: "🚗" },
  { t: "O AVIÃO VOA NAS NUVENS.<br>ELE É MUITO GRANDE.<br>O AVIÃO VAI PARA LONGE.", i: "✈️" },
  { t: "O BARCO ESTÁ NO RIO.<br>O PESCADOR PEGA PEIXE.<br>O RIO É MUITO CALMO.", i: "🛶" },
  { t: "A BICICLETA É NOVA.<br>EU PEDALO NO PARQUE.<br>A BICICLETA É VERDE.", i: "🚲" },
  { t: "O RELÓGIO MARCA A HORA.<br>TIC-TAC FAZ O RELÓGIO.<br>É HORA DA ESCOLA.", i: "⏰" },
  { t: "A CHAVE ABRE A PORTA.<br>A PORTA É DE MADEIRA.<br>ENTRE NA MINHA CASA.", i: "🔑" },
  { t: "O ESPELHO MOSTRA O ROSTO.<br>EU VEJO MEU SORRISO.<br>O ESPELHO É BRILHANTE.", i: "🪞" },
  { t: "A CAMA É MACIA.<br>EU TENHO UM TRAVESSEIRO.<br>EU DURMO MUITO BEM.", i: "🛏️" },
  { t: "O SOFÁ É CONFORTÁVEL.<br>EU VEJO TELEVISÃO.<br>A SALA É ACONCHEGANTE.", i: "🛋️" },
  { t: "A JANELA ESTÁ ABERTA.<br>O VENTO ENTRA NA SALA.<br>EU VEJO A RUA.", i: "🪟" },
  { t: "O JARDIM TEM FLORES.<br>AS FLORES SÃO CHEIROSAS.<br>TEM ROSA E MARGARIDA.", i: "🌻" },
  { t: "A ÁRVORE É ALTA.<br>ELA DÁ MUITA SOMBRA.<br>TEM PASSARINHO NA ÁRVORE.", i: "🌳" },
  { t: "O PARQUE É DIVERTIDO.<br>TEM BALANÇO E ESCORREGA.<br>EU BRINCO COM MEU IRMÃO.", i: "🎢" },
  { t: "A PRAIA É LEGAL.<br>TEM AREIA E MAR.<br>EU FAÇO CASTELO DE AREIA.", i: "🏖️" },
  { t: "O CAMPO É VERDE.<br>TEM MUITO BICHO NO CAMPO.<br>O AR É MUITO PURO.", i: "🏞️" },
  { t: "A FAZENDA TEM BICHOS.<br>TEM PORCO E GALINHA.<br>O FAZENDEIRO TRABALHA.", i: "🚜" },
  { t: "O CIRCO CHEGOU.<br>TEM PALHAÇO E MÁGICO.<br>O CIRCO É UMA ALEGRIA.", i: "🎪" },
  { t: "O CINEMA É ESCURO.<br>EU COMO PIPOCA.<br>O FILME É MUITO BOM.", i: "🍿" },
  { t: "A FESTA TEM BALÃO.<br>TEM MUITA COMIDA BOA.<br>VAMOS DANÇAR MUITO.", i: "🎈" },
  { t: "O NATAL É LINDO.<br>TEM ÁRVORE E PRESENTE.<br>PAPAI NOEL VEM AÍ.", i: "🎄" },
  { t: "O PÁSCOA TEM OVO.<br>O OVO É DE CHOCOLATE.<br>O COELHO TRAZ O OVO.", i: "🐰" },
  { t: "O CARNAVAL É FESTA.<br>TEM MUITA FANTASIA.<br>VAMOS PULAR E CANTAR.", i: "🎭" },
  { t: "O ANIVERSÁRIO É MEU.<br>EU GANHEI UM PRESENTE.<br>EU ESTOU MUITO FELIZ.", i: "🎁" },
  { t: "A MÃE É CARINHOSA.<br>ELA ME DÁ UM ABRAÇO.<br>EU AMO MINHA MÃE.", i: "👩‍👧" },
  { t: "O PAI É FORTE.<br>ELE BRINCA COMIGO.<br>EU AMO MEU PAI.", i: "👨‍👦" },
  { t: "O AVÔ CONTA HISTÓRIA.<br>ELE É MUITO SABIO.<br>EU GOSTO DO MEU AVÔ.", i: "👴" },
  { t: "A AVÓ FAZ DOCE.<br>O DOCE É UMA DELÍCIA.<br>EU AMO MINHA AVÓ.", i: "👵" },
  { t: "O IRMÃO É MEU AMIGO.<br>NÓS BRINCAMOS JUNTOS.<br>EU GOSTO DO MEU IRMÃO.", i: "👦" },
  { t: "A IRMÃ É LEGAL.<br>ELA ME AJUDA MUITO.<br>EU AMO MINHA IRMÃ.", i: "👧" },
  { t: "O AMIGO É ESPECIAL.<br>NÓS CORREMOS NO PÁTIO.<br>É BOM TER AMIGOS.", i: "🤝" },
  { t: "O BEBÊ É PEQUENO.<br>ELE CHORA E SORRI.<br>O BEBÊ É MUITO FOFO.", i: "👶" },
  { t: "A TIA É DIVERTIDA.<br>ELA ME TRAZ DOCE.<br>EU GOSTO DA MINHA TIA.", i: "👩" },
  { t: "O TIO É ENGRAÇADO.<br>ELE CONTA PIADA.<br>EU AMO MEU TIO.", i: "👨" },
  { t: "O PRIMO É PARCEIRO.<br>NÓS JOGAMOS BOLA.<br>O PRIMO É MUITO LEGAL.", i: "👦" },
  { t: "A PRIMA É BONITA.<br>ELA GOSTA DE DANÇAR.<br>EU AMO MINHA PRIMA.", i: "👧" },
  { t: "O VIZINHO É GENTIL.<br>ELE DIZ BOM DIA.<br>É BOM SER EDUCADO.", i: "🏠" },
  { t: "O MÉDICO ME AJUDA.<br>ELE CUIDA DA SAÚDE.<br>EU VOU FICAR BEM.", i: "🩺" },
  { t: "A PROFESSORA ENSINA.<br>ELA É MUITO PACIENTE.<br>EU GOSTO DE ESTUDAR.", i: "👩‍🏫" },
  { t: "O PADEIRO FAZ PÃO.<br>O PÃO É MUITO GOSTOSO.<br>EU VOU NA PADARIA.", i: "🥖" },
  { t: "O POLICIAL PROTEGE.<br>ELE AJUDA A GENTE.<br>A CIDADE É SEGURA.", i: "👮" },
  { t: "O BOMBEIRO APAGA O FOGO.<br>ELE É MUITO CORAJOSO.<br>O BOMBEIRO SALVA VIDAS.", i: "👨‍🚒" },
  { t: "O DENTISTA CUIDA DO DENTE.<br>EU ESCOVO OS DENTES.<br>MEU SORRISO É BRANCO.", i: "🦷" },
  { t: "O CARTEIRO TRAZ CARTA.<br>A CARTA É DA VOVÓ.<br>EU FICO MUITO FELIZ.", i: "📬" },
  { t: "O PINTOR PINTA A CASA.<br>A CASA FICOU AZUL.<br>O PINTOR É UM ARTISTA.", i: "🎨" },
  { t: "O MÚSICO TOCA PIANO.<br>A MÚSICA É SUAVE.<br>EU GOSTO DE OUVIR.", i: "🎹" },
  { t: "O ATLETA CORRE MUITO.<br>ELE GANHOU A MEDALHA.<br>O ATLETA É CAMPEÃO.", i: "🏅" },
  { t: "O COZINHEIRO FAZ COMIDA.<br>A COMIDA É TEMPERADA.<br>EU VOU COMER TUDO.", i: "👨‍🍳" },
  { t: "O JARDINEIRO CUIDA DA FLOR.<br>A FLOR ESTÁ BONITA.<br>O JARDIM É COLORIDO.", i: "👨‍🌾" },
  { t: "O VETERINÁRIO CUIDA DO BICHO.<br>O GATO ESTÁ DOENTE.<br>O GATO VAI SARAR.", i: "🩺" },
  { t: "O ASTRONAUTA VAI NO ESPAÇO.<br>ELE VÊ A TERRA DE LONGE.<br>O ESPAÇO É ESCURO.", i: "👩‍🚀" },
  { t: "O CIENTISTA FAZ PESQUISA.<br>ELE USA O MICROSCÓPIO.<br>A CIÊNCIA É IMPORTANTE.", i: "🧪" },
  { t: "O ENGENHEIRO FAZ PONTE.<br>A PONTE É MUITO FORTE.<br>O CARRO PASSA NELA.", i: "🏗️" },
  { t: "O ADVOGADO AJUDA A LEI.<br>ELE FALA NO TRIBUNAL.<br>A JUSTIÇA É PARA TODOS.", i: "⚖️" },
  { t: "O ESCRITOR ESCREVE LIVRO.<br>O LIVRO É DE AVENTURA.<br>EU VOU LER O LIVRO.", i: "✍️" },
  { t: "O FOTÓGRAFO TIRA FOTO.<br>A FOTO É DA FAMÍLIA.<br>O MOMENTO É ETERNO.", i: "📷" },
  { t: "O PILOTO LEVA O AVIÃO.<br>ELE VOA MUITO ALTO.<br>A VIAGEM É SEGURA.", i: "👨‍✈️" },
  { t: "O MARINHEIRO NAVEGA NO MAR.<br>ELE VÊ O GOLFINHO.<br>O MAR É MUITO LINDO.", i: "⚓" },
  { t: "O ATOR FAZ A PEÇA.<br>O TEATRO ESTÁ CHEIO.<br>TODO MUNDO APLAUDE.", i: "🎭" },
  { t: "O DANÇARINO DANÇA BEM.<br>A MÚSICA É ANIMADA.<br>O PALCO É BRILHANTE.", i: "💃" },
  { t: "O JOGADOR FAZ O GOL.<br>O TIME ESTÁ FELIZ.<br>VIVA O CAMPEÃO!", i: "⚽" },
  { t: "O ESTUDANTE FAZ A LIÇÃO.<br>A LIÇÃO É DE MATEMÁTICA.<br>EU VOU TIRAR NOTA DEZ.", i: "📝" },
  { t: "O TURISTA VISITA A CIDADE.<br>ELE TIRA MUITA FOTO.<br>A CIDADE É HISTÓRICA.", i: "🗺️" },
  { t: "O VENDEDOR VENDE ROUPA.<br>A ROUPA É MODERNA.<br>EU VOU COMPRAR UMA.", i: "🛍️" },
  { t: "O GARÇOM TRAZ O PRATO.<br>O PRATO É DE MACARRÃO.<br>BOM APETITE PARA VOCÊ!", i: "🍝" },
  { t: "O MECÂNICO CONSERTA O CARRO.<br>O CARRO ESTÁ ESTRAGADO.<br>O CARRO VAI FUNCIONAR.", i: "🔧" },
  { t: "O ELETRICISTA CUIDA DA LUZ.<br>A LUZ VOLTOU A BRILHAR.<br>A CASA ESTÁ CLARA.", i: "💡" },
  { t: "O ENCANADOR CONSERTA O CANO.<br>A ÁGUA PAROU DE CAIR.<br>O BANHEIRO ESTÁ SECO.", i: "🚿" },
  { t: "O PEDREIRO FAZ O MURO.<br>O MURO É DE TIJOLO.<br>A CASA ESTÁ PRONTA.", i: "🧱" },
  { t: "O CARPINTEIRO FAZ MESA.<br>A MESA É DE MADEIRA.<br>A MESA É MUITO BOA.", i: "🪚" },
  { t: "O MOTORISTA LEVA O ÔNIBUS.<br>O ÔNIBUS VAI PARA O CENTRO.<br>EU VOU SENTADO.", i: "🚌" },
  { t: "O TAXISTA DIRIGE O TÁXI.<br>O TÁXI É AMARELO.<br>A CORRIDA É RÁPIDA.", i: "🚕" },
  { t: "O CICLISTA PEDALA NA RUA.<br>ELE USA O CAPACETE.<br>A SEGURANÇA É TUDO.", i: "🚴" },
  { t: "O SURFISTA PEGA A ONDA.<br>A ONDA É MUITO GRANDE.<br>O MAR ESTÁ AGITADO.", i: "🏄" },
  { t: "O SKATISTA FAZ MANOBRA.<br>O SKATE É RADICAL.<br>O PARQUE TEM PISTA.", i: "🛹" },
  { t: "O MERGULHADOR VÊ O CORAL.<br>O PEIXE É COLORIDO.<br>O FUNDO DO MAR É LINDO.", i: "🤿" },
  { t: "O ESCALADOR SOBE A MONTANHA.<br>A MONTANHA É MUITO ALTA.<br>A VISTA É MARAVILHOSA.", i: "🧗" },
  { t: "O ACAMPAMENTO É NA MATA.<br>TEM FOGUEIRA E BARRACA.<br>NÓS VEMOS AS ESTRELAS.", i: "⛺" },
  { t: "O PASSEIO É NO ZOO.<br>TEM MUITO BICHO DIFERENTE.<br>O DIA FOI INCRÍVEL.", i: "🦁" },
  { t: "O MUSEU TEM QUADROS.<br>A ARTE É MUITO ANTIGA.<br>EU GOSTO DE APRENDER.", i: "🖼️" }
];

export const generateChallenges = (): ChallengeData[] => {
  const challenges: ChallengeData[] = [];

  for (let d = 1; d <= 365; d++) {
    let level: number;
    let levelName: string;
    let instruction: string;
    let content: string;
    let image: string;
    let type: 'texto-principal' | 'frase-texto' | 'minitexto';
    let colorClass: string;

    if (d <= 60) {
      level = 1;
      colorClass = "card-n1";
      levelName = "Nível: Aprendiz de Letras";
      instruction = "Leia a letra e as sílabas:";
      const item = alphabet[(d - 1) % alphabet.length];
      type = "texto-principal";
      content = `<div style="font-size:100px; color:#FF6B6B">${item.l}</div><div style="font-size:40px">${item.s}</div>`;
      image = item.i;
    } 
    else if (d <= 150) {
      level = 2;
      colorClass = "card-n2";
      levelName = "Nível: Caçador de Palavras";
      const item = words[(d - 61) % words.length];
      type = "texto-principal";
      if (d % 2 === 0) {
        instruction = "Leia a palavra em voz alta:";
        content = item.p;
      } else {
        instruction = "Complete a palavra:";
        content = item.p.replace(/[AEIOU]/g, "_");
      }
      image = item.i;
    }
    else if (d <= 250) {
      level = 3;
      colorClass = "card-n3";
      levelName = "Nível: Mestre de Frases";
      instruction = "Leia a frase completa:";
      const item = phrases[(d - 151) % phrases.length];
      type = "frase-texto";
      content = item.f;
      image = item.i;
    }
    else {
      level = 4;
      colorClass = "card-n4";
      levelName = "Nível: Grande Leitor";
      instruction = "Leia o pequeno texto:";
      const item = texts[(d - 251) % texts.length];
      type = "minitexto";
      content = item.t;
      image = item.i;
    }

    challenges.push({
      day: d,
      level,
      levelName,
      instruction,
      content,
      image,
      type,
      colorClass
    });
  }

  return challenges;
};
