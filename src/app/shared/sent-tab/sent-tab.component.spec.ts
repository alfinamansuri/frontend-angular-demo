import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentTabComponent } from './sent-tab.component';

describe('SentTabComponent', () => {
  let component: SentTabComponent;
  let fixture: ComponentFixture<SentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
