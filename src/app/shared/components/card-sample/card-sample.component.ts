import { Component, Input } from '@angular/core';
import { ICardSample } from './card-sample.interface';

@Component({
  selector: 'moch-card-sample',
  templateUrl: './card-sample.component.html',
  styleUrl: './card-sample.component.scss',
})
export class CardSampleComponent {
  showCardMiddle = false;
  private _data: ICardSample = { image: '', content: '', subTitle: '', title: '' };
  @Input('data') set setData(data: ICardSample) { this._data = data };
  public get data(): ICardSample { return this._data; }

  toggleCardMiddle() {
    this.showCardMiddle = !this.showCardMiddle;
  }
}
