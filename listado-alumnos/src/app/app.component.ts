import { Component } from '@angular/core';
import { Alumno } from './model/alumno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'listado de personas';

  alumnos: Alumno[] = [
    new Alumno('Juan', 'Perez'),
    new Alumno('Laura', 'Suarez'),
    new Alumno('Alejo', 'Zuluaga')
  ];

  alumnoAgregada(alumno: Alumno){
    this.alumnos.push(alumno);
  }

}
