import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {
  coupon:Coupon;
  ErrorMessage: string = '';
  SuccessMessage = "";
  constructor(public firestore:AngularFirestore) { 
    this.coupon=new Coupon();
  }

  ngOnInit(): void {

  }
  onSubmit(){
    this.ErrorMessage="";
    this.SuccessMessage = "";
    debugger;
 // this.catService.create(this.category);
      try
      {
        // type: this.coupon.type,
        // value:this.coupon.value,
        // expiry_date:this.coupon.expiry_date
        //this.coupon.id="extra";
        this.firestore.firestore.collection("coupons").doc(this.coupon.id).set({
             type: this.coupon.type,
         value:this.coupon.value,
         expiry_date:this.coupon.expiry_date
        });
        // this.firestore.firestore.collection("coupons").doc(this.coupon.id).set(this.coupon
        // );
        this.SuccessMessage="Your record has been saved.";
        //
        this.coupon.id="";
        this.coupon.type="";
        this.coupon.value=0;
        this.coupon.expiry_date="";
      }catch(err)
      {
        debugger;
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}

}
