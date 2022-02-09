import Caneta from './caneta/Caneta'

class Helloworld{
    constructor(){
        console.log("Hello world")
    }
}

const caneta = new Caneta("Modelo", "Cor")
console.log(caneta.getModelo())
console.log(caneta.getColor())

