// Declaração de função (function hoisting)
falaOi()

function falaOi(){
    console.log("Oie")
}

// First-class objects (Objetos de primeira classe)
// Function express
const souUmDado = function nomeDaFuncao(){
    console.log('Sou um dado')
}
souUmDado()

// Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de um objeto
const obj = {
    falar (){
        console.log('Estou falando...')
    }
}

obj.falar()