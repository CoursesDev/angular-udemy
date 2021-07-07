import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from '../model/alumno.model';
import { AlumnoService } from '../service/alumnos.service';
import { LoginService } from '../service/loginService.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {


  alumnos: Alumno[] = [];

  constructor(
    private loginService: LoginService,
    private alumnoService: AlumnoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.alumnos = this.alumnoService.alumnos;
  }

  agregar(){
    this.router.navigate(['personas/agregar'])
  }

}
