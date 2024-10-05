function soma(x,y){
    if (typeof x !== "number" || typeof y !== "number"){
        throw new Error('x e y precisam ser números') // Lançando um novo erro pode usar new Error ou Reference Error
    }

    return x + y
}

try{
    console.log(soma('1',2))
    console.log(soma(1,2))
}
catch (err){
    console.log(err) 
    console.log('Alguma coisa mais amigavel pro usuário')
}
