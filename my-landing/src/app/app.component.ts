import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTopHeader: boolean = true;
  layoutConSidebar: boolean = false;

  // Detecta el ancho de la ventana
  private isLargeScreen(): boolean {
    return window.innerWidth >= 768; // tablets y pcs
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // 👉 si está en celular, no aplica el efecto
    if (!this.isLargeScreen()) {
      this.showTopHeader = true;
      this.layoutConSidebar = false;
      return;
    }

    const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const vh = window.innerHeight;

    const threshold1 = vh * 0.5;
    const threshold2 = vh * 1.2;

    if (scrollY < threshold1) {
      this.showTopHeader = true;
      this.layoutConSidebar = false;
    } else if (scrollY >= threshold1 && scrollY <= threshold2) {
      this.showTopHeader = false;
      this.layoutConSidebar = true;
    } else if (scrollY > threshold2) {
      this.showTopHeader = true;
      this.layoutConSidebar = false;
    }
  }

  // también escucha cambios de tamaño de ventana (ej: rotar pantalla)
  @HostListener('window:resize', [])
  onResize() {
    if (!this.isLargeScreen()) {
      this.showTopHeader = true;
      this.layoutConSidebar = false;
    }
  }
}
