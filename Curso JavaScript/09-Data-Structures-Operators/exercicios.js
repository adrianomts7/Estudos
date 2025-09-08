'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

/*
Estamos construindo um aplicativo de apostas em futebol (futebol para os meus amigos americanos 😅)!

Suponha que obtemos dados de um serviço web sobre um determinado jogo (abaixo). Neste desafio, trabalharemos com os dados. Então, aqui estão suas tarefas:

1. Crie um array de jogadores para cada time (variáveis ​​'players1' e 'players2')
2. O primeiro jogador em qualquer array de jogadores é o goleiro e os outros são jogadores de linha. Para o Bayern de Munique (time 1), crie uma variável ('gk') com o nome do goleiro e um array ('fieldPlayers') com todos os 10 jogadores de linha restantes.
3. Crie um array 'allPlayers' contendo todos os jogadores de ambos os times (22 jogadores).
4. Durante o jogo, o Bayern de Munique (time 1) utilizou 3 jogadores reservas. Crie um novo array ('players1Final') contendo todos os jogadores originais do time1, mais 'Thiago', 'Coutinho' e 'Perisic'.
5. Com base no objeto game.odds, crie uma variável para cada odd (chamada 'time1', 'empate' e 'time2').
6. Escreva uma função ('printGoals') que receba um número arbitrário de nomes de jogadores (NÃO um array) e imprima cada um deles no console, juntamente com o número total de gols marcados (número de nomes de jogadores passados).
7. O time com a odd mais baixa tem maior probabilidade de vencer. Imprima no console qual time tem maior probabilidade de vencer, SEM usar uma instrução if/else ou o operador ternário.

DADOS DE TESTE PARA 6: Use os jogadores 'Davies', 'Muller', 'Lewandowski' e 'Kimmich'. Em seguida, chame a função novamente com os jogadores de game.scored.

BOA SORTE 😀
*/

////////////////////////////////////////
// Desafio de Programação nº 2

/* 
Vamos continuar com nosso aplicativo de apostas em futebol!

1. Faça um loop no array game.scored e imprima o nome de cada jogador no console, juntamente com o número do gol (Exemplo: "Gol 1: Lewandowski")
2. Use um loop para calcular a odd média e registre-a no console (Já estudamos como calcular médias, você pode verificar se não se lembra)
3. Imprima as 3 odds no console, mas de uma forma bem formatada, exatamente assim:
Probabilidade de vitória do Bayern de Munique: 1,33
Probabilidade de empate: 3,25
Probabilidade de vitória do Borrussia Dortmund: 6,5
Obtenha os nomes dos times diretamente do objeto do jogo, sem codificá-los (exceto "empate"). DICA: Observe como as probabilidades e os objetos do jogo têm os mesmos nomes de propriedade 😉

BÔNUS: Crie um objeto chamado "artilheiros" que contenha os nomes dos jogadores que marcaram como propriedade e o número de gols como valor. Neste jogo, ficará assim:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

BOA SORTE 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
Vamos continuar com nosso aplicativo de apostas em futebol! Desta vez, temos um mapa com um registro dos eventos que aconteceram durante o jogo. Os valores são os próprios eventos e as chaves são os minutos em que cada evento ocorreu (um jogo de futebol tem 90 minutos mais um tempo extra).

1. Crie um array 'events' com os diferentes eventos do jogo que aconteceram (sem duplicatas).
2. Após o término do jogo, foi descoberto que o cartão amarelo do minuto 64 foi injusto. Portanto, remova este evento do registro de eventos do jogo.
3. Imprima a seguinte string no console: "Um evento aconteceu, em média, a cada 9 minutos" (lembre-se de que um jogo tem 90 minutos).
4. Faça um loop pelos eventos e registre-os no console, marcando se ocorreu no primeiro ou no segundo tempo (após 45 minutos) do jogo, assim:
[PRIMEIRO TEMPO] 17: ⚽️ GOL

BOA SORTE 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

/*
1. Crie um array 'events' com os diferentes eventos do jogo que aconteceram (sem duplicatas).
*/

// const events = [...new Set(gameEvents.values())];
// console.log(events);

/*
2. Após o término do jogo, foi descoberto que o cartão amarelo do minuto 64 foi injusto. Portanto, remova este evento do registro de eventos do jogo.
*/

// gameEvents.delete(64);
// console.log(gameEvents);

