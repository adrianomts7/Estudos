'use strict';

/*
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1995);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function() {
  console.log(+new Date().getUTCFullYear() - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jonas, matilda);

const arr = [3, 9, 20, 5, 3, 1, 9, 1];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function() {
  return [... new Set(this)];
}

console.log(arr.unique());

*/

////////////////////////////////////////
// Desafio de Programação nº 1

/* 
1. Use uma função construtora para implementar um carro. Um carro tem uma propriedade de marca e uma propriedade de velocidade. A propriedade de velocidade é a velocidade atual do carro em km/h;
2. Implemente um método "acelerar" que aumentará a velocidade do carro em 10 e registrará a nova velocidade no console;
3. Implemente um método "frear" que diminuirá a velocidade do carro em 5 e registrará a nova velocidade no console;
4. Crie 2 objetos de carro e experimente chamar "acelerar" e "frear" várias vezes em cada um deles.

DATA CAR 1: 'BMW' a 120 km/h
DATA CAR 2: 'Mercedes' a 95 km/h

BOA SORTE 😀
*/

/*
const Car = function(marca, velocidade) {
  this.marca = marca;
  this.velocidade = velocidade;
}

Car.prototype.acelerar = function() {
  this.velocidade += 10;
  console.log(`${this.velocidade} km/h`);
}

Car.prototype.freiar = function() {
  this.velocidade -= 5;
  console.log(`${this.velocidade} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.acelerar();
bmw.acelerar();

mercedes.acelerar();
mercedes.acelerar();
mercedes.acelerar();

bmw.freiar();
mercedes.freiar();

*/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(+new Date().getUTCFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return +new Date().getUTCFullYear() - this.birthYear;
  }

  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name!`);
  }

  get fullName() {
    return this._fullName;
  }

}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log()

const account = {
  owner: 'Jonas',
  movements: [200, 100, 500, 200],


  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  }

}

console.log(account.latest);
account.latest = 10;

*/

/*
const PersonProto = {
  calcAge() {
    console.log(+new Date().getUTCFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/*
1. Recrie o desafio 1, mas desta vez usando uma classe ES6;
2. Adicione um getter chamado 'speedUS' que retorna a velocidade atual em mi/h (divida por 1,6);
3. Adicione um setter chamado 'speedUS' que define a velocidade atual em mi/h (mas a converte para km/h antes de armazenar o valor, multiplicando a entrada por 1,6);
4. Crie um novo carro e experimente os métodos de aceleração e frenagem, e com o getter e o setter.

DADOS DO CARRO 1: 'Ford' a 120 km/h

BOA SORTE 😀
*/

/*
class Car{
  constructor(marca, velocidade) {
    this.marca = marca;
    this.velocidade = velocidade;
  }

  acelerar() {
    this.velocidade += 10;
    console.log(`${this.marca} Velocidade atual : ${this.velocidade} km/h`);
  }

  freiar() {
    this.velocidade -= 5;
    console.log(`${this.marca} Velocidade atual: ${this.velocidade} km/h`)
  }

  get speedUs () {
    return this.velocidade / 1.6;
  }

  set speedUs(vel) {
    this.velocidade = vel * 1.6;
    console.log(`Velocidade em km/h: ${this.velocidade}`);
  }

}

const ford = new Car('Ford', 120);
ford.acelerar();
ford.freiar();
console.log(ford.speedUs);
ford.speedUs = 10;
*/

/*
const Person = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
  console.log(+new Date().getUTCFullYear() - this.birthYear); 
}

const Student = function(firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}


const mike = new Student('Mike', 2007, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
*/

////////////////////////////////////////
// Desafio de Codificação nº 3


/* 
1. Use uma função construtora para implementar um Carro Elétrico (chamado EV) como uma "classe" FILHA de Carro. Além da marca e da velocidade atual, o EV também possui a carga atual da bateria em % (propriedade 'charge');
2. Implemente um método 'chargeBattery' que receba o argumento 'chargeTo' e defina a carga da bateria como 'chargeTo';
3. Implemente um método 'accelerate' que aumentará a velocidade do carro em 20 e diminuirá a carga em 1%. Em seguida, registre uma mensagem como esta: 'Tesla a 140 km/h, com carga de 22%';
4. Crie um objeto de carro elétrico e experimente chamar 'accelerate', 'brake' e 'chargeBattery' (carregar até 90%). Observe o que acontece quando você "acelera"! DICA: Revise a definição de polimorfismo 😉

DADOS DO CARRO 1: "Tesla" a 120 km/h, com 23% de carga

BOA SORTE 😀
*/

/*
const Car = function(marca, velocidade) {
  this.marca = marca;
  this.velocidade = velocidade;
}

Car.prototype.acelerar = function() {
  this.velocidade += 10;
  console.log(`${this.velocidade} km/h`);
}

Car.prototype.freiar = function() {
  this.velocidade -= 5;
  console.log(`${this.velocidade} km/h`);
}

const EV = function(marca, velocidade, charge) {
  Car.call(this, marca, velocidade);
  this.charge = charge;
}

console.log(EV);

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = +chargeTo;
} 

EV.prototype.acelerar = function() {
  this.velocidade += 20;
  this.charge -= 1;
  console.log(`${this.marca} a ${this.velocidade}, com carga de ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.acelerar();
