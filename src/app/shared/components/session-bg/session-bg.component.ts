import { Component, Input } from '@angular/core';

@Component({
  selector: 'moch-session-bg',
  templateUrl: './session-bg.component.html',
  styleUrl: './session-bg.component.scss'
})
export class SessionBgComponent {
  private _bg: string = 'bg-glass';
  @Input('bg') set bg(data: 'glass' | 'transparent' | 'dark' | 'ligth') {
    this._bg = `bg-${data}`;
  }
  public get bg(): string { return this._bg; }

  private _backImg: string = '';
  @Input('back-image') set backImg(data: string) { this._backImg = data; }
  public get backImg(): string { return this._backImg; }

  private _backDivs: number = 1;
  @Input('back-divs') set backDivs(data: number) { this._backDivs = data; }
  public get backDivs(): number { return this._backDivs; }

  private _fluid: boolean = false;
  @Input('fluid') set fluid(data: boolean) { this._fluid = data; }
  public get fluid(): boolean { return this._fluid; }

  private _bgDivDirection: string = 'left';
  @Input('bg-divs-direction') set bgDivDirection(data: 'left' | 'rigth') { this._bgDivDirection = data; }

  public get bg1Direction(): string { return this._bgDivDirection == 'left' ? 'dir-left' : 'dir-rigth' };
  public get bg2Direction(): string { return this._bgDivDirection == 'left' ? 'dir-rigth' : 'dir-left' };
}
