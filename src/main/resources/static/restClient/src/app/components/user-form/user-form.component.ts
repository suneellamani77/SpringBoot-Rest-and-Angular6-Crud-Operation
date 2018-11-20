import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../shared-service/user.service';
import {User} from "../../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private user:User;

  constructor(private _userService:UserService , private _router:Router) { }

  ngOnInit() {
    this.user=this._userService.getter();
  }

  processForm(){
    if(this.user.id==undefined){
      this._userService.createStudent(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error)
      })
    }
    else{
      this._userService.updateStudent(this.user).subscribe((user)=>{
        console.log(user);
        this._router.navigate(['/']);
      },(error)=>{
        console.log(error)
      })
    }
  }

  back(){
    this._router.navigate(['/']);
  }

}
