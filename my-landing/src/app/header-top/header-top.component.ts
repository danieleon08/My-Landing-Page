import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  isScrolled = false;
  isLoaded = false;

  ngOnInit() {
    // hace que aparezca animado al cargar
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // detecta si bajaste y aplica la clase
    this.isScrolled = window.scrollY > 50;
  }

}
