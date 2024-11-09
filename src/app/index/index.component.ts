import { AfterViewInit, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'moch-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements AfterViewInit {
  public imageIndex: String = 'assets/backbround/bg-family.jpg';

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.resetSession();
        this.scrollToSection();
      }
    });
  }

  scrollToSection() {
    const fragment = this.router.url.split('#')[1];
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  private resetSession(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
