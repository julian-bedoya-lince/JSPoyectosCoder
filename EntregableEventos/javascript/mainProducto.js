const producto1 = new Producto(101, "arete Dama", 85000);
const producto2 = new Producto(103, "cadena Dama", 135000);
const producto3 = new Producto(105, "dije Dama", 18000);
const producto4 = new Producto(107, "pulcera Dama", 120000);
const producto5 = new Producto(109, "tobillera Dama", 110000);
const producto6 = new Producto(1011, "anillo Dama", 180000);

const productos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];
console.log("INICIAL:", productos);

inicializarAplicacionP();
//mostrarMenu();

function mostrarMenuProducto() {
  let opcion = 0;

  while (opcion !== 10) {
    opcion = Number(
      prompt(`Seleccione una acción:
                           1. Agregar Producto 
                           2. Eliminar Producto
                           3. Modificar Producto
                           4. Listar Producto
                           5. Buscar Producto
                           6. Listar REFERENCIA + NOMBRE
                           10. Salir`)
    );

    switch (opcion) {
      case 1: {
        agregarProducto();
        break;
      }
      case 2: {
        eliminarProducto();
      }
      case 3: {
        modificarProducto();
      }
      case 4: {
        listarProducto();
        break;
      }
      case 5: {
        buscarProducto();
        break;
      }
      case 6: {
        listarRefereciaMasNombre();
        break;
      }
      default: {
        alert("opcion inválida");
        break;
      }
    }
  }
}

function modificarProducto() {
  let ref = Number(
    prompt("Ingrese la referencia del producto que quiere modificar")
  );

  let existe = productos.some((producto) => producto.ref === ref);

  if (existe) {
    let encontrado = productos.find((producto) => producto.ref === ref);
    let nuevoProducto = prompt("Ingrese el nuevo producto");
    let nuevoPrecio = prompt("Ingrese el nuevo precio");

    encontrado.nombre = nuevoProducto;
    encontrado.precio = nuevoPrecio;

    console.log("MODIFICACION");
    console.log(productos);
  } else {
    alert("Producto no econtrado");
  }
}

function listarRefereciaMasNombre() {
  let NomYPrecio = productos.map(
    (producto) => producto.nombre + " " + producto.precio
  );

  console.log("MAP:");
  console.log(NomYPrecio);
}
