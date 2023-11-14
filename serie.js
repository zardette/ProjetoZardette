import filme from "./filmes.js";

export default class serie extends filme {
    constructor(nome,nomeSerie,duracao,sinopse,ano,episodio,temporada){
        super(nome,duracao,sinopse,ano,genero)

        this.nomeSerie = nomeSerie;
        this.episodio = episodio;
        this.temporada = temporada;
    }
compartilhar(){
    return console.log("estou assistindo ao episódio",this.episodio,"da série",this.nomeSerie,"e estou na temporada",this.temporada)
}

assistir(){
    return console.log("assistindo ao episódio",this.episodio, "da temporada", this.temporada, "da série", this.nomeSerie, "com duração de aproximadamente", this.duracao)
}
}