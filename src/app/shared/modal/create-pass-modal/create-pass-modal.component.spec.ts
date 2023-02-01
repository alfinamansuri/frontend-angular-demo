import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassModalComponent } from './create-pass-modal.component';

describe('CreatePassModalComponent', () => {
  let component: CreatePassModalComponent;
  let fixture: ComponentFixture<CreatePassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePassModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
