import { DatePipe } from "@angular/common";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: "root"
})
export class User {   
  
  public Email: string;
  public Password: string;
  
  constructor() {
    this.Email = '';
    this.Password = '';
  
  }
  
}
