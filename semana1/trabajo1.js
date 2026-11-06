function promedio(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma / arr.length;
}
let calificaciones = [];

for (let i = 0; i < 3; i++) {
    let nota = Number(prompt("Ingresa la calificación " + (i + 1)));
    calificaciones.push(nota);
}

let resultado = promedio(calificaciones);
console.log("Promedio: " + resultado);

if (resultado >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}