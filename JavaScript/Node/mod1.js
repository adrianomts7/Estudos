module.exports.multiplicacao = function(x, y) { return x * y }

module.exports.Cachorro = class Cachorro{
    constructor(nome, idade, dono){
        this.nome = nome
        this.idade = idade
        this.dono = dono
    }

    latir(){
        console.log('AU AU AU AU')
    }
}