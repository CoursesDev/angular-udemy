import { Egreso } from "../model/egreso.model";

export class EgresoService{

  egresos:Egreso[] = [
    new Egreso("Renta depto", 9000),
    new Egreso("Ropa", 300)
  ];

  eliminar(egreso:Egreso){
    const indice:number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1); // Pasamos el indice y la cantidad de elementos que queremos eliminar a partir del indice que indicamos
  }
}
