import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CommunService } from '../commun.service';
import { UsersListComponent } from './users-list.component';
import { HttpModule } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ {provide: Router } ,{ provide: ToastrService }, CommunService ],
      imports: [ RouterTestingModule , FormsModule , HttpModule ],
      declarations: [ UsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
