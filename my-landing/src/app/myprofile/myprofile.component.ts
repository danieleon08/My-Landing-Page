import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

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

  isMobile: boolean = window.innerWidth <= 768;
  sidebarActive: boolean = false; // se puede sincronizar con el estado global de tu layout

  ngOnInit(): void {
    // 🌟 Animación de palabras dinámicas
    this.wordIntervalId = setInterval(() => {
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.wordIndex];
    }, 3000);

    // 🌟 Detectar viewport (para animaciones solo en móviles)
    if (this.isMobile) {
      const target = document.querySelector('.myprofile');
      if (target) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                target.classList.add('visible');
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(target);
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  ngOnDestroy(): void {
    if (this.wordIntervalId) {
      clearInterval(this.wordIntervalId);
    }
  }
}
