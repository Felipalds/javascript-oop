import Aluno from "./Aluno";
import Pessoa from "./Pessoa";
import Professor from "./Professor";
import Funcionario from "./Funcionario";

const p1 = new Pessoa()
const p2 = new Aluno()
const p3 = new Professor()
const p4 = new Funcionario()

p1.setNome("Ana")
p2.setNome("Pedro")
p3.setNome("Luiz")
p4.setNome("Maria")

p2.setCurso("Informática")

p3.setSalario(1500)

p4.setSetor("Estoque")

console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
