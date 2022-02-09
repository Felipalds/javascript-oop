import ILutador from "./IEmoji";

export default class Lutador implements ILutador{
    // Atributos
    private nome: string;
    private nacionalidade: string;
    private idade: number;
    private altura: number;
    private peso: number;
    private categoria: string;
    private vitorias: number;
    private derrotas: number;
    private empates: number;  

    // Método construtor
    constructor(
      no: string,
      na: string,
      id: number,
      al: number,
      pe: number,
      vi: number,
      de: number,
      em: number,      
    ){
      this.setNome(no)
      this.setNacionalidade(na)
      this.setIdade(id)
      this.setAltura(al)
      this.setPeso(pe)
      this.setVitorias(vi)
      this.setDerrotas(de)
      this.setEmpates(em)
    }

    // Métodos setters e getters
    private setNome(nome: string){
        this.nome = nome
    }
    private getNome(){
      return this.nome
    }
    private setNacionalidade(nacionalidade: string){
      this.nacionalidade = nacionalidade
    }
    private getNacionalidade(){
      return this.nacionalidade
    }
    private setIdade(idade: number){
      this.idade = idade;
    }
    private getIdade(){
      return this.idade
    }
    private setAltura(altura: number){
      this.altura = altura
    }
    private getAltura(){
      return this.altura
    }
    private setPeso(peso: number){
      this.peso = peso
      this.setCategoria()
    }
    private getPeso(){
      return this.peso
    }
    private setCategoria(){
      if(this.peso < 52.2){
        this.categoria = "Inválido"
      } else if(this.peso <= 70.3){
        this.categoria = "Leve"
      } else if(this.peso <= 83.9){
        this.categoria = "Médio"
      } else if(this.peso <= 120.2){
        this.categoria = "Pesado"
      } else {
        this.categoria = "Inválido"
      }
    }
    private getCategoria(){
      return this.categoria
    }
    private setVitorias(vitorias: number){
      this.vitorias = vitorias
    }
    private getVitorias(){
      return this.vitorias
    }
    private setDerrotas(derrotas: number){
      this.derrotas = derrotas
    }
    private getDerrotas(){
      return this.derrotas
    }
    private setEmpates(empates: number){
      this.empates = empates
    }
    private getEmpates(){
      return this.empates
    }
    
    // Métodos Públicos
    public apresentar(){
      console.log(`
      =====================================
      Lutador: ${this.getNome()} \n
      Origem: ${this.getNacionalidade()} \n
      Idade: ${this.getIdade()} anos \n
      Peso: ${this.getPeso()} KG \n
      Ganhou: ${this.getVitorias()} vezes \n
      Perdeu: ${this.getDerrotas()} vezes \n
      Empatou: ${this.getEmpates()} vezes\n
      ======================================`)
    }
    public status(){
      console.log(`
        Lutador: ${this.getNome()} \n
        Ganhou: ${this.getVitorias()} vezes \n
        Perdeu: ${this.getDerrotas()} vezes \n
        Empatou: ${this.getEmpates()} vezes\n`
      )
    }
    public ganharLuta(){
      this.setVitorias(this.getVitorias() + 1)
    }
    public perderLuta(): void {
      this.setDerrotas(this.getDerrotas() + 1)
    }
    public empatarLuta(): void {
      this.setEmpates(this.getEmpates() + 1)
    }
}