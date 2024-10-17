import { Component, Input } from '@angular/core';

@Component({
  selector: 'moch-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrl: './card-sample.component.scss',
})
export class CardSampleComponent {
  showCardMiddle = false;
  @Input('img') imgUrl: string = "";

  toggleCardMiddle() {
    this.showCardMiddle = !this.showCardMiddle;
  }
}
