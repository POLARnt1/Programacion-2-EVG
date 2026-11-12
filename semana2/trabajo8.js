// Laboratorio de numeros
// factorial() fibonacci() esPerfecto()

function factorial(n) {
  if (n < 0 ) return "Escriba un numero valido o positivo";
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(factorial(6))

function fibonacci(f) {
    if (f < 0) return "Escriba un numero valido"
    if (f <= 1) return 1

    return fibonacci(f-1)+fibonacci(f-2);
}

console.log(fibonacci(9))

function esPerfecto(p) {
  if (p <= 1) return false;
  let suma = 0;
  for (let i = 1; i <= (p / 2); i++) {
    if (p % i === 0) {
      suma += i
    }
  }
  return suma === p;
}

console.log(esPerfecto(28))
