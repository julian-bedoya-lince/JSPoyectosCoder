function inicializarAplicacionP() {
  crearTituloP();
  crearMenuP();
}

function crearTituloP() {
  const miTitulo = document.createElement("h1");
  miTitulo.innerText = "Sistema de Gestion de Productos";
  document.body.appendChild(miTitulo);
}
function crearMenuP() {
  const listarOpciones = [
    "Listar Productos",
    "Agregar Producto",
    "Buscar Producto",
  ];

  listarOpciones.forEach((opcion) => {
    const btn = document.createElement("button");
    btn.innerText = opcion;

    switch (opcion) {
      case "Listar Productos": {
        btn.addEventListener("click", () => {
          listarProducto(productos);
        });
        break;
      }
      case "Agregar Producto": {
        btn.addEventListener("click", () => {
          agregarProducto();
        });
        break;
      }
      case "Buscar Producto": {
        btn.addEventListener("click", () => {
          let encontrados = buscarProducto();
          listarProducto(encontrados);
          console.table();
        });
        break;
      }
    }

    document.body.appendChild(btn);
  });
}

function listarProducto(miListaDeProductos) {
  let miListap = document.querySelector("#listaProductos");
  if (!miListap) {
    miListap = document.createElement("table");
    miListap.setAttribute("id", "listaProductos");
  }
  miListap.innerHTML = "";

  const encabezado = document.createElement("tr");

  const tdNombre = document.createElement("th");
  tdNombre.innerHTML = "Nombre";
  encabezado.appendChild(tdNombre);

  const tdPrecio = document.createElement("th");
  tdPrecio.innerHTML = "Precio";
  encabezado.appendChild(tdPrecio);

  const tdColorOro = document.createElement("th");
  tdColorOro.innerHTML = "ColorOro:";
  encabezado.appendChild(tdColorOro);

  const tdAcciones = document.createElement("th");
  tdAcciones.innerHTML = "Acciones";
  encabezado.appendChild(tdAcciones);

  miListap.appendChild(encabezado);

  miListaDeProductos.forEach((producto) => {
    const nodotr = document.createElement("tr");
    let nodotd = document.createElement("td");
    nodotd.innerHTML = `${producto.nombre}`;
    nodotr.appendChild(nodotd);

    nodotd = document.createElement("td");
    nodotd.innerHTML = `${producto.precio}`;
    nodotr.appendChild(nodotd);

    nodotd = document.createElement("td");
    nodotd.innerHTML = `No reporta`;
    nodotr.appendChild(nodotd);

    nodotd = document.createElement("td");
    nodotd.innerHTML = `<button id=${producto.ref}>Borrar</button> | Editar`;

    nodotr.appendChild(nodotd);
    miListap.appendChild(nodotr);
  });

  document.body.appendChild(miListap);
  programarEventosP();
}

function programarEventosP() {
  productos.forEach((element) => {
    const btn = document.getElementById(element.ref);
    btn.addEventListener("click", () => eliminarProducto());
  });
}

function agregarProducto() {
  let ref = 1;
  if (productos.length > 0) {
    ref = productos[productos.length - 1].ref + 1;
  }

  let nombre = prompt("ingrese una nombre producto");
  let precio = prompt("ingrese un precio del producto");
  let producto = new Producto(ref, nombre, precio);

  productos.push(producto);
  console.table(productos);
  listarProducto(productos);
}

function buscarProducto() {
  let paramBusqueda = prompt("Ingresa el nombre que quieres buscar");

  let encontrados = productos.filter(
    (producto) =>
      producto.nombre
        .toLowerCase()
        .indexOf(paramBusqueda.toLocaleLowerCase()) !== -1 ||
      producto.precio
        .toLowerCase()
        .indexOf(paramBusqueda.toLocaleLowerCase()) !== -1
  );

  return encontrados;
}

function eliminarProducto() {
  let ref = Number(prompt("Ingrese la ref del producto que quiere eliminar"));

  let encontrado = productos.find((producto) => producto.ref === ref);

  if (!encontrado) {
    alert("Producto no Encontrado");
  } else {
    let index = productos.indexOf(encontrado);

    productos.splice(index, 1);

    console.log("Borrar producto");
    console.log(productos);
  }
}
