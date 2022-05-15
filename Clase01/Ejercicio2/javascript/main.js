
/*
    Escriba un programa que le pida a un usuario 2 números y muestre:

    A. El resultado de la suma en la consola
    B. El resultado de la multiplicaión en un alert


    Debe indicarle al usuario la operación ejecutada. 

    Por ejemplo, si el usuario ingresa los números 8 y 10

    Debe mostrar un alert que diga: 
    "La multiplicación de los números ingresados es: 80"

    Y en la consola: 
    "La suma de los números ingresados es: 18"



*/



let Num1 = Number(prompt("Escriba un numero:"));
let Num2 = Number(prompt("Escriba otro numero:"));

let Suma = Num1+Num2;
let Mul = Num1*Num2;

alert("La Multiplicacion es:"+Mul);
console.log("La Suma es:"+Suma);
