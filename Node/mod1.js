// const nome = 'Adriano'
// const sobrenome = 'Mateus'

// const falaNome = () => nome + ' ' + sobrenome

// // module.exports.nome = nome
// // module.exports.sobrenome = sobrenome
// // module.exports.falaNome = falaNome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome

// // O this e relacionado com o exports ou modules "Exports é a Abreviação do module.exports"
// this.qualquerCoisa = 'O que eu quiser exportar'

// // console.log(exports) 

class Pessoa{
    constructor(nome){
        this.nome = nome
    }
}

const nome = 'Adriano'
const sobrenome = 'Mateus'

// Para exportar mais de um
module.exports = {
    nome, sobrenome, Pessoa
}