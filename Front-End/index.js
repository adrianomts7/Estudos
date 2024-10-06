// Return
// Retorna um valor
// Termina a função

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'
// })

// function criaPessoa(nome, sobrenome){
//     return {
//         nome,sobrenome
//     }
// } 

// const p1 = criaPessoa('Luiz','Otavio')
// const p2 = {
//     nome: 'João',
//     sobrenome: "Oliveira"
// }

// console.log(typeof p1)
// console.log(typeof p2)

function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

// define os multiplicador, utilizando função
const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

// Os valores a ser multiplicados
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))