/*
3. Imprima a seguinte string no console: "Um evento aconteceu, em média, a cada 9 minutos" (lembre-se de que um jogo tem 90 minutos).
*/

// console.log(`Um evento aconteceu, em média, a cada ${92 / gameEvents.size} minutos`);

/*
4. Faça um loop pelos eventos e registre-os no console, marcando se ocorreu no primeiro ou no segundo tempo (após 45 minutos) do jogo, assim:
[PRIMEIRO TEMPO] 17: ⚽️ GOL

*/

// for(const [key, value] of gameEvents) {
//   const time = key <= 45 ? "Primeiro" : "Segundo";
//   console.log(`[${time} Tempo] ${key}: ${value}`)
// }

/*
// Desafio 2
/*
1. Faça um loop no array game.scored e imprima o nome de cada jogador no console, juntamente com o número do gol (Exemplo: "Gol 1: Lewandowski")
*/
// for(const [indice, gol] of game.scored.entries()) {
//   console.log(`${indice + 1}º Gol: ${gol}`);
// }

/* 2. Use um loop para calcular a odd média e registre-a no console (Já estudamos como calcular médias, você pode verificar se não se lembra) */
// let somaOdd = 0;
// let contador = 0;
// for (const odd of Object.values(game.odds)) {
//   somaOdd += odd;
//   contador ++;
// }

// const mediaOdd = somaOdd / contador;
// console.log(`Média odds ${mediaOdd.toFixed(2)}`);

/* 
3. Imprima as 3 odds no console, mas de uma forma bem formatada, exatamente assim:
Probabilidade de vitória do Bayern de Munique: 1,33
Probabilidade de empate: 3,25
Probabilidade de vitória do Borrussia Dortmund: 6,5
*/

// for(const [team, odd] of Object.entries(game.odds)) {
//   const timeStr = team === 'x' ? 'empate' : `Vitoria do ${game[team]}`;
//   console.log(`Probabilidade de ${timeStr}: ${odd}`);
// }

/*
 Crie um objeto chamado "artilheiros" que contenha os nomes dos jogadores que marcaram como propriedade e o número de gols como valor. Neste jogo, ficará assim:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

*/

// const artilheiros = {};

// for (const nomeJogador of Object.values(game.scored)) {

//   if (artilheiros[nomeJogador]) {
//     artilheiros[nomeJogador] += 1;
//     continue;
//   }

//   artilheiros[nomeJogador] = 1;

// }

// console.log(artilheiros);

/*
Abaixo está o bookDataarray que contém outros arrays. Cada array interno consiste no nome da propriedade (primeiro elemento) e no valor (segundo elemento). Por exemplo, em ['title', 'Computer Networking: A Top-Down Approach'], 'title'é o nome da propriedade e 'Computer Networking: A Top-Down Approach'deve ser o valor atribuído a esse nome.

Usando propriedades computadas, preencha o newBookobjeto com as propriedades e valores do bookDataarray. O primeiro passo já foi feito.
*/

// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1]
//   // ...
// };

// console.log(newBook);

/*
Abaixo está a pagesvariável. Adicione-a como uma propriedade do newBook2objeto. Use o método mais curto.
*/
// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages
// }

/*
Alguns dos objetos de livro do booksarray não possuem a editionpropriedade. 
Faça um loop no booksarray e atribua a esta propriedade o número 1 (se ainda não existir). 
Use operadores de atribuição lógicos.
*/

// for (const book of books) {
//   book.edition ||= 1;
//   // console.log(book);
// }

/*
Escreva uma função chamada getFirstKeywordque receba o objeto livro como argumento. Esta função deve retornar a primeira palavra-chave da keywordspropriedade do livro (array) ou undefined (se a keywordspropriedade não existir). Não deve gerar erro. Use encadeamento opcional para isso.
*/

// console.log(books[0].keywords?.[0] ?? 'Propriedade não encontradp');

// const getFirstKeyword = function(books) {
//   return books?.keywords?.[0] ?? 'Propriedade não existe no objeto'
// }

// console.log(getFirstKeyword(newBook2));

/* 
Alguns dos objetos de livro do booksarray têm a highlightedpropriedade , 
que por padrão é definida como true. Itere sobre o booksarray e, 
se a thirdParty.goodreads.ratingpropriedade for menor que 4.2, 
reatribua-a com false.

Use o &&=operador (dica: você também pode precisar do !operador) 
*/

