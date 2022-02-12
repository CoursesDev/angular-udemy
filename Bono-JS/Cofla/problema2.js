
// let free = false;

// const validarCliente = (hora) =>{
// 	let edad = prompt("¿Cúal es tu edad?");
// 	if (edad > 18) {
// 		if (hora >= 2 && hora < 7 && free == false){
// 			alert(`Son las Puedes pasar gratis`);
// 			free = true;
// 		} else {
// 			alert(`Son las ${hora} Puedes pasar, pero tienes que pagar entrada`)
// 		}
// 	} else {
// 		alert("Eres menor de edad por ende no vas a pasar")
// 	}
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(1);

//Problema 2

// let cantidadAlumnos = prompt("¿Cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidadAlumnos; i++){
// 	alumnosTotales[i] = [prompt("Nombre del alumno" + (i+1)),0];
// }

// const tomarAsistencia = (nombre, posicion) =>{
// 	let presente = prompt(nombre);
// 	if (presente == "p" || presente == "P"){
// 		alumnosTotales[posicion][1]++;
// 	}
// }

// for (i = 0; i < 30; i++) {
// 	for (alumno in alumnosTotales) {
// 		tomarAsistencia(alumnosTotales[alumno][0], alumno);
// 	}
// }

// for (alumno in alumnosTotales){
// 	let resultado = `${alumnosTotales[alumno][0]}: <br>
// 	________________Presentes: ${alumnosTotales[alumno][1]} <br>
// 	________________Ausencia: ${30 - alumnosTotales[alumno][1]}`;
// 	if (30 - alumnosTotales[alumno][1] > 18) {
// 		resultado += "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
// 	} else {
// 		resultado += "<br><br>";
// 	}
// 	document.write(resultado);
// }




//Problema 3

const sumar = (num1, num2) =>{
	return parseInt(num1) + parseInt(num2);
}

const restar = (num1, num2) =>{
	return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1, num2) =>{
	return parseInt(num1) * parseInt(num2);
}

const dividir = (num1, num2) =>{
	return parseInt(num1) / parseInt(num2);
}

alert('¿Qué operación deseas realizar?');
let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicar, 4:Dividir");
let resultado;

if(operacion == 1){
	let num1 = prompt("Ingresa número 1: ");
	let num2 = prompt("Ingresa número 2: ");
	resultado = sumar(num1, num2);
	alert(`El resultado de la suma es: ${resultado}`);
}else if (operacion == 2){
	let num1 = prompt("Ingresa número 1: ");
	let num2 = prompt("Ingresa número 2: ");
	resultado = restar(num1, num2);
	alert(`El resultado de la resta es: ${resultado}`);
}else if (operacion == 3){
	let num1 = prompt("Ingresa número 1: ");
	let num2 = prompt("Ingresa número 2: ");
	resultado = multiplicar(num1, num2);
	alert(`El resultado de la multiplicación es: ${resultado}`);
}else if (operacion == 4){
	let num1 = prompt("Ingresa número 1: ");
	let num2 = prompt("Ingresa número 2: ");
	resultado = dividir(num1, num2);
	alert(`El resultado de la división es: ${resultado}`);
}else{
	alert("No se ha encontrado la operación")
}




