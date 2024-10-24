import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlipComponent } from './components/card-flip/card-flip.component';
import { ParallaxImageComponent } from './components/parallax-image/parallax-image.component';
import { CardSampleComponent } from './components/card-sample/card-sample.component';
import { TextChangeComponent } from './components/text-change/text-change.component';
import { SessionBgComponent } from './components/session-bg/session-bg.component';

const ComponentList: any[] = [
  CardFlipComponent,
  ParallaxImageComponent,
  CardSampleComponent,
  TextChangeComponent,
  SessionBgComponent
]

@NgModule({
  declarations: [ComponentList],
  imports: [CommonModule],
  exports: [ComponentList]
})
export class SharedModule {}
