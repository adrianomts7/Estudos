const elementos = [
    {tag: 'p', texto: 'Texto que você quiser'},
    {tag: 'div', texto: 'Frase2'}, 
    {tag: 'Footer', texto: 'Frase3'},
    {tag: 'Section', texto: 'Frase4'}  
]

const container = document.querySelector("section");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++){
    let { tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    //tagCriada.innerHTML = texto //Por que não te, teag html é sim texto que será adicionado 
    //tagCriada.innerText = texto // Pode usar assim
    let textoCriado = document.createTextNode(texto) // Ou asssim
    textoCriado.appendChild(textoCriado) // Para adicionar 
    div.appendChild(tagCriada)
}

container.appendChild(div)