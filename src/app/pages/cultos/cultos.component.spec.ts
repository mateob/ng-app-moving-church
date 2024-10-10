import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultosComponent } from './cultos.component';

describe('CultosComponent', () => {
  let component: CultosComponent;
  let fixture: ComponentFixture<CultosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CultosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
