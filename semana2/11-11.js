function sinRetorno(x) {x * 2; }
function conRetorno(x) { return x * 2; }
function signo(n) {
    if (n<0) return "negativo";
    if (n===0) return "cero";
    return "positivo";
}
// sinRetorno(4) => undefined . conRetorno(4) => 8 . signo(-3), signo (0), signo(9) => negativo cero positivo

function estadisticas(lista) {
    const minimo = Math.min(...lista)
    const maximo = Math.max(...lista)
    const suma = lista.reduce((a, b) => a + b, 0)
    return{ minimo, maximo, promedio: suma / lista.length }
}
const {minimo, maximo, promedio} = estadisticas([4, 8, 6])
console.log(minimo, maximo, promedio) 
// => 4 8 6

// Calcula (pura)
const conIva = (p) => Math.round(p * 116) / 100;

//Muestra (efecto)
console.log("total", conIva(100)) // => total 116

// Trampa: salto de linea tras return
function mal() {
    return
    42;
}
//mal() => undefined