let myCountry = 'Brasil';
let continent = 'América'
let population = 212.6;
const mediaCountries = 33;
const isIsland = true;
const language = 'protuguese';
const description = (` ${myCountry} is In  ${continent}, and it´s  ${population} milions peoples speak  ${language}`);

// if (population > mediaCountries) {
//   console.log(`${myCountry}'s population is above average `)
// } else {
//   console.log(`${myCountry}'s population is ${population - mediaCountries} below average `)
// }

/* Write your code below. Good luck! 🙂 */
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const bmiMark = massMark / (heightMark * heightMark);
// const bmiJohn = massJohn / (heightJohn * heightJohn);
// const markiHigherBmi = bmiMark > bmiJohn;

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI ${bmiMark.toFixed(2)} is higher than John's ${bmiJohn.toFixed(2)} `)
// } else {
//   console.log(`John's BMI ${bmiJohn.toFixed(2)} is higer than higger than Mark's ${bmiMark.toFixed(2)}`)
// }

// const scoreDolphins = (96 + 108 + 89 ) / 3;
// console.log(scoreDolphins);

// const scoreKoalas = (96 + 108 + 89 ) / 3;
// console.log(scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log(`Dolphins win the trophy`)
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win yhe trophy')
// } else {
//   console.log('both win the tropy')
// }

const bill = Number(prompt('Digite o valor da sua refeição para calcular a gorjeta: '));
let tip = bill <= 300 ? tip = (bill * 15) / 100 : tip = (bill * 20) / 100;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

