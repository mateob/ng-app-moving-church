import { LoaderService } from './core/service/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'moch-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public isLoading!: boolean;

  constructor(private readonly loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((load) => setTimeout(() => (this.isLoading = load), 0));
  }
}
