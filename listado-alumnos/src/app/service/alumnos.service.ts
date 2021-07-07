import { EventEmitter, Injectable } from "@angular/core";
import { Alumno } from "../model/alumno.model";
import { LoginService } from "./loginService.service";

@Injectable()

export class AlumnoService {
constructor(private loginService: LoginService){}

  alumnos: Alumno[] = [
    new Alumno('Juan', 'Perez'),
    new Alumno('Laura', 'Suarez'),
    new Alumno('Alejo', 'Zuluaga')
  ];

  saludar = new EventEmitter<number>();

  alumnoAgregada(alumno: Alumno){
    this.loginService.enviarMensaje("Se agrega alumno")
    this.alumnos.push(alumno);
  }

  encontrarAlumno(index:number){
    let alumnos:Alumno = this.alumnos[index];
    return alumnos
  }

  modificarPersona(index:number, alumno: Alumno){
    let persona = this.alumnos[index];
    persona.nombre = alumno.nombre;
    persona.apellido = alumno.apellido;
  }

  eliminarAlumno(index:number){
    this.alumnos.splice(index, 1);
  }
}
