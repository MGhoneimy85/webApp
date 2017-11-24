import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { CommunService } from '../commun.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  token: any = null;
  user: Object = {
    email:'',
    password:''
  };

  constructor( private router:Router , private service:CommunService ) {

  }
  login(form: NgForm) {
    if(form.valid){
        this.service.loginService(this.user)
        .then(result =>
          {
            this.token=result;
            this.router.navigate(['userList']);
          })
        .catch(error => console.log(error));
    }
    else {
      alert('form is not valid!!');
    }
  }

}
