let saldo = 0;
let menu = true;
let opcion = 0

function consultarSaldo() {
    return console.log(saldo)
}

function depositar(ingreso){
    saldo += ingreso
    return console.log("Depositaste: " + ingreso + " || Nuevo saldo: " + saldo)
}

function retirar(retiro){
    if (retiro > saldo) console.log("ERROR: SALDO INSUFICIENTE")
        else saldo -= retiro
    return console.log("Nuevo saldo: " + saldo)
}

function salir(){
    menu = false
    return (alert("Chao nigga"))
}

while (menu === true) {
    opcion = parseInt(prompt("Elige una opcion: \n 1: Consultar saldo \n 2: Depositar \n 3: Retirar \n 4: Salir"))
}

switch(opcion) {
    case 1: consultarSaldo(); break;
    case 2: depositar(); break;
    case 3: retirar(); break;
    case 4: salir(); break;
}