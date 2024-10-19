// Construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome
}

// instância
const pessoa1 = new Pessoa('Adriano', 'M.') // <- Pessoa = Função construtora

console.dir(pessoa1)