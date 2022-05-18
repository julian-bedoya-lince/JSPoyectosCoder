// let num;
// let i;
// let cont=0;
// let salir;

// while(i<=5)
//   {
//       console.log(i);
//       i++;

//   }
//   if(isNaN(num))

//  {

// for(i=1; i<=5; i++)
// {
//     num = parseInt(prompt("Ingresar Numero"+i+"de 5"));

//     cont = cont+num;
// }
// }
// if(!isNaN(num))
//   {
//      //i++ => i=i+1 => i+=1
//      for(let i=1; i<=num; i++)
//      {
//           console.log(i);
//      }
//   }
//  else
//   {
//     salir =  prompt("Ingreser ESC para salir y mostrar Resultado");
//   }

// let text = prompt("Ingresar Texto:");
// let numero = 5;
// console.log(`${text} ${numero}`);

// console.log(text);
// console.log("Resultado:"+cont);
let cont = 0;
let opcion = "";
let i;
// Mientras que opcion sea diferente de ESC entonrces haga lo que está dentro de los corchetes
while (opcion !== "ESC") {
  //   Vuelvo y pido opcion de tal manera que si ingresa ESC corto el programa sino vuelvo e imprimo Hola
  let numero = parseInt(prompt("Ingresa un numero"));
  cont = cont + numero;
  opcion = prompt("Para Salir escribe ESC, Sino Enter para continuar!");

  if (opcion !== "ESC") {
    for (i = "HOLA"; i >= numero; i++) {
      console.log(`${i} ${numero}`);
    }
    //   Imprimo solamente en pantalla siempre y cuando opcion sea diferente de ESC sino no imprimo nada
    // console.log(`${i} ${numero}`);
  } else if (opcion === "ESC") {
    console.log(`${i} ${numero}`);
    console.log(`El Resultado de La Operacion Es: ${cont}`);
    // for (i = 1; i >= numero; i++) {
    //   console.log(`${i} ${numero}`);
    // }
  }
}
/*Imprime
El número es: 1
El número es: 2
El número es: 3
El número es: 4
*/

// const datoUsuario = Number(prompt("Ingresa un numero"));

// let cont = 0

// if(isNaN(datoUsuario))
// {
//    alert("No ingresó un dato válido");
// }
// else
// {
//    //i++ => i=i+1 => i+=1
//    for(let i=1; i<=datoUsuario; i++)
//    {
//        cont++;
//         console.log(i)+cont;
//    }
// }
// if(!isNaN(datoUsuario))
//  {
//     //i++ => i=i+1 => i+=1
//     for(let i=1; i<=datoUsuario; i++)
//     {
//          console.log(i);
//     }
//  }
// else
//  {
//      alert("No ingresó un dato válido");
//  }

// Solo Pares

// const Salir = (prompt("ESC"));

// let i=0;
// const cont=0;

// while(i<=5)
// {
//     const datoUsuario = prompt("Ingresa un numero");
//     if(isNaN(datoUsuario))
// {
//     alert("No ingreso un dato válido");
//  }
//  else
//  {
//     //i++ => i=i+1 => i+=1
//     for(let i=1; i<=5; i++)
//     {

//          console.log(i)+cont;
//     }
//  }
//     if(datoUsuario==="ESC")
//     {
//        console.log("HOLA"+datoUsuario+cont);
//     }

// }

//  const Numero = prompt("introduce un Numero:")
// let suma = 0
// let cont = 0

// while(suma != "ESC")
// {
//     suma += parseInt (prompt("Introduce un numero:"))
//     cont++
// }
// console.log("La suma total es de:"+ suma);
// console.log("El total de numeros introducidos es de:"+cont);
