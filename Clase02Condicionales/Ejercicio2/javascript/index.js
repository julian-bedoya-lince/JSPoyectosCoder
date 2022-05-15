const operacion = prompt("Ingrese una Operacion: SUMA - MUL - REST - DIV");
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
    else if (operacion === "REST")
    {
        console.log("la Resta es: "+ (num1-num2));

    }
    else if (operacion === "DIV")
    {
        
        if (num2 === 0)
        {
            alert("No Se Puede Dividir Por 0");
        }
        else
        {
            console.log("la Division es: "+ (num1/num2));
        }
    }
    else
    {
        console.log("Operacion Invalida!")
    }
}