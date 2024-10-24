import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionBgComponent } from './session-bg.component';

describe('SessionDoubleBgComponent', () => {
  let component: SessionBgComponent;
  let fixture: ComponentFixture<SessionBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionBgComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SessionBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
