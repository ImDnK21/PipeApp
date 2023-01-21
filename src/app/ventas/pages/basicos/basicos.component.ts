import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  
})
export class BasicosComponent {

  nombreLower : string = 'danko'
  nombreUper : string = 'DANKO'
  nombreCompleto : string = 'DAnKO SanChEz'

  fecha : Date = new Date();
  
}
