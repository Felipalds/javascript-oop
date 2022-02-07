# Orientação a objetos
## O que é orientação a objetos?
*Objetivo:* Aproximar o mundo digital do mundo real <br>
Criador: Alan Kay (matemático e biólogo)
- Trabalhava na Xerox;
- Criou o Smalltalk (primeira linguagem orientada a objetos); <br>
Vantagens:
- Confiável (sofware é feito em partes isoladas. Ao alterar uma parte, nenhuma outra é afetada);
- Oportuno (ao dividir, várias partes podem ser desenvolvidas em paralelo);
- Manutenível (atualizar é muito mais simples);
- Extensível (o software deve crescer para permanecer útil);
- Reutilizável;
- Natural (mais fácil de entender, você se preocupa mais na funcionalidade que nos detalhes de implementação).

## Classes e objetos:
"Coisa *material* ou *abstrata*, que pode ser percebida pelos sentidos e descrita por meio das suas *características*, *comportamentos* e *estado atual*". <br>
Exemplo: carro (vermelho, acelerar, freiando), caneta (azul, rabiscar, sem tinta), compromisso (formal, chegar, atrasado) <br>
Podemos ter vários objetos advindos de uma mesma forma, um mesmo molde. A caneta em si é um objeto, o molde é a classe, que é o "esboço geral" do objeto.<br>
Para classes:
- *Atributos*: que coisas eu tenho; (ex: modelo, cor, ponta, carga)
- *Métodos*: que coisas eu faço; (ex: escrever, tampar, pintar)
- *Estado*: como eu estou agora; (ex: 50% carga, escrevendo) <br>
Gerar objeto a partir de uma classe se chama *instanciar* <br>
Classe: "Define os atributos e métodos comuns que serão compartilhados por um objeto".<br>
Objeto: "É uma instância de uma classe".<br>
Abstração: se concentrar somente nos atributos essênciais para a criação de uma classe.<br>

## Visibilidade em um objeto
UML e diagrama de classes: criar moldes e documentação de projetos, classes e objetos. <br>
Modificadores de visibilidade: "indicam o nível de acesso aos componentes internos de uma classe".
- '+': público "A classe atual e todas as outras classes"
- '-': privado "Somente a classe atual"
- '#': protegido "A classe atual e todas as suas sub-classes"

## Métodos especiais
- Getter (acessor) <br>
É o método que retorna valores privados ou protegidos de classes. getMoney, isOpen, getFiles
- Setter (modificadores)<br>
É o método que modifica atributos privados ou protegidos de classes. setMoney, setFiles.
- Constructor (construtor) <br>
Ao instanciar um objeto, tudo que acontece no método constructor acontecerá automaticamente.
