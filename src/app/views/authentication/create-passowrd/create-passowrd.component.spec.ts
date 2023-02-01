import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassowrdComponent } from './create-passowrd.component';

describe('CreatePassowrdComponent', () => {
  let component: CreatePassowrdComponent;
  let fixture: ComponentFixture<CreatePassowrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePassowrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
