let i = 0;
const impares = []
while (true) {
    i++
    if (i > 10) break;
    if ( i % 2  === 0) continue;
    impares.push(i);
}

console.log(impares) // > [1, 3, 5, 7, 9]

let x = 0;
for (let i = 0; i < 10; i++) x += 0.1;
console.log(x, x === 1); // 0.99999999999999999 false

function nombreDia(numero) {
    switch(numero){
        case 1:
            return "lunes";
        case 2:
            return "martes";
        case 3:
            return "miercoles";
        case 4:
            return "jueves";
        case 5:
            return "viernes";
        case 6:
            return "sabado";
        case 7:
            return "fin de semana";
        default:
            return "dia invalido";
    }
}

nombreDia(2) // martes
nombreDia(7) // fin de semana
nombreDia(9) //Dia invalido

function ruido(animal) {
    switch(animal) {
        case "perro":
            console.log("guau") // sin break
        case "gato":
            console.log("miau")
            break;
        case "vaca":
            console.log("muu")
            break;
        case "el pollito":
            console.log("pio")
        case "gallina":
            console.log("coo")
            break;
        default:
            console.log("???")
    }
}

console.log(ruido("perro")) // guau, miau
ruido("gato") // miau
ruido("pez") // ???