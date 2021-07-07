import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { LoginService } from '../../service/loginService.service';
import { Alumno } from '../../model/alumno.model';
import { AlumnoService } from '../../service/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Alumno>();

  nombre: string;
  apellido: string;
  index: number;
  modoEdicion:number;

  // nombreInput: string = '';
  // apellidoInput: string = '';

  // agregarAlumno(nombreInput:HTMLInputElement, apellidoInput:HTMLInputElement) {
  //   this.personaCreada.emit(new Alumno(nombreInput.value, apellidoInput.value));
  // }

  constructor(
    private loginService: LoginService,
    private alumnoService: AlumnoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.alumnoService.saludar.subscribe((indice: number) =>
      alert('El indice es: ' + indice)
    );
  }

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = this.route.snapshot.queryParams['modoEdicion'];
    if (this.modoEdicion != null && this.modoEdicion === 1) {
      let alumnos: Alumno = this.alumnoService.encontrarAlumno(this.index);
      this.nombre = alumnos.nombre;
      this.apellido = alumnos.apellido;
    }
  }

  onGuardarPersona() {
    let alumno = new Alumno(this.nombre, this.apellido);
    //this.loginService.enviarMensaje("Se envía persona");
    // this.personaCreada.emit(
    //   new Alumno(this.nombre.nativeElement.value, this.apellido.nativeElement.value)
    // );
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.alumnoService.modificarPersona(this.index, alumno);
    }else{
      this.alumnoService.alumnoAgregada(alumno);
    }

    this.router.navigate(['personas']);
  }

  eliminarAlumno(){
    if(this.index != null){
      this.alumnoService.eliminarAlumno(this.index);
    }
    this.router.navigate(['personas']);
  }
}
