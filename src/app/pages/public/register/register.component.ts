import { Component, OnInit, ViewChild } from "@angular/core";
import { RegisterRequest } from "../../../models/RegisterRequest";
import { Router, Route, ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { UtilService } from "src/app/services/utils.service";
import { CommonService } from 'src/app/services/common.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: "app-register",
  templateUrl: "./register.component.html"
  //template: template
 
})
export class RegisterComponent implements OnInit {
 
  yearOldDate: Date = new Date();

  //public CountriesList: CountryList= new CountryList();
  model: RegisterRequest = new RegisterRequest();
  @ViewChild("f")
  form: any;
  isAgreed: boolean = false;
  loading = false;
  SuccessMessage = "";
  ErrorMessage: string = "";
  PasswordPattern = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$"; 
  constructor(
    private userService: UserService,
    public CommonService: CommonService,
    private router: Router,
    public route: ActivatedRoute,
  ) {
  }
  ngOnInit() {

  }

}
