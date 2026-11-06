const lista = ["minecraft", "apex", "deadlock", "overwatch", "fortnite"]

lista.push("geometry dash")
lista.pop()
lista.unshift("clash royale")
lista.shift()

let frutas = ["manzana","naranja","uva","pera"]
let lista2 = frutas.splice(1,2)
let remplazarElemento = frutas.splice(3,1,"piña")
let insertarElemento = frutas.splice(1,0,"pera","uva")

console.log(frutas)
console.log(lista)

const b = [1,2,3,4,5];
console.log(b.splice(1,2));
// [2,3]
console.log(b)
// [1,4,5]
b.splice(1,0,"x","y")
console.log(b)
// [1,'x','y',4,5]
console.log(b.slice(1,3))
// ['x','y'] (b no cambia)

const n = [5,12,8,130,44];
n.indexOf(8) // 2
n.includes(130) // true
n.find((x) => x > 10) // 12
n.findIndex((x) => x > 10) // 1
n.find((x) => x > 1000) // undefined
n.some((x) => x > 100) // true
n.every((x) => x > 5) // false

const precios = [100, 250, 80, 400];
precios.map((p) => p + 20) // [120, 270, 100, 420]
precios.filter((p) => p > 150) // [250, 400]
precios.reduce((acum, p) => acum + p, 0) // 830

const nums = [10,9,1,100];
[...nums].sort(); // [1,9,10,100]
[...nums].sort((a,b) => a-b); // [1,9,10,100]
[...nums].sort((a,b) => b-a); // [100,10,9,1]