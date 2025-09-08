// 'use strict';

// /*
// Crie um objeto usuario usando propriedades abreviadas a partir das variáveis:
// */

// const nome = "Carlos";
// const idade = 25;
// const email = "carlos@email.com";

// const usuario = {
//   nome,
//   idade,
//   email
// }

// console.log(usuario);

// const carro = {
//   marca: "Ford",
//   modelo: "Eco sport",
//   ligar() { console.log('Carro ligado') }
// }

// carro.ligar();

// const cliente = {
//   nome: "Ana",
//   endereco: {
//     cidade: "São Paulo",
//     rua: "Av. Paulista"
//   }
// };

// console.log(cliente?.endereco?.rua);
// console.log(cliente?.endereco?.cep);

// const produtos = [
//   { nome: "Notebook", preco: 3000 },
//   { nome: "Celular", preco: 2000 }
// ];

// console.log(produtos[0]?.preco);
// console.log(produtos[2]?.preco ?? 'Produto não está disponível');

// const pedido = {
//   cliente: {
//     nome: "João"
//   }
// };

// console.log(pedido?.cliente?.nome ?? 'Cliente não informado');

// const usuariosTeste = [
//   { name: "Maria" },
//   { name: "Pedro" }
// ];

// console.log(usuariosTeste[0]?.name ?? 'Array vazio');
// console.log(usuariosTeste[2]?.name ?? 'Usuário não encontrado.');

// const sistema = {
//   versao: "1.2.0",
//   atualizar: () => "Sistema atualizado!"
// };

// console.log(sistema?.atualizar() ?? 'Sistema atualizado!');
// // console.log(sistema?.reinicar() ?? 'Função não atribuida');

// const resposta = {
//   status: 200,
//   data: {
//     usuarios: [
//       { id: 1, nome: "Carlos", endereco: { cidade: "São Paulo" } },
//       { id: 2, nome: "Ana" },
//       null
//     ]
//   }
// };

// const getCidadeDoUsuario = function(index) {
//    if (!resposta?.data?.usuarios?.[index]) return 'Usuario não informado';

//   return resposta?.data?.usuarios?.[index]?.endereco?.cidade ?? 'Cidade não informada';;
// }

// console.log(getCidadeDoUsuario(2))

// const carrinho = {
//   cliente: { nome: "João" },
//   itens: [
//     { produto: { nome: "Notebook", preco: 2500 }, quantidade: 1 },
//     { produto: { nome: "Mouse" }, quantidade: 2 }
//   ],
//   totalItens() {
//     let soma = 0;
//     for(const produto of this.itens) {
//       soma += produto.quantidade;
//     }

//     return soma;
//   },

//   valorTotal() {
//     let valorTotal = 0;
//     for(const produto of this.itens) {
//       valorTotal += (produto?.produto?.preco) * produto?.quantidade ?? 0;
//     }

//     return valorTotal;
//   },
// };

// console.log(carrinho?.itens?.[0]?.produto?.nome ?? 'Carrinho vázio');
// console.log(carrinho?.itens?.[1].produto?.preco ?? 0);

// const post = {
//   titulo: "Aprendendo JavaScript",
//   autor: { nome: "Maria" },
//   comentarios: [
//     { usuario: { nome: "João" }, texto: "Muito bom!" },
//     { usuario: null, texto: "Gostei" }
//   ]
// };

// console.log(post?.autor);
// console.log(post?.comentarios?.[0]);
// console.log(post?.comentarios?.[1].usuario?.nome ?? 'Anônimo');

// const sistemaTeste = {
//   iniciar: () => "Sistema iniciado",
//   parar: null
// };

// console.log(sistemaTeste?.iniciar?.());
// console.log(sistemaTeste?.parar?.() ?? 'Nenhuma ação configurada');

// function criarUsuario(nome, idade, email) {
//   const user = {
//     nome,
//     idade,
//     email,
//     ativo: true,
//     infoExtra: {
//       criadoEm: new Date().toISOString(),
//     }
//   }

//   return user;
// }

// console.log(criarUsuario('Adriano', 30, 'adriano@gmail.com'));

