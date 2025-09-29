import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    { 
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg', 
      title: 'Sitio Web para Restaurante de Hamburguesas', 
      short: 'Gestión completa de productos y ventas',
      description: 'Sistema completo de gestión empresarial con dashboard interactivo, reportes en tiempo real y control avanzado de stock. Incluye módulos de ventas, compras, proveedores y análisis predictivo.',
      features: ['Angular 15', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT Auth', 'Charts.js']
    },
    { 
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg', 
      title: 'App movil de Buscar Parqueaderos', 
      short: 'Encuentra y reserva parqueaderos',
      description: 'Aplicación móvil híbrida que permite ubicar parqueaderos disponibles en tiempo real, realizar reservas y pagos digitales. Integra mapas interactivos y notificaciones push.',
      features: ['Ionic', 'Firebase', 'Google Maps API', 'Stripe', 'Push Notifications']
    },
    { 
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg', 
      title: 'CMR y marketing digital para "Papelería Emalu"', 
      short: 'Tienda virtual completa',
      description: 'Plataforma de comercio electrónico para papelería y miscelánea con carrito de compras, pasarela de pagos, gestión de inventario y panel administrativo completo.',
      features: ['Next.js', 'Stripe', 'MongoDB', 'Cloudinary', 'Email Templates']
    },
    { 
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', 
      title: 'Marketplace web para La Fundación Sinapsis', 
      short: 'Marketing y automatización IA',
      description: 'Plataforma integral para agencias digitales con CRM, automatización de marketing, generación de contenido con IA y análisis avanzado de métricas.',
      features: ['React', 'OpenAI API', 'CRM Integration', 'Analytics', 'Automation']
    },
    { 
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg', 
      title: 'Sistema Multiagente Taxis', 
      short: 'Comunicación distribuida',
      description: 'Proyecto académico de sistema distribuido para gestión de taxis utilizando ZeroMQ para comunicación entre agentes y algoritmos de optimización de rutas.',
      features: ['Python', 'ZeroMQ', 'Algoritmos IA', 'Sistemas Distribuidos']
    }
  ];

  selectedProject: any = this.projects[0];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.2 } // Se activa cuando al menos 20% de la sección entra en pantalla
    );

    const sections = this.el.nativeElement.querySelectorAll('.project-card');
    sections.forEach((section: Element) => observer.observe(section));
  }

  selectProject(project: any): void {
    this.selectedProject = project;
  }

  goToProjectSection(project: any): void {
    this.selectedProject = project; // mantiene la lógica que ya tenías
    const section = document.getElementById("titulo-proyecto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

}
