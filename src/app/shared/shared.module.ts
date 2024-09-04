import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlipComponent } from './components/card-flip/card-flip.component';
import { ParallaxImageComponent } from './components/parallax-image/parallax-image.component';

const ComponentList: any[] = [
  CardFlipComponent,
  ParallaxImageComponent
]

@NgModule({
  declarations: [ComponentList],
  imports: [CommonModule],
  exports: [ComponentList]
})
export class SharedModule {}
