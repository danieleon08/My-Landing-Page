import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit, OnDestroy {
  isVisible = false;
  observer!: IntersectionObserver;

  // Logros destacados
  logros = [
    { icon: 'fas fa-users', title: 'Trabajo en Equipo', description: 'Colaboración en proyectos universitarios y extracurriculares' },
    { icon: 'fas fa-book-open', title: 'Aprendizaje Continuo', description: 'Me gusta aprender cosas nuevas y ser curioso' },
    { icon: 'fas fa-comments', title: 'Habilidades de Comunicación', description: 'Capaz de explicar conceptos técnicos a audiencias no técnicas' },
    { icon: 'fas fa-sync-alt', title: 'Adaptabilidad', description: 'Me adapto rápidamente a nuevas tecnologías y entornos de trabajo' },
    { icon: 'fas fa-lightbulb', title: 'Pensamiento Crítico', description: 'Habilidad para analizar problemas y encontrar soluciones efectivas' },
    { icon: 'fas fa-clock', title: 'Gestión del Tiempo', description: 'Capaz de manejar múltiples tareas y cumplir con los plazos' },
    { icon: 'fas fa-paint-brush', title: 'Creatividad', description: 'Aporto ideas innovadoras en proyectos y soluciones' },
    { icon: 'fas fa-user-tie', title: 'Liderazgo', description: 'Experiencia liderando equipos en proyectos universitarios' },
    { icon: 'fas fa-handshake', title: 'Habilidades Interpersonales', description: 'Capaz de trabajar bien con otros en un entorno de equipo' },
    { icon: 'fas fa-fire', title: 'Apasionado', description: 'Me apersono mucho de los proyectos o trabajos que me gustan' },
    { icon: 'fas fa-mountain', title: 'Resiliencia', description: 'Capaz de superar desafíos y aprender de los errores' },
    { icon: 'fas fa-search', title: 'Atención al Detalle', description: 'Me aseguro de que mi trabajo sea preciso y de alta calidad' },
    { icon: 'fas fa-laptop-code', title: 'Habilidades Técnicas', description: 'Conocimiento en lenguajes de programación y herramientas tecnológicas' },
    { icon: 'fas fa-heart', title: 'Empatía', description: 'Capaz de entender y compartir los sentimientos de los demás' },
    { icon: 'fas fa-tasks', title: 'Organización', description: 'Mantengo mi trabajo y espacio organizado para maximizar la eficiencia' },
    { icon: 'fas fa-bolt', title: 'Proactividad', description: 'Tomo la iniciativa para mejorar procesos y resolver problemas' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Habilidades de Presentación', description: 'Capaz de presentar ideas y proyectos de manera efectiva' },
    { icon: 'fas fa-search-plus', title: 'Curiosidad', description: 'Siempre buscando aprender y descubrir cosas nuevas' },
    { icon: 'fas fa-handshake-angle', title: 'Habilidades de Negociación', description: 'Capaz de llegar a acuerdos beneficiosos en situaciones de conflicto' },
    { icon: 'fas fa-project-diagram', title: 'Pensamiento Estratégico', description: 'Capaz de planificar a largo plazo y anticipar desafíos futuros' }
  ];

  // Duplicamos logros para crear efecto infinito en el carrusel
  get logrosDuplicados() {
    return [...this.logros, ...this.logros];
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Activamos animación solo cuando la sección está visible
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true;   // activa animación
        } else {
          this.isVisible = false;  // pausa animación
        }
      });
    }, { threshold: 0.2 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
