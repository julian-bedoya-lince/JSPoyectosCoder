const operacion = prompt("Ingrese una Operacion: SUMA - MUL");
const num1 = Number (prompt("Ingrese un numero:"));
const num2 = Number (prompt("Ingrese otro numero:"));

if (isNaN(num1) || isNaN(num2))
{
    alert("Numeros no validos!")
}
else
{
    if(operacion === "SUMA")
    {
        console.log("la suma es: "+ (num1+num2));
    }
    else if (operacion === "MUL")
    {
        console.log("la multiplicacion es: "+ (num1*num2));

    }
    else
    {
        console.log("Operacion Invalida!")
    }
}
