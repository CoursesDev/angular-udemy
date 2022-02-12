//--------------Objeto------------------
var pais = {
    nombre: "Colombia",
    cantidadRegiones: 5
}

//--------------Funciones---------------

function primeraFuncion(){
//  var b = "Angélica";
 return function(nombre){
    console.log("Soy angelica soy de " + " " + nombre);
    return function(regiones){
        console.log("Es un pais maravilloso con " +  regiones + " regiones" );
        return function(){
            console.log("Solo que en este momento hay una terrible pandemia")
        }
    }
 }
}
// var function1 = primeraFuncion();
// var function2 = function1(pais.nombre)(pais.cantidadRegiones);
// function2();

//------------------------THIS---------------------

var vehiculo = {
    placa: "HDS-787",
    modelo: "2018",
    imprimirPlaca: function(){
        //Este This apunta al objeto vehiculo
        console.log("La placa del vehículo es: " + this.placa);
    },
    marca: {
        tipoMarca: "International",
        obtenerPlaca: function(){
            console.log(this);
            var self = this; //Este This apunta al objeto marca
            var imprimirModelo = function(){
                console.log("El vehiculo: " + vehiculo.placa + " es marca: "+ self.tipoMarca)
            }   
            imprimirModelo();
        }
        
    }
};

// vehiculo.imprimirPlaca();
// vehiculo.marca.obtenerPlaca();

//--- -------------NEW---------------------

function Persona(nombre, apellido){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = 20,
    this.imprimirPersona = function() {
       return this.nombre + " " + this.apellido;
    } 
}


var carlota = new Persona("Carlota", "Mendoza");

console.log(carlota.imprimirPersona());





