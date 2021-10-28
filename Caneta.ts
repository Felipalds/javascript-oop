class Caneta{

    public carga: number
    public tampada: boolean
    public modelo: string

    constructor(){
        this.tampar()
    }
    public rabiscar(){
        console.log("Rabiscando")
    }
    private setCarga(){
        console.log("Recarregando...")
        this.carga = 100
    }
    protected tampar(){
        console.log("Tampando")
        this.tampada = true
    }
    public getModelo(){
        return this.modelo
    }
}

export default Caneta