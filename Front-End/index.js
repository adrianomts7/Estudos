// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
     
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave 
        configurable: false, // configuravel
        get: function (){
            return estoquePrivado
        },
        set: function (valor){
            if(typeof valor !== Number){
               throw new TypeError("Digite somente números")
            }

            estoquePrivado = valor
        }
    })

}

function criaProduto(nome) {
    return {
        get nome (){
            return nome
        },
        set nome (valor){
            valor = valor.replace('Coisa', " ")
            nome = valor
        }
    }
}

const p1 = new Produto('Camiseta', 20, 7)
// console.log(p1)

const p2 = criaProduto("Camiseta")
p2.nome = 'Qualquer Coisa'
console.log(p2.nome)