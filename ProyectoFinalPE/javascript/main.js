// let contrasena = "";
// let i = "Hola! ";

// while (contrasena !== "1234") {
//   const datoUsuario = prompt("Ingresar Usuario Adminstrador:");
//   contrasena = prompt("Ingresar Contrasena:");

//   if (contrasena !== "1234" || datoUsuario !== "Julian") {
//     alert("Usuario o Contrasena Incorrecta!");
//   } else {
//     for (let i = 0; i >= datoUsuario; i++) {
//       console.log(i);
//     }

//     alert("BIENVENIDO!");

//     console.log(`${i} ${datoUsuario}`);
//   }
// }
let nombreProv = prompt("Ingrese su nombre");
const h1 = document.getElementsByTagName("h1")[0];
h1.innerText = `!Bienvenido, ${nombreProv}!`;

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
  console.table("LISTAR PRODUCTOS:");
  productos.forEach((producto) => {
    console.table(
      ` ${producto.referencia}
                           ${producto.nombre}
                           ${producto.precio}`
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
  console.table("PRODUCTO AGREGADO:");

  console.table([
    {
      referencia,
      nombre,
      precio,
    },
  ]);
  console.table(productos);
}

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
