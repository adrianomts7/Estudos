'use strict';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const weekDays = ['mon', 'tue', 'wed', 'Thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // ES6 objetos literais aprimorados
  openingHours,

  // ES6 não mas da palavra chave function para declarar funções nos objetos
  orderDelivery ({
    startIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ind1, ind2, ind3) {
    console.log(`Here is yout delicious pasta with ${ind1}, ${ind2}, ${ind3}`);
  },

  orderPizza(mainIngredient, ...outhersIngredients) {
    console.log(mainIngredient);
    console.log(outhersIngredients);
  },
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for(const flight of flights.split('+')) {
  const [type, from, to, time ] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}  ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} ${time.replace('h', ':')}`.padStart(20);
  console.log(output)
}

/*
// Trabalhando com strings part 3
// Separando e juntando string com split e join
console.log('Adriano Mateus'.split(' '));
const [firstName, secondName] = 'Adriano Mateus'.split(' ');
const newName = ['Mr', firstName, secondName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];

  for(const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(' '));
}

capitalizeName('adriano mateus');
capitalizeName('jessica ann smith davis');

console.log('Bahia Campeão do nordeste'.padStart(5, '🏆'));
console.log('Bahia'.padStart(10, '🏆'));


const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskCreditCard(21982019));
console.log(maskCreditCard(9209809382019));
console.log(maskCreditCard('0293802910281019201'));

const message2 = 'Tempo ruim... Todas as partidas foram canceladas...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`The are ${n} planes in lines ${'🛬'.repeat(n)} `);
}

planesInLine(5);
planesInLine(3);
planesInLine(15);
*/

/*
// Trabalhando com string part 2
const airline = 'TAP Air Portugal';
// const plane = "A320";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Corrigindo nome de passageiro
const passager = 'AdRiAnO';
const passagerLower = passager.toLowerCase();
const passagerCorrect = passagerLower.slice(0, 1).toUpperCase() + passagerLower.slice(1);
console.log(passagerCorrect.slice(0))
console.log(passagerCorrect);

// Comparando emails
const email = 'hello@adriano.mts';
const loginEmail = ' Hello@Adriano.mts \n';
const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(normalizeEmail === email);

// Replacing -> Preço de vôo
const priceGB = '288,84&';
const priceUS = priceGB.replace('&', '$');
console.log(priceUS);

// anoucement -> Anúncio
const announcement = 'All passengers come to boarding door 23. Boarding 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airbus'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Novo Airbus da fammilia')

// Exercicios para praticar
const checkBagagge = function(items) {
  const bagagge = items.toLowerCase();

  bagagge.includes('knife') || bagagge.includes('gun') ? console.log('You are a NOT on allowed on border') : console.log('Welcome abord')

};

checkBagagge('I have a laptop, some Foof and a pocket Knife');
checkBagagge('Socks and camera');
checkBagagge('get some snacks and a gun for protection');
*/

/*
// Trabalhando com string part 1
// Pegando letra de string com base no seu índice
console.log(plane[0]);
console.log(plane[1]);
console.log("B737"[0]);

// Pegando o tamanho da string;
console.log(airline.length);
console.log("B727".length);

// Sabendo o indice de uma letra em uma string
// indice da primeira vez que a letra aparecuna string 
console.log(airline.indexOf('r'));

// ùltima vez que o a lera apareceu na frase
console.log(airline.lastIndexOf('r'));

// Pegando uma substring pelo indice
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  // B  e C são assentos do meio;
  const s = seat.slice(-1);
  s === 'B' || s === 'C' ? console.log('Você pego o assento do meio') : console.log('Você teve sorte');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C')
checkMiddleSeat('3E');
*/

/*
// Iterando sobre maps
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!']
])
console.log(question);

// Convertendo Objeto para map;
console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for(const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer: '))
console.log(answer);

// answer === question.get('correct') ? console.log(question.get(true)) : console.log(question.get(false));
console.log(question.get(question.get('correct') === answer));

// Convertendo map para array
console.log([...question]);

console.log(question.keys());
console.log(question.entries());
console.log(question.values);
*/

/*
// Novos métodds do set
// Para pegar os elementos iguais de dois sets
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

const italianFoodDifference = italianFoods.difference(mexicanFoods);
console.log(italianFoodDifference);
*/

/*
// Map procedimentos
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).open('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest.size);

const arr = [1, 2];
rest.set(arr, 'test');
*/

/*
// Set
const orderSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta', 'Pizza']);
console.log(orderSet);
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear()
console.log(orderSet);

for(const order of orderSet) console.log(order);

// Exemplo
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
)
*/

/*
// Nomes de propriedades
const properties = Object.keys(openingHours);
// console.log(properties);

let openStr = `We are open on ${properties.length} days: `
for (const day of properties) {
  openStr += `${day}, `;
}

// console.log(openStr);

// Valores de propriedades
const values = Object.values(openingHours);
// console.log(values);

// Entries (Olhar onde ele ta no array)
const entries = Object.entries(openingHours);
console.log(entries);

for (const [ key, { open, close } ] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/ 

// if (restaurant.openingHours && restuarant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// Encadeamento opcional
// Se a propriedade mon não exister, ele retorna undefined
// console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'Thu', 'fri', 'sat', 'sun'];

for(const day of days) {
  const open = restaurant.openingHours[day]?.open;
  // console.log(`On ${day}, we open at ${open}`);
}

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Método não existe');

// Arrays
const users = [ { name: 'Adriano', email: 'adriano@gmail.com' } ];
// console.log(users[0]?.name || 'O array está vazio');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// Entries para ver o indice que cada item ta no array
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
/*
// Operadores lógicos com curto circuito e operador de consolênciax
const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi"
}
// Operadores Or
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assigment operator 
rest1.numGuests ??= 10;
rest2.numguests ??= 10;

// Operadores AND
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

rest1 &&= '<ANONYMOUS>';
rest2 &&= '<ANONYMOUS>';

console.log(rest1)
console.log(rest2);
*/

/*
// Curto circuito e operador de consolência

console.log('---- OR ----');

// restaurant.numGuest = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// Não trabalha com valores nulos e undefined, ele retornará 0
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);

console.log('---- AND ----');
console.log(0 && 'Adriano');
console.log(7 && 'Adriano');
console.log('Hello' && 23 && null && 'Adriano');

// Exemplo prático
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/

/*
// Rest operator
// 1) Desustruturando
// Spread é rest criam um novo array
// Spread operator por que depois do = (Spread descompacta o array)
const arr = [1, 2, ...[3, 4]];

// Rest por que ele fica antes do = (Ele pega o resto do array)
const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

const [pizza, , rissoto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Objects
const {sat, ...weekDays} = restaurant.openingHours;
// console.log(weekDays);

// 2) Funções
const add = function(...numbers) {
  let sum = 0;
  numbers.forEach( number => sum += number )

  return console.log(`Total da soma: ${sum}`);
}

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
// Dessusutruturando o array x, passando os elementos um por um
// add(...x);

// restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
*/

/*
// Spread operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iteraveis array, string, maps, set, menos objetos

const str = 'Adriano';
const letters = [...str, ' ', 'M.']

// Exemplo do mundo real
const ingredients = [
  // prompt('Let\'s make pasta ingredient 1? '),
  // prompt('Ingredient 2: '),
  // prompt('Ingrediente 3: ')
]

// Ele envia um elemento por um, tudo separado com virgula
restaurant.orderPasta(...ingredients);

console.log(ingredients);

const newRestaurant = { founderIn: 1998, ...restaurant, founder: 'Guisseppe'  };
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(newRestaurant);
console.log(restaurant.name);
console.log(restaurantCopy.name);

*/

/* Desustruturação de objetos
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2
})
  
// Desustrutando objetos
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Mudando o nome em objetos
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Declarando valores padrão em objetos;
const { menu = [], starterMenu: starters = [] } = restaurant;

// Mutação em variaveis
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({a, b} = obj);
console.log(a, b);

const { fri: {open: o, close: c} } = openingHours;
console.log(o, c);
*/

/* Desustruração de array
const arr = [2, 3, 8, 6];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
// console.log(x, y, z);

// Alternando variaveis
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Dois valores de retorno de uma função
const [starter, mainCourse] = restaurant.order(2, 0);

// Desustruturação aninhada
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, ,[j, k]] = nested;
console.log(i, j, k);

// Valored padrão
const colors = ['red'];
const [firstColor, secondaryColor = 'black'] = colors;
*/
