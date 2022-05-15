const operacion = prompt(`INGRESE UNA OPERACION: 
        SUMA 
        MUL
        DIV
        RESTA`);

    const numero1 = Number(prompt("Ingrese un numero"));
    const numero2 = Number(prompt("Ingrese otro numero"));

    if(isNaN(numero1) || isNaN(numero2))
    {
        alert("NUMEROS NO VALIDOS");
    }
    else
    {
        switch(operacion)
        {
            case "SUMA": // if(operacion == "SUMA")
            {
                console.log("LA SUMA ES: "+ (numero1+numero2));
                break;
            }
            case "MUL":
            {
                    console.log("LA MUL ES: "+ (numero1*numero2));
                    break;
            }
            case "RESTA":
            {
                console.log("LA RESTA ES: "+ (numero1-numero2));
                break;
            }
            case "DIV":
            {

                if(numero2===0)
                {
                     alert("NO PUEDO DIVIDIR POR 0");
                }
                else
                {
                    console.log("LA DIV ES: "+ (numero1/numero2));
                } 
                break;
            }
            default: // else final
            {
                console.log("OPERACION INVALIDA");
                break;
            }
        }
    }    