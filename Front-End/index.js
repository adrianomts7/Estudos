// function ePaisagem(lar,alt){
//     let paisagem = null
//     let largura = Number(lar)
//     let altura = Number(alt)

//     if(largura === 1080 && altura === 556){
//         paisagem = true
//     }
//     else{
//         paisagem = false
//     }

//     return paisagem
// }

// console.log(ePaisagem(1080,608))

// function ePaisagem(x,y){
//     return x === 1080 & y === 556 ? true : false
// }

// console.log(ePaisagem(1000,608))

const ePaisagem = (largura, altura) => largura > altura
console.log(ePaisagem(1000,608))