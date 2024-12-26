const mod1 = require('./mod1')

const pessoa = new mod1.Pessoa('Adriano', 'Mateus', 19, 'Desenvolvedor de software')
console.log(pessoa.falandoNome())
console.log(pessoa.apresentando())
console.log(pessoa.falandoProfissao())

const soma = mod1.soma(5, 5)
console.log(soma)