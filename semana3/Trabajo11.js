//A Prediccion: 4
let n = 1
while (n <= 3) n++;
console.log(n)
//Resultado: 4, Salio lo que esperaba, En el while esta un <= que significa que sea menor o igual que 3, cuando llega a 3 hace un paso extra porque aun cumple la condicion

//B Prediccion: 0, 10
let x = 10, y = 0;
while (x < 5) {x++, y++}
console.log(y, x)
//Resultado: 0, 10 ; Salio lo que esperaba, x ya es mayor que 5 por lo que no se hace el ciclo while y no aumenta tanto x como y

//C Prediccion: 0 10
let k = 10, v = 0
do { v++; k++ } while (k < 5)
console.log(v, k)
//Resultado: 1, 11; No salio lo que esperaba, Primero esta el do que realiza la accion de aumentar en uno, despues se revisa el while y para el ciclo

//D Prediccion: fin
let t = 3
while (t > 3) { console.log(t); t--}
console.log("fin")
//Resultado: Salio lo que esperaba, a diferencia de usar >= de > es que tiene que ser un numero mayor que el que se da, en este caso como 3 NO es mayor que 3 no se hace el ciclo while, a diferencia de >= que incluye el 3 en la condicion