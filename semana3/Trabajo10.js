function crearCuentaBancaria(saldo) {

function depositar(cantidad) {
    saldo = saldo + cantidad;
  }

function retirar(cantidad) {
    if (cantidad > saldo) {
      console.log("Fondos insuficientes");
    } else {
      saldo = saldo - cantidad;
    }
  }

function consultar() {
    return saldo;
}

return { depositar: depositar, retirar: retirar, consultar: consultar };
}

c.depositar(500)
c.retirar(100)
console.log(c.consultar()) 
console.log(saldo())