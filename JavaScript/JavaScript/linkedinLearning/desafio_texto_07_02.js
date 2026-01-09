let nomes = ["João", "Maria", "José", "Ana", "Carlos"];

for (let i = 0; i < nomes.length; i++){
    let numero = i + 1;
    let nome = nomes[i];
    let textoFinal = `${numero} ${nome}`;
    nomes[i] = textoFinal;
}
console.log(nomes);