tesla.acelerar();
*/

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(+new Date().getUTCFullYear() - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return +new Date().getUTCFullYear() - this.birthYear;
  }

  set fullName(name) {
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name!`);
  }

  get fullName() {
    return this._fullName;
  }

}

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
 }

 introduce() {
  console.log(`My name is ${this._fullName} and I study ${this.course}`);
 }

 calcAge() {
  console.log(`I'm ${+new Date().getUTCFullYear() - this.birthYear} years old, but as a student I feel more like ${+new Date().getUTCFullYear() - this.birthYear + 10}`);
 }

}

const martha = new StudentCl('Martha Jones', 2002, 'Computer Science');
martha.introduce();
martha.calcAge();

*/

/*
const PersonProto = {
  calcAge() {
    console.log(+new Date().getUTCFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

StudentProto.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay Bolder', 2006, 'Computer Science')
jay.introduce();
jay.calcAge();
*/

/*
class Account {
  // Instâncias públicas
  locale = navigator.language;
  bank = 'Bankist';

  // instâncias privadas
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;
  }

  // Método Público
  getMovements() {
    return this.#movements;
  } 

  // Método privado
  #approveLoan(val) {
    return true;
  } 

  requestLoan(val) {
    if(this.#approveLoan(val)) {
      this.deposit(1000);
      console.log(`Loan approved`);
    }
    return this;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

}

const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);

acc1.deposit(500).withdraw(100).withdraw(50).requestLoan(2500).withdraw(5000);

console.log(acc1);

*/

////////////////////////////////////////
// Desafio de Programação nº 4

/* 
1. Recrie o desafio nº 3, mas desta vez usando classes ES6: crie uma classe filha 'EVCl' da classe 'CarCl'
2. Torne a propriedade 'charge' privada;
3. Implemente a capacidade de encadear os métodos 'accelerate' e 'chargeBattery' desta classe, e também atualize o método 'brake' na classe 'CarCl'. Eles experimentam com chining!

DADOS DO CARRO 1: 'Rivian' a 120 km/h, com uma carga de 23%

BOA SORTE 😀
*/

class Car{
  constructor(marca, velocidade) {
    this.marca = marca;
    this.velocidade = velocidade;
  }

  acelerar() {
    this.velocidade += 10;
    console.log(`${this.marca} Velocidade atual : ${this.velocidade} km/h`);
    return this;
  }

  freiar() {
    this.velocidade -= 5;
    console.log(`${this.marca} Velocidade atual: ${this.velocidade} km/h`)
    return this;
  }

  get speedUs () {
    return this.velocidade / 1.6;
  }

  set speedUs(vel) {
    this.velocidade = vel * 1.6;
    console.log(`Velocidade em km/h: ${this.velocidade}`);
  }

}

class EV extends Car {
  // 2. Torne a propriedade 'charge' privada;
  #charge;

  constructor(marca, velocidade, charge) {
    super(marca, velocidade);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = +chargeTo;
    return this;
  }

// DADOS DO CARRO 1: 'Rivian' a 120 km/h, com uma carga de 23%
  acelerar() {
    this.velocidade += 20;
    this.#charge -= 1;
    console.log(`${this.marca} a ${this.velocidade} km/h, com uma carga de ${this.#charge}%`);
    return this;
  }

}

const rivian = new EV('Rivian', 120, 23);
rivian.acelerar().chargeBattery(100).freiar().acelerar().freiar();