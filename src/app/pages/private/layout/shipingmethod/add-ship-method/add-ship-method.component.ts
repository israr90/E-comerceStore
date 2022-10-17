import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Shipping } from 'src/app/models/shipping';

@Component({
  selector: 'app-add-ship-method',
  templateUrl: './add-ship-method.component.html',
  styleUrls: ['./add-ship-method.component.css']
})
export class AddShipMethodComponent implements OnInit {

  shipMethod:Shipping;
  ErrorMessage: string = '';
  SuccessMessage = "";
  constructor(public firestore:AngularFirestore, public route: ActivatedRoute,

    public router: Router) { 
    this.shipMethod=new Shipping();
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.ErrorMessage="";
    this.SuccessMessage = "";
    debugger;
      try
      {
        this.firestore.firestore.collection("shipping").doc().set({
          title:this.shipMethod.title,
          price:this.shipMethod.price,
          duration:this.shipMethod.duration,

   
        });
        this.SuccessMessage="Your record has been saved.";
        
      }catch(err)
      {
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}
}
