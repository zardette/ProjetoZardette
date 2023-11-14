import Usuario from './usuario.js'
import FuncoesES from './EntradaSaida.js';
import filme from './filmes.js';
import serie from './serie.js';
import ator from './casting.js';
import genero from './genero.js';

const ES = new FuncoesES();
const usuario = new Usuario('Roberval','roberval@hotmail.com','senhadificil123');

//var email = ES.entrada('Digite o email')
//var senha = ES.entrada('Digite a senha')

//ES.mensagemCompleta(usuario.fazerLogin(email,senha))

//ES.mensagemCompleta(usuario.retornaAssinatura())

usuario.adicionarAssinatura(60)

//ES.mensagemCompleta(usuario.retornaAssinatura())
const generoHistorico=new genero ("histórico")
const filme1= new filme("oppenheimer",180,"um filme que detalha a criação da bomba atômica feita por um físico americano com ideias comunistas afloradas dentro do contexto da guerra fria",2023,generoHistorico)

ES.mensagemCompleta(filme1.assistir())
ES.mensagemCompleta(filme1.compartilhar())

const serie1= new serie('','breaking bad',60,"trata-se de uma série sobre um professor de química que após descobrir um câncer,preocupado com sua família, se torna o maior traficante de sua cidade nos EUA",2007,5,2)

//ES.mensagemCompleta(serie1.assistir())
//ES.mensagemCompleta(serie1.compartilhar())

const ator1 = new ator ("leonardo DiCaprio",49,"masculino","Los Angeles - EUA")

//ES.mensagemCompleta(ator1.exibir())

