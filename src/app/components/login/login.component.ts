import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../services/users.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }
  localStorage: Storage;

  ngOnInit() {
  }

  model: any = {};
  message: String;
  onSubmit(form: NgForm) {

    this.userService.login(this.model).subscribe((res) => {
      if (res.success) {
        this.router.navigate(['']);
        let currentUser: any = { "name": res.user, "token": res.token }
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      } else {
        this.message = res.message;
        form.resetForm();
      }
    }, (err) => {
      this.message = JSON.stringify(err);
    });
  }
}
