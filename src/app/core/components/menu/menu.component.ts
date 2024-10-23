import { Component, HostListener } from '@angular/core';

export interface MenuItem { text: string; route: string }

@Component({
  selector: 'moch-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { text: 'Home', route: '#' },
    { text: 'Horarios', route: '#cultos' },
    { text: 'Sobre', route: '/#/pages/information' },
    { text: 'Nossa Historia', route: '/#/pages/timeline' },
    { text: 'Eventos', route: '#sc2' },
    { text: 'Blog', route: '/#/pages/blog' },
    { text: 'Envolva-se', route: '' },
    { text: 'Contato', route: '#' }
  ];

  navbarTop = 70; // Posição inicial da navbar

  isScrolled = false;

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