// for(const book of books) {
//   book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
//   // console.log(book);
// }

/* 
Use o loop for-of para percorrer o booksarray e somar as páginas de todos os livros. Use a pageSumvariável abaixo e a pagespropriedade dos objetos de livro.
*/

// let pageSum = 0;
// for(const pages of books) {
//   pageSum += pages.pages;
// }

// console.log(pageSum);

/*
Abaixo está a allAuthorsvariável que armazena um array vazio. Use o laço for-of para preencher allAuthorscom os autores de cada livro do booksarray.

Lembre-se de que cada objeto de livro possui a authorpropriedade , que pode ser uma string (se houver apenas um autor) ou um array (se houver vários autores). Pode ser necessário usar o typeofoperador . Você também pode usar vários loops, se necessário. O allAuthorsarray deve ter apenas um nível (sem arrays aninhados).
*/

// const allAuthorsVariavel = [];
// for (const authores of books) {
//   if (typeof authores.author === 'string') allAuthorsVariavel.push(authores.author);

//   if (typeof authores.author === 'object') {
//     for(const author of authores.author) {
//       allAuthorsVariavel.push(author);
//     }
//   }

// }

// console.log(allAuthorsVariavel);

/*
Use o laço for-of em conjunto com o método Array entries()para registrar cada autor allAuthorsno console, 
juntamente com seu índice. 
Faça com que o índice comece em 1, em vez de 0.
*/

// for (const [i, author] of allAuthorsVariavel.entries()) {
//   console.log(`${i + 1}: ${author}`)
// }

/*


// 1. Crie um array de jogadores para cada time (variáveis ​​'players1' e 'players2')

const [player1, player2] = game.players;
console.log(player1, player2);

// 2. O primeiro jogador em qualquer array de jogadores é o goleiro e os outros são jogadores de linha. Para o Bayern de Munique (time 1), crie uma variável ('gk') com o nome do goleiro e um array ('fieldPlayers') com todos os 10 jogadores de linha restantes.
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// 3. Crie um array 'allPlayers' contendo todos os jogadores de ambos os times (22 jogadores).
const allPLayers = [...player1, ...player2];
console.log(allPLayers);

// 4. Durante o jogo, o Bayern de Munique (time 1) utilizou 3 jogadores reservas. Crie um novo array ('players1Final') contendo todos os jogadores originais do time1, mais 'Thiago', 'Coutinho' e 'Perisic'.
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5. Com base no objeto game.odds, crie uma variável para cada odd (chamada 'time1', 'empate' e 'time2').
const { team1: time1, x: empate, team2: time2 } = game.odds;
console.log(time1, empate, time2);

// 6. Escreva uma função ('printGoals') que receba um número arbitrário de nomes de jogadores (NÃO um array) e imprima cada um deles no console, juntamente com o número total de gols marcados (número de nomes de jogadores passados).
const printGoals = function(...players) {
  console.log(`${players.length} gols marcados`);
}

printGoals('Adriano', 'Mateus');

// O time com a odd mais baixa tem maior probabilidade de vencer. Imprima no console qual time tem maior probabilidade de vencer, SEM usar uma instrução if/else ou o operador ternário.
time1 < time2 && console.log('Bayer vencedor')
time2 < time1 && console.log('Borussia vencedor')

*/

/*
Alguns dos objetos do livro têm a programmingLanguagepropriedade, que especifica qual linguagem de programação é usada no livro, por exemplo

{
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  ...
  programmingLanguage: 'Java',     // <-- HERE
}
Escreva uma função chamada hasExamplesInJavaque receba um objeto livro do booksarray como argumento. Essa função deve retornar truese o livro usar Java, ou a string "nenhum dado disponível" se usar outra linguagem ou nenhuma linguagem de programação.

Use curto-circuito.

*/

// console.log(books[0].programmingLanguage === 'Java');

// const hasExampleInJavaque = function(bookArray) {
//   return bookArray.programmingLanguage === 'Java' || 'nenhum dado disponível';
// }

// console.log(hasExampleInJavaque(books[0]));

/*
5.2
Alguns objetos de livros têm a onlineContentpropriedade , que é trueou false. Faça um loop sobre o booksarray e, para os livros que fornecem conteúdo online, registre no console uma string neste formato: "${title}" provides online content. Use curto-circuito.

{
  title: 'Operating System Concepts',
  // ... removed for clarity
  onlineContent: false,          // <-- HERE
},
*/

