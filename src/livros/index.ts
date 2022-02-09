import Pessoa from './Pessoa'
import Livro from './Livro'

const luiz = new Pessoa("Luiz", 18, 'M')
const gibi = new Livro("Batman", "Robin Wood", 1245, luiz)
gibi.abrir()
gibi.avancar()
gibi.avancar()
gibi.avancar()
gibi.fechar()
gibi.avancar()

gibi.avancar()
gibi.voltar()
gibi.voltar()

console.log(gibi)