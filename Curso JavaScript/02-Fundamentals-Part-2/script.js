'use strict'

// Funções

// function fruitsProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juices = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juices;
// }

// console.log(fruitsProcessor(5, 10));

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// console.log(calcAge1(2005));

// const calcAge3 = birthYaer => 2037 - birthYaer;
// const age3 = calcAge3(2005);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 -birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} year`
// }

// console.log(yearUntilRetirement(2005, 'Adriano'));

// function cutFruitPieces(fruits) {
//   return fruits * 4;
// }

// function fruitsProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juices = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//   return juices;
// }


// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//     return retirement > 0 ? console.log(`${firstName} retires in ${retirement} year`) : console.log(`${firstName} has already retired 🎉`);
  
  // return `${firstName} retires in ${retirement} year`
// }

// console.log(yearUntilRetirement(1950, 'Marta'))

// const calclAverage = (number1, number2, number3) => (number1 + number2 + number3) / 3;

// function checkWinner (avgDolphins, avgKoalas) {
  
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win ${avgDolphins} vs ${avgKoalas}` 
//   } 
//   else if (avgKoalas > 2 * avgDolphins) {
//     return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
//   } else {
//     return `No team wins..`
//   }
  
// }

// const scoreDolphins = calclAverage(85, 54, 41);
// const scoreKoalas = calclAverage(23, 34, 27);

// console.log(checkWinner(scoreDolphins, scoreKoalas));

// Arrays

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends.length)
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = 'Adriano';
// const adriano = [firstName, 'Mateus', 2037 - 2005, 'Programer', friends];
// console.log(adriano);

// // Exercise Arrays
// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1987, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// friends.unshift('John');
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// const calcTip = function(valor) {
//   if (valor > 50 && valor < 300) {
//     return (valor * 15) / 100;
//   } else {
//     return (valor * 20) / 100;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ]

// const totals = [bills[0] + tips[0], bills[1] + tips[1], + bills[2] + tips[2]]

// console.log(tips);
// console.log(totals);

// const jonas = {
//   firstName: 'jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   // calcAge: function() {
//   //   return 2037 - this.birthYaer;
//   // }

//   calcAge: function() {
//     this.age = 2037 - this.birthYeah;
//     // Não é obrigado a retornar nada
//     return this.age;
//   },

//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, ${ this.hasDriversLicense ? "and he has a driver's license" : "and he not a driver's license"  }`
//   }

// }

// console.log(jonas.getSummary());

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,

//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,

//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// }

// if (mark.calcBmi() > john.calcBmi()) {
//   console.log(`${mark.fullName} BMI(${mark.bmi}) is higher than ${john.fullName} (${john.bmi})`)
// } else {
//   console.log(`${john.fullName} BMI(${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`)
// }

// for(let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ]

// const types = [];

// for (let i = 0;  i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   types.push(typeof jonas[i]);
// }

// // console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = []

// for(let i = 0; i < years.length; i++) {
//   ages.push(2037 -  years[i]);
// }

// console.log(ages);

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ]

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`Starting exercise ${exercise}`);

//   for(let rep = 1; rep <= 5; rep++) {
//     console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`)
//     console.log()
//   }

// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }

// const calcTip = function(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totais = [];

// for (let i = 0; i < bills.length; i++ ) {
//   tips.push(calcTip(bills[i]));
// }

// for(let i = 0; i < bills.length; i++) {
//   totais.push(bills[i] + tips[i])
// }

// const calcAberage = function(arr) {
//   let sum = 0;
  
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   const media = sum / arr.length;
//   return media;
// }

// console.log(bills, tips, totais);
// console.log(calcAberage(totais));

const parImpar = function(numero) {
  return numero % 2 === 0 ? 'Par' : 'Impar';
}

// console.log(parImpar(2))

const podeEntrar = function(idade) {
  return idade >= 18 && idade < 60 ? true : false;
}

// console.log(podeEntrar(25));

