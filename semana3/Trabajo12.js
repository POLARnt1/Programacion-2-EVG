function sumaDigitos(n) {
    let num = String(n)
    let suma = 0
    let i = 0

    while (i < num.length) {
        suma += Number(num[i]), i++ 
    }
    return suma;
}

console.log(sumaDigitos(1234))

function mcd(a, b) {
  a = Number(a)
  b = Number(b)

  while (b !== 0) {
    const residuo = a % b;
    a = b
    b = residuo
  }

  return a;
}

console.log(mcd(48, 18)); 

function aniosjeje(monto, tasa = 7){
    let dinero = monto
    let anios = 0

    while (dinero < monto * 2) {
        dinero = dinero + (dinero * (tasa/100)), anios++
    }
return { anios: anios , dinero: dinero };
}

let msj = aniosjeje(1000)
console.log(`Años: ${msj.anios}, Dinero: $${msj.dinero.toFixed(2)}`);