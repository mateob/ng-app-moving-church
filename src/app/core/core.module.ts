import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { GoToHomeComponent } from './components/go-to-home/go-to-home.component';
import { LoadingComponent } from './components/loading/loading.component';

const ComponentList: any[] = [
  LogoComponent,
  MenuComponent,
  GoToHomeComponent,
  LoadingComponent
]

@NgModule({
  declarations: [ComponentList],
  imports: [CommonModule],
  exports: [ComponentList]
})
export class CoreModule {}
