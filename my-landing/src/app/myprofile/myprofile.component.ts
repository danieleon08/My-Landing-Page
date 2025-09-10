import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit, OnDestroy {
  backgroundUrl: string = 'assets/images/fondogris.png';

  // 🌟 Palabras dinámicas
  words: string[] = ['DEV FRONTEND', 'INNOVADOR', 'DEV MÓVIL', 'CREATIVO', 'LÍDER TECNOLÓGICO', 'EMPRENDEDOR'];
  currentWord: string = this.words[0];
  private wordIndex: number = 0;
  private wordIntervalId: any;

  
  // 🌟 Cursos (carrusel)
  courses = [
    { image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg', title: 'Angular Avanzado', description: 'Dominio completo del framework Angular con mejores prácticas.' },
    { image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg', title: 'Semillero Javex', description: 'Participé por un año en el semillero de Robótica de la Universidad Javeriana.' },
    { image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', title: 'Centro de Emprendimiento Javeriano', description: 'Participé en el programa "Javeriana Territorio Emprendedor".' },
    { image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', title: 'Prompting Responsable', description: 'Curso de prompting responsable en IA, desarrollado por Microsoft y Founderz.' },
    { image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg', title: 'Node.js Backend', description: 'Desarrollo de APIs REST con Express y autenticación JWT.' },
    { image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg', title: 'Universidad Javeriana', description: 'Cursando Ingeniería de Sistemas en la Pontificia Universidad Javeriana.' },
    { image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg', title: 'React Fundamentals', description: 'Componentes, hooks y gestión de estado en React.' },
    { image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg', title: 'Transformación Digital', description: 'Curso de Transformación Digital para empresas, MIT Professional Education.' },
    { image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg', title: 'UI/UX Design', description: 'Principios de diseño y experiencia de usuario para interfaces modernas.' },
    { image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg', title: 'Python Data Science', description: 'Análisis de datos con Pandas, NumPy y visualización con Matplotlib.' }
  ];

  currentIndex = 0;
  visibleCards = 3; // número de tarjetas visibles
  private carouselIntervalId: any;

  // 🌟 Experiencia laboral
  experiences = [
    {
      period: '2023 - Presente',
      position: 'Desarrollador Frontend Senior',
      company: 'TechSolutions Inc.',
      description: 'Liderazgo en el desarrollo de aplicaciones web modernas utilizando Angular y React.',
      achievements: [
        'Mejoré el rendimiento de la aplicación principal en un 40%',
        'Implementé arquitectura de microfrontends',
        'Mentoría a 3 desarrolladores junior'
      ]
    },
    {
      period: '2022 - 2023',
      position: 'Desarrollador Full Stack',
      company: 'Digital Agency Pro',
      description: 'Desarrollo de soluciones completas para clientes corporativos.',
      achievements: [
        'Desarrollé 12+ proyectos web exitosos',
        'Integración con APIs de terceros y sistemas de pago',
        'Implementación de CI/CD con Docker'
      ]
    },
    {
      period: '2021 - 2022',
      position: 'Desarrollador Frontend Junior',
      company: 'StartupTech',
      description: 'Desarrollo de interfaces de usuario responsivas y optimizadas.',
      achievements: [
        'Convertí diseños Figma a código funcional',
        'Optimización SEO y accesibilidad web',
        'Colaboración estrecha con el equipo de UX/UI'
      ]
    },
    {
      period: '2020 - 2021',
      position: 'Freelancer',
      company: 'Trabajo Independiente',
      description: 'Desarrollo de sitios web y aplicaciones para pequeñas empresas.',
      achievements: [
        'Completé 25+ proyectos freelance',
        'Gestión directa con clientes',
        'Desarrollo en WordPress y frameworks JS'
      ]
    }
  ];

  // 🌟 Proyectos
  projects = [
    { 
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg', 
      title: 'Sistema de Inventario', 
      short: 'Gestión completa de productos y ventas',
      description: 'Sistema completo de gestión empresarial con dashboard interactivo, reportes en tiempo real y control avanzado de stock. Incluye módulos de ventas, compras, proveedores y análisis predictivo.',
      features: ['Angular 15', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT Auth', 'Charts.js']
    },
    { 
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg', 
      title: 'App de Parqueaderos', 
      short: 'Encuentra y reserva parqueaderos',
      description: 'Aplicación móvil híbrida que permite ubicar parqueaderos disponibles en tiempo real, realizar reservas y pagos digitales. Integra mapas interactivos y notificaciones push.',
      features: ['Ionic', 'Firebase', 'Google Maps API', 'Stripe', 'Push Notifications']
    },
    { 
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg', 
      title: 'E-commerce Emalu', 
      short: 'Tienda virtual completa',
      description: 'Plataforma de comercio electrónico para papelería y miscelánea con carrito de compras, pasarela de pagos, gestión de inventario y panel administrativo completo.',
      features: ['Next.js', 'Stripe', 'MongoDB', 'Cloudinary', 'Email Templates']
    },
    { 
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', 
      title: 'Agencia Digital', 
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

  // 🌟 Tecnologías
  techCategories = [
    {
      name: 'Frontend',
      technologies: [
        { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#4FC08D' },
        { name: 'TypeScript', icon: 'fab fa-js-square', color: '#3178C6' },
        { name: 'Sass', icon: 'fab fa-sass', color: '#CC6699' }
      ]
    },
    {
      name: 'Backend',
      technologies: [
        { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'Java', icon: 'fab fa-java', color: '#007396' },
        { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
        { name: 'Express', icon: 'fas fa-server', color: '#000000' }
      ]
    },
    {
      name: 'Bases de Datos',
      technologies: [
        { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
        { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'Firebase', icon: 'fas fa-fire', color: '#FFCA28' },
        { name: 'Redis', icon: 'fas fa-cube', color: '#DC382D' }
      ]
    },
    {
      name: 'DevOps & Tools',
      technologies: [
        { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'AWS', icon: 'fab fa-aws', color: '#232F3E' },
        { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624' },
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' }
      ]
    }
  ];

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

  ngOnInit(): void {
    // 🌟 Animación de palabras dinámicas
    this.wordIntervalId = setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 3000);

    // 🌟 Movimiento automático del carrusel
    this.carouselIntervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);

    // 🌟 Seleccionar primer proyecto por defecto
    if (!this.selectedProject && this.projects.length > 0) {
      this.selectedProject = this.projects[0];
    }
  }

  // 🔥 Navegación del carrusel
  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.courses.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.courses.length) % this.courses.length;
  }

  // 🔥 Selección de proyectos
  selectProject(project: any): void {
    this.selectedProject = project;
  }

  ngOnDestroy(): void {
    if (this.wordIntervalId) clearInterval(this.wordIntervalId);
    if (this.carouselIntervalId) clearInterval(this.carouselIntervalId);
  }
}