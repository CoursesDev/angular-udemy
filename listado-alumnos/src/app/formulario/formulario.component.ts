import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Alumno } from '../model/alumno.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  @Output() personaCreada = new EventEmitter<Alumno>();

  nombreInput: string = '';
  apellidoInput: string = '';

  agregarAlumno() {
    this.personaCreada.emit(new Alumno(this.nombreInput, this.apellidoInput));
  }
}
