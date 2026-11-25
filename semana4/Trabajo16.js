"use strict"
let arreglo = "2024101:entrada;2024102 : Entrada;2024103:ENTRADA;;2024104:entrada ;2024101:salida;abc123:entrada;2024105:Entrada;  2024106 :entrada  ;2024102:SALIDA;2024107:baño;2024108:entrada;2024108:entrada;20241:entrada;2024109:Salida;2024110:entrada;;;2024103:salida;2024111;2024112 : ENTRADA ;20241130:entrada;2024104:salida;2024113:entrada;2024101:entrada;2024114:Comida;2024105:SALIDA ;  ;2024115:entrada;2024106:salida;2024116:entrada ;2024117:entrada;2024110:Salida;2024118:entrada;2024112:salida;2024119 :entrada;2024120:ENTRADA;2024121:entrada;2024113:SALIDA;2024122:entrada ;2024123:entrada"

function limpiarEventos(texto) {
  const eventos = [];
  const partes = texto.split(";");
  for (let i = 0; i < partes.length; i++) {
    const evento = partes[i].split(":");

    if (evento.length === 2) {
      const matricula = evento[0].trim();
      const tipo = evento[1].trim().toLowerCase();

      if (/^\d{7}$/.test(matricula) && (tipo === "entrada" || tipo === "salida")) {
        eventos.push({ matricula: matricula, tipo: tipo });
      }
    }
  }
  return eventos;
}

function quienEstaDentro(eventos){
  const dentro = [];

  for (let i = 0; i < eventos.length; i++) {
    const evento = eventos[i];
    const posicion = dentro.indexOf(evento.matricula);

    if (evento.tipo === "entrada" && posicion === -1) {
      dentro.push(evento.matricula);
    } else if (evento.tipo === "salida" && posicion !== -1) {
      dentro.splice(posicion, 1);
    }
  }
  return dentro;
};


console.log(limpiarEventos(arreglo))