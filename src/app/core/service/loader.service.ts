import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading = new BehaviorSubject(false);

  public startLoading(): void {
    this.isLoading.next(true);
  }

  public finishLoading(): void {
    this.isLoading.next(false);
  }
}
