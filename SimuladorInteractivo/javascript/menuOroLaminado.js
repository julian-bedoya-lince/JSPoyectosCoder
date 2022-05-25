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

    let categoria = 0;
    let i = "Hola";
    if (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4) {
      while (categoria >= 2) {
        categoria = Number(
          prompt(`Ingrese una opcion:
                                1. blanco 
                                2. rosa`)
        );
      }
      alert(`Categoria: ${categoria + valorDelProducto} `);
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

function ventaCadenas() {
  cobrar(1);

  alert("Gracias por su compra!");
  console.log(
    `El Resultado de La Operacion Es: ${opcion} Categoria ${categoria}`
  );
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
      prompt(`El valor de su compra es ${valorDelProducto} 
        Ingrese dinero:`)
    );
  }

  alert(`Su cambio es: ${dineroIngresado - valorDelProducto} `);
}