/*
Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   const numx = String(x);
//   const numeroInverso = numx.split('').reverse().join('');
//   const num = Number(numeroInverso);

//   return num === x ? true : false;
// };

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));

/*
Os algarismos romanos são representados por sete símbolos diferentes:  I, V, X, L, C, De M.

       Valor do Símbolo
Eu 1
V 5
X 10
L 50
C 100
D 500
M 1000
Por exemplo,  2 é escrito como II em algarismos romanos, apenas duas unidades somadas. 12é escrito como  XII, que é simplesmente X + II. O número 27é escrito como XXVII, que é XX + V + II.

Os algarismos romanos são geralmente escritos do maior para o menor, da esquerda para a direita. No entanto, o algarismo para quatro não é IIII. Em vez disso, o número quatro é escrito como IV. Como o um está antes do cinco, nós o subtraímos, resultando em quatro. O mesmo princípio se aplica ao número nove, que é escrito como IX. Há seis casos em que a subtração é usada:

Ipode ser colocado antes de V(5) e X(10) para formar 4 e 9. 
Xpode ser colocado antes de L(50) e C(100) para fazer 40 e 90. 
Cpode ser colocado antes de D(500) e M(1000) para fazer 400 e 900.
Dado um numeral romano, converta-o em um inteiro.

 

Exemplo 1:

Entrada: s = "III"
 Saída: 3
 Explicação: III = 3.

Exemplo 2:

Entrada: s = "LVIII"
 Saída: 58
 Explicação: L = 50, V= 5, III = 3.
Exemplo 3:

Entrada: s = "MCMXCIV"
 Saída: 1994
  Explicação: M = 1000, CM = 900, XC = 90 e IV = 4.
 
Restrições:

1 <= s.length <= 15
scontém apenas os caracteres ('I', 'V', 'X', 'L', 'C', 'D', 'M').
É garantido  que sé um numeral romano válido no intervalo [1, 3999].
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numerosRomanos = String(s).toUpperCase();
  const numerosRomanosArray = numerosRomanos.split('');

  let valorNumeroRomano = 0;

  for (let i = 0; i < numerosRomanosArray.length; i++) {
    const conjuntoLetra = numerosRomanosArray[i] + numerosRomanosArray[i + 1];

    if (conjuntoLetra === 'CM') {
      valorNumeroRomano += 900;

      numerosRomanosArray.splice(i, 1);

      continue;
    } else if (conjuntoLetra === 'IV') {
      valorNumeroRomano += 4;

      numerosRomanosArray.splice(i, 1);

      continue;
    } else if (conjuntoLetra === 'XC') {
      valorNumeroRomano += 90;
      numerosRomanosArray.splice(i, 1);

      continue;
    } else if (conjuntoLetra === 'IX') {
      valorNumeroRomano += 9;
      numerosRomanosArray.splice(i, 1);

      continue;
    } else if (conjuntoLetra === 'XL') {
      valorNumeroRomano += 40;
      numerosRomanosArray.splice(i, 1);

      continue;
    } else if (conjuntoLetra === 'CD') {
      valorNumeroRomano += 400;
      numerosRomanosArray.splice(i, 1);

      continue;
    }

    switch (numerosRomanosArray[i]) {
      case 'I':
        valorNumeroRomano += 1;
        break;

      case 'V':
        valorNumeroRomano += 5;
        break;

      case 'X':
        valorNumeroRomano += 10;
        break;

      case 'L':
        valorNumeroRomano += 50;
        break;

      case 'C':
        valorNumeroRomano += 100;
        break;

      case 'D':
        valorNumeroRomano += 500;
        break;

      case 'M':
        valorNumeroRomano += 1000;
        break;

      default:
        return 'Digite números romanos válidos';
    }
  }

  return valorNumeroRomano;
};

// console.log(romanToInt('III'));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt('MCMXCIV'));
// console.log(romanToInt('MMMXLV'));

/*
const user = { name: "Ana", age: 25, city: "São Paulo" };

for(const elementos of Object.keys(user)) console.log(elementos);

for(const valor of Object.values(user)) console.log(valor);

for(const [elemento, valor] of Object.entries(user)) console.log(elemento, valor);

const product = { id: 1, name: "Laptop", price: 3000, stock: 5 };

console.log(Object.keys(product).length);

const salaries = { Ana: 3000, João: 2500, Maria: 4000 };

let salariosSoma = 0;
for(const salario of Object.values(salaries)) salariosSoma += salario;

console.log(`Total da soma de salários: ${salariosSoma}`);

const car = { brand: "Toyota", model: "Corolla", year: 2020 };
for(const [info, carro] of Object.entries(car)) console.log(`"${info}: ${carro}, "`);

const frutas = new Set(['maçã', 'banana', 'maçã', 'laranja']);
console.log(frutas);

console.log(frutas.has('banana'));
console.log(frutas.has('uva'));

frutas.add('uva');
frutas.delete('banana');
console.log(frutas);

const numeros = new Set([1, 2, 3, 3, 4, 5, 5, 6]);
console.log(numeros.size);

const tecnologias = new Set(['HTML', 'CSS', 'JAVASCRIPT']);
for(const tec of tecnologias) console.log(tec);

const numerosArray = [10, 20, 20, 30, 40, 40, 50];
const numerosSemDuplicados = new Set(numerosArray);
console.log(numerosSemDuplicados);

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
const numeroNosDoisSets = new Set();
const numerosNaoTaNosSets = new Set();
const sets = new Set([...setA, ...setB]);

for(const numero of setA) {
  
  if(setB.has(numero)) {
    numeroNosDoisSets.add(numero);
  } else {
    numeroNosDoisSets.add(numero);
  }

}

console.log(numeroNosDoisSets);
console.log(numerosNaoTaNosSets);
console.log(sets);

const frase = "o sol brilha o dia todo o sol aquece".split(' ');

const setPalavraUnicas = new Set(frase);
console.log(setPalavraUnicas);

*/

