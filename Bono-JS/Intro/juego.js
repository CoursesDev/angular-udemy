function Jugador(nombre, poder){
    this.nombre = nombre;
    this.poder = poder;
    this.pv = 100;
    this.sp = 100;

    this.curar = function(jugadorObjetivo){
        if(this.sp >= 30 && jugadorObjetivo.pv < 100){
            this.sp -= 30;
            jugadorObjetivo.pv += 20;
            this.estadoJugador();
        }else if(this.sp < 30 && jugadorObjetivo.pv > 0){
            console.log(this.nombre + " no tiene suficiente sp");
            this.estadoJugador();
        }else if(this.sp >= 30 && jugadorObjetivo.pv == 100){
            console.log(jugadorObjetivo.nombre + " tiene suficientes pv")
            this.estadoJugador();
        }else{
            console.log(jugadorObjetivo.nombre + " esta muerto!")
            this.estadoJugador();
        }
    }
    this.curacioPropia = function(){
        var pvFaltantes = 100 - this.pv;
        if(this.pv < 60){
        this.pv += pvFaltantes;
        console.log("Curación completa!")
        console.log(this);
        }else{
            console.log("Tienes suficientes pv!")
        }
    }
    this.golpear = function(jugadorObjetivo){
        if(this.pv >= 10 && jugadorObjetivo.pv > 0){
            jugadorObjetivo.pv -= 20;
            this.estadoJugador();
        }else if(this.pv < 10 && jugadorObjetivo.pv > 0){
            console.log(this.nombre +" No tiene suficientes fuerzas debe curarse!");
            console.log("...Empezando curación de " + this.nombre);
            this.curacioPropia();
        }else{
            console.log(jugadorObjetivo.nombre + " esta muerto!")
        }
    }


};

Jugador.prototype.estadoJugador = function(){
        console.info(this);
};

var angelica = new Jugador("Angelopolis", "Teletransportar");
var jimena = new Jugador("Jimene", "Dormir");
var jose = new Jugador("Josefoo", "Tirar Gases");

angelica.estadoJugador();




