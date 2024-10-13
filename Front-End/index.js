// Na função geradora, inves de usar o return, utlizar o yield por que o return vai retorna o valor é a geradora vai acabar ali
// A chamada "Console.log", ela chama um valor como exemplo a baixo, no primeiro console entrega o valor 1, no segundo o valor 2, ate acabar todos os valores da função 

function* geradora1 (){
    // Codigo qualquer ...
    yield 'Valor 1'
    // Codigo qualquer ...
    yield 'Valor 2'
    // Codigo qualquer ...
    yield 'Valor 3'
}

// const g1 = geradora1()
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next())
// console.log(g1.next())
// for (let valor of g1){
//     console.log(valor)
// }

function* geradora2(){
    let i = 0

    while(true) {
        yield i
        i++
    }

}

// const g2 = geradora2()
// console.log(g2.next().value)
// console.log(g2.next().value)

function* geradora3(){
    yield 0
    yield 1
    yield 2
}

function* geradora4(){
    yield* geradora3() // Delegou para a geradora 3 fazer oq ela faz 0,1,2 e o resto a geradora faz
    yield 3
    yield 4
    yield 5
}

// const g4 = geradora4()
// for(let valor of g4){
//     console.log(valor)
// }

function* geradora5(){
    yield function() {
        console.log('Vim do yield 1')
    }

    // ...

    yield function() {
        console.log('Vim do yield 2')
    }

}

const g5 = geradora5()
const func1 = g5.next().value
const func2 = g5.next().value
func1()
func2()