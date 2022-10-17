import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
 templateUrl: './header.component.html',
  styles: ['ul.dropdown-menu.dropdown-menu-right > li { cursor: pointer }']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    public user: User,
  ) { }

  ngOnInit() {

  }

  onLogoutClick(){
    this.clearData();
    this.router.navigateByUrl("/login");
  }
  private clearData(){
   
  }
}
