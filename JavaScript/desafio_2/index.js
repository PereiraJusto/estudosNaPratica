let vitorias = 1000;
let derrotas = 0;

function balancoDesempenho (){
    let saldo = vitorias - derrotas;
    return saldo;
}

let saldo = balancoDesempenho();
let ranking = "";

if (saldo <= 10) {
    ranking = "Ferro";
} else if (saldo >= 11 && saldo <= 20){
    ranking = "Bronze";
} else if (saldo >= 21 && saldo <= 50){
    ranking = "Prata";
} else if (saldo >= 51 && saldo <= 80){
    ranking = "Ouro";
} else if (saldo >= 81 && saldo <= 90){
    ranking = "Diamante";
} else if (saldo >= 91 && saldo <= 100){
    ranking = "Lendário";
} else {
    ranking = "Imortal";
}

console.log("O Herói tem " + vitorias + " vitorias e " + derrotas + " derrotas, com um saldo de " + saldo + " vitórias. E por isso está no nível " + ranking + ".")
