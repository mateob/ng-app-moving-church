import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

export interface MenuItem { text: string; type: 'route' | 'section', route?: string, section?: string }

@Component({
  selector: 'moch-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { text: 'Home', type: 'route', route: 'home' },
    { text: 'Sobre', type: 'route', route: 'pages/information' },
    { text: 'Nossa Historia', type: 'route', route: 'pages/timeline' },
    { text: 'Blog', type: 'route', route: 'pages/blog' },
    { text: 'Envolva-se', type: 'route', route: 'home' },
    { text: 'Contato', type: 'route', route: 'home' }
  ];

  navbarTop = 70; // Posição inicial da navbar

  isScrolled = false;

  constructor(private router: Router) {}

  navigate(item: MenuItem) {
    if (item.type === 'route') {
      this.router.navigate([item.route]);
    } else if (item.type === 'section') {
      this.router.navigateByUrl(`${item.route}#${item.section}`);
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logica menu
    const scrollTopMenu = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      || 0;

    // Ajusta o 'top' da navbar quando rola para cima
    if (scrollTopMenu < 60) {
      this.navbarTop = 60 - scrollTopMenu;
    } else {
      this.navbarTop = 0; // Mantém no topo quando rola para baixo
    }
  }
}
