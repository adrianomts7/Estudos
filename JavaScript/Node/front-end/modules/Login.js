import validator from 'validator'

//Validando o Front-end

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass)
    }

    init(){
        this.events()
    }

    events(){
        if(!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e){
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')
        let erro = false

        if(!validator.isEmail(emailInput.value)){
            alert('E-mail inválido')
            erro = true
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 15){
            alert('Senha tem que ter entre 3 e 15 caracteres')
            erro = true
        }

        if(!erro) el.submit()

    }
}