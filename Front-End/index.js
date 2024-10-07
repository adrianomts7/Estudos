// IIFE -> Expressão de função invocada imediatamente
(function(){
    
    const sobrenome = 'Mateus'
    function criaNome(nome){
        return nome +  ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Adriano'))
    }

    falaNome()

})()
