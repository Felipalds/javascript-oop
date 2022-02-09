import Pessoa from "./Pessoa";
import ILivro from "./ILivro";

export default class Livro implements ILivro{
    private titulo: string;
    private autor: string;
    private pagAtual: number;
    private totPaginas: number;
    private aberto: boolean;
    private leitor: Pessoa;

    constructor(t: string, a: string, totPaginas: number, l: Pessoa){
        this.titulo = t;
        this.autor = a
        this.totPaginas = totPaginas
        this.pagAtual = 0
        this.aberto = false
        this.leitor = l
    }

    public abrir(){
        this.aberto = true
    }
    public fechar(){
        this.aberto = false
    }
    public avancar(){
        if(this.aberto && this.pagAtual < this.totPaginas){
            this.pagAtual++
        } else {
            console.log("Abra o livro primeiro!")
        }
    }
    public voltar(){
        if(this.aberto && this.pagAtual > 0){
            this.pagAtual --
        } else {
            console.log("Abra o livro")
        }
    }
}