// for (let i = 0; i < books.length; i++) {
//   books[i].onlineContent && console.log(`"${books[i].title}" provides online content `)
// }

/*
6.1﻿
Há objetos no booksarray que não possuem a onlineContentpropriedade. Faça um loop no booksarray e registre uma string no console neste formato: "${title}" provides no data about its online content
*/

// for (let i =0; i < books.length; i++) {
//   books[i].onlineContent ?? console.log(`"${books[i].title}" provides no data about its online content`);
// }

/*
const multiplicando = function(...numbers) {
  let resultado = 1;
  numbers.forEach(number => resultado *= number);

  return resultado;
}

const potencia = function(numeroBase, ...exponentes) {
  exponentes.forEach(numero => numeroBase **= numero);

  return numeroBase
}

const numeros = [10, 20, 30, 40, 50];
const ultimoNumero = numeros.pop();
const [ primeiroNumero, ...resto ] = [...numeros];
const numerosCopia = [primeiroNumero, ...resto, ultimoNumero];
// console.log(numeros, numerosCopia);

const livro = { titulo: "JS Avançado", autor: "Adriano", ano: 2025, paginas: 450 };

const { titulo, autor, ...detalhes } = livro;
const newLivro = { ...livro, editora: "TechBooks" };

const separaNomes = function(nomes) {
  const [ primeiroNome, ...resto ] = [...nomes];
  const ultimoNome = resto.pop();

  console.log(primeiroNome, resto, ultimoNome);

  return ultimoNome, primeiroNome, resto;
}

console.log(separaNomes(["Ana", "Bruno", "Carla", "Diego"]));

*/

/*
Escreva uma função chamada printBookAuthorsCountque tenha dois parâmetros chamados titlee authors. O authorsparâmetro deve aceitar qualquer número de argumentos. Esta função deve registrar no console uma string formatada assim: "The book "${title}" has ${authors.length} authors".
*/
// const printBookAuthorCountque = function (title, ...authores) {
//   console.log(`The book "${title}" has ${authores.length} authors`);
// };

// printBookAuthorCountque(books[0].title, ['Adriano', 'Mateus']);

/*
Desestruture o segundo livro do booksarray em uma variável chamada bookPublisher. A bookPublishervariável deve receber o valor da publisherpropriedade do objeto livro. 
Atribua o restante das propriedades à restOfTheBookvariável
*/

// const [bookPublisher, ...restOfTheBookvariável] = [
//   books[1].publisher,
//   books[1],
// ];
// console.log(bookPublisher, restOfTheBookvariável);

/*
Decomponha a keywordspropriedade (matriz) do primeiro livro da booksmatriz em variáveis ​​chamadas mainKeyworde rest. A primeira palavra-chave deve ser atribuída a mainKeyword, e as demais palavras-chave devem ser atribuídas à restvariável (que deve ser uma matriz).
*/

// const [mainKeyword, ...restVariavel] = books[0].keywords;
// console.log(mainKeyword);

// Cada objeto de livro tem a authorpropriedade que armazena uma matriz de strings (nomes de autores) se houver vários autores, ou uma única string (nome do autor) se houver apenas um autor.
// Declare um array chamado bookAuthorse preencha-o com os autores dos dois primeiros livros do booksarray. O bookAuthorsarray deve ter apenas um nível (sem arrays aninhados).

// const bookAuthorse = [...books[0].author, ...books[1].author];
// console.log(bookAuthorse);

// Escreva uma função chamada spellWordque aceite uma única string como argumento. Essa função deve registrar no console cada letra do argumento separada por um espaço.

// const spellWordque = function (string) {
//   console.log(...string);
// };

// console.log(spellWordque('Jonas'));

