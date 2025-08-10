'use strict';

// Entendendo como funciona o escopo no javascript, como ele faz para pegar variaveis, funções
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = (`${firstName}, you are ${age}, born in ${birthYear}`);
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

    }

  }

  printAge();
  console.log(firstName);
  
  return age;
}

const firstName = 'Adriano';
calcAge(1991);
*/

// Variaveis
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// funções
// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function(a, b) {
//   return a + b;
// }

// var addArrow = (a, b) => a + b;

// // Exemplos
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All product deleted')
// }

// Como funciona o this
// console.log(this);

// const calcAge = function(birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = (birthYaer) => {
//   console.log(2037 - birthYaer);
//   console.log(this);
// }
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);
//   }
// }

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function() {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996 );
//     }

//     isMillenial();
//   },
//   great: function(){ 
//     console.log(this),
//     console.log(`Hey ${this.firstName}`) 
//   },
// }

// const addExp = function(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// addExp(2, 5, 6);

// const jessica1 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27
// }

// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
// }

// const marriedJessica = marryPerson(jessica1, 'Davis')

// // const marriedJessica = jessica1;
// // marriedJessica.lastName = 'Davies';

// console.log('Before:', jessica1);
// console.log('After:', marriedJessica);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   familiy: ['Alice', 'Bob'],
// }

// // Cópia superficial
// const jessicaCopy = {... jessica};

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// // Cópia profunda
// const jessicaClone = structuredClone(jessica);
// jessicaClone.familiy.push();
// jessicaClone.familiy.push();

// console.log('Original:', jessica);
// console.log('Clone:', jessicaClone);
