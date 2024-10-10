import { Component } from '@angular/core';

interface IMessage {
  title: string;
  message: string;
  id: string;
  duration?: number;
  delay?: number;
  top?: number;
  zIndex?: number;
}

@Component({
  selector: 'moch-message-transition',
  templateUrl: './message-transition.component.html',
  styleUrl: './message-transition.component.scss'
})
export class MessageTransitionComponent {
  mensagens: IMessage[] = [
    { title: 'Titulo 1', message: 'Message 1', id: '1' },
    { title: 'Titulo 2', message: 'Message 2', id: '2' },
    { title: 'Titulo 3', message: 'Message 3', id: '3' },
    { title: 'Titulo 4', message: 'Message 4', id: '4' },
    { title: 'Titulo 5', message: 'Message 5', id: '5' },
  ];
  ngOnInit() {
    this.mensagens.forEach((t) => {
      t.duration = this.getRandomDuration(12, 24);
      t.delay = this.getRandomDelay(0, 10);
      t.top = this.getRandomTop(0, 310);
      t.zIndex = this.getRandomIndex(1, 10);
    });
  }

  getRandomDuration(min: number, max: number): number {
    return this.randomValue(min, max);
  }

  getRandomDelay(min: number, max: number): number {
    return this.randomValue(min, max);
  }

  getRandomTop(min: number, max: number): number {
    return this.randomValue(min, max);
  }

  getRandomIndex(min: number, max: number): number {
    return this.randomValue(min, max);
  }

  private randomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  actionClick(id: string): void {
    // deve realizar o redirecionamento.
  }
}
