const soma = function (x , y){
    return x + y
}

class Pessoa{
    constructor(nome, sobrenome, idade, profissao){
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.profissao = profissao
    }

    falandoNome(){
        console.log(`Olá, Me chamo ${this.nome}` )
    }

    apresentando(){
        console.log(`Prazer, Me chamo ${this.nome, this.sobrenome}, Tenho ${this.idade} Anos`)
    }

    falandoProfissao(){
        console.log(`Eu trabalho como ${this.profissao}`)
    }
}

module.exports = {
    soma, Pessoa
}