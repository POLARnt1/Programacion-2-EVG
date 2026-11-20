let k = 10;
do {
    console.log("k vale " + k)
    // > k vale 10
} while (k < 5) // ya es falsa
// En el navegador: pedir hasta que sea valido

let edad;
do {
    edad = Number(prompt("Edad (1 a 120)"))
} while (Number.isNaN(edad) || edad < 1 || edad > 120)

let a = 0, b = 0
while (a > 5) a++ // el cuerpo corre 0 veces
do { b++ } while (b> 5) // corre una vez
console.log(a, b) // > 0 1