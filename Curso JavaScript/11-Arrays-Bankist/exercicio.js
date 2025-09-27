'use strict';

/*
const numeros = [1, 2, 3, 4, 5];
// Resultado esperado: [2, 4, 6, 8, 10]
console.log(numeros.map(num => num * 2));

const num = [10, 20, 30];
// Resultado esperado: ["10", "20", "30"]
console.log(num.map(n => `${n}`));

const nomes = ['Ana', 'Carlos', 'Maria'];
// Resultado esperado: ["Ana Silva", "Carlos Silva", "Maria Silva"]
console.log(nomes.map(nome => nome + ' Silva'));

const produtos = ['Arroz', 'Feijão', 'Macarrão'];
// Resultado esperado: [{nome: "Arroz"}, {nome: "Feijão"}, {nome: "Macarrão"}]
console.log(
  produtos.map(function (produto) {
    const obj = {};
    obj.nome = produto;
    return obj;
  })
);

const usuariosPersonalido = ['João', 'Mariana', 'Pedro'];
// Resultado esperado: ["Bem-vindo, João!", "Bem-vindo, Mariana!", "Bem-vindo, Pedro!"]
console.log(usuariosPersonalido.map(user => `Bem-vindo, ${user}!`));

const numerosQuadrado = [2, 4, 6];
// Resultado esperado: [4, 16, 36]
console.log(numerosQuadrado.map(num => num ** 2));

const usuarios = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Carlos', idade: 30 },
  { nome: 'Maria', idade: 28 },
];
// Resultado esperado: ["Ana", "Carlos", "Maria"]
console.log(usuarios.map(usuario => usuario.nome));

const produtosVenda = [
  { nome: 'Camisa', preco: 100 },
  { nome: 'Calça', preco: 150 },
  { nome: 'Tênis', preco: 200 },
];
// Aplicar 10% de desconto → [{nome: "Camisa", preco: 90}, ...]
console.log(
  produtosVenda.map(
    produto => `${produto.nome}. ${produto.preco - produto.preco * 0.1}`
  )
);

const datas = ['2025-01-01', '2025-05-10', '2025-12-25'];
// Resultado esperado: ["01/01/2025", "10/05/2025", "25/12/2025"]
console.log(
  datas.map(data =>  data.split('-').reverse().join('/'))
);

const nomesPessoas = ["Lucas", "Fernanda", "Juliana"];
// Resultado esperado: [{id: 1, nome: "Lucas"}, {id: 2, nome: "Fernanda"}, {id: 3, nome: "Juliana"}]

console.log(nomesPessoas.map(function(nome, ind) {
  const pessoa = {};

  pessoa.id = ind + 1;
  pessoa.nome = nome;

  return pessoa;

}));

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {

  const numsObj = {};
  nums.forEach(function(num){
    if(numsObj[num]) numsObj[num] += 1;
    else numsObj[num] = 1;  
  })

  const arrayValues = [...Object.values(numsObj)];
  
  
  const maiorValor = Math.max(...arrayValues);

  return arrayValues.filter(num => num !== maiorValor ? 0 : num).reduce((acc, num) => acc + num, 0);

};

// console.log(maxFrequencyElements([1,2,2,3,1,4]));
// console.log(maxFrequencyElements([1,2,3,4,5]));
console.log(maxFrequencyElements([10,12,11,9,6,19,11]));