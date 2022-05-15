 // Imprimir números del 1 al 10;

 //INICIO Y UN FIN

 const dataUsuario = Number(prompt("Ingresa un Numero:"));

 if (isNaN(dataUsuario))
 {
    alert("Dato Invalido!");

 }
 else
 {
    for(let i=1; i<=dataUsuario; i++)
    {
        console.log(i);
    }
 }
 if (!isNaN(dataUsuario))
 {
    for(let i=1; i<=dataUsuario; i++)
    {
        console.log(i);
    }
 }
 else
 {
    alert("Dato Invalido!");
 }

 /* 
    i = 1 // => 1
    i = 2 // => 2
    i = 3 // => 3
    ...
    i= 10 => 10
    i=11 => Fin del  ciclo

  */