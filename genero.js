import filme from "./filmes.js"

export default class genero extends filme{
    super(nome,duracao,sinopse,ano)

    constructor (genero){
        this.genero=genero
    }

exibir(){
    return console.log("O gênero deste filme é",this.genero)
}

}