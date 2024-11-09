import { Component, Input } from '@angular/core';

@Component({
  selector: 'moch-parallax-image',
  templateUrl: './parallax-image.component.html',
  styleUrl: './parallax-image.component.scss'
})
export class ParallaxImageComponent {
  private _imageUrl: String = '';
  @Input('mc-img') set imageUrl(data: String) {
    this._imageUrl = data;
  }
  public get imageUrl(): String { return this._imageUrl; }
}
