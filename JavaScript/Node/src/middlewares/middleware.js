// Não pode esquecer do NEXT nas middleware
exports.middlewareGlobal = (req, res, next) => {
    
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Mateus', 'NÃO USE MATEUS')
        console.log()
        console.log(`Vi que você postou ${req.body.cliente}`)
        console.log()
    }
    
    next()
}

exports.outroMiddleware = (req, res, next) => {
    console.log('Hello world')
    next()
}