import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { CommonModule } from '@angular/common';
import { CultosComponent } from './cultos/cultos.component';
import { InformationComponent } from './information/information.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { MessageTransitionComponent } from './message-transition/message-transition.component';


@NgModule({
  declarations: [
    CultosComponent,
    InformationComponent,
    TimelineComponent,
    BlogpostComponent,
    MessageTransitionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ],
  exports: [CultosComponent, MessageTransitionComponent]
})
export class PagesModule {}
