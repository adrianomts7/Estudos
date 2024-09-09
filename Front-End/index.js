// For in -> lê indice por indice ou chaves do objeto
//const frutas = ['Pera','Maçã','Uva']

//for (let i in frutas){ 
//  console.log(frutas[i])
//}

const pessoa = {
    nome: 'Marta',
    sobrenome: 'Otavio',
    idade: 30
}

//console.log(pessoa.nome) // Acessar indice de uma forma
//const chave = 'nome'
//console.log(pessoa[chave]) // Outra forma

for (let chave in pessoa){
   console.log(chave, pessoa[chave])
}