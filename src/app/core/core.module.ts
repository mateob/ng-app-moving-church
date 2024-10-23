import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoComponent } from './components/logo/logo.component';
import { MenuComponent } from './components/menu/menu.component';
import { GoToHomeComponent } from './components/go-to-home/go-to-home.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialComponent } from './components/social/social.component';
import { RouterModule } from '@angular/router';

const ComponentList: any[] = [
  LogoComponent,
  MenuComponent,
  GoToHomeComponent,
  LoadingComponent,
  FooterComponent
]

@NgModule({
  declarations: [ComponentList, SocialComponent],
  imports: [CommonModule, RouterModule],
  exports: [ComponentList]
})
export class CoreModule {}
