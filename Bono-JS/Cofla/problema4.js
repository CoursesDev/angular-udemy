class Calculadora {
    constructor(){

    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2)
    }

    restar(num1, num2){
        return parseInt(num1) - parseInt(num2)
    }
    
    dividir(num1, num2){
        return parseInt(num1) / parseInt(num2)
    }
    
    multiplicar(num1, num2){
        return parseInt(num1) * parseInt(num2)
    }

    potencia(num, exp){
        return num ** exp;
    }

    raizCuadrada(num){
        return Math.sqrt(num);
    }

    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();


alert("¿Qué operación desea realizar?");
let operacion = prompt("1. Suma, 2. Resta, 3. Dividir, 4. Multiplicar, 5. Potencia, 6. Raíz Cuadrada, 7. Raíz Cúbica");
if (operacion == 1 || operacion == 2 || operacion == 3 || operacion == 4 || operacion == 5) {
    num1 = prompt("Ingrese el primer número");
    num2 = prompt("Ingrese el segundo número");
}

if (operacion == 1) {
    resultado = calculadora.sumar(num1, num2);
    alert(`Tu resultado es: ${resultado}`)
}else if(operacion == 2){
    resultado = calculadora.restar(num1, num2);
    alert(`Tu resultado es: ${resultado}`)
}else if(operacion == 3){
    resultado = calculadora.dividir(num1, num2);
    alert(`Tu resultado es: ${resultado}`)
}else if(operacion == 4){
    resultado = calculadora.multiplicar(num1, num2);
    alert(`Tu resultado es: ${resultado}`)
}else if(operacion == 5){
    resultado = calculadora.potencia(num1, num2);
    alert(`Tu resultado es: ${resultado}`)
}else if(operacion == 6){
    let num = prompt("Ingrese el número");
    resultado = calculadora.raizCuadrada(num);
    alert(`Tu resultado es: ${resultado}`)
}else if(operacion == 7){
    let num = prompt("Ingrese el número");
    resultado = calculadora.raizCubica(num);
    alert(`Tu resultado es: ${resultado}`)
}else{
    alert("opcion incorrecta")
}

