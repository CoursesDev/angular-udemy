
class Celular {
	constructor(color, peso, resolucionPantalla, resolucionCamara, ram){
		this.color = color;
		this.peso = peso;
		this.resolucionPantalla = resolucionPantalla;
		this.resolucionCamara = resolucionCamara;
		this.ram = ram;
		this.encendido = false;
	}

	presionarBotonEncendido(){
		if(this.encendido == false){
			alert("Celular prendido");
			this.encendido = true;
		}else{
			alert("Celular apagado");
			this.encendido = false;
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("Reiniciando celular");
		}else{
			alert("El celular está apagado");
		}
	}

	tomarFoto(){
		alert(`Foto tomada en una resolución de: ${this.resolucionCamara}`);
	}

	grabarVideo(){
		alert(`Grabando video en una resolución de: ${this.resolucionCamara}`);
	}

	mostrarInfo(){
		return `
		Color: <b>${this.color} </b><br>
		Peso: <b>${this.peso}</b><br>
		Resolución Pantalla: <b>${this.resolucionPantalla}</b><br>
	    Resolución Camara: <b>${this.resolucionCamara}</b><br>
		RAM: <b>${this.ram}</b><br>`
	}

}

class AltaGama extends Celular{
	constructor(color, peso, resolucionPantalla, resolucionCamara, ram, resolucionCamaraExtra){
		super(color, peso, resolucionPantalla, resolucionCamara, ram);
		this.resolucionCamaraExtra = resolucionCamaraExtra;
	}

	grabarVideoLento(){
		alert("Estas grabando en camara lenta");
	}

	reconocimientoFacial(){
		alert("Vamos a iniciar un reconocimiento facial");
	}

	infoAltaGama(){

		return this.mostrarInfo() +`
		Resolución Camara Extra: <b>${this.resolucionCamaraExtra}</b><br>`
	}
}

class App{
	constructor(descargas, puntuacion, peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.iniciada = false;
		this.instalada = false;
	}

	instalar(){
		if(this.instalada == false){
			alert("Instalando aplicación");
			this.instalada = true
		}
	}
	desinstalar(){
		if(this.instalada == true){
			alert("Desinstalando aplicación");
			this.instalada = false
		}
	}
	abrirApp(){
		if(this.iniciada == false && this.instalada == true){
			alert("Iniciando aplicación");
			this.iniciada = true
		}
	}

	cerrarApp(){
		if(this.iniciada == true && this.instalada == true){
			alert("Cerrando aplicación");
			this.iniciada = false
		}
	}

	appInfo(){
		return `
		Descargas: <b>${this.descargas}</b><br>
		Puntuación: <b>${this.puntuacion}</b><br>
		Peso: <b>${this.peso}</b><br>`;
	}
}

// celular1 = new Celular("Azul", "150g", "6'", "HD", "2GB");
// celular2 = new Celular("Verde", "140g", "5'", "Full HD", "1GB");
celular3 = new Celular("Negro", "160g", "5.5'", "Full HD", "2GB");


// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

// document.write(celular2.mostrarInfo(), celular1.mostrarInfo(), celular3.mostrarInfo());

// celular1 = new AltaGama("Azul", "130g", "6'", "4K", "3GB", "Full HD");
// celular2 = new AltaGama("Negro", "140g", "5.7'", "4K", "4GB", "HD");

// celular1.grabarVideoLento();
// celular2.reconocimientoFacial();

// document.write(celular1.infoAltaGama());

app = new App("16.000", "5 estrellas", "900mb");

app.instalar();
app.abrirApp();
app.cerrarApp();
app.desinstalar();

document.write(app.appInfo());
