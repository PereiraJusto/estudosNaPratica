let animais = ["Arara", "Cachorro", "Gato", "Sardinha", "Elefante", "Tubarão", "Urso", "Águia", "Cobra"];

for (let i=0; i < animais.length; i++){
    let animal = animais[i];
    let tipo = "";

    if (animal === "Cachorro" || animal === "Gato" || animal === "Urso" || animal === "Elefante"){
        tipo = "mamíferos";
        } else if (animal === "Arara" || animal === "Águia"){
            tipo = "aves";
            } else if (animal === "Sardinha" || animal === "Tubarão"){
                tipo = "peixes";
                } else {
                    tipo = "desconhecido";
                }
    console.log(`${animal}: ${tipo}`);
}