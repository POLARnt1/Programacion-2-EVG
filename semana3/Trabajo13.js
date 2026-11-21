function pedirNumero(respuestas){
    let numero = 0
    let valido = 0

    do { numero = Number(respuestas.shift()), valido = Number.isInteger(numero) && numero >= 1 && numero <= 10} while (valido == false && respuestas.length > 0)
    
    if (valido == true) {
        return numero;
    }
}

console.log(pedirNumero(["niggga", "67", "6", "7"]))

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let i = 0;
let rango = ""
console.log(numeroAleatorio)

while (true) {
    let adivinar = parseInt(prompt(rango + "Adivina el numero nigga:"))
    
    i++
    console.log("Intentos: " + i);
    if (adivinar > numeroAleatorio) rango = "Mas Abajo! ";
    if (adivinar < numeroAleatorio) rango = "Mas Arriba! ";

    if (adivinar === numeroAleatorio) {
        console.log("ADIVINASTE!! El numero era: " + numeroAleatorio)
        break;
    } 
    if (adivinar !== numeroAleatorio) continue;
}
