import { Component } from '@angular/core';

export interface CardFlip {
  front: CardItem,
  back: CardItem,
  imgBg: string
}
export interface CardItem {
  title: string,
  subTitle: string,
  content: string
}

@Component({
  selector: 'moch-cultos',
  templateUrl: './cultos.component.html',
  styleUrl: './cultos.component.scss'
})
export class CultosComponent {
  cardList: CardFlip[] = [
    {
      imgBg: 'assets/img/d1.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML <p>teste</p></p></div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    },
    {
      imgBg: 'assets/img/d2.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    },
    {
      imgBg: 'assets/img/d3.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    },
    {
      imgBg: 'assets/img/d4.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    },
    {
      imgBg: 'assets/img/d1.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML <p>teste</p></p></div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    },
    {
      imgBg: 'assets/img/d2.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    },
    {
      imgBg: 'assets/img/d3.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    },
    {
      imgBg: 'assets/img/d4.jpg',
      front: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>`, },
      back: { title: 'Teste de Card', subTitle: 'Horario: 20:00', content: `<div>Teste de conteudo HTML</div>` }
    }
  ]
}
