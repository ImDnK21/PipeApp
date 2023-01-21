import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {


  //. I18nSelect
  nombre : string = 'Fernanda'
  genero : string = 'femenino'

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'No Binario' : 'Invitarl@'
  }

  //. i18nPlural
  clientes : string[] = ['maria','andres','cristian','pedro','angel'];
  clientesMap = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    '=3':'tenemos 3 clientes esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarPersona(){

    this.nombre = 'Cristian'
    this.genero = 'No Binario'
    console.log(this.nombre);
    
  }

  borrarCliente(){
    this.clientes.pop();
    console.log(this.clientes);
  }

  //. KeyValuePipe
  persona = {
    nombre : "Danko",
    edad : 23,
    direccion: 'Otawwa, Canada'
  }

}
