const pessoas = [
    { id: 3, nome: 'Adriano'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Mateus'}
]

// const novasPessoas = {}
// for (const pessoa of pessoas){
//     const { id } = pessoa
//     novasPessoas[id] = { ... pessoa }
// }

const novasPessoas = new Map()
for (const pessoa of pessoas){
    const { id } = pessoa
    novasPessoas.set(id, { ... pessoa })
}

console.log(novasPessoas)

// for (const [identifier, { id,nome }] of novasPessoas){
//     console.log(identifier, id, nome)
// }

// for (const pessoas of novasPessoas.keys()){
//     console.log(pessoas)
// }

novasPessoas.delete(2)
console.log(novasPessoas)