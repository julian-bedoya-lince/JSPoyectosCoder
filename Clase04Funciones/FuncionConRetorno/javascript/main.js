// Funcion Con Retorno

function multiplicar(x, y) {
  const resultado = x * y;
  return resultado;
}

const num1 = Number(prompt("Ingrese un num:"));
const num2 = Number(prompt("Ingrese Otro num:"));

let result = multiplicar(num1, num2);
console.log(`La Multiplicacion Es: ${result}`);
