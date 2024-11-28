function rand (min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi (msg, tempo){
    return new Promise((resolve, reject) => {
        
       setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('CAI no erro')
                return
            }
            
            resolve(msg.toUpperCase() + ' - Passei no Promise ')
            return
        }, tempo)

    })
}

const promise = [
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    esperaAi(1000, rand(1,5))
]

// All - Mostrar tudo na tela, mais se uma der errado ele rejeita todas
// Promise.all(promise)
//     .then(function(valor) {
//         console.log(valor)
//     })
//     .catch(function(erro){
//         console.log(erro)
//     })

// Race - A primeira que resolver irá mostrar na tela.
Promise.race(promise)
    .then(function(valor) {
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })

// Promise.resolve    
// function baixaPagina(){
//     const emCache = false

//     if(emCache){
//         return Promise.resolve('Página em cache')
//     }
//     else{
//         return esperaAi('Baixer a página', 3000)
//     }

// }

// baixaPagina()
//     .then( dadosPaginas => console.log(dadosPaginas))
//     .catch( e => console.log(e))

// Promise.reject
function baixaPagina(){
    const emCache = true

    if(emCache){
        return Promise.reject('Página em cache')
    }
    else{
        return esperaAi('Baixei a página', 3000)
    }

}

baixaPagina()
    .then( dadosPaginas => console.log(dadosPaginas))
    .catch( e => console.log('ERRO', e))