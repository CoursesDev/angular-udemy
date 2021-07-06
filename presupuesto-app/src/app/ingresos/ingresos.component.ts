import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../model/ingreso.model';
import { IngresoService } from '../services/ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  ingresos:Ingreso [] = [];

  constructor(private ingresoService:IngresoService) { }

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso:Ingreso): void {
    this.ingresoService.eliminar(ingreso);
  }

}
