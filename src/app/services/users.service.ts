import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from "./../modals/user.modal";
import { map } from 'rxjs/operators';
import {  HttpHeaders}    from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {

    uri = 'http://localhost:8080/users';
    localStorage:Storage;
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    token = this.currentUser.token;
     httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json',"Authorization" :"Bearer "+this.token })
      };
    constructor(private http: HttpClient) { }

    registerUser(data: Users): Observable<Users[]> {

        return this.http.post<any>(`${this.uri}/register`, data);

    }
    getUsers() {
        return this.http.get<Users[]>(`${this.uri}/getUsers`,this.httpOptions);
    }
    login(data) : Observable<any>{
        
      return  this.http.post<any>(`${this.uri}/login`, data,this.httpOptions);
    }

}
