function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}

// Soma
Produto.prototype.aumento = function (quantia){
    this.preco += quantia
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

// Object.setPrototypeOf(Camiseta.prototype, Produto.prototype)
Camiseta.prototype = Object.create(Produto.prototype) 
Camiseta.prototype.constructor = Camiseta

// Porcentagem
Camiseta.prototype.aumento = function (valor){
    this.preco = this.preco + (this.preco * (valor / 100))
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') return
            estoque = valor
        }
    })

}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Café', 10)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 13, 'Plastico', 5)

// caneca.estoque = 100

// camiseta.aumento(10)
console.log(produto)
console.log(camiseta)
console.log(caneca)
console.log(caneca.estoque)