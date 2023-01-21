import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  nombre : string = 'danko SanCheZ '
  valor : number = 1000
  obj = {
    nombre : 'Danko'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

  constructor(private primengConfig: PrimeNGConfig) {
  }
    
    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.primengConfig.ripple = true; 
    }
}
