import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  enMayusculas: boolean = true

  ordenarPor: string = ""
  heroes : Heroe[] = [
    {
      nombre: 'Superman',
      vuela : true,
      color : Color.azul
    },
    {
      nombre: 'Batman',
      vuela : false,
      color : Color.negro
    },
    {
      nombre: 'Robin',
      vuela : false,
      color : Color.azul
    },
    {
      nombre: 'Daredevil',
      vuela : false,
      color : Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela : true,
      color : Color.verde
    },
  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrden(valor : string){
    this.ordenarPor = valor
    console.log(valor);
  }


}
