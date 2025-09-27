'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium'
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard'
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium'
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic'
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach( function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);

  })
}

const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
}

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements.filter(mov => mov > 0).map(deposited => deposited * acc.interestRate / 100).filter(int => int >= 1).reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = interest;

}

const createUserName = function(accs) {
  accs.forEach(function(acc) {
    acc.userName = acc.owner.toLowerCase().split(' ').map( name => name[0]).join('');
  })
}
createUserName(accounts);

const updateUi = function(acc) {
  displayMovements(acc.movements);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc);
}

// Manipuladores de eventos
let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();

  currentAccount = accounts.find( acc => acc.userName === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome to back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = '1';
    
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUi(currentAccount);

  }

})

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = ''; 
  
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.userName !== currentAccount.userName) {
    // Fazendo a transferencia
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    
    updateUi(currentAccount);
  }

})

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some( mov => mov > amount * 0.1 )) {
    currentAccount.movements.push(amount);

    updateUi(currentAccount);
  }

  inputLoanAmount.value = '';

})

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  const userName = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = '';

  if (currentAccount.userName === userName && currentAccount.pin === pin) {
    const index = accounts.findIndex( acc => acc.userName === userName);
    
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;

  }

})

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
// LECTURE

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////
// Desafio de Programação nº 1

/* 
Julia e Kate estão fazendo um estudo sobre cães. Então, cada uma delas perguntou a 5 donos de cães sobre a idade de seus cães e armazenou os dados em um array (um array para cada). Por enquanto, elas estão interessadas apenas em saber se um cão é adulto ou filhote. Um cão é adulto se tiver pelo menos 3 anos de idade e é filhote se tiver menos de 3 anos.

Crie uma função 'checkDogs', que aceita 2 arrays de idades de cães ('dogsJulia' e 'dogsKate') e faz o seguinte:

1. Julia descobriu que os donos do PRIMEIRO e dos DOIS ÚLTIMOS cães, na verdade, têm gatos, não cães! Então, crie uma cópia superficial do array de Julia e remova as idades dos gatos desse array copiado (porque é uma má prática alterar os parâmetros da função).
2. Crie um array com os dados de Julia (corrigidos) e Kate.
3. Para cada cachorro restante, registre no console se ele é adulto ("O cachorro número 1 é adulto e tem 5 anos") ou filhote ("O cachorro número 2 ainda é filhote 🐶").
4. Execute a função para ambos os conjuntos de dados de teste.

DICA: Use as ferramentas de todas as aulas desta seção até agora 😉

DADOS DE TESTE 1: Dados de Julia [3, 5, 2, 12, 7], dados de Kate [4, 1, 15, 8, 3]
DADOS DE TESTE 2: Dados de Julia [9, 16, 6, 8, 3], dados de Kate [10, 5, 6, 1, 4]

BOM SORTE 😀
*/

/*
const checkDogs = function(dogsJulia, dogsKate) {
  const dogsJuliaCorrigido = dogsJulia.slice(1, dogsJulia.length - 2);
  
  const arrayDogs = [...dogsJuliaCorrigido, ...dogsKate];
  console.log(arrayDogs);

  arrayDogs.forEach(function(idade, i){
    // Um cão é adulto se tiver pelo menos 3 anos de idade e é filhote se tiver menos de 3 anos.
    const adultoOuFilhote = idade > 2 ? `é Adulto e tem ${idade}` : 'ainda é Filhote';

    // registre no console se ele é adulto ("O cachorro número 1 é adulto e tem 5 anos") ou filhote ("O cachorro número 2 ainda é filhote 🐶").

    console.log(`O cachorro número ${i + 1} ${adultoOuFilhote}`);
  })

}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice -> Fatiamento de valores, cria uma copia superficial
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// Splice -> pega os valores desejados como o 'slice', mas altera o array principal
console.log(arr.splice(-1));
console.log(arr);
// Ele remove o elemento no ínidce 1 e no índice 2
console.log(arr.splice(1, 2));

// Reverse -> Coloca os valores alcontrario, muda o array original
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// Duas formas de concatenar listas
// Concat -> Para concatenar duas matrizes (Juntar duas listas)
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join -> Como separá os valores podendo ser "" || -
console.log(letters.join(' - '));
*/

