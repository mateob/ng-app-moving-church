import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { CultosComponent } from './cultos/cultos.component';


@NgModule({
  declarations: [
    CultosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [CultosComponent]
})
export class PagesModule {}
