verMenu();

function verMenu() {
  let opcion = 0;
  let categoria = 0;
  while (opcion !== 5) {
    opcion = Number(
      prompt(`Ingrese una opcion:
                                1. Cadenas 
                                2. Aretes
                                3. Pulceras
                                4. Anillos
                                5. Salir`)
    );

    if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4) {
      categoria = Number(
        prompt(`Ingrese una opcion:
                                1. blanco 
                                2. rosa`)
      );
      let rosa = 2;
      let blanco = 3;
    }
    switch (categoria) {
      case 1: {
        montorosa();

        break;
      }

      case 2: {
        montoblanco();
        break;
      }
    }

    switch (opcion) {
      case 1: {
        ventaCadenas();

        break;
      }

      case 2: {
        ventaAretes();
        break;
      }
      case 3: {
        ventaPulceras();
        break;
      }
      case 4: {
        ventaAnillos();
        break;
      }

      case 5: {
        alert("Gracias Hasta pronto!");
        break;
      }
      default: {
        alert("Opcion Invalida");
        break;
      }
    }
  }
}
function montorosa(categoria, rosa) {
  alert("su monto categoria rosa es");
}
function montorosa(categoria, blanco) {
  alert("su monto categoria blanco es");
}
function ventaCadenas() {
  cobrar(1);

  alert("Gracias por su compra!");
}

function ventaAretes() {
  cobrar(2);
  alert("Gracias por su compra!");
}

function ventaPulceras() {
  cobrar(3);
  alert("Gracias por su compra!");
}
function ventaAnillos() {
  cobrar(4);
  alert("Gracias por su compra!");
}
function cobrar(valorDelProducto) {
  let dineroIngresado = 0;

  while (dineroIngresado < valorDelProducto) {
    dineroIngresado += Number(
      prompt(`El valor de su compra es ${categoria + valorDelProducto} 
        Ingrese dinero:`)
    );
  }

  alert(`Su cambio es: ${dineroIngresado - valorDelProducto} `);
}
