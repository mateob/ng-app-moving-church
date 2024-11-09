import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LoaderService } from './core/service/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moch-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public isLoading!: boolean;

  constructor(private readonly loaderService: LoaderService, private router: Router) {
    this.loaderService.isLoading.subscribe((load) => setTimeout(() => (this.isLoading = load), 0));
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.startLoading();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.loaderService.finishLoading();
      }
    })
  }
}
