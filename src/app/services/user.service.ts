import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class UserService {
  IsVerified: boolean = false;
  ErrorMessage: string = '';
  constructor(
    private router: Router
    //private utilsService: UtilService
  ) 
  {


  }



}

