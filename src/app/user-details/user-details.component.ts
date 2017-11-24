import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommunService } from '../commun.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router , private service:CommunService) { }

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
      this.service.getUser(id)
        .then(result => this.user = result.data )
        .catch(error => console.log(error));
    }
    else{
      this.isUpdate = false;
    }
  }
}
