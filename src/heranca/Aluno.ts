import Pessoa from './Pessoa'

export default class Aluno extends Pessoa{
    private matricula: boolean;
    private curso: string;

    public cancelarMatricula(){
        this.matricula = false
    }

    public setCurso(c: string){
        this.curso = c
    }
}