let contrasena = "";
let i = "Hola! ";

while (contrasena !== "1234") {
  const datoUsuario = prompt("Ingresar Usuario:");
  contrasena = prompt("Ingresar Contrasena:");

  if (contrasena !== "1234" || datoUsuario !== "Julian") {
    alert("Usuario o Contrasena Incorrecta!");
  } else {
    for (let i = 0; i >= datoUsuario; i++) {
      console.log(i);
    }
    alert("BIENVENIDO!");
    console.log(`${i} ${datoUsuario}`);
  }
}

const productos = [
  { referencia: 1001, nombre: "areta", precio: 85000 },
  { referencia: 1002, nombre: "cadena", precio: 35000 },
  { referencia: 1003, nombre: "dije", precio: 180000 },
  { referencia: 1004, nombre: "pulcera", precio: 180000 },
  { referencia: 1005, nombre: "tobillera", precio: 180000 },
  { referencia: 1006, nombre: "anillo", precio: 180000 },
  { referencia: 1007, nombre: "reloj", precio: 180000 },
];
