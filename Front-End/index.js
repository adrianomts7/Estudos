// new object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B',
    // __proto__: objA
}

const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB,objA)
// console.log(objB.chaveA)
Object.setPrototypeOf(objC,objB)
// console.log(objC.chaveB)



function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(valor){
    this.preco = this.preco - (this.preco * (valor / 100))
}

Produto.prototype.aumento = function(valor){
    this.preco = this.preco + (this.preco * (valor / 100))
}

const p1 = new Produto('Camiseta', 50)
// p1.desconto(100)
// p1.aumento(100)

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

// console.log(p1)
// p2.aumento(10)
// console.log(p2)

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    },
    largura: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: 10
    }
})
console.log(p3)