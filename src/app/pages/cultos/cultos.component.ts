import { Component } from '@angular/core';
import { ICardSample } from '../../shared/components/card-sample/card-sample.interface';

@Component({
  selector: 'moch-cultos',
  templateUrl: './cultos.component.html',
  styleUrl: './cultos.component.scss'
})
export class CultosComponent {
  cardList: ICardSample[] = [
    {
      image: 'assets/img/d1.jpg',
      title: 'Quarta 20hr',
      subTitle: 'reflexão & Oração',
      content: `<div>Teste de conteudo HTML <p>teste</p></p></div>`
    },
    {
      image: 'assets/img/d2.jpg',
      title: 'Sábado 06hr',
      subTitle: 'Tempo de Oração',
      content: `<div>Teste de conteudo HTML</div>`
    },
    {
      image: 'assets/img/d3.jpg',
      title: 'Sábado 20hr',
      subTitle: 'Date - Culto Jovem',
      content: `<div>Teste de conteudo HTML</div>`
    },
    {
      image: 'assets/img/d4.jpg',
      title: 'Domingo 19:30hr',
      subTitle: 'Culto de Celebração',
      content: `<div>Teste de conteudo HTML</div>`
    }
  ]
}
