// defineProperty -> define somente uma
// defineProperties -> define varias de uma vez

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave 
        value: estoque, // Valor
        writable: false, // Posso Alterar o valor do estoque
        configurable: false // configuravel
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })

}

const p1 = new Produto('Camiseta', 20, 7)
console.log(p1)