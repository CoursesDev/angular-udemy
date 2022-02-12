
// ------------------------- MÉTODOS EN CADENAS --------------------------

let cadena = "            cadena de prueba, si, de prueba. ";
let cadena2 = "prueba";

//-----------------Buscar cadenas y devolver un valor -------------------------

//Concat: Junta dos o más cadenas y retorna una nueva
resultado = cadena.concat(" hola");
//document.write(resultado1);


//startsWith: Si una cadena comienza con caracteres de otra, devuelve true, sino false
resultado = cadena.startsWith(cadena2);
//document.write(resultado2)


//endsWith: i una cadena termina con caracteres de otra, devuelve true, sino false
resultado = cadena.endsWith(cadena2);
//document.write(resultado3)

//includes: si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino false
resultado = cadena.includes(cadena2);
//document.write(resultado)

//indexOf: devuelve el primer indice del primer caracter de la cadena, si no existe, devuelve -1  
resultado = cadena.indexOf(cadena2);
//document.write(resultado)

//lastIndexOf: devuelve el último indice del primer caracter de la cadena, si no existe, devuelve -1  
resultado = cadena.lastIndexOf(cadena2);
//document.write(resultado)


//---------------------------- Rellenar, modificar la cadena ------------------------------


//padStart(): rellenar cadena al principio con los caracteres deseados
resultado = cadena2.padStart(10, 'ok');
//document.write(resultado)

//padEnd(): rellenar cadena al final con lo deseado.
resultado = cadena2.padEnd(10, 'ok');
//document.write(resultado)

//repeat(): devuelve la misma cadena pero repetida la cantidad de veces que deseamos
resultado = cadena.repeat(2);
//document.write(resultado)


//---------------------------------- Transformar la cadena ------------------------------------------


//split(): Divide la cadena como le pidamos
resultado = cadena.split(" ");
//document.write(resultado)

//substring: nos retorna un pedazo de la cadena que seleccionamos, el segundo parametro no está incluido
resultado = cadena.substring(0,5);
//document.write(resultado)

//toLowerCase(): convierte la cadena a minuscula
resultado = cadena.toLowerCase();
//document.write(resultado)

//toUpperCase(): convierte la cadena a mayuscula
resultado = cadena.toUpperCase();
//document.write(resultado)

//toString(): convierte la cadena en string 
resultado = cadena.toString();
//document.write(resultado)

//trim(): elimina los espacios en blanco
resultado = cadena.trim();
//document.write(resultado)

//trimEnd():elimina los espacios en blanco al final de la cadena
resultado = cadena.trimEnd();
//document.write(resultado)

//trimStart(): elimina los espacios en blanco al final de la cadena
resultado = cadena.trimStart();
//document.write(resultado)

//valueOf(): retorna el valor primitivo de un objeto string
resultado = cadena.valueOf();
//document.write(resultado)


//-------------------------------- MÉTODOS EN ARRAYS --------------------------------------------

let nombres = ["Dalto", "María", "Pedro"];

//----------------- Transformaciones -----------------------------------


//pop(): elimina el último elemento de un array y lo devuelve
resultado = nombres.pop();
// document.write(resultado + "<br>");
// document.write(nombres);

//shift(): elimina el primer elemento de un array y lo devuelve
resultado = nombres.shift();
//document.write(resultado + "<br>");
// document.write(nombres);

//push(): agrega un elemento al array al final de la lista
//nombres = ["Dalto", "María", "Pedro"];
//document.write(nombres + "<br>");
resultado = nombres.push("Elenita")
// document.write(resultado + "<br>");
//document.write(nombres);

//reverse(): invierte el orden de los elementos de un array
nombres = ["Dalto", "María", "Pedro", "Elenita"];
//resultado = nombres.reverse();
//document.write(resultado);

//unshift(): agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array
let numeros = [1,6,9,3,4,2,5];
// document.write(numeros + "<br>");
//resultado = numeros.unshift(0,1,2);
// document.write(resultado + "<br>");
//document.write(numeros);

//sort(): ordena los elementos de un array localmente y lo devuelve ordenado
resultado = numeros.sort()
//document.write(resultado)

//splice(): cambia el contenido de un array eliminando elementos existentes o agregando uno nuevo
//(inicio, fin, nuevos elementos)
//Si no deseo eliminar pongo 0 en el segundo parametro
resultado = numeros.splice(1,0,100);
// document.write(resultado + "<br>");
// document.write(numeros);


//------------------ Accesores -----------------------------------------------


//join(): une todos los elementos de una matriz en una cadena y la devuelve.
//resultado = numeros.join(" - ")
//document.write(resultado)

//slice(): devuelve una parte del array dentro de uno nuevo
//(inicio, fin) -> fin no incluido
//resultado = numeros.slice(0,2);
//document.write(resultado);

//toString(), indexOf(), lastIndexOf(), includes()


//----------------------- De repetición --------------------------------------------


//filter(): crea un nuevo array con todos los elementos que cumplan la condición
nombres.filter(nombre => document.write(nombre + "<br>"));
resultado = numeros.filter(numero => numero > 3);
document.write(resultado);

//forEach(): ejecuta la función indicada una vez por cada elemento del array
nombres.forEach(nombre => document.write(nombre + "<br>"));

