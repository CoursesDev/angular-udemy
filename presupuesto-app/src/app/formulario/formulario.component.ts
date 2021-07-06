import { Component, OnInit } from '@angular/core';
import { Egreso } from '../model/egreso.model';
import { Ingreso } from '../model/ingreso.model';
import { EgresoService } from '../services/egreso.service';
import { IngresoService } from '../services/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingreso';
  descripcionInput: string = '';
  valorInput: number;

  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService
  ) {}

  ngOnInit(): void {}

  tipoOperacion(evento) {
    this.tipo = evento.target.value;
  }
  agregarValor() {
    this.tipo === 'ingreso'
      ? this.ingresoService.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        )
      : this.egresoService.egresos.push(
          new Egreso(this.descripcionInput, this.valorInput)
        );
  }
}
