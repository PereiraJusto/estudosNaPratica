let contatos = ["João", "Maria", "Pedro", "Ana"];

let primeiroContato = contatos[0];
console.log(`Primeiro contato: ${primeiroContato}`);

let indiceUltimoContato = contatos.length -1;
console.log(`Índice do último contato: ${indiceUltimoContato}`);

let ultimoContato =  contatos[indiceUltimoContato];
console.log(`Último contato: ${ultimoContato}`);

let contatoInexistente = contatos[4];
console.log(`Contato inexistente: ${contatoInexistente}`);

let idades = [25,30,35,40,45];
for (let i = 0; i < idades.length; i++){
    console.log(idades[i]);
}

idades.forEach(function(idade){
    console.log(idade);
});