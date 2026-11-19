//A Prediccion: 2, 1
let x = 1;
function f() {
    let x = 2; return x;
}
console.log(f(), x);
//Resultado: Salio lo que esperaba, primero llama a la funcion en donde "x" local es 2, despues llama a la "x" global que es 1

//B Prediccion: 5
function g() {
    total = 5;
}
g();
console.log(total);
//Resultado: Salio lo que esperaba, a pesar de que total es un parametro local, se llama la funcion antes del console.log, por lo que hace que la variable local se haga global

//C Prediccion: 0, 10, 20
const fs = [];
for (let i = 0; i < 3; i++) fs.push(() => i * 10); 
console.log(fs.map((f) => f()))
//Resultado: Salio de lo que esperaba, el ciclo for hace 3 vueltas y en cada vuelta i va aumentando de uno en uno, fs.map guarda el valor de i en cada ciclo por lo que cambia su valor

//D Prediccion: 11, 11 ,11
function crear(){
    let n = 10
    return () => ++n;
}
const a = crear(), b = crear();
console.log(a(), a(), b())
//Resultado: 11, 12, 11 . No salio de lo que yo esperaba, n vale 10 y en la funcion la regresa aumentando uno, cuando se llama otravez la funcion como en este caso en el "a" guarda su valor y se vuelve a llamar la funcion con un nuevo valor siendo 11 y se aumenta 1 por eso sale 12 la segunda vez que llamas a "a"