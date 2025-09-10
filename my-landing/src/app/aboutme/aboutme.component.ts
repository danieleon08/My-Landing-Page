import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {

  // 🌟 Información personal
  personalInfo = [
    { icon: 'fas fa-user', label: 'Nombre', value: 'Daniel León' },
    { icon: 'fas fa-birthday-cake', label: 'Edad', value: '25 años' },
    { icon: 'fas fa-map-marker-alt', label: 'Ubicación', value: 'Bogotá, Colombia' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'daniel.leon@example.com' }
  ];

  
}