/*
console.log(arr[0]);
const arr = [23, 11, 64];
// Pegando o primeiro elemento
console.log(arr.at(0));
// Pegando o último elemento
console.log(arr.at(-1));

// Mostrando o último elemento.
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log('Adriano'.at(0));
*/

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements) {
  
for(const [i, movement] of movements.entries()) {
movement > 0 ? console.log(`Movement ${i + 1}: You deposited ${movement}`) : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
}

console.log('------ FOREACH -------');
movements.forEach((movement, i, array) => movement > 0 ? console.log(`Movement ${i + 1}: You deposited ${movement}`) : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`));
*/

/*
// Map
const currencies = new Map([
['USD', 'United States dollar'],
['EUR', 'Euro'],
['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => console.log(`${key}: ${value}`));

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR', 'GBP']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, key, map) => console.log(`${key}: ${value}`));
*/

/*
const eurToUsd = 1.1;

const movementsUSD = movements.map( mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsDEscriptions = movements.map((mov, i, array) => mov > 0 ? `Movement ${i + 1}: You deposited ${mov}` : `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
*/

// Um cão é adulto se tiver pelo menos 3 anos de idade e é filhote se tiver menos de 3 anos.
// const adultoOuFilhote = idade > 2 ? `é Adulto e tem ${idade}` : 'ainda é Filhote';

// registre no console se ele é adulto ("O cachorro número 1 é adulto e tem 5 anos") ou filhote ("O cachorro número 2 ainda é filhote 🐶").
// console.log(`O cachorro número ${i + 1} ${adultoOuFilhote}`);

/*

const deposits = movements.filter( mov => mov > 0 );
console.log(deposits)

const withdrawals = movements.filter( mov => mov < 0 );
console.log(withdrawals);
*/

/*
const balance = movements.reduce( (acc, cur) => acc + cur , 0);
// console.log(balance);

// Valor maximo
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
console.log(max);
*/

/* 
Vamos voltar ao estudo de Julia e Kate sobre cães. Desta vez, elas querem converter as idades dos cães em idades humanas e calcular a idade média dos cães em seu estudo.

Crie uma função 'calcAverageHumanAge', que aceita um array de idades de cães ('ages') e faz o seguinte em ordem:

1. Calcule a idade do cão em anos humanos usando a seguinte fórmula: se o cão tem <= 2 anos, idadehumana = 2 * idadecachorro. Se o cão tiver > 2 anos, idadehumana = 16 + idadecachorro * 4.
2. Exclua todos os cães com menos de 18 anos humanos (o que equivale a manter cães com pelo menos 18 anos).
3. Calcule a idade humana média de todos os cães adultos (você já deve saber, por outros desafios, como calculamos as médias 😉).
4. Execute a função para ambos os conjuntos de dados de teste.

DADOS DE TESTE 1: [5, 2, 4, 1, 15, 8, 3]
DADOS DE TESTE 2: [16, 6, 10, 5, 6, 1, 4]

BOA SORTE 😀
*/

/*
const calcAverageHumanAge = function(ages) {
  const idadeCaes = ages.map(age => age <= 2 ? 2 * age : 16 + (age * 4) );
  const maiorIdade = idadeCaes.filter( age => age > 18 );
  return maiorIdade.reduce((acc, age) => acc + age, 0) / maiorIdade.length;
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
const eurToUsd = 1.1;
const totalDepositsUSD = movements.filter( mov => mov > 0).map( mov => mov * eurToUsd ).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/

/* 
Reescreva a função 'calcAverageHumanAge' do desafio anterior, mas desta vez como uma função de seta e usando encadeamento!

DADOS DE TESTE 1: [5, 2, 4, 1, 15, 8, 3]
DADOS DE TESTE 2: [16, 6, 10, 5, 6, 1, 4]

BOA SORTE 😀// Desafio de Programação nº 3

*/

/*
const calcAverageHumanAge = ages => ages.map(age => age <= 2 ? 2 * age : 16 + (age * 4) ).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length , 0)


console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
*/

/*
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find( acc => acc.owner === 'Jessica Davis' );
console.log(account);
*/

/*
// Novos Métodos findLast e findIndexLast
console.log(movements);
// Pegando o último valor negativo
console.log(movements.findLast( mov => mov < 0 ));
const lastDeposit = movements.findLast(mov => mov > 1000);
const latestLargeMovementIndex = movements.findLastIndex( mov => Math.abs(mov) > 1000 );
console.log(`Your latest large movement was ${latestLargeMovementIndex} movements ago is value ${lastDeposit}`);
*/

/*
console.log(movements);
// Igualdade
console.log(movements.includes(-130));

//Some: Condição
const anyDeposits = movements.some( mov => mov > 5000);
console.log(anyDeposits);

console.log(movements.every(mov => mov > 0));

// Separando
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
*/

/*
const arr = [[1,2,3], [4,5,6], 7,8];
console.log(arr.flat());

const arrDeep = [[[1,2],3], [4,[5,6]], 7,8];
console.log(arrDeep.flat(2));

// const accountsMovements = accounts.map( acc => acc.movements );
// console.log(accountsMovements);

// const allMovements = accountsMovements.flat();
// console.log(allMovements);

// Flat
const overalBalance = accounts.map( acc => acc.movements ).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalance2 = accounts.flatMap( acc => acc.movements ).reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/

/*
Desta vez, Julia e Kate estão estudando os níveis de atividade de diferentes raças de cães.

SUAS TAREFAS:
1. Armazenar o peso médio de um "Husky" em uma variável "huskyWeight"
2. Encontrar o nome da única raça que gosta tanto de "correr" quanto de "buscar" (variável "dogBothActivities")
3. Criar um array "allActivities" com todas as atividades de todas as raças de cães
4. Criar um array "uniqueActivities" que contenha apenas as atividades únicas (sem repetições de atividades). DICA: Use uma técnica com uma estrutura de dados especial que estudamos algumas seções atrás.
5. Muitas raças de cães gostam de nadar. De que outras atividades esses cães gostam? Armazenar todas as OUTRAS atividades que essas raças gostam de fazer em um array exclusivo chamado "swimmingAdjacent".
6. Todas as raças têm um peso médio de 10 kg ou mais? Registre no console se "true" ou "false".
7. Existe alguma raça que seja "ativa"? "Ativo" significa que o cão tem 3 ou mais atividades. Registre no console se "true" ou "false".

BÔNUS: Qual é o peso médio da raça mais pesada que gosta de buscar? DICA: Use o método "Math.max" junto com o operador ....

DADOS DE TESTE:
*/

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// Armazenar o peso médio de um "Husky" em uma variável "huskyWeight"
const huskyWeight = breeds.find(bread => bread.breed === 'Husky').averageWeight;

console.log(huskyWeight);

// 2. Encontrar o nome da única raça que gosta tanto de "correr" quanto de "buscar" (variável "dogBothActivities")
const dogBothActivities = breeds.find(breed => breed.activities.find(action => action === 'running') && breed.activities.find(action => action === 'fetch'));
console.log(dogBothActivities);

// 3. Criar um array "allActivities" com todas as atividades de todas as raças de cães
const allActivities = breeds.flatMap( bread => bread.activities );
console.log(allActivities);

// 4. Criar um array "uniqueActivities" que contenha apenas as atividades únicas (sem repetições de atividades). DICA: Use uma técnica com uma estrutura de dados especial que estudamos algumas seções atrás.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5. Muitas raças de cães gostam de nadar. De que outras atividades esses cães gostam? Armazenar todas as OUTRAS atividades que essas raças gostam de fazer em um array exclusivo chamado "swimmingAdjacent".
const swinmingAdjacent = [... new Set(breeds.flatMap( bread => bread.activities.includes('swimming') ? bread.activities : '' ).filter( breed => breed ))];
console.log(swinmingAdjacent);

// 6. Todas as raças têm um peso médio de 10 kg ou mais? Registre no console se "true" ou "false".
console.log(breeds.every( breed => breed.averageWeight >= 10));

// 7. Existe alguma raça que seja "ativa"? "Ativo" significa que o cão tem 3 ou mais atividades. Registre no console se "true" ou "false".
console.log(breeds.some( bread => bread.activities.length >= 3 ))
// BÔNUS: Qual é o peso médio da raça mais pesada que gosta de buscar? DICA: Use o método "Math.max" junto com o operador ....
console.log(Math.max(...breeds.flatMap( bread => bread.averageWeight )));
*/

/*
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
// Crescente
movements.sort((a, b) => a > b ? 1 : -1);
movements.sort((a, b) => a - b);
console.log(movements);

// Decrescente
movements.sort((a, b) => a > b ? -1 : 1);
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
const groupedMovements = Object.groupBy(movements, mov => mov > 0 ? 'deposits' : 'withdrawals')

const groupedByActivity = Object.groupBy( accounts, function(acc){
  const movementCount = acc.movements.length;

  if (movementCount >= 8) return 'Very active';
  if (movementCount >= 4 ) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';

} );

console.log(groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, acc => acc.type );
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type );
console.log(groupedAccounts);
*/

/*
console.log(Array.from({ length: 7 }, () => 1));

console.log(Array.from({ length: 7 }, (_, i) => i + 1));

labelBalance.addEventListener('click', function() {
  const movementsUi = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));
  console.log(movementsUi);
})
*/

/*
console.log(movements);
const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements)
*/

/*
const bankDepositSum = accounts.flatMap( acc => acc.movements ).filter( mov => mov > 0 ).reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum)

// const numDeposits1000 = accounts.flatMap( acc => acc.movements ).filter( mov => mov > 1000 ).length;
// console.log(numDeposits1000)

const numDeposits1000 = accounts.flatMap( acc => acc.movements ).reduce((count, cur) => cur >= 1000 ? ++count : count, 0);
console.log(numDeposits1000);

const { deposits, withdrawals } = accounts.flatMap( acc => acc.movements ).reduce((sums, cur) => { 
  // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
  return sums;
 } , { deposits: 0, withdrawals: 0 });
console.log(deposits, withdrawals);

const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title.toLowerCase().split(' ').map( word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
  
  return capitalize(titleCase);

}

console.log(convertTitleCase('this ia a nice title'));
console.log(convertTitleCase('this ia a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/
/*
// Desafio de Programação nº 5

/* 
Julia e Kate ainda estão estudando cães. Desta vez, elas querem descobrir se os cães da família estão comendo demais ou de menos.

- Fórmula para calcular a porção recomendada de alimento: recommendedFood = peso ** 0,75 * 28. (O resultado está em gramas de alimento e o peso precisa estar em kg)
- Comer demais significa que a porção atual de alimento do cão é maior do que a porção recomendada, e comer de menos é o oposto.
- Comer uma quantidade aceitável significa que a porção atual de alimento do cão está dentro de uma faixa de 10% acima e abaixo da porção recomendada (veja a dica).

SUAS TAREFAS:
1. Faça um loop sobre o array contendo os objetos "cão" e, para cada cachorro, calcule a porção de comida recomendada (recFood) e adicione-a ao objeto como uma nova propriedade. NÃO crie um novo array, simplesmente faça um loop sobre o array (nunca fizemos isso antes, então pense em como você pode fazer isso sem criar um novo array).
2. Encontre o cachorro da Sarah e registre no console se ele está comendo demais ou de menos. DICA: Alguns cachorros têm vários usuários, então você precisa primeiro encontrar a Sarah no array "donos", então esta é um pouco complicada (de propósito) 🤓
3. Crie um array contendo todos os donos de cachorros que comem demais (donosDeMais) e um array com todos os donos de cachorros que comem de menos (donosDeMaisPouco).
4. Registre uma string no console para cada array criado em 3., assim: "Os cachorros da Matilda, da Alice e do Bob comem demais!" e "Os cachorros da Sarah, do John e do Michael comem de menos!"
5. Registre no console se ALGUM cachorro está comendo EXATAMENTE a quantidade de comida recomendada (apenas verdadeiro ou falso).
6. Registre no console se TODOS os cachorros estão comendo uma quantidade CERTA de comida (apenas verdadeiro ou falso).
7. Crie um array contendo os cachorros que estão comendo uma quantidade CERTA de comida (tente reutilizar a condição usada em 6).
8. Agrupe os cachorros nos 3 grupos a seguir: 'exato', 'demais' e 'de menos', com base em se eles estão comendo muito, de menos ou a quantidade exata de comida, com base na porção de comida recomendada.
9. Agrupe os cachorros pelo número de donos que eles têm.
10. Ordene o array de cachorros pela porção de comida recomendada em ordem crescente. Certifique-se de NÃO alterar o array original!

DICA 1: Use diversas ferramentas para resolver esses desafios. Você pode usar a aula resumida para escolher entre elas 😉
DICA 2: Estar dentro de uma faixa de 10% acima e abaixo da porção recomendada significa: atual > (recomendado * 0,90) e atual < (recomendado * 1,10). Basicamente, a porção atual deve estar entre 90% e 110% da porção recomendada.
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1. Faça um loop sobre o array contendo os objetos "cão" e, para cada cachorro, calcule a porção de comida recomendada (recFood) e adicione-a ao objeto como uma nova propriedade. NÃO crie um novo array, simplesmente faça um loop sobre o array (nunca fizemos isso antes, então pense em como você pode fazer isso sem criar um novo array). peso ** 0,75 * 28.
dogs.forEach( dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs)

// 2. Encontre o cachorro da Sarah e registre no console se ele está comendo demais ou de menos. DICA: Alguns cachorros têm vários usuários, então você precisa primeiro encontrar a Sarah no array "donos", então esta é um pouco complicada (de propósito) 🤓
// Comer demais significa que a porção atual de alimento do cão é maior do que a porção recomendada, e comer de menos é o oposto.
const dogSarah = dogs.find( dog => dog.owners.includes('Sarah'));
console.log(`O cachorro de Sarah está ${dogSarah.curFood > dogSarah.recfood ? 'Comendo demais' : 'Comendo pouco'} `);

// 3. Crie um array contendo todos os donos de cachorros que comem demais (donosDeMais) e um array com todos os donos de cachorros que comem de menos (donosDeMaisPouco).
const donosDemais = dogs.filter( dog => dog.curFood > dog.recFood ).flatMap(dog => dog.owners);
const donosDemaisPouco = dogs.filter( dog => dog.curFood < dog.recFood ).flatMap( dog => dog.owners );
console.log(donosDemais);
console.log(donosDemaisPouco);

// 4. Registre uma string no console para cada array criado em 3., assim: "Os cachorros da Matilda, da Alice e do Bob comem demais!" e "Os cachorros da Sarah, do John e do Michael comem de menos!"
console.log(`Os cachorros ${donosDemais} de comem demais`);
console.log(`Os cachorros ${donosDemaisPouco} de comem pouco`);

// 5. Registre no console se ALGUM cachorro está comendo EXATAMENTE a quantidade de comida recomendada (apenas verdadeiro ou falso).
console.log(dogs.some( dog => dog.curFood === dog.recFood ));

// 6. Registre no console se TODOS os cachorros estão comendo uma quantidade CERTA de comida (apenas verdadeiro ou falso).
dogs.forEach( dog => console.log(dog.curFood === dog.recFood) );

// 7. Crie um array contendo os cachorros que estão comendo uma quantidade CERTA de comida (tente reutilizar a condição usada em 6).
const comendoQuantidadeNormal = dogs.find( dog => dog.curFood === dog.recFood );
console.log(comendoQuantidadeNormal);

// 8. Agrupe os cachorros nos 3 grupos a seguir: 'exato', 'demais' e 'de menos', com base em se eles estão comendo muito, de menos ou a quantidade exata de comida, com base na porção de comida recomendada.
const dogsGroupFood = Object.groupBy(dogs, dog => {
  if(dog.curFood === dog.recFood) return 'exato';
  else if (dog.curFood > dog.recFood) return 'demais'
  else return 'demenos';
})
console.log(dogsGroupFood);

// 9. Agrupe os cachorros pelo número de donos que eles têm.
const dogsOwnersLength = Object.groupBy(dogs, dog =>  dog.owners.length )
console.log(dogsOwnersLength);

// Ordene o array de cachorros pela porção de comida recomendada em ordem crescente. Certifique-se de NÃO alterar o array original!
const orderFood = dogs.toSorted((a, b) => a.recFood - b.recFood); 
console.log(orderFood);