/*
Dado um conjunto de inteiros nums e um inteiro target, retorne os índices dos dois números de forma que a soma deles sejatarget .

Você pode assumir que cada entrada terá exatamente uma solução e não pode usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.

Exemplo 1:

Entrada: nums = [2,7,11,15], alvo = 9
 Saída: [0,1]
 Explicação: Como nums[0] + nums[1] == 9, retornamos [0, 1].
Exemplo 2:

Entrada: nums = [3,2,4], alvo = 6
 Saída: [1,2]
Exemplo 3:

Entrada: nums = [3,3], alvo = 6
 Saída: [0,1]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let indexElementos = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        indexElementos.push(i, j);
        return indexElementos;
      }
    }
  }
};

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));
// console.log(twoSum([3,2,3], 6));
// console.log(twoSum([2,5,5,11], 10));

/*
Crie um Map chamado paises e adicione três pares chave-valor onde a chave é o código do país (ex: "BR") e o valor é o nome (ex: "Brasil").
Em seguida, recupere o nome de um país usando get.

Crie um Map chamado cores onde as chaves são números (1, 2, 3) e os valores são nomes de cores.
Depois, mostre quantos itens existem no Map usando size.
*/

// const paises = new Map([['BR', 'Brasil'], ['EUA', 'Estados Unidos'], ['CHI', 'CHINA']]);
// console.log(paises.get('BR'));

// const cores = new Map([[1, 'Blue'], [2, 'Red'], [3, 'Green']]);
// console.log(cores.size);

/*
Crie um Map chamado carrinho onde as chaves são nomes de produtos e os valores são as quantidades.

Adicione três produtos.

Delete um deles.

Mostre quantos itens restaram no carrinho.

Crie um Map chamado config com as chaves "tema", "volume" e "notificacoes".

Verifique se a chave "volume" existe com has.

Recupere o valor dela com get.
*/

// const carrinho = new Map([[1, 'Carne'], [2, 'Feijão'], [3, 'Água']]);

// carrinho.delete(2);
// console.log(carrinho.size);

// const config = new Map([['tema', 'black'], ['volume', 10], ['notificacoes', 0]]);
// console.log(config.has('volume'));
// console.log(config.get('volume'));

/*
Crie um Map chamado alunos onde a chave é o nome do aluno e o valor é a nota final.

Adicione 5 alunos.

Percorra o Map com for...of e exiba no console o nome e a nota de cada aluno.

Crie um Map chamado estoque onde a chave é o nome do produto e o valor é um objeto contendo { quantidade, preco }.

Adicione 3 produtos.

Recupere e mostre o preço de um deles.

Delete um produto e verifique o novo tamanho do estoque.

*/

