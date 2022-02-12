
montoCofla = prompt('¿Cofla, cuanto dinero tienes?');
montoRoberto = prompt('¿Roberto, cuanto dinero tienes?');
montoPedro = prompt('¿Pedro, cuanto dinero tienes?');

montoCofla = parseInt(montoCofla) //Convertimos la cadena a número
// Cofla 

if (montoCofla >= 0.6 && montoCofla < 1) {
	alert('Cofla compra el helado de agua');
	alert('y te sobra ' + (montoCofla - 0.6));
}
else if (montoCofla >= 1 && montoCofla < 1.6) {
	alert('Cofla compra el helado de crema');
	alert('y te sobra ' + (montoCofla - 1));
}
else if (montoCofla >= 1.6 && montoCofla < 1.7) {
	alert('Cofla compra el helado de heladix');
	alert('y te sobra ' + (montoCofla - 1.6));
}
else if (montoCofla >= 1.7 && montoCofla < 1.8) {
	alert('Cofla compra el helado de heladovich');
	alert('y te sobra ' + (montoCofla - 1.7));
}
else if (montoCofla >= 1.8 && montoCofla < 2.9) {
	alert('Cofla compra el helado de helardo');
	alert('y te sobra ' + (montoCofla - 1.8));
}
else if (montoCofla >= 2.9) {
	alert('Cofla compra el helado con confites o el pote de 1/4 KG');
	alert('y te sobra ' + (montoCofla - 2.9));
}
else{
	alert('Lo siento Cofla, pobre de mierda, no te alcanza para ningun helado');
}

// Roberto

if (montoRoberto >= 0.6 && montoRoberto < 1) {
	alert('Roberto compra el helado de agua');
}
else if (montoRoberto >= 1 && montoRoberto < 1.6) {
	alert('Roberto compra el helado de crema');
}
else if (montoRoberto >= 1.6 && montoRoberto < 1.7) {
	alert('Roberto compra el helado de heladix');
}
else if (montoRoberto >= 1.7 && montoRoberto < 1.8) {
	alert('Roberto compra el helado de heladovich');
}
else if (montoRoberto >= 1.8 && montoRoberto < 2.9) {
	alert('Roberto compra el helado de helardo');
}
else if (montoRoberto >= 2.9) {
	alert('Roberto compra el helado con confites o el pote de 1/4 KG');
}
else{
	alert('Lo siento Roberto, pobre de mierda, no te alcanza para ningun helado');
}

// Pedro

if (montoPedro >= 0.6 && montoPedro < 1) {
	alert('Pedro compra el helado de agua');
} else if (montoPedro >= 1 && montoPedro < 1.6) {
	alert('Pedro compra el helado de crema');
}
else if (montoPedro >= 1.6 && montoPedro < 1.7) {
	alert('Pedro compra el helado de heladix');
}
else if (montoPedro >= 1.7 && montoPedro < 1.8) {
	alert('Pedro compra el helado de heladovich');
}
else if (montoPedro >= 1.8 && montoPedro < 2.9) {
	alert('Pedro compra el helado de helardo');
}
else if (montoPedro >= 2.9) {
	alert('Pedro compra el helado con confites o el pote de 1/4 KG');
}
else{
	alert('Lo siento Pedro, pobre de mierda, no te alcanza para ningun helado');
}
