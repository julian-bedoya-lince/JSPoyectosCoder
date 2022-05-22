// Funcion Con Parametros

function sumar(a, b) {
  console.log(`SUMA ES ${a + b}`);
}

const oper1 = Number(prompt("Ingrese un numero:"));
const oper2 = Number(prompt("Ingrese otro numero:"));

sumar(oper1, oper2);

sumar("Hola", "Pepito");
