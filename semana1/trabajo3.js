let calificaciones = [9,5,8,6.5];
console.log("Calificaciones mayor que 6: " + calificaciones.filter((x) => x >= 6));
console.log("Promedio: " + calificaciones.reduce((acum, x) => acum + x, 0) / calificaciones.length);

let numeros = [1,2,3,4,5,6];
let pares = numeros.filter((x) => x % 2 === 0);
let potencia = pares.map((x) => x ** 2);
console.log([...potencia].sort((a,b) => b-a));

let palabras = ["pera", "Manzana", "uva", "Árbol", "Amigo", "emiliano"];
const es = (x, y) => x.localeCompare(y, "es");
palabras.sort(es);
console.log(palabras);