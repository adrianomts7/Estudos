const nomes = ['Adriano','Lourdes','Aurora','Mateus','Maria Cecilia']

// nomes.splice(indice,delete,elemento para adicionar)
// pop -> remove o ultimo item
// const removidos = nomes.splice(-1,1)

// shift -> remove o primeiro item
// const removidos = nomes.splice(0,1)

// Push -> Adicionar no ultimo indice da lista
// nomes.splice(nomes.length,1,'Maria')

// unshift -> Adicionar no primeiro indice da lista
nomes.splice(0,0,'Maria')
console.log(nomes)