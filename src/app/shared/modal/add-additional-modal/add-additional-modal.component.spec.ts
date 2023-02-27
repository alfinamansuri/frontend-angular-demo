import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdditionalModalComponent } from './add-additional-modal.component';

describe('AddAdditionalModalComponent', () => {
  let component: AddAdditionalModalComponent;
  let fixture: ComponentFixture<AddAdditionalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdditionalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdditionalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
