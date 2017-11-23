import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {


  userList: Object = [
    {
      avatar:'',
      first_name:'',
      last_name:''
    }
  ]

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get('https://reqres.in/api/users?page=2')
      .map((res: Response) => res.json())
      .subscribe(data => {
         this.userList = data.data;
      });
  }

}
