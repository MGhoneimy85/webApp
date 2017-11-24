import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms'
import {Router} from "@angular/router";


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

  constructor(private _http: Http , private router:Router ) {

  }


  login(form: NgForm) {

    if(form.valid){
      return this._http.post('https://reqres.in/api/login',this.user)
        .map((res: Response) => res.json())
        .subscribe(data => {
           this.token = data;
            this.router.navigate(['userList'])
        });
    }
    else {
      alert('form is not valid!!');
    }
  }

}
