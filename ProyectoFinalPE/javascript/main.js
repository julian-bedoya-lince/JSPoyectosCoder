let contrasena = "";
let i = "Hola! ";

while (contrasena !== "1234") {
  const datoUsuario = prompt("Ingresar Usuario Adminstrador:");
  contrasena = prompt("Ingresar Contrasena:");

  if (contrasena !== "1234" || datoUsuario !== "Ofelia") {
    alert("Usuario o Contrasena Incorrecta!");
  } else {
    for (let i = 0; i >= datoUsuario; i++) {
      console.log(i);
    }
  }
}

function mostrarMenuProducto() {
  let opcion = 0;

  while (opcion !== 4) {
    opcion = Number(
      prompt(`Seleccione una acción:
                            1. Agregar Producto
                            2. Listar Producto
                            3. Consultar Producto
                            4. Salir`)
    );

    switch (opcion) {
      case 1: {
        agregarProducto();
        break;
      }
      case 2: {
        listarProductos();
        break;
      }
      case 3: {
        consultar();
        const encontrado = consultar();

        if (encontrado) {
          alert(`El usuario es:
                          ID: ${encontrado.referencia}
                          NOMBRE: ${encontrado.nombre}
                          APELLIDO: ${encontrado.precio}`);
        } else {
          alert("NO LO ENCONTRÉ");
        }

        break;
      }
      case 4: {
        alert("GRACIAS");
        break;
      }

      default: {
        alert("opcion inválida");
        break;
      }
    }
  }
}
const h1 = document.getElementsByTagName("h1")[0];
h1.innerText = `!Bienvenida, ${"Ofelia"}`;

class Producto {
  constructor(referencia, nombre, precio) {
    this.referencia = referencia;
    this.nombre = nombre;
    this.precio = precio;
  }
}
function agregarProducto() {
  const referencia = 0;
  const nombre = prompt("Ingrese el nombre del Producto");
  let precio = prompt("Ingrese el precio del Producto");

  const productoagregado = new Producto(
    getIdProd(),
    referencia,
    precio,
    nombre
  );

  productos.push(productoagregado);

  console.log("PRODUCTO AGREGADO:");

  console.table(productos);
}
function getIdProd() {
  if (productos.length === 0) {
    return 1;
  } else {
    const ultimoP = productos[productos.length - 1];
    return ultimoP.referencia + 1;
  }
}

// Agregar Productos

//   let producto = [
//     {
//       referencia,
//       nombre,
//       precio,
//     },
//   ];
//   productos.push(producto);
//   console.table("PRODUCTO AGREGADO:");

//   console.table([
//     {
//       referencia,
//       nombre,
//       precio,
//     },
//   ]);
//   console.table(productos);
// }
// Listar usuarios DOM
function listarProductos(producto) {
  const div = document.createElement("listarProductos");
  div.setAttribute("class", producto.nombre);
  // div.classList.add("otra_clase");
  div.innerHTML = ` <div>${producto.referencia}
                    ${producto.nombre}
                    ${producto.precio}</div>`;

  document.body.appendChild(div);
}

listarProductos(new Producto(101, "arete Dama", 85000));
listarProductos(new Producto(102, "arete Hombre", 75000));
listarProductos(new Producto(103, "cadena Dama", 135000));
listarProductos(new Producto(104, "cadena Hombre", 165000));
listarProductos(new Producto(105, "dije Dama", 18000));
listarProductos(new Producto(106, "dije Hombre", 16000));
listarProductos(new Producto(107, "pulcera Dama", 120000));
listarProductos(new Producto(108, "pulcera Hombre", 130000));
listarProductos(new Producto(109, "tobillera Dama", 110000));
listarProductos(new Producto(1010, "tobillera Hombre", 120000));
listarProductos(new Producto(1011, "anillo Dama", 180000));
listarProductos(new Producto(1012, "anillo Hombre", 200000));
listarProductos(new Producto(1013, "reloj Dama", 280000));
listarProductos(new Producto(1014, "reloj Hombre", 340000));

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

