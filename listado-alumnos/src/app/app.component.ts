import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/loginService.service';
import { Alumno } from './model/alumno.model';
import { AlumnoService } from './service/alumnos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'listado de personas';

  alumnos: Alumno[] = [];

  constructor(
    private loginService: LoginService,
    private alumnoService: AlumnoService
  ) {}
  ngOnInit(): void {
    this.alumnos = this.alumnoService.alumnos;
  }
}
