const registro =
  "  Café: 35.50; té verde : 28 ;Pan Dulce:18.5; CAFÉ:35.5;; galleta de avena: 22.10;  Té Verde:28 ; Jugo de naranja: 40; pan dulce : 18.50; Café Americano: abc; galleta de avena:22.1; ;Jugo de Naranja:40 ; Sándwich:55.75; té verde: -10; :15; Pan dulce:18.5; Café :35.5 ; Sándwich : 55.75 ; galleta de avena:";

function limpiarRegistro(registro) { // Devuelve un arreglo de objetos con producto y precio, eliminando entradas inválidas
  return registro
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(";").map((p) => p.toLowerCase().trim())
    .filter((p) => {
      const partes = p.split(":");
      if (partes.length !== 2) return false;
      const producto = partes[0].trim();
      const precio = Number(partes[1]);
      return producto !== "" && Number.isFinite(precio) && precio > 0;
    })
    .map((p) => {
      const partes = p.split(":");
      return { producto: partes[0].trim(), precio: Number(partes[1]) };
    });
}

function sumar(...precios) { // Suma cualquier cantidad de precios y redondea el resultado a centavos
    const total = precios.reduce((acumulado, precio) => acumulado + precio, 0);
    return Math.round(total * 100) / 100;
}

function resumenPorProducto(ventas) { // Devuelve un arreglo de objetos con producto, veces y ingreso, ordenado por ingreso y nombre
  const resumen = [];
  for (let i = 0; i < ventas.length; i++) {
    const venta = ventas[i];
    let item = resumen.find((r) => r.producto === venta.producto);
    if (!item) {
      item = { producto: venta.producto, veces: 0, ingreso: 0 };
      resumen.push(item);
    }

    item.veces++;
    item.ingreso += venta.precio;
  }
  for (let i = 0; i < resumen.length; i++) {
    resumen[i].ingreso = Math.round(resumen[i].ingreso * 100) / 100;
  }

  return resumen.sort(
    (a, b) => b.ingreso - a.ingreso || a.producto.localeCompare(b.producto, "es")
  );
}

function descuento(precio, porcentaje = 15) { // Calcula el precio después del descuento, que por defecto es del 15
    return precio * (1 - porcentaje / 100);
}

function productoAlAzar(ventas) { // Elige al azar un producto distinto
    const productos = [...new Set(ventas.map((venta) => venta.producto))];
    return productos[Math.floor(Math.random() * productos.length)];
}

const ventas = limpiarRegistro(registro);
const resumen = resumenPorProducto(ventas);

for (let i = 0; i < resumen.length; i++) {
  const r = resumen[i];
  console.log(`${r.producto}: ${r.veces} ventas, $${r.ingreso.toFixed(2)}`);
}
console.log(`Total: $${sumar(...ventas.map((v) => v.precio)).toFixed(2)}`);
console.log(`Promoción: ${productoAlAzar(ventas)}`);