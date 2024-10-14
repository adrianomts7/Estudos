// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22,27]
const numerosEmDobro = numeros.map(function(valor) { return valor * 2 })

// console.log(numerosEmDobro)

// Para cada Elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Maria', idade: 20},
    { nome: 'Nego', idade: 30},
    { nome: "Ana", idade: 50},
    { nome: 'Joanice', idade: 35},
    { nome: 'Nicacio', idade: 80},
    { nome: 'Marilene', idade: 25}
]

const nomes = pessoas.map(valor => valor.nome)
// console.log(nomes)

const idades = pessoas.map(valor => ({idade: valor.idade}))
// console.log(idades)

// const idades = pessoas.map(valor => {
//     delete valor.nome
//     return {idade: valor.idade}
// })
// console.log(idades)

const adicionandoID = pessoas.map((valor, indice) => {
    const newObj = {... valor}
    newObj.id = (indice + 1)
    return newObj
})
console.log(adicionandoID)
console.log(pessoas)