import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { debug } from 'console';
import { Coupon } from 'src/app/models/coupon';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {
  coupon:Coupon;
  ErrorMessage: string = '';
  SuccessMessage = "";
  constructor(public firestore:AngularFirestore,
    public route: ActivatedRoute,
    public router: Router) { 
      this.coupon=new Coupon();
    }

  ngOnInit(): void {

    const id = this.route.snapshot.params["id"];
    this.getbyId(id);
  }
  public getbyId(docId: string): any {
    debugger;
    this.coupon.id=docId;
    return this.firestore.collection('coupons').doc(docId).valueChanges()
               .subscribe(item => {
              
                 console.log("item"+item)
                 var productValues = item;
  
                 if(productValues instanceof Object)
                 {
                  this.coupon= productValues as Coupon;
                  this.coupon.id= docId;
                 }

                 return item; 
                 // If you prefer including itemId back to object
                 // return {...item, id: docId}
               });
  }
  onSubmit(){
    this.ErrorMessage="";
    this.SuccessMessage = "";
    debugger;
      try
      {
        this.firestore.firestore.collection("coupons").doc(this.coupon.id).set({
          type: this.coupon.type,
         value:this.coupon.value,
         expiry_date:this.coupon.expiry_date
   
        });
        this.SuccessMessage="Your record has been saved.";
        this.router.navigateByUrl('/private/coupons');
        this.coupon.id="";
        this.coupon.type="";
        this.coupon.value=0;
        this.coupon.expiry_date="";
      }catch(err)
      {
        this.ErrorMessage="An error occured please try again.";
            
      }
      
  
}

}
