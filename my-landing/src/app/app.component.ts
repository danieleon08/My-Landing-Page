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

    this.showTopHeader = scrollY < 350;
    this.layoutConSidebar = scrollY >= 350; // true cuando aparece sidebar
  }
}
