import { Injectable } from '@angular/core';
import {Http, Response , Headers , RequestOptions} from '@angular/http';
import {observable} from 'rxjs';

  import {map} from 'rxjs/operators';
  import {User} from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL='http://localhost:8080/api';

  private baseUrl:string='http://localhost:8080/api';
  private headers=new Headers({'Content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});

  private user:User;

  constructor(private _http:Http) { }

  getStudents(){
    // return this._http.get(this.baseUrl+'/students',this.options).
    return this._http.get(`${this.API_URL}/students`,this.options).
    pipe(map((response: Response) => response.json()));

  }

  getStudent(id : Number){
    return this._http.get(this.baseUrl+'/student/'+id,this.options).
    pipe(map((response: Response) => response.json()));

  }

  deleteStudent(id : Number){
    return this._http.delete(this.baseUrl+'/student/'+id,this.options).
    pipe(map((response: Response) => response.json()));

  }

  createStudent(user : User){
    return this._http.post(this.baseUrl+'/student',JSON.stringify(user),this.options).
    pipe(map((response: Response) => response.json()));

  }


  updateStudent(user : User){
    return this._http.put(this.baseUrl+'/student',JSON.stringify(user),this.options).
    pipe(map((response: Response) => response.json()));

    }

    setter(user : User){
      this.user=user;
    }

    getter(){
      return this.user;
    }

}
