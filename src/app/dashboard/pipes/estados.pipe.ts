import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados'
})
export class EstadosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === 1){return '1: Retiro a domicilio'};
    if(value === 2){return '2: Retiro en Curso'};
    if(value === 3){return '3: Equipo Retirado del Domicilio'};
    if(value === 4){return '4: En reparacion'};
    if(value === 5){return '5: Retiro del Laboratorio'};
    if(value === 6){return '6: Entrega en Curso'};
    if(value === 7){return '7: Equipo Retirado De Lab'};
    if(value === 8){return '8: Equipo entregado al domicilio'};
    if(value === 9){return '9: Equipo Recibido'};
    return null
  }

}
