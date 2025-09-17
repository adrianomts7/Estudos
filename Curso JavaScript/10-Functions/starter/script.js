'use strict';

/*
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {

  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price
  }

  console.log(booking);
  bookings.push(booking);

}

createBooking('Lh123');
createBooking('LH123', 2, 800);
createBooking('Lh123', 5);
*/

/*
const flight = 'LH234';
const adriano = {
  name: 'Adriano Mateus',
  passport: 2716287181
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999',
  passenger.name = 'Mr. ' + passenger.name;
  
  if (passenger.passport === 2716287181) {
    alert('Checked In!');
  } else {
    alert('Wrong Passport');
  }

}

checkIn(flight, adriano);
console.log(flight);
console.log(adriano);

const flightNum = flight; // -> Manda uma cópia do valor para a variável
const passenger = adriano; // -> Manda uma cópia da instância do objeto na memoria, se alterar alguma coisa na variável passageiro consequentemente mudará em adriano também.

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(adriano);
checkIn(flight, adriano);
console.log(adriano);
*/

/*
const oneWord = function(str) {
  return str.replace(/ /g, ''.toLowerCase());
}

const upperFirstWord = function(str) {
  const [firstName, ...others] = str.split(' ');
  return [firstName.toUpperCase(), ...others].join(' ');
}

// Função de ordem superior
const transformer = function(str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function() {
  console.log(`🚀`)
}

document.body.addEventListener('click', high5);
*/

/*
const greet = function (greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greet2 = greeting => name => console.log(`${greeting} ${name}`); 

greet2('Hello')('Adriano');
const greetHey = greet('Hey');
greetHey('Adriano');
greetHey('Jonas');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book (fligthNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${fligthNum}`)
    this.bookings.push({ flight: `${this.iataCode}  ${fligthNum}`, name });
  }
}

lufthansa.book('LH239', 'Adriano Mateus');
lufthansa.book('Lh635', 'Jonas Schmedtmann')
console.log(lufthansa);

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;

// Não funciona
// book(23, 'Mateus Adriano');

book.call(eurowings, 23, 'Mateus Santos');
console.log(eurowings);

book.call(lufthansa, 239, 'Maria Santos');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
}

book.call(swiss, 23, 'Mary Cooper');
console.log(swiss);

const gool = {
  airline: 'Gool',
  iataCode: 'GL',
  bookings: []
}

book.call(gool, 7, 'Marta Silva');
console.log(gool);


// Método Apply
const flightData = [23, 'Stever Jobs'];
book.apply(swiss, flightData);

// Forma melhor de fazer
book.call(swiss, ...flightData);

// Método bind
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss);
const bookGL = book.bind(gool);

// Vinculando paramêtros já no bind
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Everton Ribeiro');
bookEW23('Jean Lucas');

bookEW(22, 'Cauly Oliveira');
console.log(eurowings);

// Bind com eventos
lufthansa.planes = 300;
lufthansa.buyPlanes = function() {
  console.log(this);

  lufthansa.planes++;

  console.log(this.planes);
}


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// Aplicando a valores
// rate -> procentagem de desconto
// Value -> Valor
const addTAX = (rate, value) => value + value * rate;
console.log(0.1, 200);

const addVAT = addTAX.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTAX2 = function(rate = 0.23) {
  return function(value) {
    return value + value * rate;
  }
}


console.log(addTAX2()(100));
*/

/*
const runOnce = function() {
  console.log('This will never run again');
}

runOnce();

// Expressão de função chamada imediatamente.
(function() {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'));
*/

/*
const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
booker();
booker();
booker();
*/

/*
let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}

const h = function() {
  const b = 777;
  f = function() {
    console.log(b * 2);
  }
}

// Chamando a função g
g();
// Chamando a função f que está atribuida a função g;
f();

// Chamando a função h
h();
// Chamando a função f que está atribuida a h
f();

const boardPassengers = function(n, wait) {
  const pertGroup = n / 3;

  setTimeout(function() {
    console.log(`We are now boarding all ${wait} passengers`);
    console.log(`There are 3 groups, each with ${pertGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait} seconds`);

}

boardPassengers(180, 3);
*/

// Desafio de Codificação nº 2

/* 
Este é mais um desafio de raciocínio do que de codificação 🤓

Veja o IIFE abaixo e, ao final da função, anexe um ouvinte de eventos que altere a cor do elemento h1 selecionado ('header') para azul, cada vez que o elemento BODY for clicado. NÃO selecione o elemento h1 novamente!

E agora explique para VOCÊ MESMO (ou para alguém próximo) POR QUE isso funcionou! Leve o tempo que precisar. Pense em QUANDO exatamente a função de retorno de chamada é executada e o que isso significa para as variáveis ​​envolvidas neste exemplo.

BOA SORTE 😀
*/

(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  })

})();
