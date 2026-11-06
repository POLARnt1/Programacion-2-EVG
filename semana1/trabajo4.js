let num = 23.2368472
let redondear = 3

let numFinal = Number(num.toFixed(redondear))
console.log(numFinal)
console.log(typeof numFinal) 

let calificaciones = "8, 9.5, x, 7, , 10"
let numeros = calificaciones
        .split(",")
        .map(s => s.trim())
        .filter(s => s!== "")
        .map(Number)
        .filter(n => !Number.isNaN(n))
let suma = numeros.reduce((acc,n) => acc + n, 0)
let promedio;
if (numeros.length > 0){
    promedio = Number((suma / numeros.length).toFixed(2))
} else {
    promedio = 0
}

console.log("El promedio es de: " + promedio)