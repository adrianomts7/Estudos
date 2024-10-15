// Literal
const pessoa = {
    nome: 'Adriano',
    sobrenome: 'Mateus',
}

const chave = 'nome'
// console.log(pessoa[chave])
// console.log(pessoa.sobrenome)

// Construtor
const pessoa1 = new Object()
pessoa1.nome = "Adriano"
pessoa1.sobrenome = 'Mateus'
pessoa1.idade = 19

// Metodo
pessoa1.falarNome = function() {
    return (`Olá ${this.nome}`)
}

// Metodo
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

// delete pessoa1.nome
// console.log(pessoa1)
// pessoa1.falarNome()
// console.log(pessoa1.getDataNascimento())

// Factory functions
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const p1 = criaPessoa('Adriano', 'Mateus')
// console.log(p1)

// Constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

const p2 = new Pessoa('Adriano', 'Mateus')
// console.log(p2)

const p3 = {}
p3.nome = 'Adriano'
p3['sobrenome'] = 'Mateus'

Object.freeze(p3)
// console.log(p3)