const Login = require('../models/loginModel')

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado')
    return res.render('login')
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

exports.login = async function(req, res) {
    try{
        const login = new Login(req.body)
        await login.login()
        
        if(login.erros.length > 0){
            req.flash('erros', login.erros)
            req.session.save(function(){
                // Voltar a pagina de onde ela veio ex: ('Login')
                return res.redirect('back')
            })
            return
        }
    
        req.flash('success', 'Você entrou no sistema.')
        req.session.user = login.user
        req.session.save(() => {
           return res.redirect('back') 
        })
    }
    catch(e){
        console.log(e)
        return res.render('404')
    }
    
}

exports.logout = function(req, res){
    req.session.destroy()
    res.redirect('/login')
    return
}