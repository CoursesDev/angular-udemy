
// POO: programar objetos como lo haríamos en la vida real

class Animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${especie}, tengo ${edad} años y soy de color ${color} <br>`;
	}

	//Lo metodos siempre van en la clase y no se pueden usar funciones flecha
	verInformacion(){
		document.write(this.info)
	}
}

// Herencia: Crear una clase ue pueda tomar propiedades de otra clase y extenderla 
//  No puedo tener un objeto con el mismo nombre de la clase
class Perro extends Animal{
	constructor(especie, edad, color, raza){
		super(especie, edad, color); //Estas propiedades son heredadas
		this.raza = null;
	}
//Metodos estaticos: No necesita que la clase se defina para crearlos
	static ladrar(){ // Como no se usan las propiedades no hace crear al objeto
		alert('Waw!');
	}
//Modificamos el valor de una clase... metodo que se convierte en propiedad
	set setRaza(newRaza){
		this.raza = newRaza;
	}
//Obtenemos un valor
	get getRaza(){
		return this.raza;
	}
}
// Las clases se definen con const
const gallina = new Animal("Gallina", 3, "Blanca");
const pakita = new Perro("perro", 4, "Negro", "Doberman");

gallina.verInformacion();
pakita.verInformacion();
//pakita.ladrar();

Perro.ladrar(); // Aquí llamamos al metodo estatico, si necesidad de crearlo

// pakita.modificarRaza(); 


pakita.setRaza = "lola"
document.write(pakita.raza);
document.write(pakita.getRaza);