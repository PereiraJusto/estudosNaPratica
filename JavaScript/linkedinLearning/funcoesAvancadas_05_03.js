function cargaRestanteBateria() {
    var tamanhoBateria = 100;
    var cargaAtual = 60;
    var cargaRestante = tamanhoBateria - cargaAtual;
    return cargaRestante;
}

var cargaRestante = cargaRestanteBateria();
console.log(`A carga restante da bateria é de ${cargaRestante}%`);


function tempoParaCarregarBateria(porcentagem){
    var carga = cargaRestanteBateria();
    var cargaNecessaria = porcentagem - carga;
    var tempo = cargaNecessaria * 2;
    return tempo;
}

var porcentagem = 90;
var tempoParaCarregar = tempoParaCarregarBateria(porcentagem);
console.log(`O tempo necessário para carregar a bateria até ${porcentagem}% é de ${tempoParaCarregar} minutos.`);
