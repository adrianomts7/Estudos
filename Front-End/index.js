// function divisivel(numero){
//     let mensagem = null

//     if(typeof numero !== "number"){
//         mensagem = "Não e um número"
//     }

//     if (numero % 3 === 0 && numero % 5 === 0){
//         mensagem = "FizBuzz"
//     }
//     else if (numero % 3 === 0){
//         mensagem = "Fizz"
//     }
//     else if (numero % 5 === 0){
//         mensagem = "Buuz"
//     }
//     else{
//         mensagem = `${numero}`
//     }

//     return mensagem

// }

// for (let i = 0; i <= 100; i++){
//     console.log(i, divisivel(i))
// }

function fiizBuzz(numero){
    if (typeof numero !== "number") return numero
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz'
    if (numero % 5 === 0) return 'Buzz'
    return numero
}

for (let i = 0; i <= 100; i++){
    console.log(i, fiizBuzz(i))
}