//Consulatar Productos
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
// function listarProductos() {
//   console.table("LISTAR PRODUCTOS:");
//   productos.forEach((producto) => {
//     console.table(
//       ` ${producto.referencia}
//                            ${producto.nombre}
//                            ${producto.precio}`
//     );
//   });
// }

class Usuario {
  constructor(id, nombre, apellido) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

const usuario1 = new Usuario(1, "Reynel", "Bedoya");
const usuario2 = new Usuario(2, "jenny", "Molina");
const usuario3 = new Usuario(3, "Yanely", "Carrasquilla");
const usuario4 = new Usuario(4, "tefha", "Jarramillo");
const usuario5 = new Usuario(5, "Kathe", "Osorio");
const usuario6 = new Usuario(6, "Carlos", "Molina");

const usuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6];
// console.log("INICIAL:", usuarios);

// mostrarMenuUsuario();

function mostrarMenuUsuario() {
  let opcion = 0;

  while (opcion !== 10) {
    opcion = Number(
      prompt(`Seleccione una acción:
                            1. Agregar Usuario
                            2. Eliminar Usuario
                            3. Modificar Usuario
                            4. Listar usuarios
                            5. Buscar Usuario
                            6. Filtrar Listado
                            10. Salir`)
    );

    switch (opcion) {
      case 1: {
        agregarUsuario();
        break;
      }
      case 2: {
        eliminarUsuario();
        break;
      }
      case 3: {
        modificarUsuario();
        break;
      }
      case 4: {
        listarUsuarios();
        break;
      }
      case 5: {
        const encontrado = buscarUsuario();

        if (encontrado) {
          alert(`El usuario es:
                          ID: ${encontrado.id}
                          NOMBRE: ${encontrado.nombre}
                          APELLIDO: ${encontrado.apellido}`);
        } else {
          alert("NO LO ENCONTRÉ");
        }

        break;
      }
      case 6: {
        const filtrados = filtrarListado();
        console.log("FILTRADOS");
        console.table(filtrados);
        break;
      }
      case 10: {
        alert("GRACIAS");
        break;
      }
      default: {
        alert("opcion inválida");
        break;
      }
    }
  }
}

function agregarUsuario() {
  let nombre = prompt("Ingrese el nombre del usuario");
  let apellido = prompt("Ingrese el apellido del usuario");
  let usuario = new Usuario(getId(), nombre, apellido);
  usuarios.push(usuario);

  console.log("USUARIO AGREGADO:");
  console.table(usuarios);
}

function getId() {
  if (usuarios.length === 0) {
    return 1;
  } else {
    const ultimo = usuarios[usuarios.length - 1];
    return ultimo.id + 1;
  }
}

function listarUsuarios() {
  console.log("LISTAR USUARIOS:");
  usuarios.forEach((usuario) => {
    console.log(usuario.nombre + " " + usuario.apellido);
  });
}

function eliminarUsuario() {
  const id = Number(prompt("Ingrese el id del que quiere borrar"));

  const esta = usuarios.some((usuario) => usuario.id === id);

  if (esta) {
    const soloIds = usuarios.map((usuario) => usuario.id);

    let indice = soloIds.indexOf(id);

    usuarios.splice(indice, 1);
    alert("Usuario borrado");

    console.log("BORRADO");
    console.table(usuarios);
  } else {
    alert("Usuario no encontrado");
  }
}

function buscarUsuario() {
  let idABuscar = Number(prompt("Ingrese el id del usuario:"));

  return usuarios.find((usuario) => idABuscar === usuario.id);
  /*
                            Función de comparación
                            el retorno de la función es un booleano
                            y se puede formar de manera simple o
                            compuesta (usando && ó ||)
                          */
}

function modificarUsuario() {}

function filtrarListado() {
  let abuscar = prompt("Ingrese un texto para buscar");

  return usuarios.filter(
    (usuario) =>
      usuario.nombre.indexOf(abuscar) !== -1 ||
      usuario.apellido.indexOf(abuscar) !== -1
  );
}
