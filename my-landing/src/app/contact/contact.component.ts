import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
   // 🌟 Contacto
  contactMethods = [
    { icon: 'fas fa-envelope', title: 'Email', value: 'daniel.leon@example.com' },
    { icon: 'fas fa-phone', title: 'Teléfono', value: '+57 300 123 4567' },
    { icon: 'fas fa-map-marker-alt', title: 'Ubicación', value: 'Bogotá, Colombia' },
    { icon: 'fas fa-calendar', title: 'Disponibilidad', value: 'Lun - Vie, 9AM - 6PM' }
  ];

  socialLinks = [
    { icon: 'fab fa-linkedin', url: '#' },
    { icon: 'fab fa-github', url: '#' },
    { icon: 'fab fa-twitter', url: '#' },
    { icon: 'fab fa-instagram', url: '#' }
  ];
}
