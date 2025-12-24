import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('projectTransition', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 })
        ], { optional: true }),

        query('.detail-content', [
          style({ opacity: 0, transform: 'translateY(20px)' })
        ], { optional: true }),

        query('img', [
          style({ opacity: 0, transform: 'scale(0.95)' })
        ], { optional: true }),

        query(':leave', [
          animate('200ms ease-out', style({ opacity: 0 }))
        ], { optional: true }),

        query('img', [
          animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
        ], { optional: true }),

        query('.detail-content', [
          animate('400ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class ProjectsComponent implements AfterViewInit {
  projects = [
    {
      image: '/assets/images/gif_landing.gif',
      title: 'Sitio Web para Restaurante de Hamburguesas - Frontend',
      short: 'Landing Page para restaurant de Hamburguesas',
      description: 'Landing Page para restaurant de Hamburguesas con diseño moderno y responsive.',
      features: ['Angular 15', 'Figma', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      repoUrl: 'https://github.com/Hamburguesas-El-Portico/portico_angular',
      demoUrl: '#'
    },
    {
      image: '/assets/images/backend.png',
      title: 'Sitio Web para Restaurante de Hamburguesas - Backend',
      short: 'Gestion de productos, pedidos, clientes, domiciliarios y operadores',
      description: 'Crud completo de productos, pedidos, clientes, domiciliarios y operadores con autenticación, seguridad, testing, ventas, reportes y dashboard interactivo.',
      features: ['Spring Boot', 'Java', 'Aronium', 'PostgreSQL', 'Docker', 'JWT Auth', 'Charts.js'],
      repoUrl: 'https://github.com/Hamburguesas-El-Portico/portico_spring',
      demoUrl: '#'
    },
    {
      image: '/assets/images/parkeasy.jpeg',
      title: 'App movil de Buscar Parqueaderos',
      short: 'Encuentra y reserva parqueaderos',
      description: 'Aplicación móvil híbrida que permite ubicar parqueaderos disponibles en tiempo real, realizar reservas y pagos digitales. Integra mapas interactivos y notificaciones push.',
      features: ['Ionic', 'Firebase', 'Google Maps API', 'Stripe', 'Push Notifications'],
      repoUrl: 'https://github.com/Intro-CompuMovil/ParkEasy',
      demoUrl: 'https://www.youtube.com/shorts/cba7RciYqsI'
    },
    {
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      title: 'Emprendimiento de venta de plataformas de streaming "LION VIEW"',
      short: 'Venta de plataformas de streaming',
      description: 'Plataforma de comercio electrónico para venta de plataformas de streaming con atención al cliente, gestión de inventario y panel administrativo completo.',
      features: ['Excel', 'WhatsApp', 'Instagram', 'Marketing'],
      repoUrl: '#',
      demoUrl: '#'
    },
    {
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      title: 'Marketplace web para La Fundación Sinapsis',
      short: 'Marketing y automatización IA',
      description: 'Plataforma integral para agencias digitales con CRM, automatización de marketing, generación de contenido con IA y análisis avanzado de métricas.',
      features: ['React', 'OpenAI API', 'CRM Integration', 'Analytics', 'Automation'],
      repoUrl: 'https://github.com/danieleon08/Proyecto-Fundacion-Sinapsis-WordPress-y-TiendaNube',
      demoUrl: '#'
    },
    {
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
      title: 'Sistema Multiagente Taxis',
      short: 'Comunicación distribuida',
      description: 'Proyecto académico de sistema distribuido para gestión de taxis utilizando ZeroMQ para comunicación entre agentes y algoritmos de optimización de rutas.',
      features: ['Python', 'ZeroMQ', 'Algoritmos IA', 'Sistemas Distribuidos'],
      repoUrl: 'https://github.com/danieleon08/Sistema-Distribuido-de-Taxis---ZeroMQ',
      demoUrl: '#'
    },
    {
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg',
      title: 'Implementación de Tecnicas de Aprendizaje de Maquina',
      short: 'Aprendizaje de Maquina',
      description: 'Seleccionar las librerías de trabajo en Python: tensorflow, keras o similares. Estas deben proveer implementaciones/funciones para las siguientes técnicas de aprendizaje automático: - Support Vector Machine (SVM) - Red neuronal multicapa - árbol de decisión ID3',
      features: ['Python', 'TensorFlow', 'Keras', 'Algoritmos IA', 'Sistemas Distribuidos'],
      repoUrl: 'https://github.com/danieleon08/Tecnicas-de-Aprendizaje-de-Maquina',
      demoUrl: '#'
    }
  ];

  selectedProject: any = this.projects[0];

  constructor(private el: ElementRef) { }

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
