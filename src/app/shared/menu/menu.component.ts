import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
  ]
})
export class MenuComponent {
  items: MenuItem[] = []

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: ' Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: ' Numeros',
            icon: 'pi pi-align-left',
            routerLink: 'numeros'
          },
          {
            label: ' No Comunes',
            icon: 'pi pi-align-left',
            routerLink: 'no-comunes'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon:'',
        routerLink: 'ordenar'
      }
    ];
  } 
}
