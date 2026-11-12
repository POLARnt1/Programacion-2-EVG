function esPrimo(n){
  if (n < 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function convertirTemperatura(v, de, a){
    if (de === "C" && a === "F") {
        return (v * 9/5) + 32;
    } else if (de === "F" && a === "C") {
        return (v - 32) * 5/9;
    } else if (de === "C" && a === "K") {
        return v + 273.15;
    } else if (de === "K" && a === "C") {
        return v - 273.15;
    } else if (de === "F" && a === "K") {
        return (v - 32) * 5/9 + 273.15;
    } else if (de === "K" && a === "F") {
        return (v - 273.15) * 9/5 + 32;
    }
    return v;   
}

console.log(esPrimo(7))
console.log(convertirTemperatura(85, "F", "C"))