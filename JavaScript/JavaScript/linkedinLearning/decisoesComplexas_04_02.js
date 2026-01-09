var semaforo = "verde";

if (semaforo == "verde") {
    console.log("Pode passar");
} else if (semaforo == "amarelo") {
    console.log("Atenção");
} else if (semaforo == "vermelho") {
    console.log("Pare");
} else {
    console.log("ERRO: cor do semáfaro inválida");
}

switch (semaforo) {
    case "verde":
        console.log("Pode passar");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("ERRO: cor do semáforo inválida");
}