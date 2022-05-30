let contrasena = "";
let i = "Hola! ";

while (contrasena !== "1234") {
  const datoUsuario = prompt("Ingresar Usuario Adminstrador:");
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
  { referencia: 101, nombre: "arete Dama", precio: 85000 },
  { referencia: 102, nombre: "arete Hombre", precio: 75000 },
  { referencia: 103, nombre: "cadena Dama", precio: 135000 },
  { referencia: 104, nombre: "cadena Hombre", precio: 165000 },
  { referencia: 105, nombre: "dije Dama", precio: 18000 },
  { referencia: 106, nombre: "dije Hombre", precio: 16000 },
  { referencia: 107, nombre: "pulcera Dama", precio: 120000 },
  { referencia: 108, nombre: "pulcera Hombre", precio: 130000 },
  { referencia: 109, nombre: "tobillera Dama", precio: 110000 },
  { referencia: 1010, nombre: "tobillera Hombre", precio: 120000 },
  { referencia: 1011, nombre: "anillo Dama", precio: 180000 },
  { referencia: 1012, nombre: "anillo Hombre", precio: 200000 },
  { referencia: 1013, nombre: "reloj Dama", precio: 280000 },
  { referencia: 1014, nombre: "reloj Hombre", precio: 340000 },
];

// Consulatar Productos
function consultar() {
  let palabra = document.getElementById("palabra").value;
  let palabraMinuscula = palabra.toLowerCase();
  let referencia = parseInt(palabra);
  console.log(palabraMinuscula);
  let productoEncontrado = [];
  productos.forEach((producto) => {
    if (
      producto.nombre.includes(palabraMinuscula) ||
      producto.referencia == referencia
    ) {
      productoEncontrado.push(producto);
    }
  });
  console.log(productoEncontrado);
}

// Listar Productos
function listarProductos() {
  console.log("LISTAR PRODUCTOS:");
  productos.forEach((producto) => {
    console.log(
      producto.referencia + " " + producto.nombre + " " + producto.precio
    );
  });
}

// Agregar Productos
function agregarProducto() {
  const referencia = prompt("Ingrese nueva Referencia");
  const nombre = prompt("Ingrese el nombre del Producto");
  const precio = prompt("Ingrese el precio del Producto");
  let producto = [
    {
      referencia,
      nombre,
      precio,
    },
  ];
  productos.push(producto);

  console.log("PRODUCTO AGREGADO:");
  console.log(productos);
}

// Calculadora
function mostrarMenu() {
  let opcion = 0;

  while (opcion !== 5) {
    opcion = Number(
      prompt(`Ingrese una opcion
                                1. SUMA
                                2. RESTA
                                3. MULTIPLICACION
                                4. DIVISION
                                5. FIN`)
    );
    let a = 0;
    let b = 0;
    if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4) {
      a = Number(prompt("Ingrese un numero:"));
      b = Number(prompt("Ingrese otro numero:"));
    }

    switch (opcion) {
      case 1: {
        sumar(a, b);
        break;
      }
      case 2: {
        restar(a, b);
        break;
      }
      case 3: {
        multiplicar(a, b);
        break;
      }
      case 4: {
        let res = dividir(a, b);
        alert("DIV" + res);
        break;
      }
      case 5: {
        alert("Gracias por usar nuestros Servicios!");
        break;
      }
      default: {
        alert("Ingrese una Opcion Valida!");
        break;
      }
    }
  }
}

function sumar(a, b) {
  alert("La suma es" + (a + b));
}

function restar(a, b) {
  alert("La resta es" + (a - b));
}

function multiplicar(a, b) {
  alert("La miltiplicacion es" + a * b);
}

function dividir(a, b) {
  let resultado = a / b;
  return resultado;
}
