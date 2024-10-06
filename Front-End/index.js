// arguments é a variavel que sustenta todos os argumentos enviados
// function funcao(a,b,c){
//     let total = 0
//     for(let argumento of arguments){ 
//         total += argumento
//     }

//     console.log(total,a,b,c)

// }
// funcao(1,2,3,4,5,6,7) 

// Desustruturando Objetos com função
// function funcao({nome,sobrenome,idade}){
//     console.log(nome, sobrenome, idade)
// }
// let obj = {nome: 'Adriano',sobrenome: 'Mateus',idade: 18}

// funcao(obj) 

// Desustruturando Array com função
// function funcao([valor1,valor2,valor3]){
//     console.log(valor1,valor2,valor3)
// }

// funcao(['Adriano','Mateus',18])

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '/') acumulador /= numero
        if (operador === '*') acumulador *= numero
    }

    console.log(acumulador)

}
conta('+',1,20,30,40,50)