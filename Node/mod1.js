const nome = 'Adriano'
const sobrenome = 'Mateus'

const falaNome = () => {
    console.log(nome, sobrenome)
}

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

exports.NOME = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome

// O this e relacionado com o exports ou modules "Exports é a Abreviação do module.exports"
this.qualquerCoisa = 'O que eu quiser exportar'

console.log(exports)