
export default class Pessoa{
    private nome: string;
    private idade: number;
    private sexo: string;

    constructor(n: string, i: number, s: string){
        this.setNome(n)
        this.setIdade(i)
        this.setSexo(s)
    }
    
    setNome(n: string){
        this.nome = n;
    }
    setIdade(i: number){
        this.idade = i
    }
    getIdade():number {
        return this.idade
    }
    setSexo(s: string){
        this.sexo = s
    }


    public fazerAniver(){
        this.setIdade(this.getIdade() + 1)
        console.log("Parabéns, hoje você faz " + this.getIdade() + " anos!")
    }
}