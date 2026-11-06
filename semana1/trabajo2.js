function contarVocales(txt){
    let contador = 0;
    txt.toLowerCase;
    for (let i = 0; i <= txt.length; i++){
        let letra = txt[i];
        if("aeiouáéíóú".includes(letra)){
            contador++;
        }
    }
    return contador;
}

function esPalindromo(texto) {
    let textoLimpio = texto.toLowerCase();
    textoLimpio = textoLimpio.normalize("NFD");
    textoLimpio = textoLimpio.replaceAll(" ", "");
    let letras = textoLimpio.split("");
    letras = letras.filter(letra => /[a-z]/.test(letra));

    textoLimpio = letras.join("");

    let invertido = "";
    for (let i = textoLimpio.length - 1; i >= 0; i--) {
        invertido += textoLimpio[i];
    }

    return textoLimpio === invertido;
}
console.log(esPalindromo("Anita lava la tina"));
console.log(esPalindromo("Hola mundo"));