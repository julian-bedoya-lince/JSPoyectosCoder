let cont = 0;
let opcion = "";
let i = "Hola";
// Mientras que opcion sea diferente de ESC entonrces haga lo que está dentro de los corchetes
while (opcion !== "ESC") {
  //   Vuelvo y pido opcion de tal manera que si ingresa ESC corto el programa sino vuelvo e imprimo Hola

  let numero = parseInt(prompt("Ingresa un numero"));

  cont = cont + numero;
  opcion = prompt("Para Salir escribe ESC, Sino Enter para continuar!");

  if (opcion !== "ESC") {
    for (let i = 0; i >= numero; i++) {
      console.log(i);
    }
    //   Imprimo solamente en pantalla siempre y cuando opcion sea diferente de ESC sino no imprimo nada

    console.log(` ${i} ${numero}`);
  } else if (opcion === "ESC") {
    console.log(`${i} ${numero}`);
    console.log(`El Resultado de La Operacion Es: ${cont}`);
  }
}
