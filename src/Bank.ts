// Conta no banco
// Abrir conta (corrente ou poupança)
// Jubileu vai deixar na conta poupança, 300 reais, Creuza colocou 500 reais
// Creuza sacou 100 reais

class Bank{
    private bankAccount: string
    private money: number
    private nome: string
    private action: string
    private isActive: boolean
    constructor(name: string, conta: string){
        this.nome = name;
        this.money = 0;
        console.log("Bem vindo ao banco")
        this.setBankAccount(conta)
    }

    private setBankAccount(type: string){
        if(type === "Corrente"){
            this.bankAccount = "Conta-Corrente"
            this.isActive = true
        }
        if(type === "Poupança"){
            this.bankAccount = "Conta Poupança"
            this.isActive = true
        }
    }

    public setMoney(money: number, action: string){
        if(action === "Sacar"){
            this.money -= money
        }
        if(action === "Depositar"){
            this.money += money
        }
    }

    public setAccountActive(){
        this.isActive = !this.isActive
    }
}

const bancoDoJubileu = new Bank("Jubileu", "Poupança")
bancoDoJubileu.setMoney(300, "Depositar")
console.log(bancoDoJubileu)

console.log("===============================")

const bancoDaCreuza = new Bank("Creuza", "Corrente")
bancoDaCreuza.setMoney(500, "Depositar")
console.log(bancoDaCreuza)
bancoDaCreuza.setMoney(100, "Sacar")
bancoDaCreuza.setAccountActive()
console.log(bancoDaCreuza)

