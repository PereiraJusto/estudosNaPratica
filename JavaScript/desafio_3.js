const tiposHeroi =["guerreiro", "mago", "monge", "ninja"];
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;

        switch (this.tipo){
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

rl.question("Digite o nome do Herói: ", (nome) =>{
    rl.question("Digite a idade do Herói: ", (idade) =>{
        console.log("\nEscolha o tipo do herói:");
        console.log("1 - Guerreiro");
        console.log("2 - Mago");
        console.log("3 -  Monge");
        console.log("4 - Ninja");

        rl.question("Digite o número do tipo: ", (opcao) =>{
            const indexTipo = Number(opcao) - 1;
            const tipoEscolhido = tiposHeroi[indexTipo];

            if (!tipoEscolhido){
                console.log("Tipo inválido.");
                rl.close();
                return;
            }

            const heroi = new Heroi(nome, idade, tipoEscolhido);
            console.log();
            heroi.atacar();

            rl.close();
        });
    });
});