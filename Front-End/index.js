// Meu codigo
// function Calculadora(){
//     let display = document.querySelector('.display');
//     let btnClear = document.querySelector('.btn-clear');

//     this.inicia = () => {
//         this.cliqueBotoes()
//         this.pressionaEnter()
//     }

//     this.clearDisplay = () => {
//         display.value = ''
//     }

//     this.pressionaEnter = () => {
//         display.addEventListener('keyup', e => {
//             if(e.keyCode === 13){
//                 this.realizaConta()
//             }
//         })
//     }

//     this.apagaUm = () => {
//         display.value = display.value.slice(0, -1)
//     }

//     this.realizaConta = () => {
//         let conta = display.value

//         try{
//             conta = eval(conta)

//             if(!conta){
//                 alert('Conta Invalida')
//                 return this.clearDisplay()
//             }

//             this.clearDisplay()
//             display.value += String(conta)
//         }
//         catch(e){
//             alert("Conta Invalida")
//             return this.clearDisplay()
//         }

//     }

//     this.cliqueBotoes = () => {
//         document.addEventListener('click', e => {
//             const el = e.target

//             if(el.classList.contains('btn-num')){
//                 this.btnParaDisplay(el.innerText)
//             }
            
//             if(el.classList.contains('btn-clear')){
//                 this.clearDisplay()    
//             }

//             if(el.classList.contains('btn-del')){
//                 this.apagaUm()
//             }

//             if(el.classList.contains('btn-eq')){
//                 this.realizaConta()
//             }

//         })
//     }

//     this.btnParaDisplay = (valor) =>{
//         display.value += valor
//     }

// }

// const calculadora = new Calculadora()
// calculadora.inicia()

// Codigo do professor
function Calculadora(){
    this.display = document.querySelector('.display')
    
    this.inicia = () =>  {
        this.capturaCliques()
        this.capturaEnter()
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode === 13) return this.realizaConta()
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target

            if(el.classList.contains('btn-num')) this.addNumDisplay(el)
            if(el.classList.contains('btn-clear')) this.clear()
            if(el.classList.contains('btn-del')) this.del()
            if(el.classList.contains('btn-eq')) this.realizaConta()
            
        })
    }

    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText 
        this.display.focus()
    }
    this.clear = () => this.display.value = ' ' 
    this.del = () => this.display.value = this.display.value.slice(0, -1)
    

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value)

            if(!conta){
                alert('Conta Invalida')
                return this.clear()
            }

            this.clear()
            this.display.value = String(conta)
        }
        catch(e){
            alert('Conta Invalida!')
            return this.clear()
        }
    }
}

const calculadora = new Calculadora()
calculadora.inicia()