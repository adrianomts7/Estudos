// Some todos os números (reduce)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumulador, valor) {
    return acumulador += valor
})

// console.log(total)


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Maria', idade: 20},
    { nome: 'Nego', idade: 30},
    { nome: "Ana", idade: 50},
    { nome: 'Joanice', idade: 35},
    { nome: 'Nicacio', idade: 80},
    { nome: 'Marilene', idade: 25}
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(maisVelha)