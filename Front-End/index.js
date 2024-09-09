//const nome = 'Marta Silva'
//const nomes = ['Marcio','Maria','Mateus']
const pessoa = {
    nome: 'Marta',
    sobrenome: 'Silva'
};

for (let chave in pessoa){
    console.log(chave,pessoa[chave])
}

/* For Classico - Geralmente com iteraveis (array ou strings)
for (let i = 0; i < nome.length; i++){
    console.log(nome[i])
}
*/

/* For In - Retorna o indice ou chave (string,array ou objetos)
for (let i in nome){
    console.log(nome[i])
}
*/

// Quando a String for interavel utilizar o OF
// For OF - REtorna o valor em si (iteraveis,arrays ou strings)
for (let valor of nomes){
    console.log(valor)
}

nomes.forEach(function(valor,indice,array){
    console.log(valor,indice,array)
})

