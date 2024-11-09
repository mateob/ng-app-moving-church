import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DeviceDetectorService {
  public isMobile(): boolean {
    return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
  }
}
