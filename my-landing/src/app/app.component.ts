import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTopHeader: boolean = true;
  layoutConSidebar: boolean = false; // arranca sin sidebar

  @HostListener('window:scroll', [])
  onWindowScroll() {
  const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  const vh = window.innerHeight; // altura visible del dispositivo

  // Definimos umbrales relativos
  const threshold1 = vh * 0.5;  // mitad de la pantalla
  const threshold2 = vh * 1.2;  // 1.2 pantallas scrolleadas

  if (scrollY < threshold1) {
    // Al inicio -> mostrar header y no sidebar
    this.showTopHeader = true;
    this.layoutConSidebar = false;
  } else if (scrollY >= threshold1 && scrollY <= threshold2) {
    // En rango medio -> ocultar header y activar sidebar
    this.showTopHeader = false;
    this.layoutConSidebar = true;
  } else if (scrollY > threshold2) {
    // Después del scroll largo -> volver a header
    this.showTopHeader = true;
    this.layoutConSidebar = false;
  }
}

}

