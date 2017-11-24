import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule , NgForm } from '@angular/forms';
import { LoginComponent } from './login.component';
import { CommunService } from '../commun.service';
import { HttpModule } from '@angular/http';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ { provide: Router } , CommunService],
      imports: [ RouterTestingModule , FormsModule , HttpModule  ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
