import Pessoa from "./Pessoa";

export default class Funcionario extends Pessoa{
    private setor: string
    private trabalhando: boolean

    public mudarTrabalho(){

    }
    public setSetor(s: string){
        this.setor = s
    }
}