/* Exercicios de desestruturação de objetos
// Desestruture o primeiro objeto de livro do booksarray em variáveis chamadas title, authore ISBN.
// const {title, author, ISBN} = books[0];
// console.log(title, author, ISBN);

// Cada objeto de livro possui a keywordspropriedade . Desestruture o primeiro objeto de livro do booksarray em uma variável chamada tags. A tagsvariável deve receber o valor da keywordspropriedade.

const { keywords: tags } = books[0];
console.log(tags);

// O sétimo livro do booksarray não possui a programmingLanguagepropriedade. Desestruture o objeto do sétimo livro ( books[6]) em variáveis chamadas languagee programmingLanguage. Atribua à programmingLanguagevariável o valor padrão "desconhecido".

const {language, programmingLanguage = 'desconhecido'} = books[6];
// console.log(language, programmingLanguage);

// Abaixo estão duas variáveis chamadas bookTitlee bookAuthor. Reatribua a elas os valores das propriedades titlee authordo primeiro objeto de livro do booksarray.

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title: bookTitle, author: bookAuthor} = books[0]);
console.log(bookTitle, bookAuthor);

// Cada objeto de livro tem uma propriedade profundamente aninhada, ratingconforme ilustrado abaixo:
// {
//   title: 'Algorithms',
//   ...
//   thirdParty: {
//     goodreads: {
//       rating: 4.41,              // <-- HERE
//       ratingsCount: 1733,
//       reviewsCount: 63,
//       fiveStarRatingCount: 976,
//       oneStarRatingCount: 13
//     }
//   }
// },
// Desestruture o primeiro objeto de livro do booksarray em uma variável chamada bookRating. Como resultado da desestruturação, a bookRatingvariável deve receber o valor da book[0].thirdParty.goodreads.ratingpropriedade.
// Por favor, faça a maior parte do trabalho no lado esquerdo do operador de atribuição:const ... = books[0];

const { thirdParty: { goodreads: {rating: bookRating} } } = books[0];
// console.log(bookRating);

// Escreva uma função chamada printBookInfoque tenha três parâmetros chamados title, authore year. Essa função deve funcionar para um único objeto passado como argumento e deve registrar no console informações sobre o livro neste formato: "${title} by ${author}, ${year}".
// Se yearfor indefinido (não foi passado), ele deve receber um valor padrão de 'year unknown'.
const printBookInfoque = function({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

// printBookInfoque(books[5]);

// Sua tarefa:
// Desestruture o objeto para pegar nome e cidade.
const pessoa = {
  nome: "Ana",
  idade: 25,
  cidade: "São Paulo"
};

// const {nome, cidade} = pessoa;
// console.log(nome, cidade);

// Sua tarefa:
// Pegue o nome, preço e uma propriedade chamada 'cor', que deve ter valor padrão "azul".
const produto = {
  nome: "Caneta",
  preco: 3.5
};

// const {nome, preco, cor = 'azul'} = produto;

// Sua tarefa:
// Desestruture para pegar 'id' numa variável chamada userId e 'email' numa variável chamada userEmail.
const usuario = {
  id: 123,
  email: "user@email.com"
};

const { id: userId, email: userEmail } = usuario;

// Sua tarefa:
// Pegue as variáveis titulo, dia e mes com desestruturação.
const evento = {
  titulo: "Festa",
  data: {
    dia: 20,
    mes: "agosto"
  }
};

const { titulo, data:  { dia, mes } } = evento;
console.log(titulo, dia, mes);

function imprimeDados({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

// Sua tarefa:
// Chame a função passando o objeto pessoa usando desestruturação direta no parâmetro.
// const pessoa = {
//   nome: "Lucas",
//   idade: 30,
//   cidade: "Rio"
// };

// const pessoaFunction = function({ nome, idade, cidade }) {
//   console.log(`${nome}, tem ${idade}, mora em ${cidade}`)
// }

// Sua tarefa:
// Desestruture para pegar nome e idade em variáveis separadas e o restante das propriedades em outro objeto.
// const cliente = {
//   nome: "Mariana",
//   idade: 28,
//   email: "mariana@email.com",
//   telefone: "1234-5678"
// };

// const {nome, idade, ...resto} = cliente;
// console.log(nome, idade, resto)


// Sua tarefa:
// Pegue o nome do cliente, o nome do primeiro item e o preço do segundo item.
const pedido = {
  id: 1,
  cliente: "João",
  itens: [
    { nome: "Camisa", preco: 29.9 },
    { nome: "Calça", preco: 59.9 }
  ]
};


const { cliente, itens: [ {nome}, {preco} ]  } = pedido;

console.log(cliente, nome, preco)

// Sua tarefa:
// Faça uma função que receba o filme e desestruture título, nome do diretor e o primeiro ator.
const filme = {
  titulo: "Matrix",
  diretor: {
    nome: "Wachowski",
    idade: 55
  },
  atores: ["Keanu Reeves", "Carrie-Anne Moss"]
};

const filmeLogs = function({titulo, diretor: {nome}, atores: [primeiroAutor]}) {
  console.log(titulo, nome, primeiroAutor );
}

filmeLogs(filme);

// Sua tarefa:
// Desestruture para pegar 'a' e 'b' e o resto dos dados em outro objeto.
// Depois crie um novo objeto incluindo todas as propriedades do resto e uma nova propriedade 'e' = 50.
// const dados = {
//   a: 10,
//   b: 20,
//   c: 30,
//   d: 40
// };

// const { a, b, ...restou} = dados;
// const novoObj = {...restou, e: 50};
// console.log(a, b, novoObj);
*/

