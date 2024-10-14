// Filter -> Sempre retorna um arraym com a mesma quantidade de elementos ou menos

// Retorna os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// function callBackFilter(valor, indice, array){
//    return valor > 10
// }

const numerosFiltadros = numeros.filter( valor => valor > 10 )
// console.log(numerosFiltadros)



// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo o nome termina com a
const pessoas = [
    { nome: 'Adriano', idade: 18},
    { nome: 'Maria', idade: 19},
    { nome: 'Mateus', idade: 22},
    { nome: 'Aurora', idade: 35},
    { nome: 'Edvaldo', idade: 75},
    { nome: 'Brasilina', idade: 80},
    { nome: 'João', idade: 50 }
]

// Uma Forma de fazer a função
const pessoasNomeMaiorCinco = pessoas.filter(objeto => objeto.nome.length >= 5) 
// console.log(pessoasNomeMaiorCinco)

// Outra Forma de fazer a Função
const pessoasAcima50 = pessoas.filter( function(objeto) {
    return objeto.idade >= 50
})
// console.log(pessoasAcima50)

const pessoasNomeTerminaA = pessoas.filter( objeto => objeto.nome.toLowerCase().endsWith('a'))
console.log(pessoasNomeTerminaA)