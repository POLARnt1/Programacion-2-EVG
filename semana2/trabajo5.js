function descuento(precio, porcentaje = 10){
    return precio - (precio * porcentaje / 100)
}
console.log(descuento(200))
console.log(descuento(200, 25)) 

function promedio(...notas){
    const suma = notas.reduce((a, b) => a + b, 0)
    return suma / notas.length
}
console.log(promedio(8, 9, 10))
console.log(promedio(0)) 

function aplicarDosVeces(x, fn){
    return fn(fn(x))
}
console.log(aplicarDosVeces(3,(x) => x * 2))
console.log(aplicarDosVeces(3,(x) => x ** 2))
