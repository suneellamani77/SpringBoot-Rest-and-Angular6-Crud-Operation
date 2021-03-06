import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../../shared-service/user.service';
import {User} from "../../user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  private users:User[];
  constructor(private _userService:UserService , private _router:Router) { }

  ngOnInit() {

    this._userService.getStudents().subscribe((users)=>{
      this.users=users;
      console.log(users);
    },(error)=>{
      console.log(error);
    });
  }

  deleteUser(user){
    this._userService.deleteStudent(user.id).subscribe((data)=>{
      this.users.splice(this.users.indexOf(user),1);
    })
  }

  updateUser(user){
    this._userService.setter(user);
    this._router.navigate(['/op'])
  }

  createUser(){
    let user=new User();
    this._userService.setter(user);
    this._router.navigate(['/op'])
  }

}
