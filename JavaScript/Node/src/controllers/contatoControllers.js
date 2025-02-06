const Contato = require('../models/contatoModel')

exports.index = (req, res) => {
    res.render('contato', {
        contato: {}
    })
}

exports.register = async (req, res) => {
    try{
        const contato = new Contato(req.body)
        await contato.register()
    
        if(contato.erros.length > 0){
            req.flash('erros', contato.erros)
            req.session.save(() => res.redirect('back'))
            return
        }

        req.flash('success', 'Contato registrado com sucesso.')
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`))
        return
    }
    catch(e){
        console.log(e)
        return res.render('404')
    }
}

exports.editIndex = async function(req, res){
    if(!req.params.id) return res.render('404')
    
    const contato = await Contato.buscaPorId(req.params.id)
    if(!contato) return res.render('404')

    res.render('contato', { contato })
}