const filtrarNome = function(nomes) {
  const nomesFiltrados = [];  

  for(let i = 0; i < nomes.length; i++) {
    if (nomes[i].charAt(0) === 'A') {
      nomesFiltrados.push(nomes[i])
    }
  }

  return nomesFiltrados
}

// console.log(filtrarNome(["Ana", "Pedro", "Amanda", "Carlos"]));

function somarPares(numeros) {
  let somaPares = 0;

  for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      somaPares += numeros[i];    
    }
  }

  return somaPares;
}

// console.log(somarPares([1, 2, 4, 7]));

function dobrarMaioresQueDez(numeros) {
  const dobroNumerosMaioresQueDez = [];

  for(let i =0; i < numeros.length; i++) {
    if (numeros[i] >= 10) {
      let dobro = numeros[i] * 2;
      dobroNumerosMaioresQueDez.push(dobro);
    }
  }

  return dobroNumerosMaioresQueDez;
}

// console.log(dobrarMaioresQueDez([5, 12, 8, 20]));

function contemNome(lista, nome) {
  let nomeLista = false;
  
  for(let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      nomeLista = true;
    }
  }

  return nomeLista;
}

// console.log(contemNome(["Ana", "Bruno"], "Bruno"));

function validarNota(nota) {
  if (typeof nota === 'string') return 'Não é um número'

  return nota >= 0 && nota <= 10 ? true : false;
}

// console.log(validarNota(8));

const contarNumeros = function(numeros) {
  const contador = {};

  for(let num of numeros) {
    contador[num] = (contador[num] || 0) + 1;
  }


  return contador;
}

// console.log(contarNumeros([1, 2, 1, 3, 2, 1]));

const contarLetras = function(palavra) {
  const palavrasLista = palavra.split('').toLowerCase();
  const contador = {};

  for(let letra of palavrasLista) {
    contador[letra] = (contador[letra] || 0) + 1;
  }

  return contador;
}

// console.log(contarLetras("Banana"));

const maisFrequente = function(numeros) {
  const contador = {};
  let numeroMaisFrequente = 0;

  for(let num of numeros) {
    contador[num] = (contador[num] || 0) + 1;
  }

  let maiorChave = null;
  let maiorValor = 0;

  for (let chave in contador) {
    if (contador[chave] > maiorValor) {
      maiorValor = contador[chave];
      maiorChave = chave;
    }
  }

  return maiorChave;
}

// console.log(maisFrequente([2, 3, 2, 5, 2, 3]));

const contarPalavras = function(frase) {
  const contador = {};
  const palavras = frase.split(' ');

  for (let palavra of palavras) {
    contador[palavra] = (contador[palavra] || 0) + 1;
  }

  return contador;
}

// console.log(contarPalavras("O rato roeu a roupa do rei de Roma"));

const numeroNaoSeRepete = function(numeros) {
  const contador = {};

  for(let num of numeros) {
    contador[num] = (contador[num] || 0) + 1;
  }

  let chave = null;
  let menosSeRepete = Infinity;

  console.log(contador);

  for (let cha in contador) {
    if (contador[cha] < menosSeRepete) {
      chave = cha;
      menosSeRepete = contador[cha];
    }
  }

  return Number(chave);
}

// console.log(numeroNaoSeRepete([1, 2, 3, 2, 1]));


const letraMaisFrequente = function(palavra) {
  const contador = {};
  const letras = palavra.toLowerCase().split('');
  
  for(let letra of letras) {
    contador[letra] = (contador[letra] || 0) + 1;
  }
  
  let chave = '';
  let maisAparece = 0;
  const letrasMaisAparecem = [];

  for(let c in contador) {
    if (contador[c] > maisAparece) {
      letrasMaisAparecem.push(c);
      maisAparece = contador[c];
    }
  } 

  console.log(letrasMaisAparecem)

  return letrasMaisAparecem;

}

console.log(letraMaisFrequente("teste de letra"));