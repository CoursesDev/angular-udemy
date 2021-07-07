import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/loginService.service';
import { Alumno } from './model/alumno.model';
import { AlumnoService } from './service/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'listado de personas';

}
