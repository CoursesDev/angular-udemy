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
}
