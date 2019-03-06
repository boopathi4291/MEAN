import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

export class AuthService{
    constructor(private http:HttpClient, private router:Router){}
    localStorage:Storage;
    uri='http://localhost:8080/users';
    currentUser:any={};
    checkUser(){
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if(this.currentUser){
            let token = {token:'Bearer'+this.currentUser.token};
            this.http.post<any>(`${this.uri}/authenticate`,token).subscribe((res:any)=>{
                    console.log(res);
                    return res.success;
            })
        }
        else{
            this.router.navigate(['/login']);
        }
    }
}