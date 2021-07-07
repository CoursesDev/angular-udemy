import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../../model/alumno.model';
import { AlumnoService } from '../../service/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  @Input() alumno: Alumno;
  @Input() indice: number;

  constructor(private alumnoService: AlumnoService){}

  emitirSaludo(){
    this.alumnoService.saludar.emit(this.indice);
  }

}