/* Exercicio de desustruração de array
// Desestruture o booksarray em duas variáveis chamadas firstBooke secondBook.
// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// Desestruture o booksarray em uma variável chamada thirdBook. Você deve pular os dois primeiros livros.
// const [, , thirdBooks] = books;
// console.log(thirdBooks);

// Abaixo está o ratingsarray aninhado que contém dois outros arrays. Desestruture os ratingsarrays aninhados em duas variáveis chamadas ratinge ratingsCount. No resultado da sua desestruturação, a ratingsvariável deve armazenar o número 4,19 e ratingsCounto número 144584.
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// Abaixo está o ratingStarsarray. Desestruture-o em três variáveis chamadas fiveStarRatings, oneStarRatingse threeStarRatings. Atribua à threeStarRatingsvariável o valor padrão 0.
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// Desestruture para pegar apenas o primeiro e o terceiro número, ignorando o segundo.
// const numeros = [10, 20, 30];
// const [first, , secondaryNumber] = numeros;
// console.log(first, secondaryNumber);

// Sua tarefa:
// Pegue apenas a primeira e a última fruta usando desestruturação e ignorando as do meio.
// const frutas = ["maçã", "banana", "uva", "laranja"];
// const [firstFruit, , , secondFruit] = frutas;
// console.log(firstFruit, secondFruit);

// Sua tarefa:
// Desestruture para pegar a primeira, segunda e terceira cor,
// mas se a segunda ou terceira não existirem, use "preto" como valor padrão.
// const cores = ["vermelho"];
// const [firstColor, secondaryColor = 'black', tertiaryColor = 'black'] = cores;
// console.log(firstColor, secondaryColor, tertiaryColor);


// Sua tarefa:
// Use desestruturação para trocar os valores sem criar variável temporária.
// Trocando variáveis com desestruturação
// let firstNumber = 5;
// let TwoNumber = 10;

// [firstNumber, TwoNumber] = [TwoNumber, firstNumber];
// console.log(firstNumber, TwoNumber);

// Sua tarefa:
// Pegue as variáveis um, dois e tres usando desestruturação aninhada.
// Desestruturação aninhada
// const dados = [1, [2, 3], 4];

// const [number1, [number2, number3]] = dados;
// console.log(number1, number2, number3);

// Sua tarefa:
// Pegue apenas a primeira letra em uma variável
// e coloque o restante em outro array usando rest (...).
// Rest operator
// const letras = ["A", "B", "C", "D", "E"];
// const [firstVariable, ...rest] = letras;
// console.log(firstVariable, rest);

// Extraindo de retorno de função
// Use desestruturação diretamente no console.log para exibir "X: 12.5, Y: 9.8".
// function coordenadas() {
//   return [12.5, 9.8];
// }
// Sua tarefa:
// const [variableX, variableY] = coordenadas();
// const obj = {variableX, variableY};

// console.log(obj);
*/

/*
Abaixo está a allKeywordsvariável, que armazena um array vazio. Faça um loop sobre o booksarray e preencha allKeywords-o com as palavras-chave provenientes da keywordspropriedade de cada objeto de livro. O allKeywordsarray deve ter apenas um nível (sem arrays aninhados).

Use o loop e os métodos que desejar. Você também pode usar a sintaxe de propagação. No final, o allKeywordsarray deve ficar mais ou menos assim: ['computer science', 'programming', 'algorithms', 'data structures', ...].
*/

const allKeywords = [];

for (const value of books) {
  allKeywords.push(...value.keywords);
}

// console.log(allKeywords);

/*
O allKeywordarray contém duplicatas. Remova-as criando um conjunto a partir desse array. Atribua o conjunto recém-criado à uniqueKeywordsvariável.
*/

const uniqueKeyWords = new Set(allKeywords);
// console.log(uniqueKeyWords);

