import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Http , Response} from "@angular/http";
import {isNumber} from "util";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private _http: Http , private route: ActivatedRoute, private router: Router) { }

  user: Object = {
    "id": 0,
    "first_name": "",
    "last_name": "",
    "avatar": ""
  };
  isUpdate:boolean;
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isUpdate = true;
      this._http.get('https://reqres.in/api/users/'+id)
        .map((res: Response) => res.json())
        .subscribe(data => {
          this.user= data.data;
        });
    }
    else{
      this.isUpdate = false;

    }




  }

}
