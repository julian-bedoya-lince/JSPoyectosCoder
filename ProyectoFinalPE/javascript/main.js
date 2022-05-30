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
