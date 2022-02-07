// Esta interface já é usada pela classe, só de ter o mesmo nome
interface Caneta {
    modelo: string;
    cor: string;
}

class Caneta{
    constructor(){
        this.modelo = "Fina"
        this.cor = "Azul"
    }

    rabiscar(){
        console.log("Rabiscando")
    }
}

export default Caneta