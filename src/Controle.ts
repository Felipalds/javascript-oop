import Controlador from "./IControle"

export default class Controle implements Controlador{
    // Atributos
    private volume: number
    private ligado: boolean
    private tocando: boolean

    // Métodos especiais
    constructor(){
        this.volume = 50
        this.ligado = false
        this.tocando = false
    }

    private getVolume(){
        return this.volume
    }
    private setVolume(volume: number){
        this.volume = volume
    }
    private isLigado(){
        return this.ligado
    }
    private setLigado(ligado: boolean){
        this.ligado = ligado
    }
    private isTocando(){
        return this.tocando
    }
    private setTocando(tocando: boolean){
        this.tocando = tocando
    }
    

    ligar(): void{
        this.setLigado(true)
    }
    desligar(): void{
        this.setLigado(false)
    }
    abrirMenu(){
        console.log("-------- MENU ---------")
        console.log(this.isLigado() ? "Está ligado!" : "Está desligado")
        console.log(this.isTocando() ? "Está tocando" : "Não está tocando")
        let volumeAtual = ""
        for(let c = 0; c < this.getVolume(); c++){
            volumeAtual += "|"
        }
        console.log("Volume: " + this.getVolume() + volumeAtual)
    }
    fecharMenu(){
        console.log("Fechando menu")
    }
    maisVolume(): void {
        if(this.isLigado() && this.getVolume() < 100){
            this.setVolume(this.getVolume() + 10)
        } else {
            console.log("Erro")
        }
    }
    menosVolume(): void {
        if(this.isLigado() && this.getVolume() > 0){
            this.setVolume(this.getVolume() - 10)
        }
    }
    ligarMudo(): void {
        if(this.isLigado() && this.getVolume() > 0){
            this.setVolume(0)
        }
    }
    desligarMudo(): void {
        if(this.isLigado() && this.getVolume() === 0){
            this.setVolume(50)
        }
    }
    pause(): void {
        if(this.isLigado() && (this.isTocando())){
            this.setTocando(false)
        }
    }
    play(): void {
        if(this.isLigado() && !(this.isTocando())){
            this.setTocando(true)
        }
    }
}
