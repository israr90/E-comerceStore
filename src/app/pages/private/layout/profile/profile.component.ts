import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {
  PhotoBody: string | any = "";
  constructor(public router: Router, public user: User,
   public userService: UserService
  ) {
  }
 
}
