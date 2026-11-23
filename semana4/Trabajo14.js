//A Predicicon: b, c
switch (2) {
    case 1: console.log("a");
    case 2: console.log("b");
    case 3: console.log("c"); break;
}
//Resultado: salio lo que esperaba a partir del caso 2 se cumple el switch, e imprime tambien c porque no hay break que rompa el ciclo

//B Prediccion: otro
const valor = "5";
switch (valor) {
    case 5: console.log("numero"); break;
    default: console.log("otro");
}
//Resultado: otro, salio lo que esperaba, el "5" esta como string no como numero por eso no se cumple el caso que el 5 del case es Number

//C Prediccion: d, u
switch (9) {
    default: console.log("d");
    case 1: console.log("u"); break;
    case 2: console.log("x");
}
//Resultado: d, u, salio lo que esperaba, primero esta la funcion default y como no cumple la condicion se imprime, pero no hay un break que impida que no se imprima lo demas hasta que llegue a case 1

//D Prediccion: B, A
const n = 90;
switch (true) {
    case n >= 80: console.log("B"); break;
    case n >= 90: console.log("A"); break;
}
//Resultado: B, no salio lo que esperaba, a la hora de hacer el switch encuentra primero n >= 80, imprime "B" y ejecuta el break, por lo que ya no revisa el siguiente caso