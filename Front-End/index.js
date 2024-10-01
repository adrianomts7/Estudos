// Seleciona os elementos que vai pegar da classe no html
const paragrafos = document.querySelector('.paragrafos')
// Pega o que tem nas tags,dentro da classe 
const ps = paragrafos.querySelectorAll('p')

// Pega os estilo do css da onde você escolher, abaixo pega o do body
const estilosBody = getComputedStyle(document.body)
// Pega o estilo do lugar escolhido (body) escolhido, como esta abaixo que pega a cor (backgroundoColor)
const backgroundcolorBody = estilosBody.backgroundColor 
// Exibe o rgb da cor 
console.log(backgroundcolorBody)

for(let p of ps){
    p.style.backgroundColor = backgroundcolorBody
    p.style.color = "white"
}