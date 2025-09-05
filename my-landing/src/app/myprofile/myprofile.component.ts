import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit, OnDestroy {
  backgroundUrl: string = 'assets/images/fondogris.png';

  // 🌟 Palabras dinámicas
  words: string[] = ['DEV FRONTED', 'INNOVADOR', 'DEV MOVIL', 'CURIOSO'];
  currentWord: string = this.words[0];
  private wordIndex: number = 0;
  private wordIntervalId: any;

  // 🌟 Cursos (carrusel)
  courses = [
    { image: 'assets/images/course1.jpg', title: 'Angular Básico', description: 'Fundamentos de Angular y SPA.' },
    { image: 'assets/images/vex.png', title: 'Semillero Javex', description: 'Participe por un año en el semillero de Robotica de la Universidad Javeriana.' },
    { image: 'assets/images/CJE.jpg', title: 'Centro de Emprendimiento Javeriano', description: 'Hice parte del programa "Javeriana Territorio Emprendedor".' },
    { image: 'assets/images/Founderz.png', title: 'Prompting responsable', description: 'Curso de prompting responsable en IA, desarrollado por Microsoft y Founderz.' },
    { image: 'assets/images/course5.jpg', title: 'Node.js Backend', description: 'API REST con Express y JWT.' },
    { image: 'assets/images/javeriana.png', title: 'Universidad Javeriana', description: 'Cursando Ingenieria de Sistemas en la Javeriana.' },
    { image: 'assets/images/course7.jpg', title: 'React Fundamentals', description: 'Componentes y hooks esenciales.' },
    { image: 'assets/images/Mit.png', title: 'Transformación Digital', description: 'Curso de Transformación Digital para empresas, desarrollado por MIT Professional Education' },
    { image: 'assets/images/course9.jpg', title: 'UI/UX Design', description: 'Principios para interfaces modernas.' },
    { image: 'assets/images/course10.jpg', title: 'Python Data', description: 'Análisis de datos con Pandas.' }
  ];

  currentIndex = 0;
  visibleCards = 3; // número de tarjetas visibles
  private carouselIntervalId: any;

  projects = [
  { 
    image: 'assets/images/proyecto1.jpg', 
    title: 'Sistema de Inventario', 
    short: 'Gestión de productos y ventas',
    description: 'Un sistema completo con dashboard, reportes y control de stock.',
    features: ['Angular + Spring Boot', 'Docker', 'Autenticación JWT']
  },
  { 
    image: 'assets/images/proyecto2.jpg', 
    title: 'App de Parqueaderos', 
    short: 'Ubicación y reservas de parqueaderos',
    description: 'Aplicación móvil en tiempo real para gestionar parqueaderos.',
    features: ['Firebase', 'Geolocalización', 'Reservas online']
  },
  { 
    image: 'assets/images/proyecto3.jpg', 
    title: 'E-commerce Emalu', 
    short: 'Tienda virtual para papelería y miscelánea',
    description: 'Plataforma online con carrito, pagos e integración con inventario.',
    features: ['Django', 'PostgreSQL', 'Pasarela de pagos']
  },
  { 
    image: 'assets/images/proyecto4.jpg', 
    title: 'Agencia Digital', 
    short: 'Automatización y marketing',
    description: 'Agencia para potenciar negocios con IA y estrategia digital.',
    features: ['CRM', 'Automatización con IA', 'Marketing digital']
  },
  { 
    image: 'assets/images/proyecto5.jpg', 
    title: 'App de Taxis con ZeroMQ', 
    short: 'Sistema multiagente de taxis',
    description: 'Proyecto académico con comunicación cliente-servidor.',
    features: ['Python', 'ZeroMQ', 'Multiagentes']
  }
];

selectedProject: any = null;

selectProject(project: any) {
  this.selectedProject = project;
}


  ngOnInit(): void {
    // 🌟 Animación de palabras dinámicas
    this.wordIntervalId = setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 3000);

    // 🌟 Movimiento automático del carrusel
    this.carouselIntervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.courses.length;
    }, 3000);
  }

  // 🔥 Navegación manual
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.courses.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.courses.length) % this.courses.length;
  }

  ngOnDestroy(): void {
    if (this.wordIntervalId) clearInterval(this.wordIntervalId);
    if (this.carouselIntervalId) clearInterval(this.carouselIntervalId);
  }
}