// const alunos = new Map([['Maria', 10], ['Mateus', 10], ['Nica', 9.9]]);

// alunos.set('Mario', 8)

// for(const [key, value] of alunos) {
//   console.log(`${key} nota final: ${value}`);
// }

// const estoque = new Map([['Mouse', { quantidade: 5, preco: 100 }], ['Notebook', { quantidade: 10, preco: 5000 }], ['Monitor', { quantidade: 4, preco: 780 }]]);

// console.log(estoque.get('Notebook').preco)
// estoque.delete('Mouse');
// console.log(estoque.size);

/*

Crie um Map chamado biblioteca onde a chave é o id do livro (número) e o valor é um objeto contendo { titulo, autor, disponivel }.

Adicione pelo menos 3 livros.

Verifique se um livro com id específico existe.

Percorra todos os livros mostrando apenas os títulos que estão disponíveis.
*/

// const biblioteca = new Map([[1, { titulo: '1 ano em 12 semanas', autor: 'Brian P. Moran e Michael Lennington', disponivel: true }], [2, { titulo: 'Habitos Atomicos', autor: 'James Clear', disponivel: false }], [3, { titulo: 'O Programador Pragmático', autor: 'Andy Hunt e Dave Thomas', disponivel: true }]]);

// console.log(biblioteca.has(2));

// for(const [key, value] of biblioteca) {
//   if(value.disponivel) console.log(value.titulo);
// }

/*
Escreva uma função para encontrar a maior string de prefixo comum entre uma matriz de strings.

Se não houver um prefixo comum, retorne uma string vazia "".

Exemplo 1:

Entrada: strs = ["flor","fluxo","voo"]
 Saída: "fl"
Exemplo 2:

Entrada: strs = ["dog","racecar","car"]
 Saída: ""
 Explicação: Não há um prefixo comum entre as strings de entrada.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefixo = '';

  
  const primeiraString = strs[0];
  
  if(strs.length < 1) return "";
  if(primeiraString === "") return "";  
  if(strs.length === 1) return primeiraString;

  const segundaString = strs[1];
  const terceiraString = strs[2];
  const quartaString = strs[3];

  console.log(strs, primeiraString, segundaString, terceiraString);

  if (strs.length < 3) {
    for(let i = 0; i <= primeiraString.length; i++) {
      
      if(primeiraString.charAt(i) === segundaString.charAt(i)) {
        prefixo += primeiraString.charAt(i);

        if (i === primeiraString.length) return prefixo;

      } else {
        if(prefixo.length > 0) {
          return prefixo;
        } else {
          return "";
        }
      }

    }
  } else if(strs.length < 4) {
    for(let i = 0; i <= primeiraString.length; i++) {
      
      if(primeiraString.charAt(i) === segundaString.charAt(i) && primeiraString.charAt(i) === terceiraString.charAt(i)) {
        prefixo += primeiraString.charAt(i);
        
        if (i === primeiraString.length) return prefixo;

      } else {
        if(prefixo.length > 0) {
          return prefixo;
        } else {
          return "";
        }
      }

    }
  } else {
    for(let i = 0; i <= primeiraString.length; i++) {
      
      if(primeiraString.charAt(i) === segundaString.charAt(i) && primeiraString.charAt(i) === terceiraString.charAt(i) && primeiraString.charAt(i) === quartaString.charAt(i)) {
        prefixo += primeiraString.charAt(i);
        
        if (i === primeiraString.length) return prefixo;
        
      } else {
        if(prefixo.length > 0) {
          return prefixo;
        } else {
          return "";
        }
      }

    }
  }

};

// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(["aaaaaaaaaaaaaaaaaa", "aaaaaaaaaaa", "aaaaaaaaa"]));
// console.log(longestCommonPrefix(['flower', 'flow']));
// console.log(longestCommonPrefix([""]));
// console.log(longestCommonPrefix(["flower","flower","flower","flower"]));
// console.log(longestCommonPrefix(["c","c"]));
// console.log(longestCommonPrefix(["baab","bacb","b","cbc"]));