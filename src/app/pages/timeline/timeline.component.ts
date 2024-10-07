import { Component } from '@angular/core';

interface Timeline {
  title: string;
  text: string;
  type: 'big' | 'small';
  icon?: string;  // Nome do ícone (ex: 'clock', 'check', 'user')
  side?: 'left' | 'right';
}

@Component({
  selector: 'moch-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  timelineItems: Timeline[] = [
    { title: '2010', type: 'big', text: `<p>Mussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Atirei o pau no gatis, per gatis num morreus.</p>` },
    { title: '2011', type: 'small', icon: '<i class="bi bi-camera2"></i>', text: `<p>Mussum Ipsum, cacilds vidis litro abertis.  Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Morbi viverra placerat justo, vel pharetra turpis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>` },
    { title: '2012', type: 'small', text: `<p>Mussum Ipsum, cacilds vidis litro abertis.  Atirei o pau no gatis, per gatis num morreus. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Aenean aliquam molestie leo, vitae iaculis nisl. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p><br/><p>Mussum Ipsum, cacilds vidis litro abertis.  Quem num gosta di mim que vai caçá sua turmis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>` },
    { title: '2013', type: 'big', text: `<p>teste de um paragrafo</p>` },
    { title: '2014', type: 'small', icon: '<i class="bi bi-camera2"></i>', text: `<p>Big teste de um paragrafo</p>` },
    { title: '2015', type: 'small', icon: '<i class="bi bi-camera2"></i>', text: `<p>teste de um paragrafo</p>` }
  ];
}
