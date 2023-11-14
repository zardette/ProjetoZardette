import genero from "./genero.js";

export default class filme{
    constructor (nome,duracao,sinopse,ano){
    this.nome = nome;
    this.duracao=duracao;
    this.sinopse=sinopse;
    this.ano=ano;
    this.genero=genero
}

compartilhar(){
    return console.log("estou assistindo o filme",this.nome,this.genero, "que conta a seguinte história",this.sinopse,"foi lançado no ano de",this.ano, "e possui duracao de",this.duracao)

}

assistir(){

    return console.log("asssitindo filme",this.nome,"tempo restante",this.duracao, "minutos")
}

}