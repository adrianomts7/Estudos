// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)
// fabrica -> criaPessoa()
function Pessoa(nome,sobrenome){
    // Privada
    const ID = 123

    // Públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(`Eu sou ${this.nome}`)
    }

}

const p1 = new Pessoa('Adriano','Mateus')
const p2 = new Pessoa('Maria',"Lourdes")

console.log(p1.nome)
console.log(p2.sobrenome)
p2.metodo()