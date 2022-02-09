import Pessoa from "./Pessoa";

export default class Professor extends Pessoa{
    private especialidade: string
    private salario: number

    public receberAumento(){
        this.salario += this.salario * 0.5
    }
    public setSalario(s: number){
        this.salario = s
    }
}