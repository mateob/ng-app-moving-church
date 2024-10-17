import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'moch-text-change',
  templateUrl: './text-change.component.html',
  styleUrl: './text-change.component.scss'
})
export class TextChangeComponent implements AfterViewInit {
  @ViewChildren('wordSpan') wordSpans!: QueryList<ElementRef>;

  words: string[] = ["Ajuda", "Oração", "Acompanhamento", "Henrique", "Alice"];
  wordColors: string[] = ["blue", "green", "purple", "orange", "#5253A3FF"];
  currentWordIndex = 0;
  currentWord = this.words[this.currentWordIndex];

  ngAfterViewInit() {
    this.animateText();
    setInterval(() => this.animateText(), 3000);
  }

  animateText() {
    this.wordSpans.forEach(letterSpan => {
      letterSpan.nativeElement.classList.remove('in');
    });

    setTimeout(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      this.currentWord = this.words[this.currentWordIndex];

      setTimeout(() => {
        this.wordSpans.forEach((letterSpan, i) => {
          setTimeout(() => {
            letterSpan.nativeElement.classList.add('in');
            letterSpan.nativeElement.style.color = this.wordColors[this.currentWordIndex];
          }, i * 100);
        });
      }, 100);
    }, 500);
  }
}
