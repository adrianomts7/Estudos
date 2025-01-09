// Não pode esquecer do NEXT nas middleware
exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local.'
    
    next()
}
