// Não pode esquecer do NEXT nas middleware
exports.middlewareGlobal = (req, res, next) => {
    // Capturando os erros e mostrando nas paginas FLASH
    res.locals.erros = req.flash('erros')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404')
    }
    
    next()
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}