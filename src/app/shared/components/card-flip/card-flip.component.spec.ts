import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlipComponent } from './card-flip.component';

describe('CardFlipComponent', () => {
  let component: CardFlipComponent;
  let fixture: ComponentFixture<CardFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFlipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
