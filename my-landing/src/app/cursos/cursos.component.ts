import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {
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

  ngOnInit(): void {
    // 🌟 Movimiento automático del carrusel
    this.carouselIntervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngOnDestroy(): void {
    // Limpiar intervalos cuando el componente se destruya
    if (this.carouselIntervalId) {
      clearInterval(this.carouselIntervalId);
    }
  }

  // 🔥 Navegación del carrusel
  nextSlide(): void {
    if (this.currentIndex < this.courses.length - this.visibleCards) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // vuelve al inicio
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.courses.length - this.visibleCards;
    }
  }
}