/*
Adicione mais duas palavras-chave ao uniqueKeywordsconjunto, por exemplo, 'codificação' e 'ciência'.

*/

uniqueKeyWords.add('Coding');
uniqueKeyWords.add('science');
// console.log(uniqueKeyWords);

/*
Delete 'business' from the uniqueKeywords set.
*/

uniqueKeyWords.delete('business');

const uniqueKeywordsArr = [...uniqueKeyWords];
// console.log(uniqueKeywordsArr);

uniqueKeyWords.clear();

/*
Crie um novo livro, mas desta vez como um Mapa. ​​Atribua-o à bookMapvariável. Use este array como dados iniciais:
*/

const bookMapVariavel = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);

bookMapVariavel.set('pages', 464);

// console.log(bookMapVariavel);

/*
Obtenha os titlevalores authore de bookMape registre no console uma string formatada assim: "${title} by ${author}".
*/

// console.log(`${bookMapVariavel.get('title')} by ${bookMapVariavel.get('author')}`);

// console.log(bookMapVariavel.size);

/*
Verifique se você bookMaptem a authorchave e, se tiver, faça login "The author of the book is known"no console.
*/
// if (bookMapVariavel.has('author')) console.log('The author of the book is known');

/*
Converta o primeiro objeto de livro do booksarray em um Mapa e atribua-o a uma firstBookMapvariável.
*/

const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

// for(const [key, value] of firstBookMap) {
//   if (typeof value === 'number') console.log(key);
// }

/*
Escreva um programa que receba uma lista de nomes de variáveis ​​escritos em underscore_case e os converta para camelCase.

A entrada virá de uma textarea inserida no DOM (veja o código abaixo), e a conversão ocorrerá quando o botão for pressionado.

DADOS DE TESTE (colados na área de texto)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

DEVE PRODUZIR ESTA SAÍDA (5 saídas separadas do console.log)
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

DICA 1: Lembre-se de qual caractere define uma nova linha na área de texto 😉
DICA 2: A solução só precisa funcionar para uma variável composta por 2 palavras, como a_b
DICA 3: Comece sem se preocupar com o ✅. Resolva isso somente depois que a conversão do nome da variável estiver funcionando 😉
DICA 4: Este desafio é difícil de propósito, então comece a assistir à solução caso você não consiga. Depois, pause e continue!

Depois, teste com seus próprios dados!

BOA SORTE 😀
*/

// Escreva um programa que receba uma lista de nomes de variáveis ​​escritos em underscore_case e os converta para camelCase.
/*
const transformCamelCase = function(arr) {

  for(const [ind, nome] of arr.entries()) {
    if(!nome.includes('_')) return console.log('Nomes inválidos');

    // const indiceTraverssao = nome.indexOf('_');
    // const nomeAntes = nome.slice(0, indiceTraverssao) + nome[indiceTraverssao + 1].toUpperCase() + nome.slice(indiceTraverssao + 2);

    const [firstName, secondName] = nome.toLowerCase().trim().split('_');

    const output = `${firstName}${secondName.replace(secondName[0], secondName[0].toUpperCase())}`;



    console.log(output.padEnd(20) + ` ${ '✅'.repeat(ind + 1)} `);
  }

}

transformCamelCase(['underscore_case ', 'first_name', 'Some_Variable', 'calculate_AGE', 'delayed_departure']);
// console.log(transformCamelCase(['underscorecase ', 'first_name', 'SomeVariable', 'calculateAGE', 'delayed_departure']));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', () => {
  const textAreaEl = document.querySelector('textarea').value.split('\n').trim();

  if (textAreaEl.length < 5) return console.log('Digite os nomes, um em baixo do outro');

  const namesCorrect = transformCamelCase(textAreaEl);

})
*/

/*
// Trablhando com strings part 1 - exercicio
// Pegue a ISBNpropriedade do primeiro livro da booksmatriz e registre nos caracteres do console nos índices 6, 4, 9 e 8. Use a notação de colchetes para acessar caracteres individuais.

const numbers = [6, 4, 9, 8];
for(const [ind, key] of numbers.entries()) {
  console.log(books[0].ISBN[`${key}`]);
}

// Abaixo está a quotevariável que armazena uma string. Encontre o índice da palavra 'chess'e registre-o no console.
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing';
const indicePalavra = quote.indexOf('chess');
console.log(indicePalavra);

// Extraia a palavra "boxing" da mesma quotestring e registre-a no console.
console.log(quote.slice(-6));

// Alguns autores são identificados como "(Contributor)", por exemplo "Julie Sussman (Contributor)". Crie uma função chamada isContributorque receba o nome de um autor como argumento e retorne verdadeiro (se ele for um colaborador) ou falso (se ele não for um colaborador). A string "(Contributor)" é sempre a última parte da string do nome do autor.

const isContributor = function(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}

console.log(isContributor('Julie Sussman (Contributor)'));
console.log(isContributor('Robert Sedgewick'));
*/

