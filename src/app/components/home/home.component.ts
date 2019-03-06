import { Component, OnInit } from '@angular/core';
import { UserService } from "./../../services/users.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
      this.userService.getUsers().subscribe(res => console.log(res));

  }

}
