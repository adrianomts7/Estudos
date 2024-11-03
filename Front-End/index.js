function teste(){
    console.log('Este é meu teste')
}

class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
        teste()
    }
    
    // Método de instancia
    aumentarVolume(){
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    // Método de estatico
    static soma(x, y){
        return x + y
    }

}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
console.log(controle1)

console.log(ControleRemoto.soma(2, 4))