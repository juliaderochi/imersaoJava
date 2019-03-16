class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    dizOi(){
        console.log('Oi')
    }

    dizTchau(){
        console.log('Tchau')
    }
}

class Funcionario extends Pessoa{
    constructor(nome, funcao){
        super(nome);
        this.funcao = funcao;
    }

    dizOi(){
        console.log('Oi de funcionario')
    }
}

var pedro = new Pessoa('Pedro')
pedro.dizOi()
pedro.dizTchau()

var joao = new Funcionario('João', 'Estagiário')
joao.dizOi()
joao.dizTchau()

console.log('João é instancia de Pessoa', joao instanceof Pessoa)
console.log('João é instancia de Funcionario', joao instanceof Funcionario)
console.log('Pedro é instancia de Pessoa', pedro instanceof Pessoa)
console.log('Pedro é instancia de Funcionario', pedro instanceof Funcionario)