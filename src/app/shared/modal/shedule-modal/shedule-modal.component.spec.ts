import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleModalComponent } from './shedule-modal.component';

describe('SheduleModalComponent', () => {
  let component: SheduleModalComponent;
  let fixture: ComponentFixture<SheduleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheduleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheduleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
