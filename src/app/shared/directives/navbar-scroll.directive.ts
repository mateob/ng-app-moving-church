import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarScroll]' // Nome da diretiva
})
export class NavbarScrollDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = this.el.nativeElement; // Obtém o elemento do navbar
    const navbarRect = navbar.getBoundingClientRect();

    if (navbarRect.top <= 0) {
      this.renderer.addClass(navbar, 'navbar-fixed');
      this.renderer.removeClass(navbar, 'navbar-original');
    } else {
      this.renderer.removeClass(navbar, 'navbar-fixed');
      this.renderer.addClass(navbar, 'navbar-original');
    }
  }
}
