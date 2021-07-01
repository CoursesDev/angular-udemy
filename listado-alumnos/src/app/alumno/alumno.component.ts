import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../model/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  @Input() alumno: Alumno;
  @Input() indice: number;

}
