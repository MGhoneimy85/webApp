import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';
import { CommunService } from '../commun.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {


  userList: Object =
    [{
      avatar:'',
      first_name:'',
      last_name:''
    }];
  errorMessage:string;
  page:string = '1';

  constructor( private router:Router, private service:CommunService, private toastr: ToastrService ) { }

  ngOnInit() {
      this.service.getallUsers(this.page)
      .then(result => this.userList = result.data )
      .catch(error => console.log(error));
  }

  gotoDetails(id){

    this.router.navigate(['/userDetails' , {id: id}]);

  }

  nextPage(page){
      this.service.getallUsers(page)
      .then(result => this.userList = result.data )
      .catch(error => console.log(error));
  }


  deleteUser(id){
    this.service.deleteUser(id)
      .then(result => {
        this.toastr.success('Successfuly', 'User Deleted');
        ngOnInit();
      } )
      .catch(error => console.log(error));
  }

}
