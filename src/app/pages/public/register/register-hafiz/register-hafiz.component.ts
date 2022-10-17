import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { RegisterComponent } from '../register.component';
import { UserService } from 'src/app/services/user.service';
import { CommonService } from 'src/app/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { Settings } from 'src/app/models/Settings';

@Component({
  selector: 'app-register-hafiz',
  templateUrl: './register-hafiz.component.html',
  styleUrls: ['./register-hafiz.component.css']
})
export class RegisterHafizComponent extends RegisterComponent implements OnInit {


  yearOldDate: Date = new Date();
  constructor(
    userService: UserService,
    CommonService: CommonService,
    router: Router,
    loadingbar: LoadingBarService,
    route: ActivatedRoute,
    setting: Settings
  ) {
    super(userService, CommonService, router, loadingbar, route, setting)

  }

  ngOnInit() {

    this.yearOldDate.setFullYear(this.yearOldDate.getFullYear() - 18);
    this.yearOldDate = new Date(this.yearOldDate);
  }
}
