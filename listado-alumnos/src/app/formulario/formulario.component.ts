import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { LoginService } from '../service/loginService.service';
import { Alumno } from '../model/alumno.model';
import { AlumnoService } from '../service/alumnos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Alumno>();

  @ViewChild('nombreInput') nombre: ElementRef;
  @ViewChild('apellidoInput') apellido: ElementRef;

  // nombreInput: string = '';
  // apellidoInput: string = '';

  // agregarAlumno(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement) {
  //   this.personaCreada.emit(new Alumno(nombreInput.value, apellidoInput.value));
  // }

  constructor(
    private loginService: LoginService,
    private alumnoService: AlumnoService
  ) {
    this.alumnoService.saludar.subscribe(
      (indice: number) => alert("El indice es: " + indice)
    );
  }

  agregarAlumno() {
    let alumno = new Alumno(
      this.nombre.nativeElement.value,
      this.apellido.nativeElement.value
    );
    //this.loginService.enviarMensaje("Se envía persona");
    // this.personaCreada.emit(
    //   new Alumno(this.nombre.nativeElement.value, this.apellido.nativeElement.value)
    // );
    this.alumnoService.alumnoAgregada(alumno);
  }
}
