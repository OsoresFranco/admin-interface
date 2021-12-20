import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === 1){return 'Retiro a domicilio'};
    if(value === 2){return 'Retiro en Curso'};
    if(value === 3){return 'Equipo Retirado del Domicilio'};
    if(value === 4){return 'En reparacion'};
    if(value === 5){return 'Retiro del Laboratorio'};
    if(value === 6){return 'Entrega en Curso'};
    if(value === 7){return 'Equipo Retirado De Lab'};
    if(value === 8){return 'Equipo entregado al domicilio'};
    if(value === 9){return 'Equipo Recibido'};
    return null
  }

}
