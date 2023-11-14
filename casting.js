export default class ator{
    constructor (nome,idade,sexo,nacionalidade){

    this.nome = nome;
    this.idade = idade;
    this. sexo = sexo;
    this.nacionalidade = nacionalidade;
    }
    exibir(){
        return console.log(this.nome, "possui", this.idade, "anos de idade", "é nascido(a) em", this.nacionalidade, "e pertence ao sexo",this.sexo)
    }


}