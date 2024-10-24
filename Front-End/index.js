class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado === true){
            console.log(`${this.nome} já ligado`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if(!this.ligado){
            console.log(`${this.nome} está desligado`)
            return
        }
        this.ligado = false
    }

}   

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor,modelo) {
        super(nome)
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome)
        this.temWifi = temWifi
    }

    ligar() {
        console.log('Alteramos o método ligar')
    }

    falaOi() {
        console.log('Oi')
    }

}

const s1 = new Smartphone('Iphone', 'Branco', 'Xr')
// s1.ligar()
// console.log(s1)

const t1 = new Tablet('Ipad', true)
// console.log(t1.ligado)
t1.ligar()
t1.falaOi()