import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormBasicsComponent } from './login-form-basics.component';

describe('LoginFormBasicsComponent', () => {
  let component: LoginFormBasicsComponent;
  let fixture: ComponentFixture<LoginFormBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
