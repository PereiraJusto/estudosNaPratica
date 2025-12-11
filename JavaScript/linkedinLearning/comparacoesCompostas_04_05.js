var chovendo = true;
var noite = true;
var visibilidade = 10;

if(noite == true || chovendo == true || visibilidade < 50){
    console.log("Ligar os faróis");
} else{
    console.log("Desligar os faróis");
}

if (chovendo == true && visibilidade <=25){
    console.log("Ligar o farol de neblina");
} else {
    console.log("Desligar o farol de neblina");
}

if ((chovendo == true && visibilidade <=25) || visibilidade == 0){
    console.log("Não sair de casa");
}