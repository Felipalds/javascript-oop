export default class Pessoa{
    protected nome: string
    protected idade: number
    protected sexo: string

    public fazerAniver(){
        this.idade ++
    }

    setNome(n: string){
        this.nome = n
    }
}