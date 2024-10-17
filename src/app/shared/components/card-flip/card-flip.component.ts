import { Component, Input } from '@angular/core';

@Component({
  selector: 'moch-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrl: './card-flip.component.scss'
})
export class CardFlipComponent {
  isFlipped = false;

  @Input('img') imgUrl: string = "";
}
