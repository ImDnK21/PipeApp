

import { Pipe, PipeTransform } from '@angular/core';
import { Validators } from '@angular/forms';

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  

    transform(valor: string,enMayusculas: boolean = true): string {

        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase()

    }

}