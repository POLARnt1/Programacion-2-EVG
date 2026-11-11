const resultado = Math.max(3, 9, 4);
console.log(resultado); // → 9

parseInt("42px", 10) // 42
parseInt("px42", 10) // NaN
parseFloat("3.5kg") // 3.5
Number("3.5kg") // NaN  
isNaN("abc") // true
Number.isNaN("abc") // false

const t = "Hola Mundo";
t.toUpperCase(); //se descarta
console.log(t); // Hola Mundo
const mayus = t.toUpperCase();
console.log(mayus); // HOLA MUNDO
const s = "JavaScript";
console.log(s.length, s[0]); // 10 J
console.log(s.at(-1)); // t

const frase = "el perro y el gato";
frase.indexOf("el") // 0
frase.indexOf("el", 1) // 11 
frase.lastIndexOf("el") // 11
frase.indexOf("zorro") // -1
frase.includes("gato") // true
frase.startsWith("el") // true
frase.endsWith("perro") // false

const f ="2026-10-19";
f.slice(0,4) // 2026
f.slice(5,7) // 10
f.slice(-2) // 19
f.split("-") // ['2026','10','19']
" hola ".trim() // hola
"7".padStart(3, "0") // 007
"a-b-c".replaceAll(" ", "") // a+b+c

"é" > "z" // true
const L = ["b", "á", "a"];
L.sort() // ['a','b','c']
const es = (x, y) => x.localeCompare(y, "es");
L.sort(es) // ['a','á','b']
const sinAcentos = (txt) =>
    txt.normalize("NFD").replace(/[-*]/g, "");
sinAcentos("José Ángel Núñez")
// Jose Angel Nunez
