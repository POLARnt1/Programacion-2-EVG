const operaciones = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b === 0 ? "division entre cero" : a / b ),
};
function calcular(a, op , b) {
    const fn = operaciones[op];
    return fn ? fn(a, b): a ** b
}
console.log(calcular(8, "/", 4)) // 40