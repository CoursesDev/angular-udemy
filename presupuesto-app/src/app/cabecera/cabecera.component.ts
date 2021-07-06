import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
})
export class CabeceraComponent implements OnInit {
  @Input() presupuesto: number = 0;
  @Input() ingresoTotal: number = 0;
  @Input() egresoTota: number = 0;
  @Input() porcentajeTotal: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
