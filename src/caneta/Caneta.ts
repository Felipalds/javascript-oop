
class Caneta{
    private modelo: string
    private cor: string

    constructor(modelo: string, cor: string){
        this.setModelo(modelo)
        this.setCor(cor)
    }
    public rabiscar(){
        console.log("Rabiscando")
    }
    private setCor(cor: string){
        this.cor = cor
    }
    public getColor(){
        return this.cor
    }
    private setModelo(modelo: string){
        this.modelo = modelo
    }
    public getModelo(){
        return this.modelo
    }
}

export default Caneta