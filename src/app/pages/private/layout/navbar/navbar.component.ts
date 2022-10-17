import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
 templateUrl: './navbar.component.html',
  styles:['ul.nav.navbar-nav > li {cursor: pointer;}']
})
export class NavbarComponent implements OnInit {

  constructor(
   
  ) { }

  ngOnInit() {
  }

}
