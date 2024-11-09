import { Component, ElementRef, HostListener } from '@angular/core';
import { DeviceDetectorService } from '../../service/device-detector.service';

@Component({
  selector: 'moch-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {
  public navbarTop!: number;
  public isMobile: Boolean = false;
  public isScrolled = false;

  constructor(private el: ElementRef, private device: DeviceDetectorService) {
    this.isMobile = this.device.isMobile();
    this.navbarTop = this.isMobile ? 0 : 60;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logica Logo
    const logoContainer = this.el.nativeElement.querySelector('.logo-container');
    const scrollTopLogo = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isScrolled = scrollTopLogo >= this.navbarTop;

    if (this.isScrolled) {
      logoContainer.style.top = '0';
    } else {
      logoContainer.style.top = `${this.navbarTop}px`;
    }
  }
}
