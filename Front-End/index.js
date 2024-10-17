/*
// Estamos vendo
Object.values
Object.entries
Objetc.assign(des, any)
Objetc.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna chaves)
Objetc.freeze (congela o objeto)
Objetc.defineProperties (define varias propriedades)
Objetc.defineProperty (define yma propriedade)
*/

const produto = { nome: 'Produto', preco: 1.8}
// Object.freeze(produto)

const caneca = Object.assign({}, produto, {material: 'porcelana'})

caneca.nome = 'Caneca'
caneca.preco = 2.5

// console.log(produto)
// console.log(caneca)
// console.log(Object.keys(produto))
Object.defineProperty(produto, 'nome', {
    configurable: false,
    writable: false,
    value: 'Qualquer outra coisa'
})

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
// console.log(produto)
// console.log(Object.entries(produto))

for(let [chave,valor] of Object.entries(caneca)){
    console.log(chave, valor)
}