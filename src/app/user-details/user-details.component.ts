import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommunService } from '../commun.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: Object = {
    "id":"",
    "first_name": "",
    "last_name": "",
    "avatar": ""
  };
  isUpdate:boolean;

  constructor(private route: ActivatedRoute, private router: Router , private service:CommunService, private toastr: ToastrService) { }


  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isUpdate = true;
      this.service.getUser(id)
        .then(result => this.user = result.data )
        .catch(error => console.log(error));
    }
    else{
      this.isUpdate = false;
    }
  }

  updateUser(){

    this.service.updateUser(this.user)
      .then(result =>
      {
        this.user = result;
        this.toastr.success('Successfuly', 'User updated');

      })
      .catch(error => console.log(error));

  }


  addUser(form: NgForm){

    if(form.valid){
      this.service.addUser(this.user)
        .then(result =>
        {
          this.user = result;
          this.toastr.success('Successfuly', 'User added');
          this.router.navigate(['userList']);
        })
        .catch(error => console.log(error));
    }
    else{
      alert('form is not valid');
    }

  }


}
