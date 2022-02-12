//let variable = 15; //Let nos límita el alcance (Scope)
//const nombre = 'Angelica'; //La variable no cambia de valor, de lo contrario sale error. La usamos en variables que sabemos que no van a cambiar su valor
//alert(nombre);


//Hoisting ==> Un programa puede verse afectado por la creación y ejecución

//  let nombre = prompt("Dime tu nombre");
//  frase = `Hola ${nombre}, espero estes muy bien`;
//  // alert(frase)

// if (true) {
// 	alert("Hola");
// }

// Ctrl + } // Comentar código

//----------------- ARREGLOS --------------------------

// let frutas = ["Manzana", "Pera", "Fresa"];

// document.write(frutas[2]);

//Un array asociativo tienen un indice asociado

/*

let pc = { 
	nombre: "AngePc",
	procesador: "Rayzen 9",
	ram: "16GB",
	espacio: "1TB"	   
}

document.write(pc["procesador"]);
let nombrePc = pc["nombre"];
frase = `<br> El nombre de mi PC es: <b>${nombrePc}</b>`;
document.write(frase);

*/

//---------------------- CICLOS -----------------------

//---- FOR IN && FOR OF


/*

let animales = ["gato", "perro", "Canguro"];

for (animal in animales){
	document.write(animal + "<br>"); // In: devuelve la posición de los elementos
	document.write(animales[animal] + "<br>"); // De esta manera devuelve los elementos
}

document.write("<br>")

for (animal of animales){
	document.write(animal + "<br>");// con llamar solo a animal, nos devuelve los elementos
}


let arrayFem = ["Sharom", "Julieta", "Clavel"];
let arrayMan = ["Pedro", "Jose", "Lucas", arrayFem, "Marcos"];

fornombres: //Sentencia label
for (let array1 in arrayMan){
	if(array1 == 3){
		for(let array2 of arrayFem){
			break fornombres;
			document.write(array2 + "<br>");
		}
	} else{
		document.write(arrayMan[array1] + "<br>")
	}
}
*/

//------------------------FUNCIONES-----------------------------------


/*
	


function suma(a, b){
  let resultado = a + b;
  return resultado;
} 

let res = suma(13, 80);

document.write(res);

 function saludo(nombre){
 	let frase = `¡Hola ${nombre}! ¿Cómo estas?`;
 	document.write(frase);
 }

saludo("Angélica");


//---------------------------Funciones Flecha-------------------------------------


const saludar = function(nombre){
	let frase = `¡Hola ${nombre}! ¿Cómo estas? <br>`;
 	document.write(frase);
}


//saludar("Jimena")


const despedir = (nombre)=>{ // Si solo usamos un parametro no hacen falta los ()
	let frase = `¡Hasta luego ${nombre}! Good luck <br>`;
 	document.write(frase);
}

//despedir("Jimena");


// Y de una manera más abreviada... Si solo es una linea de código 
// podemos hacer lo siguiente:

let despedida = `¡Bye ${apodo}! Good luck`;

const despedirAb = (apodo) => document.write(despedida);

despedirAb("Jimena");
*/























