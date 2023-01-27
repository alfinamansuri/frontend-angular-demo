import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLeftComponent } from './auth-left.component';

describe('AuthLeftComponent', () => {
  let component: AuthLeftComponent;
  let fixture: ComponentFixture<AuthLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
