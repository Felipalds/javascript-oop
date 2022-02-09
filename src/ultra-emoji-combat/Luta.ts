import Lutador from "./Emoji";
import ILuta from "./ILuta"

export default class Luta implements ILuta{
    // Atributos
    private desafiado: Lutador;
    private desafiante: Lutador;
    private rounds: number;
    private aprovada: boolean;

    // Métodos especiais
    public setDesafiado(dd: Lutador){
        this.desafiado = dd
    }
    public getDesafiado(){
        return this.desafiado
    }
    public setDesafiante(df: Lutador){
        this.desafiante = df
    }
    public getDesafiante(){
        return this.desafiante
    }
    private setAprovada(ap: boolean){
        this.aprovada = true
    }
    private getAprovada(){
        return this.aprovada
    }

    // Métodos públicos
    public marcarLuta(l1: Lutador, l2: Lutador): void {
        if((l1.getCategoria() === l2.getCategoria()) && (l1 !== l2)){
            this.setAprovada(true)
            this.setDesafiado(l1)
            this.setDesafiante(l2)
        } else {
            this.setAprovada(false)
        }
    }
    public lutar(): void {
        if(this.getAprovada() === true){
            this.desafiado.apresentar()
            this.desafiante.apresentar()

            const vencedor = Math.floor(Math.random() * 3)
            console.log(vencedor)
            switch(vencedor){
                case 0:
                    console.log("Empatou!")
                    this.desafiado.empatarLuta()
                    this.desafiante.empatarLuta()
                    break;
                case 1:
                    console.log(this.desafiado.getNome() + " ganhou!!!")
                    this.desafiado.ganharLuta()
                    this.desafiante.perderLuta()
                    break
                case 2:
                    console.log(this.desafiante.getNome() + " ganhou!!!")
                    this.desafiante.ganharLuta()
                    this.desafiado.perderLuta()
                    break;
            }
        } else {
            console.log("Luta não pode acontecer.")
        }
    }
}