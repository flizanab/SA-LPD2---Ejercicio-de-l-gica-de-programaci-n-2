const temperatura = parseFloat(prompt("ingresa un numero"));

    if(!isNaN (temperatura)){
        if(temperatura >= -273.15 && temperatura <= 1.420*10**30){
            console.log("Tu temperatura en grados Celcius es: " + temperatura);
            console.log("temperatura en grados kelvin es: " + (temperatura + 273.15));
            console.log("temperatura en  grados Fahrenheit: es: " + ((temperatura * 9 / 5) + 32 ));
            }else if(temperatura > 1.420*10**30){
                console.log("la temperatura ingresada es mayor a la temperatura de Planck, la cual es la maxima teorica :" +(1.42*10**30) + "°C");
            }else{
                console.log("no existen temperaturas inferiores al 0 absoluto");
            }
    }else{
        console.log("la temperatura debe ser ingresada con un formato de Numero");
    }

