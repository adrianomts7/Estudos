const Login = require('../models/loginModel')

exports.index = (req, res) => {
    res.render('login')
}

exports.register = async function(req, res) {
    try{
        const login = new Login(req.body)
        await login.register()
        
        if(login.erros.length > 0){
            req.flash('erros', login.erros)
            req.session.save(function(){
                // Voltar a pagina de onde ela veio ex: ('Login')
                return res.redirect('back')
            })
            return
        }
    
        req.flash('success', 'Cadastro Realizado com Sucesso!')
        req.session.save(() => {
           return res.redirect('back') 
        })
    }
    catch(e){
        console.log(e)
        return res.render('404')
    }
    
}