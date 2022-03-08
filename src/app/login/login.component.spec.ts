import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../service/auth.service';

import { LoginComponent } from './login.component';
import { MockAuthService } from '../mocks/mock-auth-service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: MockAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = new MockAuthService();
    component = new LoginComponent(authService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true when user is not authenticated', () => {
    authService.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it('should return false when user is authenticated', () => {
    authService.authenticated = true;
    console.log('test-case',component.needsLogin());
    expect(component.needsLogin()).toBeFalsy();
  });
  
});
