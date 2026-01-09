function lerArquivo(nomeArquivo) {
    console.log(`Lendo o arquivo: ${nomeArquivo}`);
}

const numeroArquivos = 10;
let contador = 0;
while (contador < numeroArquivos){
    let nomeArquivo = `aquivo${contador}.txt`;
    lerArquivo(nomeArquivo);
    contador++;
}

for (let i = 0; i < numeroArquivos; i++){
    let nomeArquivo = `arquivo${i}.txt`;
    lerArquivo(nomeArquivo);
}