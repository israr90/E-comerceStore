import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { Location } from "@angular/common";
import { UserService } from "src/app/services/user.service";
import { environment } from "src/environments/environment";
import { User } from 'src/app/models/User';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html"
})
export class LayoutComponent implements OnInit {

  @ViewChild("modal")

  idleState = "Not started.";
  timedOut = false;
  message: string = "";
  countdown = 0;
  //cssUrl: string;
  constructor(
  
    public userService: UserService,
    private router: Router,
    private location: Location,
    private zone: NgZone,
    public sanitizer: DomSanitizer
  ) {

    this.reset();
  }


  public reload(): any {
    return this.zone.runOutsideAngular(() => {
      location.reload()
    });
  }
  reset() {
    // this.idle.watch();
    // this.idleState = "Started.";
    // this.timedOut = false;
    // if (this.modal) this.modal.hide();
  }

  ngOnInit() {
  }

  simpleTimerCallback() {
    

  }

  
}
