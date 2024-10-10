import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'moch-go-to-home',
  templateUrl: './go-to-home.component.html',
  styleUrl: './go-to-home.component.scss'
})
export class GoToHomeComponent {
  isScrolled = false;

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll suave
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTopLogo = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTopLogo >= 60;
  }
}
