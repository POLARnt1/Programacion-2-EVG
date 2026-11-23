function diasDelMes(mes, anio = 2026) {
  let dias= 0;

  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dias = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      dias = 30;
      break;

    case 2:
      const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
      dias = esBisiesto ? 29 : 28;
      break;

    default:
      return "Numero invalido";
  }

  return dias;
}

console.log(diasDelMes(2, 2024))

function calcular(a, op, b){
    let operacion;
    switch (op){
        case "+": operacion = a + b; break;
        case "-": operacion = a - b; break;
        case "*": operacion = a * b; break;
        case "/": operacion = (b === 0 ? "division entre cero" : a / b ); break;
        default:  return "Numero invalido";
    }
    return operacion;
}

console.log(calcular(3, "*", 6))

function letra(nota){
let cal = ""
    if (nota >= 90) cal = "A";
    else if (nota >= 80) cal = "B";
    else if (nota >= 70) cal = "C";
    else if (nota >= 60) cal = "D";
    else if (nota >= 1) cal = "F";
    else cal = "Numero invalido"

    return cal;
}

console.log(letra(69.9))

let nivel = 7

    for (i = -1 ; i < nivel ; i++){
        let espacios = " ".repeat(nivel - i)
        let asterisco = "*".repeat(i + 2)
        console.log(espacios + asterisco)
    }
