import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    constructor(private http:HttpClient, private router:Router){}
    localStorage:Storage;
    uri='http://localhost:8080/users';
    currentUser:any={};
    checkUser(){
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if(this.currentUser){
            let token = {token:'Bearer '+this.currentUser.token};
           return this.http.post<any>(`${this.uri}/authenticate`,token);
        }
        else{
            this.router.navigate(['/login']);
            
        }
    }
}