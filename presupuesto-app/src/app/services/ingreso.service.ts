import { Ingreso } from "../model/ingreso.model";

export class IngresoService {
  ingresos:Ingreso[] = [
    new Ingreso("Salario", 4000),
    new Ingreso("venta coche", 6000)
  ];

  eliminar(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1); // Pasamos el indice y la cantidad de elementos que queremos eliminar a partir del indice que indicamos
  }
}
