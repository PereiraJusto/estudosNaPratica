function testarVar(){
    var largura = 10;
    if (largura > 5){
        var largura = 5;
        console.log (`Largura no if: ${largura}`);
    }
    console.log (`Largura fora do if: ${largura}`);
}

testarVar();

function testarLet(){
    var largura = 10;
    if (largura > 5){
        let largura = 5;
        console.log (`Largura no if com let: ${largura}`);
    }
    console.log (`Largura fora do if com Let: ${largura}`);
}

testarVar();
testarLet();

const umaConstante = 40;
console.log (`Valor da constante: ${umaConstante}`);
//umaConstante = 50; // Isso vai gerar um erro, pois constantes não podem ser reatribuídas.

//O var é útil em situações onde a variável precisa ter escopo de função ou global, mas tenha cautela com possíveis sobreposições e confusões no acesso. 
// O let é o mais adequado e recomendado na maioria dos casos, adicionando clareza sobre onde e como a variável pode ser acessada ou alterada. 
// O const é perfeito para valores que você sabe que não precisarão ser alterados, tornando seu código mais seguro e previsível.