/*
Escreva uma função chamada normalizeAuthorNameque recebe o nome de um autor (string) como argumento e retorna a mesma string, mas o primeiro e o último nome são escritos em maiúsculas e a "(Contributor)"parte é removida (se existir).

Você pode ter certeza de que o nome do autor sempre consiste em duas palavras separadas por um espaço e possivelmente termina com "(Contributor)". A string também pode conter espaços finais.
*/

/*
const normalizeAuthorName = function(author) {
  const arrNames = author.trim().toLowerCase().split(' ');

  const [firstName, lastName] = arrNames;
  
  console.log(`${firstName.replace(firstName[0], firstName[0].toUpperCase())} ${lastName.replace(lastName[0], lastName[0].toUpperCase())}`);


}

normalizeAuthorName('  JuliE sussMan (Contributor)')

/*
Pegue o titledo segundo livro ( books[1]) do booksarray e substitua a palavra "Programs"por "Software". Atribua a nova string à newBookTitlevariável.
*/
// const newBookTitle = books[1].title.replace(books[1].title, 'Programs');
// console.log(newBookTitle);

/*
Escreva uma função chamada logBookThemeque recebe o título do livro (string) e registra no console:
*/
// const logBookThemeque = function(title) {
//   title = title.toLowerCase();
//   console.log(title);

//   if (title.startsWith('computer')) console.log('This book is about computer')

//   else if (title.includes('algorithms') && title.includes('structures')) console.log('This book is about algorithms and data structures')

//   else if (title.endsWith('system') || title.endsWith('systeams') && !(title.includes('operating'))) console.log('This book is about some systems, but definitely not about operating systems');

// }

// logBookThemeque('computer');
// logBookThemeque('algorithms and structures');
// logBookThemeque('operating systems')

/*
baixo está a bookCategoriesvariável que armazena uma sequência de categorias. Cada categoria é separada por ponto e vírgula, por exemplo, em uma sequência de caracteres "science;computing", 'science'e 'computing'são categorias separadas.

Escreva uma função chamada logBookCategoriesque recebe uma sequência de categorias separadas por ponto e vírgula e registra cada categoria no console (como sequências separadas).
*/
// const logBookCategories = function (arr) {
//   const booksCategories = arr.split(';');

  

//   for (const book of booksCategories) console.log(book);
// };

// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);

// const booksTest = bookCategories.split(';')

/*
Agora, o oposto. Cada livro do booksarray tem a keywordspropriedade.

Escreva uma função chamada getKeywordsAsStringque recebe o booksarray como argumento, coleta palavras-chave de cada livro, remove duplicatas e depois as une para criar uma única string onde as palavras-chave são separadas por ponto e vírgula.

Exemplo
*/

// const getKeywordsAsString = function (books) {
//   const semDuplicates = [...new Set(books)];  

//   console.log(semDuplicates);

//   const string = semDuplicates.join(';');
//   console.log(string);
// };

// getKeywordsAsString(booksTest);

/*
Abaixo está a bookChaptersmatriz que contém as matrizes internas. Cada matriz interna consiste no título de um capítulo e no número de uma página; por exemplo, em ['The Basics', 14]"O Básico" é o título do capítulo e 14o número de uma página.

Escreva uma função chamada logBookChaptersque receba um array de arrays (como bookChapters) como argumento e registre o nome de cada capítulo no console, juntamente com o número da página. O número da página deve ser separado do nome do capítulo por sublinhados (veja o exemplo abaixo).

Use o padEndmétodo.
*/

// const logBookChapters = function(books) {
//   for(const [book, pag] of books) {
//     console.log(book.padEnd(20, '_') + ' ' + pag)
//   } 
// }

// const bookChapters = [['The Basics', 14], ['Sorting', 254], ['Searching', 372], ['Graphs', 526], ['Strings', 706]];
// logBookChapters(bookChapters);
