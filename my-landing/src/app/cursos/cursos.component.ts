import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {
  // 🌟 Cursos (carrusel)
  courses = [
    { image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg', title: 'Calidad del Software', description: 'Curso en el Sena sobre la calidad del Software y las diferentes normas ISO' },
    { image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg', title: 'Nube de AWS', description: 'Curso ofrecido por AWS para saber manejar su nube y poder elegir correctamente entre todos los servicios que ofrece' },
    { image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', title: 'Javeriana Territorio Emprendedor', description: 'Participé en el programa "Javeriana Territorio Emprendedor".' },
    { image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', title: 'Prompting Responsable', description: 'Curso de prompting responsable en IA, desarrollado por Microsoft y Founderz.' },
    { image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg', title: 'Ingles B1', description: 'Hice un curso en American School Way donde alcance un nivel B1 en Ingles' },
    { image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg', title: 'Transformación Digital', description: 'Curso de Transformación Digital para empresas, MIT Professional Education.' },
    { image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg', title: 'Python Data Science', description: 'Análisis de datos con Pandas, NumPy y visualización con Matplotlib.' }
  ];

  currentIndex = 0;
  visibleCards = 3; // 🌟 número de tarjetas visibles (depende del ancho de pantalla)
  private carouselIntervalId: any;

  // Variables para swipe
  private touchStartX = 0;
  private touchEndX = 0;

  ngOnInit(): void {
    this.updateVisibleCards(); // ajustar al iniciar

    // 🌟 Movimiento automático del carrusel
    this.carouselIntervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngOnDestroy(): void {
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

  // 📱 Swipe en móviles
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    if (this.touchStartX - this.touchEndX > 50) {
      this.nextSlide(); // swipe left → siguiente
    }
    if (this.touchEndX - this.touchStartX > 50) {
      this.prevSlide(); // swipe right → anterior
    }
    this.touchStartX = 0;
    this.touchEndX = 0;
  }

  // 📏 Ajustar visibleCards según tamaño de pantalla
  @HostListener('window:resize')
  updateVisibleCards(): void {
    if (window.innerWidth < 768) {
      this.visibleCards = 1;
    } else if (window.innerWidth < 1024) {
      this.visibleCards = 2;
    } else {
      this.visibleCards = 3;
    }
  }
}
