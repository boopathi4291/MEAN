import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Users } from "./../modals/user.modal";
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class UserService {

    uri = 'http://localhost:8080/users';
     
    constructor(private http: HttpClient) { }

    registerUser(data: Users): Observable<Users[]> {

        return this.http.post<any>(`${this.uri}/register`, data);

    }
    getUsers(httpOptions) {
        return this.http.get<Users[]>(`${this.uri}/getUsers`,httpOptions);
    }
    login(data) : Observable<any>{
        
      return  this.http.post<any>(`${this.uri}/login`, data);
    }

}
