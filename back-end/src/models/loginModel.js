const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const LoginSchema = new mongoose.Schema({
    email: { type:String, required: true },
    password: { type: String, required: true}
})

const LoginModel = mongoose.model('Login', LoginSchema)

class Login{
    constructor(body){
        this.body = body
        this.erros = []
        this.user = null
    }

    async login(){
        this.valida()
        if(this.erros.length > 0) return
        this.user = await LoginModel.findOne( {email: this.body.email})

        if(!this.user) {
            this.erros.push('Usuário não existe')
            return
        }

        if(!bcrypt.compareSync(this.body.password, this.user.password)){
            this.erros.push('Senha inválida')
            this.user = null
            return
        }

    }

    async register(){
        this.valida()
        if(this.erros.length > 0) return

        await this.userExists()
        // Criptografando a senha para salvar no schema
        const salt = bcrypt.genSaltSync()
        this.body.password = bcrypt.hashSync(this.body.password, salt)
        this.user = await LoginModel.create(this.body)
        
    }

    async userExists(){
        this.user = await LoginModel.findOne( {email: this.body.email})
        if(this.user) this.erros.push('Usuario já existe')
        
    }

    valida(){
        this.cleanUp()
        // Validando os campos
        // o e-mail precisa ser válido
        if(!validator.isEmail(this.body.email)) this.erros.push('E-mail invalido')

        // senha precisa de 3 e 15 caracteres
        if(this.body.password.length < 3 || this.body.password.length > 15) this.erros.push('A senha precisa ter entre 3 e 15 caracteres')
    }

    cleanUp(){
        for(let key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }
    
        this.body = {
            email: this.body.email,
            password: this.body.password
        }

    }

}

module.exports = Login