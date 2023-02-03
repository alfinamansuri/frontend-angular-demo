import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySchoolPageComponent } from './my-school-page.component';

describe('MySchoolPageComponent', () => {
  let component: MySchoolPageComponent;
  let fixture: ComponentFixture<MySchoolPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySchoolPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySchoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
