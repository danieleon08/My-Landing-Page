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

    if (scrollY < 350) {
      // Al inicio -> mostrar header y no sidebar
      this.showTopHeader = true;
      this.layoutConSidebar = false;
    } else if (scrollY >= 350 && scrollY <= 700) {
      // En rango medio -> ocultar header y activar sidebar
      this.showTopHeader = false;
      this.layoutConSidebar = true;
    } else if (scrollY > 700) {
      // Al pasar de 700 -> volver a mostrar header (sidebar puede seguir activo o no según quieras)
      this.showTopHeader = true; // o true si quieres que el header reaparezca
      this.layoutConSidebar = false; // aquí decides: true si sidebar siempre acompaña, false si quieres quitarlo
    }
  }
}
