import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.css']
})
export class ListCouponComponent implements OnInit {
  coupon :Coupon=new Coupon();
  couponlist = new Array<Coupon>();
  ErrorMessage: string = '';
  SuccessMessage:string = "";
  constructor(public firestore: AngularFirestore,public router: Router)
  { 
    
  }

  ngOnInit(): void {
    this.getCoupon();
  }
  getCoupon()
  {
  
    let productDoc = this.firestore.firestore.collection(`coupons`);
    productDoc.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        debugger
        this.coupon=new Coupon();
        this.coupon.id=doc.id;
      
        var productName = doc.id;
        var productValues = doc.data();
  
        if(productValues instanceof Object)
        {
         this.coupon= productValues as Coupon;
         this.coupon.id= doc.id;
        }
        this.couponlist?.push(this.coupon);
        console.log("list:",this.couponlist)
  
      })
     
     })
    
   
  
  }
  delete(id:string){
    debugger
    try{
      const CouponRef = this.firestore.firestore.collection('coupons');
      CouponRef.doc(id).delete();
      this.SuccessMessage="you have successfully deleted."
      this.couponlist=new Array<Coupon>();
      this.getCoupon();
    }
    catch(err)
  {    this.ErrorMessage="An error occured.Please try again."
  
    }
    
  }

}
