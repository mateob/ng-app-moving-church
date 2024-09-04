import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'moch-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  navbarTop = 60; // Posição inicial da navbar

  isScrolled = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logica Logo
    const logoContainer = this.el.nativeElement.querySelector('.logo-container');
    const scrollTopLogo = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isScrolled = scrollTopLogo >= 60; // Redimensiona quando atinge 60px do topo

    if (this.isScrolled) {
      logoContainer.style.top = '0'; // Ajusta o topo quando fixado
    } else {
      logoContainer.style.top = '60px'; // Retorna ao topo original
    }
  }
}
