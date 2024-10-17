import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTransitionComponent } from './message-transition.component';

describe('MessageTransitionComponent', () => {
  let component: MessageTransitionComponent;
  let fixture: ComponentFixture<MessageTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageTransitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessageTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
