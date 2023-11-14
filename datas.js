import moment from 'moment';

export default class Datas{
    constructor(){
        
    }

    diferencaDias(data){
        return diferenca = data.diff(this.dataAtual(),'days')
    }

    adicionarDias(data,dias){
        return data.add(dias, 'days')
    }

    removerDias(data,dias){
        data.subtract(dias, 'days')
    }

    formataData(data){        
        return data.format("DD/MM/YYYY");
    }

    dataAtual(){
        return moment()
    }
}

