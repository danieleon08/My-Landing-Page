import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobile: boolean = window.innerWidth <= 768;
  menuOpen: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.menuOpen = false; // cerrar menú si se vuelve a escritorio
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
